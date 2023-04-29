import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
// components
// import Logo from '../../components/logo';
import dashboardLogo from '../../assets/images/dashboardLogo.png'


// ----------------------------------------------------------------------

const StyledHeader = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function SimpleLayout() {
  return (
    <>
      <StyledHeader style={{ color: "ffffff",
                                    backgroundColor: "#323439",}}>
        {/* <Logo /> */}
        <img src={dashboardLogo} alt='Logo' style={{height:"30%",width:"20%", alignItems:"center" ,margin:"auto"}}/>
      </StyledHeader>

      <Outlet />
    </>
  );
}
