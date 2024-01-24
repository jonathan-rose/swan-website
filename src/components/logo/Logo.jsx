import { Link } from "react-router-dom"
import './logo.css'

export default function Logo() {
    return (
        <div className='logo'>
            <Link className="link" to="/">
                <img className="logo" src="/images/logo/logo.png" alt="" />
            </Link>
        </div>
    )
}