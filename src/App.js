import './App.css';
import Banner from './components/Banner';
import CategoriesContainer from './components/CategoriesContainer';
import Header from './components/Header';
import TabsCategory from './components/TabsCategory';
function App() {
  return (
    <div className='App'>
      <Header />
      <TabsCategory />
      <Banner />
      <CategoriesContainer />
    </div>
  );
}

export default App;
