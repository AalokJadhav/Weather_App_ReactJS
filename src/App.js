import './App.css';
import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
import WeatherApp from './Components/WeatherApp';

function App() {
  return (
        <>
        {/* <Navbar /> */}
        <h1 className="heading">Welcome to Weather App </h1>
        <br /><br />
        <WeatherApp />
        <Footer />
        </>
  );
}

export default App;
