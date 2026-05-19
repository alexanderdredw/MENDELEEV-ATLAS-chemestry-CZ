import http.server
import socketserver
import urllib.request
import json
import sys

PORT = 8000
API_ENDPOINT = "https://api.deepseek.com/chat/completions"

class ProxyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/chat':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            # Forward the request to DeepSeek
            req = urllib.request.Request(API_ENDPOINT, data=post_data)
            
            # Copy headers (especially Authorization and Content-Type)
            for key, value in self.headers.items():
                if key.lower() in ['content-type', 'authorization']:
                    req.add_header(key, value)
            
            try:
                with urllib.request.urlopen(req) as response:
                    self.send_response(response.status)
                    # Forward headers from DeepSeek
                    for key, value in response.headers.items():
                        if key.lower() not in ['transfer-encoding', 'content-encoding', 'content-length']:
                            self.send_header(key, value)
                    self.end_headers()
                    self.wfile.write(response.read())
            except urllib.error.HTTPError as e:
                self.send_response(e.code)
                self.end_headers()
                self.wfile.write(e.read())
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(str(e).encode())
        else:
            self.send_error(404, "File not found")

    def do_OPTIONS(self):
        # Handle CORS preflight if needed (though same-origin shouldn't need it)
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()

Handler = ProxyHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print(f"Proxying /api/chat to {API_ENDPOINT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        httpd.shutdown()
