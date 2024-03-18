import yaml

def read_yaml(file_path):
    with open(file_path, 'r') as stream:
        data = yaml.safe_load(stream)
    return data