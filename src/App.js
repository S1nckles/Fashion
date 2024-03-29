import Arrivals from "./components/arrivals/Arrivals";
import Banner from "./components/banner/Banner";
import Brands from "./components/brands/Brands";
import Community from "./components/community/Community";
import Download from "./components/download/Download";
import Favourite from "./components/favourite/Favourite";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Favourite />
      <Download />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
