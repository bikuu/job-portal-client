import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SearchBar from "./components/searchBar/SearchBar";
import Footer from "./components/footer/Footer";
import ViewProfile from "./components/viewProfile/ViewProfile";
import EditProfile from "./components/editProfile/EditProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Banner />
      <SearchBar />
      <Home /> */}
      {/* <ViewProfile /> */}
      <EditProfile />
      <Footer />
    </div>
  );
}

export default App;
