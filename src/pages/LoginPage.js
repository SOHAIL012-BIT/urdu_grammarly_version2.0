import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import { SignupForm } from '../sections/auth/signup';
import { LoginForm } from '../sections/auth/login';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections


import dashboardLogo from '../assets/images/dashboardLogo.png'

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Login | Urdu Grammarly</title>
      </Helmet>

      <StyledRoot>
        {/* <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        /> */}

        {mdUp && (
          <StyledSection style={{backgroundColor:"#323439", color:"#ffffff"}}>
             <img src={dashboardLogo} alt="login" style={{position:"relative", top:10,width:"50%",marginLeft:"auto",marginRight:"auto"}} />
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            {/* <img src="/assets/illustrations/illustration_login.png" alt="login" /> */}
            <img src="/assets/illustrations/banner.png" alt="login" style={{margin:"auto"}}/>
            {/* <img src="/assets/illustrations/BUKC.png" alt="login" /> */}
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom  style={{color:"#323439"}}>
              Sign in to Urdu Grammarly
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }} style={{color:"#323439"}}>
              Don’t have an account? {''}
              <Link variant="subtitle2" href="/signup" style={{color:"#323439"}}>Create One</Link>
            </Typography>

          

            

            <LoginForm />
            {/* <SignupForm/> */}
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
              <Stack direction="row" spacing={2}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
                <Typography variant="h5" sx={{ color: 'text.secondary' }} style={{margin:"auto"}}>
                Sign in with Google
              </Typography>
              </Button>

              {/* <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
              </Button> */}
            </Stack>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
