import sys
import os
import shutil

# 🔧 Fix Python path so /models works
sys.path.append(os.path.dirname(__file__))

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

# ✅ Import ML logic
from models.image_model import predict_image
from models.video_model import predict_video
from models.audio_model import predict_audio

app = FastAPI()

# ===============================
# ✅ CORS (React Frontend)
# ===============================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===============================
# ✅ Upload folder
# ===============================
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# ===============================
# ✅ Root test
# ===============================
@app.get("/")
def root():
    return {"status": "FAKEDOWN backend running"}

# ===============================
# ✅ IMAGE ENDPOINT
# ===============================
@app.post("/analyze/image")
async def analyze_image(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = predict_image(file_path)
    return result

# ===============================
# ✅ VIDEO ENDPOINT
# ===============================
@app.post("/analyze/video")
async def analyze_video(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = predict_video(file_path)
    return result

# ===============================
# ✅ AUDIO ENDPOINT
# ===============================
@app.post("/analyze/audio")
async def analyze_audio(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = predict_audio(file_path)
    return result
