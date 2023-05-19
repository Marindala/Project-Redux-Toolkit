import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <div>
        <div className="here">
        <Navbar/>
        </div>
       

        <img
          className="imgM"
          src="https://media.giphy.com/media/i3EiSibYDhfnNVCcFD/giphy-downsized-large.gif"
          width={300}
          height={300}
        ></img>
      </div>
    </>
  );
}

export default App;
