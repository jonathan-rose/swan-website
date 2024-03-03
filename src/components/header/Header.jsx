import { Link } from "react-router-dom"
import "./header.css"
import Logo from "../logo/Logo"
import SocialBtn from "../socialbtn/SocialBtn"

export default function Header() {
  return (
    <div className='header' id='header'>
      <div className="topLeft">
        <Logo></Logo>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/video">
              Video
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
      <SocialBtn 
          faIcon="facebook"
          faSize="5x"
          link="https:/www.facebook.com/SWAN.WSM/"
          displayText="Facebook"
          showText={false}
        />
      </div>
    </div>
  )
}