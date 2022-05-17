import "./categories.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Grid';

function Categories(){
    const catItems = ["electronics","men","women","home", "beauty & fragnance", "baby & toys","grocery","sports"]
 return(
    <>
    <div className="categories">
       
        
        <Grid container spacing={2}>
        <Grid xs={3}>
        <div className="all">
            <span className="cat-text">all categories <span><KeyboardArrowDownIcon /></span></span>
        </div>
        </Grid>
        <Grid xs={9}>
        <div className="catlist">{catItems.map((e)=>{
            return<>
            <div className="catlistItem">
                <span>{e}</span>
            </div>
            </>
        })}</div>
        </Grid>
        </Grid>
        
    </div>
    </>
 )
}
export default Categories;