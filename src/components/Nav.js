import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Logo from '../assets/images/Logo.png';
import { UserAuth } from '../context/UserAuth';



const Nav = () => {

    const {logout , user} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () =>{
        try{
        await logout();
        navigate('/Login')
        console.log('You are logged out');
        }catch(e){
          console.log(e.message);
        }
    }

  return (


<React.Fragment>


{user?.email ?(
    <AppBar
    position="static"
    color='transparent'
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`,fontFamily:'Alegreya',fontSize:"20px"}}
>
    <Toolbar sx={{ flexWrap: 'wrap' }}>
    <Typography  variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
      <Link
        variant="button"
        to='/'
        href="/">
        <img src={Logo} alt='Logo' 
        style={{
          margin:'0 5px' ,
          width:'58px',
          height:'58px'
        }}/>
        </Link>
      </Typography>
      <nav>     
      <Link 
            variant="button"
            style={{
              margin:'10px',
              textDecoration:'none',
              color:'#3A1212',
            }}

              color="text.primary"
              href="#"
              to="/Program"
              sx={{ my: 1, mx: 1.5 }}
            >
              Program 
            </Link>

            {/* <Link
            onClick={handleLogout}
              variant="button"
              color="text.primary"
              to='/'
              href="/"
              style={{
                textDecoration:'none',
                color:'#3A1212',
              }}

              sx={{ my: 1, mx: 1.5 }}
            >
              Sign Out
            </Link> */}

         <Button onClick={handleLogout} variant="contained" sx={{ my:1, mx: 1.5 ,borderRadius:'10px', fontSize:'16px',fontFamily:'Alegreya'}}
          style={{backgroundColor:'#ff2625'}}>
           <Link to='/Login'
            style={{ textDecoration:'none',
              color:'#ffff',
              }}>Sign Out</Link> 
          </Button>

      
        </nav>
        </Toolbar>
        </AppBar>
)
            :( 
    <AppBar
        position="static"
        color='transparent'
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`,fontFamily:'Alegreya',fontSize:"20px"}}
    >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography  variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link
                 variant="button"
                 to='/'
                 href="/">
            <img src={Logo} alt='Logo' style={{
            margin:'0 5px' ,
            width:'58px',
            height:'58px'
        }}/>
            </Link>
    
          </Typography>
          <nav>
          <p>           
              <Link
              variant="button"
              color="text.primary"
              href="#"
              to='/Login'
              sx={{ my: 1, mx: 1.5 }}
              style={{
                marginLeft:'15px',
                textDecoration:'none',
                color:'#3A1212',
                
              }}
            >
            Sing In
            </Link>
          <Button variant="contained" sx={{ my:1, mx: 1.5 ,borderRadius:'10px', fontSize:'16px',fontFamily:'Alegreya'}}
          style={{backgroundColor:'#ff2625'}}>
           <Link to='/Register'
            style={{ textDecoration:'none',
              color:'#ffff',
              }}>Sing up</Link> 
          </Button> </p>

          
            </nav>
            </Toolbar>
            </AppBar>)}
            
</React.Fragment>

  )
}

export default Nav