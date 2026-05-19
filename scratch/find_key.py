import sys

file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(file_path, 'rb') as f:
    content = f.read()

pos = 13994 # where b'",\xbc' starts
# Find the start of the line or key
start = content.rfind(b'\n', 0, pos)
end = content.find(b'\n', pos)
print(f"Line around error: {content[start+1:end]}")

# Find the key
key_end = content.rfind(b'":', 0, pos)
key_start = content.rfind(b'"', 0, key_end - 1)
print(f"Key: {content[key_start+1:key_end]}")
