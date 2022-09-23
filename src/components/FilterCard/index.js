import React, { useState } from 'react';
import './index.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
export default function FilterCard() {
  const [isHide, setIsHide] = useState(false);
  const hideFilters = () => {
    setIsHide(!isHide);
  };
  return (
    <div className='productFilterContainer'>
      <div className='filterCard'>
        <div className='filterLabel'>
          <p>FILTERS</p>
          <hr></hr>
        </div>
        <div className='filterType'>
          <div className='expandableFilterType'>
            <p>Category</p>
            <div className='typeArrow'>
              <MdKeyboardArrowDown />{' '}
            </div>
          </div>
          <hr></hr>
        </div>
        <div className='filterType'>
          <div className='expandableFilterType'>
            <p>Gender</p>
            <div className='typeArrow' onClick={() => hideFilters()}>
              {isHide ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>
          {isHide ? (
            <div className='genderFilterCard'>
              <div>Boys</div>
              <div>Girls</div>
              <div>Men</div>
              <div>Women</div>
            </div>
          ) : null}
          <hr></hr>
        </div>
        <div className='filterType'>
          <div className='expandableFilterType'>
            <p>Price</p>
            <div className='typeArrow' onClick={() => hideFilters()}>
              {isHide ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>
          {isHide ? (
            <div className='priceRange'>
              <input type='range' min='100' max='10000' className='slider' />
            </div>
          ) : null}
          <hr></hr>
        </div>
        <div className='filterType'>
          <div className='expandableFilterType'>
            <p>Sort by</p>
            <div className='typeArrow'>
              <MdKeyboardArrowDown />{' '}
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}
