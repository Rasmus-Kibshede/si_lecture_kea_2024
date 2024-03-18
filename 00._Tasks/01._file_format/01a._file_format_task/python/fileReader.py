import xml.etree.ElementTree as ET
import csv
import json
import yaml

def read_xml(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    data = {}
    for child in root:
        data[child.tag] = child.text
    return data

def read_csv(file_path):
    data = []
    with open(file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data.append(row)
    return data

def read_json(file_path):
    with open(file_path) as json_file:
        data = json.load(json_file)
    return data

def read_txt(file_path):
    with open(file_path, 'r') as file:
        data = file.read()
    return {"text_data": data}

def read_yaml(file_path):
    with open(file_path, 'r') as stream:
        data = yaml.safe_load(stream)
    return data

# Usage examples:
xml_data = read_xml("../../me.xml")
csv_data = read_csv("../../me.csv")
json_data = read_json("../../me.json")
txt_data = read_txt("../../me.txt")
yaml_data = read_yaml("../../me.yaml")

# Convert data to JSON format
json_output = {
    "xml": xml_data,
    "csv": csv_data,
    "json": json_data,
    "txt": txt_data,
    "yaml": yaml_data
}

# Save JSON data to a file
# with open("output.json", 'w') as outfile:
#     json.dump(json_output, outfile, indent=4)

print(json.dumps(json_output, indent=4))