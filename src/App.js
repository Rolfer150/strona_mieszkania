import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Section from "./components/Section.js";

function App() {
  return (
    <div className="App">      
      { /* Navbar */}
      <Navbar></Navbar>
      { /* Header */}
      <Header></Header>
      {/* Section */}
      <Section></Section>
    </div>
  );
}

export default App;
