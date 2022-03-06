import React from 'react'
import styles from './Dashboard.module.scss';
import { BiCopy } from 'react-icons/bi';

const Dashboard = () => {
  return (
    <div className = {styles.container}>

<div className = {styles.child}>
<input type = "search" placeholder='Query'  className={styles.inputContainer1}/>

<div className= {styles.row1}>
  <input type = "search" placeholder='Location' className= {styles.inputContainer2}></input>
  <input type = "number" placeholder='No. of results' className= {styles.inputContainer2}></input>
</div>

<div className= {styles.row2}>
  <input type = "number" placeholder='Page' className= {styles.inputContainer2}></input>
  <input type = "number" placeholder='Pages' className= {styles.inputContainer2}></input>
</div>

<div className= {styles.dropdown}>
<form action="#">
      <select name="Render HTML" type = "text" className= {styles.slct}>
        <option hidden value= "true">Render HTML</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <input type="submit" value="Send Req" className= {styles.dropInp} />
</form>
</div>

</div>

<div className = {styles.child}>
<header className= {styles.heading}>Results</header>
<hr className = {styles.line}/>
<footer className= {styles.foot}><BiCopy/>Copy</footer>
</div>

</div>
  )
}
export default Dashboard;