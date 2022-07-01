import './Sass/main.css';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Menu from './Components/Menu/Menu';


function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;
