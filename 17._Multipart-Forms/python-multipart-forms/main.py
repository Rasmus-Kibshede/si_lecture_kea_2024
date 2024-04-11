from fastapi import FastAPI, Form, File, UploadFile
import aiofiles
from typing import Optional

app = FastAPI()

@app.post("/form")
def basic_form(username: str = Form(...), password: str = Form(default=..., min_length=8)):
    print(username)
    return {"username": username}


@app.post("/fileform")
def file_form(file: bytes = File(...), description: Optional[str] = Form(None)):
    with open("file", "wb") as f:
        f.write(file)
    return {"message": "File uploaded successfully"}

# @app.post("/uploadfile")
# async def file_upload(file: UploadFile = File(...), description: Optional[str] = Form(None)):
#     contents = await file.read()
#     print(contents)
#     return {"filename": file.filename}




# @app.post("/uploadfile")
# async def file_upload(file: UploadFile = File(...), description: Optional[str] = Form(None)):
#     safe_filename = file.filename.replace("/", "_").replace("\\", "_")
#     with open(safe_filename, "wb") as f:
#         while content := await file.read(1024):
#             f.write(content)
    
#     return {"filename": file.filename}


@app.post("/uploadfile")
async def file_upload(file: UploadFile = File(...), description: Optional[str] = Form(None)):
    print(description)

    safe_filename = file.filename.replace("/", "_").replace("\\", "_")

    async with aiofiles.open(safe_filename, "wb") as f:
        while content := await file.read(1024):
            await f.write(content)
    
    return {"filename": file.filename}