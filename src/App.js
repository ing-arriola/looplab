import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Header from "./components/Header";
import Explore from "./Containers/Explore";
import Share from "./Containers/Share";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Explore />
      <Share />
    </div>
  );
}

export default App;
