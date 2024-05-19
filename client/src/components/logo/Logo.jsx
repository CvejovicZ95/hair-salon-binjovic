import "./Logo.css";

export const Logo =()=>{

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return(
    <img
      className="logo-binjovic" 
      src="binjovic.png"
      width="150px"
      alt="logo"
      onClick={handleLogoClick}

    />
  )
}