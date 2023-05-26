import Faq from "./components/FAQ/Faq";
import Cards from "./components/cards/Cards";
import Exam from "./components/examTiming/Exam";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Subscribe from "./components/subscribe/Subscribe";
import Testimonals from "./components/testimonals/Testimonals";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Exam />
      <Cards/>
      <Testimonals />
      <Faq />
      <Subscribe />
      <Footer/>
    </div>
  );
}

export default App;
