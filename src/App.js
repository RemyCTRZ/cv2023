import About from './About/About';
import './App.css';
import Home from './Home/Home';
import Medias from './Medias/Medias';
import Navbar from './Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Medias />
            <Home />
            <About />
        </>
    );
}

export default App;