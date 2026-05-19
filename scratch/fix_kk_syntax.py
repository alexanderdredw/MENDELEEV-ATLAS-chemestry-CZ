import os

filepath = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(filepath, 'rb') as f:
    content = f.read()

# Fix the broken part at 10876
# \xd0 followed by spaces. We replace \xd0 with \xd0\xb9",\n
# to close the system.skeletal.details string.

pos = 10876
new_content = content[:pos] + b'\xd0\xb9",\n' + content[pos+1:]

with open(filepath, 'wb') as f:
    f.write(new_content)

print("Fixed syntax in kk_v2.json")
