import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <SearchBar />
      <Home />
    </div>
  );
}

export default App;
