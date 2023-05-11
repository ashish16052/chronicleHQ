import './App.scss';
import Section1 from './Components/Section/Section1'
import Section2 from './Components/Section/Section2'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
