import React from 'react';
import Banner from '../../components/Banner';
import CategoriesContainer from '../../components/CategoriesContainer';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CategoriesContainer />
      <ProductList />
    </div>
  );
}
