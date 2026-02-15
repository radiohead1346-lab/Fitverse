from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

import models, schemas
from database import SessionLocal, engine

# --- 1. CONFIGURATION ---

# The Magic Line: Creates tables in PostgreSQL if they don't exist
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS: Allow your React app (localhost:5173) to talk to this Python backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency: Get access to the database for each request
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- 2. API ROUTES (CREATE DATA) ---

@app.post("/categories/", response_model=schemas.Category)
def create_category(category: schemas.CategoryCreate, db: Session = Depends(get_db)):
    existing_category = db.query(models.Category).filter(models.Category.slug == category.slug).first()
    if existing_category:
        raise HTTPException(status_code=400, detail="Category with this slug already exists")
        
    db_category = models.Category(
        name=category.name, 
        slug=category.slug
    )
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category

@app.post("/products/", response_model=schemas.Product)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    db_product = models.Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

@app.post("/blogs/", response_model=schemas.Blog)
def create_blog(blog: schemas.BlogCreate, db: Session = Depends(get_db)):
    db_blog = models.Blog(**blog.dict())
    db.add(db_blog)
    db.commit()
    db.refresh(db_blog)
    return db_blog


# --- 3. API ROUTES (READ DATA) ---

@app.get("/")
def read_root():
    return {"message": "Welcome to the Fitverse API"}

# Get all categories (Added trailing slash)
@app.get("/categories/", response_model=List[schemas.Category])
def get_categories(db: Session = Depends(get_db)):
    return db.query(models.Category).all()

# Get all products (Added trailing slash)
@app.get("/products/", response_model=List[schemas.Product])
def get_products(db: Session = Depends(get_db)):
    return db.query(models.Product).all()

# Get a single product by ID (Trailing slashes aren't typically used for ID routes)
@app.get("/products/{product_id}", response_model=schemas.Product)
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

# Get all blogs (Added trailing slash)
@app.get("/blogs/", response_model=List[schemas.Blog])
def get_blogs(db: Session = Depends(get_db)):
    return db.query(models.Blog).all()

# Get a single blog by ID
@app.get("/blogs/{blog_id}", response_model=schemas.Blog)
def get_blog(blog_id: int, db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.id == blog_id).first()
    if blog is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return blog