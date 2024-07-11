import { Header } from "./header/Header";
import { About } from "./about/About";
import { Services } from "./services/Services";
import { Products } from "./products/Products";
import { Team } from "./team/Team";
import { Footer } from "./footer/Footer";
import "./Layout.css";

export const Layout = ()=>{
  return(
    <div className="App">
      <Header/>
      <About/>
      
      <Services/>
      <Products/>
      <Team/>
      <Footer/>
    </div>
  )
}