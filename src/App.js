import './App.css';
import Footer from './Components/Footer/Footer';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Pograms';
import Schedule from './Components/Schedule/Schedule';
import Testimonials from './Components/Testmonials/Testimonials';
import WhyUs from './Components/Why us/WhyUs';
import Header from './Components/Yogi Section/Header/Header';
import Yogi from './Components/Yogi Section/Yogi';

function App() {
  return (
    <div className="App">
      <Header />
      <Yogi />
      <Programs />
      <WhyUs />
      <Plans />
      <Testimonials />
      <Schedule />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
