import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar";
import Header from "./components/Header";
import ExploreSection from "./components/ExploreSection";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <ExploreSection />
    </div>
  );
}

export default App;
