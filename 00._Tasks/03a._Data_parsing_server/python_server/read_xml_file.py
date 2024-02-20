import json
import xmltodict

def read_xml(file_path):
    with open(file_path) as xml_file:
        data_dict = xmltodict.parse(xml_file.read())
        json_data = json.dumps(data_dict)
        print(json_data)
     
    return json_data