import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo-1"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />

        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li className="route-list">Home</li>
          </Link>
          <Link to="/products" className="nav-link">
            <li className="route-list">Products</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li className="route-list">Cart</li>
          </Link>
        </ul>
        <div>
          <button type="button" className="logout-button">
            Logout
          </button>
        </div>
        <button type="button" className="logout-mobile-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
    <ul className="nav-menu-sm">
      <Link to="/" className="nav-link">
        <li className="route-list">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="route-icons"
          />
        </li>
      </Link>
      <Link to="/products" className="nav-link">
        <li className="route-list">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="route-icons"
          />
        </li>
      </Link>
      <Link to="/cart" className="nav-link">
        <li className="route-list">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="route-icons"
          />
        </li>
      </Link>
    </ul>
  </>
)

export default Header
