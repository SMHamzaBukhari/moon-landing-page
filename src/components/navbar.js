import "./navbar.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar(){
return(
    <>
    <div className="nav">
        <div class="nav-logo">
            <img src="../../images/logo.svg" width="100px"/>
            </div>
        <div className="nav-deliver">
            <span><img src="../../images/dubai.png" width="30px" height="20px"/></span>
            <p>Deliver to <span>Dubai</span></p>
            <span id="deliver-dropdown"><KeyboardArrowDownIcon></KeyboardArrowDownIcon></span>
        </div>
        <div className="nav-search">
            <input className="search" placeholder="What are you looking for?"/>
        </div>
        <div className="nav-buttons">
            <p>العربية</p>
            <span className="signin">Sign In <span><PersonOutlineOutlinedIcon fontSize="small"/></span></span>
            <span className="cart">Cart <span><ShoppingCartOutlinedIcon fontSize="x-small"/></span></span>
        </div>
    </div>
    </>
)}
export default Navbar;