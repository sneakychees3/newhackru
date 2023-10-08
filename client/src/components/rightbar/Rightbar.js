import classes from './Rightbar.module.css'
const Rightbar=()=>{
  return(
    <div className={classes.Rightbar}>
      <div className={classes.container}>
        <div className={classes.item}>
          <span>For you</span>
          <div className={classes.item}>
            <span>img</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rightbar;