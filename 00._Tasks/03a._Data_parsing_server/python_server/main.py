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
    resposne = requests.get("http://127.0.0.1:8080/csv").json()
    return resposne

@app.get("/json")
def get_csv_data():
    resposne = requests.get("http://127.0.0.1:8080/json").json()
    return resposne

@app.get("/xml")
def get_csv_data():
    resposne = requests.get("http://127.0.0.1:8080/xml").json()
    return resposne

@app.get("/yaml")
def get_csv_data():
    resposne = requests.get("http://127.0.0.1:8080/yaml").json()
    return resposne

@app.get("/txt")
def get_csv_data():
    resposne = requests.get("http://127.0.0.1:8080/txt").json()
    return resposne


# Format endpoint for file data
@app.get("/fetch/csv")
def get_csv_data():
    return read_csv("./files/person.csv")

@app.get("/fetch/xml")
def get_xml_data():
    return read_xml("./files/person.xml")

@app.get("/fetch/json")
def get_json_data():
    return read_json("./files/person.json")

@app.get("/fetch/yaml")
def get_yaml_data():
    return read_yaml("./files/person.yaml")

@app.get("/fetch/txt")
def get_txt_data():
    return read_txt("./files/person.txt")