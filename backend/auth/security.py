from pwdlib import PasswordHash

password_engine = PasswordHash.recommended()

def hash_password(password: str):
    return password_engine.hash(password)

def verify_password(password: str, hash: str):
    return password_engine.verify(password, hash)