from fastapi import FastAPI
import requests

from read_csv_file import read_csv
from read_xml_file import read_xml
from read_json_file import read_json
from read_yaml_file import read_yaml
from read_txt_file import read_txt
from read_txt_file import read_txt

app = FastAPI()

# Call to node server
@app.get("/csv")
def get_csv_data():
    return fetch_data("csv")

@app.get("/json")
def get_json_data():
    return fetch_data("json")

@app.get("/xml")
def get_xml_data():
    return fetch_data("xml")

@app.get("/yaml")
def get_yaml_data():
    return fetch_data("yaml")

@app.get("/txt")
def get_txt_data():
    return fetch_data("txt")


# Format endpoint for file data
@app.get("/format/csv")
def get_csv_data():
    return read_csv("./files/person.csv")

@app.get("/format/xml")
def get_xml_data():
    return read_xml("./files/person.xml")

@app.get("/format/json")
def get_json_data():
    return read_json("./files/person.json")

@app.get("/format/yaml")
def get_yaml_data():
    return read_yaml("./files/person.yaml")

@app.get("/format/txt")
def get_txt_data():
    return read_txt("./files/person.txt")

def fetch_data(file_format: str):
    url = f"http://127.0.0.1:8080/format/{file_format}"
    return requests.get(url).json()