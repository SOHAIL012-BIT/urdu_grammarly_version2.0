import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// mock
import account from '../../../_mock/account';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';


import dashboardLogo from '../../../assets/images/dashboardLogo.png'
//
import {navConfig,SupportNav} from './config';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  const userData = localStorage.getItem('userData');
  const uppercaseUserData = userData.toUpperCase();


  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        {/* <Logo /> */}
        <img src={dashboardLogo} alt='Logo'/>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src={account.photoURL} alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }} style={{color:"white"}}>
                {uppercaseUserData}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Grammarly User
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 3 }}>
        <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
          <Box
            component="img"
            src="/assets/illustrations/illustration_avatar.svg"
            sx={{ width: 70, position: 'absolute', top: -30 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h6" color="#ffffff">
            Using Grammarly for work?
            </Typography>

            {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} color="#ffffff"> */}
            <Typography variant="body2" color="#ffffff">
            Get Grammarly Business for your entire team.
            </Typography>
          </Box>

          <Button href="#"  variant="contained">
            Learn More
          </Button>
        </Stack>
      </Box>
      {/* <NavSection data={SupportNav} />
      <br/>
      <br/>
      <br/>
      <br/> */}
      {/* <NavSection data=[{}] />
      <NavSection data=[{}] />
      <NavSection data=[{}] /> */}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
      // style={{
      //   backgroundColor:"#323439"
      // }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              // bgcolor: 'background.default',
              bgcolor: '#323439',
              // borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH,
              bgcolor: '#323439',
             },
           
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
