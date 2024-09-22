import Cards from "./components/cards";
import Extra from "./components/Extrainfo";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Info from "./components/info";
import Navbar from "./components/navbar";
import Products from "./components/products";

function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Info/>
     <Extra/>
     <Products/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
