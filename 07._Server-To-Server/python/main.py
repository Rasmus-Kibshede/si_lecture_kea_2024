from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/fastapiData")
def _():
    return { "message": [1, 2, 3, 4, 5] }

@app.get("/requestExpress")
def _():
    response = requests.get("http://127.0.0.1:8080/expressData").json()
    return { "data": response }
