import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Trail from "./components/Trail"
import Products from "./components/Products";

// import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <div className="App">
         {/* <Trail/>  */}
      <Products />
    </div>
  );
}

export default App;
