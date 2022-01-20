 
import Intro from '../components/intro/index';
import About from '../components/about/index';
import ProductList from '../components/productList';
import Contact from '../components/contact';
import FAQ from '../components/faq/index';
import BasicSpeedDial from '../../../components/speed-dial/index';
import IDo from '../components/whatcanido/index';
function HomePage() {
   return (
      <div>
         <Intro/>
         <About/>
         <FAQ/>
         <IDo/>
         <ProductList/>
         <Contact/>
         <BasicSpeedDial/>
      </div>
   );
}

export default HomePage;
