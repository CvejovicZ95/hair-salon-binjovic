import "./Logo2.css";
import { Link } from 'react-router-dom'

export const Logo2 =()=>{

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return(
    <Link to={"/"}><img
      className="logo-binjovic" 
      src="logo2.png"
      width="150px"
      alt="logo"
      onClick={handleLogoClick}
    />
    </Link>
  )
}