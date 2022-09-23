import './App.css';
import Banner from './components/Banner';
import CategoriesContainer from './components/CategoriesContainer';
import Header from './components/Header';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <CategoriesContainer />
      <ProductList />
    </div>
  );
}

export default App;
