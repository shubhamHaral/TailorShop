
import './App.css';
import Advantage from './Component/Advantages/Advantage';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Text from './Component/Text/text';
import Services from './Component/Services/Services';
import Testimoni from './Component/TestiMoni/Testimoni';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Text />
      <Advantage />
      <Testimoni />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
