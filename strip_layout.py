import os
import re

route_dir = 'c:\\USER_DATA\\Code\\Freelancing\\Web_D\\Kinchit Prayas Foundation\\7june\\src\\assets\\components\\Route Components'

for root, dirs, files in os.walk(route_dir):
    for file in files:
        if file.endswith('.jsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove Navbar and Footer imports
            content = re.sub(r'import\s+Navbar\s+from\s+.*?;\n?', '', content)
            content = re.sub(r'import\s+Footer\s+from\s+.*?;\n?', '', content)
            
            # Remove Navbar and Footer tags
            content = re.sub(r'<\s*Navbar\s*/?>\n?', '', content)
            content = re.sub(r'<\s*Footer\s*/?>\n?', '', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Stripped {file_path}")
