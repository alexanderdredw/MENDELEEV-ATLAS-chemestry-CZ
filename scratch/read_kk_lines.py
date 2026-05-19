import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    lines = f.readlines()

print("Line 76:", lines[75].decode('utf-8', errors='replace'))
print("Line 77:", lines[76].decode('utf-8', errors='replace'))
print("Line 78:", lines[77].decode('utf-8', errors='replace'))
