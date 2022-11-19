
import './App.css';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/style/nav.css'
import ScrollButton from './components/scrollbutton';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from './components/about';
import Contact from './components/contact';
import Faqs from './components/faqs';
import History from './components/history';
import Pricing from './components/pricing';
import Error404 from './components/error404';
import Ourteam from './components/ourteam';
import Test from './components/test';
import Blog from './components/blog';
import Gallery from './components/gallery';
import Offer from './components/offer';



function App() {


 
  
 
  return (
    <div className='bg'>

      <Router>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/ourteam" element={<Ourteam/>}/>
        <Route path="/testimonial" element={<Test/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/offer" element={<Offer/>}/>
        <Route path="*" element={<Error404 />} />
       
      </Routes>
    
     </Router>

      <ScrollButton />


      
      
      
      
     
    </div>
  );
}

export default App;
