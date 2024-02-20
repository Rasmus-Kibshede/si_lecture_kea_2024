import json
 

def read_txt(file_path):
    dict1 = {}
 
# creating dictionary
    with open(file_path) as fh:
 
        for line in fh:
 
        # reads each line and trims of extra the spaces 
        # and gives only the valid words
            command, description = line.strip().split(None, 1)
 
            dict1[command] = description.strip()
            print(dict1)
            
        return json.dumps(dict1)