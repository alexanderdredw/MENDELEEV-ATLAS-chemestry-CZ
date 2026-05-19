import os
import json
import urllib.request
import urllib.error

def handler(event, context):
    # CORS Headers
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    }

    # Handle OPTIONS (CORS preflight)
    if event['httpMethod'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': ''
        }

    # Only allow POST
    if event['httpMethod'] != 'POST':
        return {
            'statusCode': 405,
            'body': 'Method Not Allowed',
            'headers': headers
        }

    # Get API Key
    # SECURITY NOTE: Hardcoded fallback added for immediate deployment. 
    # In strict production, remove the "or" part and rely only on os.environ.
    api_key = os.environ.get("DEEPSEEK_API_KEY") or "sk-22ec091b69504285a092e3d90f73fb38"
    
    if not api_key:
        return {
            'statusCode': 500,
            'body': json.dumps({"error": "Server Configuration Error: API Key missing"}),
            'headers': headers
        }

    # Prepare Request
    url = "https://api.deepseek.com/chat/completions"
    
    try:
        body_content = event.get('body', '{}')
        if not body_content:
            body_content = '{}'
            
        data = body_content.encode('utf-8')
        
        req = urllib.request.Request(url, data=data)
        req.add_header("Content-Type", "application/json")
        req.add_header("Authorization", f"Bearer {api_key}")
        
        with urllib.request.urlopen(req) as response:
            return {
                'statusCode': response.status,
                'body': response.read().decode('utf-8'),
                'headers': headers
            }
            
    except urllib.error.HTTPError as e:
        return {
            'statusCode': e.code,
            'body': e.read().decode('utf-8'),
            'headers': headers
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({"error": str(e)}),
            'headers': headers
        }
