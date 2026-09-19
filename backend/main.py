from fastapi import FastAPI
from contextlib import asynccontextmanager
from .db_operations.db_connect import db_connect
from .auth.auth_endpoints import db_endpoints

@asynccontextmanager
async def lifespan(app: FastAPI):
    db_connect()
    yield


app = FastAPI(lifespan=lifespan)

app.include_router(db_endpoints)