 
import Intro from '../components/intro/index';
import About from '../components/about/index';
import ProductList from '../components/productList';
import Contact from '../components/contact';
import FAQ from '../components/faq/index';
import BasicSpeedDial from '../../../components/speed-dial/index';
function HomePage() {
   return (
      <div>
         <Intro/>
         <About/>
         <FAQ/>
         <ProductList/>
         <Contact/>
         <BasicSpeedDial/>
      </div>
   );
}

export default HomePage;
