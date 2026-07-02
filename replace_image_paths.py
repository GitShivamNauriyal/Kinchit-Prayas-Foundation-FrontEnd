import os

src_dir = 'c:\\USER_DATA\\Code\\Freelancing\\Web_D\\Kinchit Prayas Foundation\\7june\\src'

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.jsx', '.js', '.css')):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace /Image/ with /assets/images/
            new_content = content.replace('/Image/', '/assets/images/')
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")
