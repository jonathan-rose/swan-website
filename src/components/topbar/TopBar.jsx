import { Link } from "react-router-dom"
import "./topbar.css"
import SocialBtn from "../socialbtn/SocialBtn"

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
        <SocialBtn 
          faIcon="facebook"
          faSize="2xl"
          link="https:/www.facebook.com/SWAN.WSM/"
          displayText="Facebook"
        />
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
          faIcon="twitter"
          faSize="2xl"
          link="https:/www.twitter.com/"
          displayText="Twitter"
        />
      </div>
    </div>
  )
}
