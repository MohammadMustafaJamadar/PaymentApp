'use client'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import style_NavBAr from "./nav-bar.module.scss";
import { useRouter } from 'next/navigation';
import { CgInfinity } from "react-icons/cg";

export default function NavBar() {
  const navigateUser = useRouter();
  const handleClick = () => {
    navigateUser.push("/signin")
  }
  return (
    <>
      <div>
        <AppBar position="fixed" color='inherit'  >
          <div className='header-content' style={{
            display: 'flex', flexDirection: "row",
            justifyContent: "center", flexWrap: "wrap"
          }}>
            <Toolbar>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href="/" className={style_NavBAr.nav_link}>Spice
                  <span ><CgInfinity/></span></Link>
              </Typography>
              <div className='header-nav' style={{
                display: 'flex', flexDirection: "row", marginLeft: "20px",
                gap: "12px"
              }}>
                <div className='nav-item' style={{ marginTop: "10px" }}>
                  <Link href="/products" className={style_NavBAr.nav_link}>Products</Link>
                </div>
                <div className='nav-item' style={{ marginTop: "10px" }}>
                  <Link href="/contact" className={style_NavBAr.nav_link}>Contact</Link>
                </div>
                <div className='nav-item' style={{ marginTop: "10px" }}>
                  <Link href="/aboutus" className={style_NavBAr.nav_link}>About Us</Link>
                </div>
                <div className='nav-item'>
                  <Button variant="contained" onClick={handleClick}>Sign in</Button>
                </div>

              </div>


            </Toolbar>
          </div>
        </AppBar>
      </div>
    </>
  )
}
