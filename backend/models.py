from sqlalchemy import Column, Integer, String, Text, Float, ForeignKey, ARRAY
from sqlalchemy.orm import relationship
from database import Base

class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    slug = Column(String, unique=True, index=True)
    products = relationship("Product", back_populates="category")

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(Text, nullable=True)
    price_label = Column(String, default="Check Price")
    image = Column(String)
    link = Column(String)  # <--- THIS IS YOUR AMAZON URL
    rating = Column(Float, default=0.0)
    features = Column(ARRAY(String)) 
    category_id = Column(Integer, ForeignKey("categories.id"))
    category = relationship("Category", back_populates="products")

class Blog(Base):
    __tablename__ = "blogs"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    slug = Column(String, unique=True)
    snippet = Column(Text)
    content = Column(Text)
    author = Column(String)
    date = Column(String)