import React from 'react'
import logo from './logo.png';
import styles from './navbar.module.css'
// import homeimg2 from './homeimg2.jpg';
// import LogoutButton from '../homepages/logoutbutton';
import LoginButton from '../homepages/loginbutton';
import { useNavigate } from "react-router-dom";


const EmployerNavbar = (props) => {
  const navigate = useNavigate();
  const resume = () =>{
    navigate("/resume")
  } 
  const profile = () =>{
    navigate("/employerprofile")
  } 

  const apply = ( ) => {
    navigate("/applyjob")
  }

  const home = ( ) => {
    navigate("/employer")
  }
  return (
    <div>
      {/* <div className={styles['sign-in']}><LogoutButton/></div> */}
      

      <div className={styles['home-page-employers']}>
  
        <div className={styles['search']}>
          <div className={styles['group2']}>
        
          
          </div>
          <div className={styles['group1']}>

          </div>
        </div>
        <div className={styles['menu']}>
          <img
            src="/playground_assets/hhrumin19331-tsn.svg"
            alt="hhrumin19331"
            className={styles['hhrumin1']}
          />
          <img
            src="/playground_assets/line19333-ojv.svg"
            alt="Line19333"
            className={styles['line1']}
          />
          <span className={styles['text08']}>
            <span>Lahore</span>
          </span>
          <span className={styles['text10']}>
            <span onClick={profile}>Update Profile</span>
          </span>
          <span className={styles['text09']}>
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </span>
          {/* <span className={styles['text12']}>
            <span onClick={apply}>Apply for Job</span>
          </span> */}
          {/* <div className={styles['resume']}>
            <span className={styles['text10']}>
              <span onClick={resume}>Create Resume</span>
            </span>
          </div> */}
          
        </div>
        <img
          src="/playground_assets/logo19382-r7mk-200h.png"
          alt="logo19382"
          className={styles['logo1']}
        />

      </div>
      
      <img
        alt = "logo not loading"
          src={logo}
          className={styles['logo1']}
          onClick={home}
        />
        
    </div>
  )
}

export default EmployerNavbar
