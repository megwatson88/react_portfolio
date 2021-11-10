import './App.css';
import React from 'react';
import Header from './components/Header/';
import Contact from './components/Contact';
import Nav from './components/Nav';
import PastWork from './components/PastWork';



function App() {
  const  [category] = useState([
    {
      name: 'Coctails_Cinema', description: 'Cocktails and Cinema'
    },
    {
      name: 'Learning_App', description: 'An app to help students learn'
    },
    {
      name: 'Coctails_Cinema', description: 'Cocktails and Cinema'
    },
  ]); 
  const [currentCategory, setCurrentCategory] = useState(category[0]);
  return (
    <div>
      <Nav
      categories = {categories}
      setCurrentCategory = {setCurrentCategory}
      currentCategory = {currentCategory}> </Nav> 
      <main> 
      <div> 
      <PastWork> </PastWork>
      <About> </About>
      </div>
      </main>
    </div>
  ); 
}

export default App;
