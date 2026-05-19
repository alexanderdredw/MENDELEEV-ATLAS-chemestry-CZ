from http.server import BaseHTTPRequestHandler
import os
import json
import urllib.request
import urllib.error

# Configuration
API_ENDPOINT = "https://api.deepseek.com/chat/completions"

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Verify Content-Length
        content_length = int(self.headers.get('Content-Length', 0))
        if content_length == 0:
            self.send_error(400, "No content provided")
            return

        post_data = self.rfile.read(content_length)
        
        # Get API Key from Environment Variable (Secure)
        api_key = os.environ.get("DEEPSEEK_API_KEY")
        
        # Fallback for local testing (optional, remove in strict prod)
        if not api_key:
             # Try to get from header if client sent it (less secure but allows hybrid)
            auth_header = self.headers.get('Authorization')
            if auth_header:
                api_key = auth_header.replace("Bearer ", "").strip()

        if not api_key:
            self._send_response(500, {"error": "Server Configuration Error: API Key missing"})
            return

        # Prepare Request to DeepSeek
        req = urllib.request.Request(API_ENDPOINT, data=post_data)
        req.add_header("Content-Type", "application/json")
        req.add_header("Authorization", f"Bearer {api_key}")

        try:
            # Forward the request
            with urllib.request.urlopen(req) as response:
                response_body = response.read()
                self.send_response(response.status)
                self.send_header('Content-Type', 'application/json')
                # Add CORS headers for public access (restrict functionality in real prod)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(response_body)

        except urllib.error.HTTPError as e:
            self.send_response(e.code)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(e.read())
            
        except Exception as e:
            self._send_response(500, {"error": str(e)})

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()

    def _send_response(self, code, data):
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))
