import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Header from "./Containers/Header";
import Explore from "./Containers/Explore";
import Share from "./Containers/Share";
import Create from "./Containers/Create";
import Footer from "./Containers/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Explore />
      <Create />
      <Share />
      <Footer />
    </div>
  );
}

export default App;
