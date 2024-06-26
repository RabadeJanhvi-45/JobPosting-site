import {AppBar,Toolbar,styled} from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../Routes/routes";

const StyledAppBar=styled(AppBar)({
    background:'#2d2d2d',
    height:64,
    '& > div>*':{
        textDecoration:'none',
        color:'inherit',
        margin:20,
        fontSize:14
    }
})

const Header=()=>{
    const logo="https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    return(
        <StyledAppBar>
            <Toolbar>
                <Link>
                <img src={logo} alt="logo" style={{width:95,marginBottom:6}} to={routePath.home}/>
                </Link>
                <Link to={routePath.create}> Post a Job</Link>
               
                <Link to={routePath.posts}> Find Job</Link>
               
            </Toolbar>
        </StyledAppBar>
    )
}
export default Header;