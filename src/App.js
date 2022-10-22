import '../src/assets/css/App.css';
import Light from "./components/light"


function App() {
  //Al iniciar la web siempre se ve el componente Light
  return (
    <div className="App">
      <Light></Light>
    </div>
  );
}

export default App;
