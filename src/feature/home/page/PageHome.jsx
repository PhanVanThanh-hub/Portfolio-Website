 
import Intro from '../components/intro/index';
import About from '../components/about/index';
import ProductList from '../components/productList';
import Contact from '../components/contact';
function HomePage() {
   return (
      <div>
         <Intro/>
         <About/>
         <ProductList/>
         <Contact/>
      </div>
   );
}

export default HomePage;
