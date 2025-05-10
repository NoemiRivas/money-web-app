import {Link}  from "react-router-dom";


function Navbar() {
  return (
    <div>
      <Link to={"/"} ><img src="./logo.png"  alt='logo' className='w-80 m-auto'  /></Link>
      
    </div>
  )
}

export default Navbar
