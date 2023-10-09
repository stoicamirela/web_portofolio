// import logo from './logo.svg';
// import logo from "./assets/images/GD.png";
import './App.css';
import NavbarComponent from "./components/Navbar/Navbar";
import PageComponent from './components/Page_Content/Page_Content';
import ScrollButton from './components/ScrollButon/ScrollButton';
import CarouselComponent from './components/CarouselComponent/CarouselComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={process.env.PUBLIC_URL + logo} className="App-logo" alt="logo" /> */}
        <NavbarComponent />
      </header>
      <body>
        <CarouselComponent />
        <PageComponent />
        <ScrollButton />
      </body>
    </div>
  );
}

export default App;
