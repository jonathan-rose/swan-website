import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">Facebook</div>
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
        <div className="topRight">Twitter</div>
    </div>
  )
}
