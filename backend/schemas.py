from pydantic import BaseModel
from typing import List, Optional

# --- CATEGORY SCHEMAS ---
class CategoryBase(BaseModel):
    name: str
    slug: str

class CategoryCreate(CategoryBase):
    pass

class Category(CategoryBase):
    id: int
    # This allows the category to optionally return a list of its products
    # products: List['Product'] = [] 
    
    class Config:
        from_attributes = True

# --- PRODUCT SCHEMAS ---
class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price_label: str = "Check Price"
    image: str
    link: str  # <--- YOUR AMAZON LINK GOES HERE
    rating: float
    features: List[str] = []
    category_id: int

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int
    class Config:
        from_attributes = True

# --- BLOG SCHEMAS ---
class BlogBase(BaseModel):
    title: str
    slug: str
    snippet: str
    content: str
    author: str
    date: str

class BlogCreate(BlogBase):
    pass

class Blog(BlogBase):
    id: int
    class Config:
        from_attributes = True