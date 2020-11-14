import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Header from "./components/Header";
import Explore from "./Containers/Explore";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Explore />
    </div>
  );
}

export default App;
