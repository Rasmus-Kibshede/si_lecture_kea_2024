import json

def read_json(file_path):
    with open(file_path) as json_file:
        data = json.load(json_file)
    return data

print(read_json("../../me.json"))