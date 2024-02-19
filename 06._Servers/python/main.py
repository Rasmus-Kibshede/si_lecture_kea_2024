from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Welcome to our first server"}

@app.get("/firstRoute")
def _():
    return {"message": "This is the first route"}