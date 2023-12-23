import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
          <i className="fa-brands fa-facebook fa-2xl"></i>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
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
        <i className="fa-brands fa-twitter fa-2xl"></i>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
    </div>
  )
}
