import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Link, BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate"
import Artwork from './components/Artwork';


function App() {
  return (
   <BrowserRouter>
   <div className="app">
     <Header />
     <main>
      <Switch>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/portfolio">
          <Portfolio />
          <Certificate/></Route>
          <Route path="/artwork">
            <Artwork />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
     </main>
     <Footer />
     </div>
   </BrowserRouter>
  );
}

export default App;
