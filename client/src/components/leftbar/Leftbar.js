import classes from './Leftbar.module.css'
const Leftbar=()=>{
  return(
    <div className={classes['left-bar']}>
      <div className={classes.container}>
        <div className={classes.menu}>
          <div className={classes['menu-item']}>
            <img src=''/>
            <span>menu</span>
          </div>

          <div className={classes['menu-item']}>
            <img src=''/>
            <span>friends</span>
          </div>
          <div className={classes['menu-item']}>
            <img src=''/>
            <span>search</span>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Leftbar;