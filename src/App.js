import '../src/assets/css/App.css';
import Light from "./components/light"
import store from './store/store'
import { Provider } from 'react-redux';

function App() {
  //Al iniciar la web siempre se ve el componente Light
  return (
    <Provider store={store}>
      <div className="App">
        <Light></Light>
      </div>
    </Provider>
    
  );
}

export default App;
