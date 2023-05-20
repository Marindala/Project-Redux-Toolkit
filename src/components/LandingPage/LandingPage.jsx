import {Navbar} from "../Navbar/Navbar.jsx"
import"./LandingPage.css"

export const LandingPage = () => {
  return (
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
  )
}
