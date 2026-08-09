from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from backend.routes.interview import router

app = FastAPI(
    title="Smart Interview Coach",
    version="1.0.0"
)

app.include_router(router)

app.mount("/static", StaticFiles(directory="frontend"), name="static")


@app.get("/")
def home():
    return FileResponse("frontend/index.html")