import './App.css';
import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import About from "./about";
import Gallery from "./gallery";
import Pricing from "./pricing";
import Blog from "./blog";
import ViewMore from "./view-more";
import Contact from "./contact"


function App (){
  return(
    <>
    
      <Header />
      <Home />
      {/* <About />
      <Gallery />
      <Pricing />
      <Blog />
      <ViewMore />
      <Contact /> */}
      <Footer /> 
    </>
  )
}

export default App;
