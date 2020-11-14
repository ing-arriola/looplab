import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Header from "./components/Header";
import Explore from "./Containers/Explore";
import Share from "./Containers/Share";
import Create from "./Containers/Create";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Explore />
      <Create />
      <Share />
    </div>
  );
}

export default App;
