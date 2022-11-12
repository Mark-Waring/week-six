import { Link } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./AppContext"
import { useEffect } from "react"
import LightModeIcon from "./LightModeIcon"

export default function NavBar () {
    const { isDarkTheme, isLoggedIn, setIsLoggedIn, setBookmarks, bookmarks, setSelectedDate  } = useContext(AppContext);

    function handleLogoutClick() {
        setIsLoggedIn(false)
        setBookmarks([])
        setSelectedDate("");
    }

    useEffect(() => {
        if (isDarkTheme) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [isDarkTheme]);

    return (
        <nav className="nav-bar">
            {isLoggedIn && <Link to="/" className="nav-items" onClick={handleLogoutClick}>
              Log out
            </Link>}
            <Link to="/bookmarks" className="nav-items">{bookmarks.length === 0 ? "Bookmarks" : `Bookmarks (${bookmarks.length})`}</Link>
            {<LightModeIcon/>}
            <Link to="/"className="nav-home" onClick={() => setSelectedDate("")}>
              Home
            </Link>          
        </nav>
        )
}