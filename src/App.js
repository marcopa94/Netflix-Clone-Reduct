import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Movies from "./components/Movies.jsx";
import MyFooter from "./components/Footer.jsx";

function App() {
  return (
    <>
      <MyNavbar />
      <Header />
      <Movies title="Lord of the Rings" category="Trending Now" />
      <Movies title="Disney" category="Watch It Again" />
      <Movies title="marvel" category="New Relases" />
      <MyFooter />
    </>
  );
}

export default App;
