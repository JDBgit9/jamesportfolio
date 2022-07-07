import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";





function App() {
  return (
   <BrowserRouter>
   <div className="app">
     <Header />
     <main>
      <Switch>
      <Route path="/about">
            <About />
          </Route>
        <Route path="/contact">
          <Contact/>
         </Route>
           <Route path="/portfolio">
            <Portfolio />
          </Route>  
        <Route path="/">
          <Home />
        </Route>
      </Switch>
     </main>
     <Footer />
     </div>
   </BrowserRouter>
  );
}

export default App;
