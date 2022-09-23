import React from 'react';
import './index.css';
export default function CategoriesContainer() {
  const category = [
    {
      img: 'https://files.hubhopper.com/podcast/10001/1947395-1563950483487-047cd3a392cdd.jpg?v=1591211511&s=hh-web-app',
    },
    {
      img: 'https://files.hubhopper.com/podcast/9322/sukhan-by-vrinda-vaid.jpg?v=1633002158&s=hh-web-app',
    },
    {
      img: 'https://files.hubhopper.com/podcast/311415/kuch-humari-baatein.jpg?v=1588090257&s=hh-web-app',
    },
    {
      img: 'https://files.hubhopper.com/podcast/340145/the-ranveer-show.jpg?s=hh-web-app',
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
                src={item.img}
              />
              {/* <div className='categoryName'>{item.name}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
