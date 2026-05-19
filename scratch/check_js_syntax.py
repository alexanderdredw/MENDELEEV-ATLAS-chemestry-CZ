import subprocess

def check_js_syntax(file_path):
    try:
        # Using a simple node -c to check syntax
        result = subprocess.run(['node', '-c', file_path], capture_output=True, text=True)
        if result.returncode == 0:
            print(f"Syntax OK: {file_path}")
        else:
            print(f"Syntax Error in {file_path}:\n{result.stderr}")
    except FileNotFoundError:
        print("Node.js not found. Skipping syntax check.")

if __name__ == "__main__":
    check_js_syntax(r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\js\data\anatomy-data.js')
    check_js_syntax(r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\js\app.js')
    check_js_syntax(r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\js\translation.js')
