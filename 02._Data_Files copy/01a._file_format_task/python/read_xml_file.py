import xml.etree.ElementTree as ET

def read_xml(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    data = {}
    for child in root:
        data[child.tag] = child.text
    return data

print(read_xml("../../me.xml"))