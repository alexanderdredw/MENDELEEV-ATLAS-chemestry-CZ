import sys

file_path = r'c:\Users\Александр\OneDrive\Рабочий стол\chemestry\locales\kk_v2.json'

with open(file_path, 'rb') as f:
    content = f.read()

target = b'ai.cardio.study.1'
idx = content.find(target)
if idx != -1:
    data = content[idx:idx+500]
    for i in range(len(data)):
        try:
            data[:i+1].decode('utf-8')
        except UnicodeDecodeError as e:
            if e.start == i: # This byte starts an invalid sequence
                print(f"Invalid UTF-8 byte at relative offset {i}: {hex(data[i])}")
                print(f"Context: {data[i-10:i+10]}")
                break
