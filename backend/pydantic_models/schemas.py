from pydantic import BaseModel, EmailStr

class AdminSignup(BaseModel):
    organization_name: str
    email: EmailStr
    code: str
    password: str

class UserSignup(BaseModel):
    name: str
    phone_number: str
    email: EmailStr
    code: str
    password: str
    otp: str

class Login(BaseModel):
    email: EmailStr
    password: str