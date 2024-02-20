import json

def read_txt(file_path):
    words = {}
    with open(file_path) as fh:
        for line in fh:
            title, description = line.strip().split(None, 1)
            words[title] = description.strip()
        return json.dumps(words)