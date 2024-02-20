from fastapi import FastAPI
import requests


app = FastAPI()

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