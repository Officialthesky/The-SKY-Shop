import React from 'react';
import './index.css';
import { productList } from './productlist';
import FilterCard from '../FilterCard';

export default function ProductList() {
  const addToCart = (index) => {
    alert(index);
  };
  return (
    <div className='productListContainer'>
      <FilterCard />
      <div className='productList'>
        {productList.map((item, index) => {
          return (
            <div className='itemCard' key={index}>
              <div className='itemCardImage'>
                <img
                  src={require(`../../assets/Images/${item.ProductImg}`)}
                  alt={item.ProductName}
                />
              </div>
              <h3 className='cardItemName'>{item.ProductName}</h3>
              <h3 className='cardItemPrice'>
                ${item.DiscountPrice}
                <span> onwards</span>
              </h3>
              <div
                className='addToCartBtn'
                onClick={() => {
                  addToCart(index);
                }}
              >
                Add To Cart
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
