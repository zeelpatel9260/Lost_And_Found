from fastapi import APIRouter, status, Depends, HTTPException
from ..pydantic_models.schemas import PostItem
from ..db_operations.db_connect import db_connect
from psycopg2.extras import RealDictCursor

post_endpoints = APIRouter()

@post_endpoints.post('/post_lost', status_code=status.HTTP_201_CREATED)
def lostItem(item:PostItem, conn=Depends(db_connect)):
    lost_item = item.model_dump()
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute('INSERT INTO "Loser" ("Item_Name","Description","Date_Lost","Location_Lost","Image_Upload") VALUES (%s,%s,%s,%s,%s) RETURNING *;',(lost_item['item_name'],lost_item['description'],lost_item['date'],lost_item['location'],lost_item['image']))
    lost_item = cursor.fetchone()
    conn.commit()
    cursor.close()

@post_endpoints.post('/post_found', status_code=status.HTTP_201_CREATED)
def foundItem(item:PostItem, conn=Depends(db_connect)):
    found_item = item.model_dump()
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute('INSERT INTO "Finder" ("Item_Name","Description","Date_Found","Location_Lost","Image_Upload") VALUES (%s,%s,%s,%s,%s) RETURNING *;',(found_item['item_name'],found_item['description'],found_item['date'],found_item['location'],found_item['image']))
    found_item = cursor.fetchone()
    conn.commit()
    cursor.close()