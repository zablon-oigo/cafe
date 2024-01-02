import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Reviews from "./components/Reviews"

function App() {
 

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div id="home">
        <Home/>
      </div>
      <div id="menu">
        <Menu/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="products">
        <Products/>
      </div>
      <div id="reviews">
        <Reviews/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </>
  )
}

export default App
