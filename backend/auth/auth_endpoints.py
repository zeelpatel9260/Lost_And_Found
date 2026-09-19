from fastapi import APIRouter, Depends, status, HTTPException
from ..pydantic_models.schemas import AdminSignup, UserSignup, Login
from ..db_operations.db_connect import db_connect
from psycopg2.extras import RealDictCursor
from .security import hash_password, verify_password

db_endpoints = APIRouter()


@db_endpoints.post("/admin_signup", status_code=status.HTTP_201_CREATED)
def admin_signup(admin: AdminSignup, conn=Depends(db_connect)):
    pass

@db_endpoints.post('/user_signup')
def user_signup(user: UserSignup, conn = Depends(db_connect)):
    pass
