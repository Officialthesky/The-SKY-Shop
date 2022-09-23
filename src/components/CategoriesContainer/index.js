import React from 'react';
import './index.css';
export default function CategoriesContainer() {
  const category = [
    {
      img: 'girl1.jpeg',
    },
    {
      img: 'boy1.jpeg',
    },
    {
      img: 'men1.jpeg',
    },
    {
      img: 'women1.jpeg',
    },
  ];
  return (
    <div className='categoriesContainer'>
      <div className='titleCard'>
        <hr></hr>
        <h2>Categories</h2>
        <hr></hr>
      </div>
      <div className='categoryItemsContainer'>
        {category.map((item, index) => {
          return (
            <div className='categoryCard' key={index}>
              <img
                alt='shop category'
                width='100%'
                height='100%'
                src={require(`../../assets/Images/${item.img}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
