import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginTop: 'auto',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: '1 0 auto',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {/* Your app content */}
      </div>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="textSecondary" align="center">
            Your website footer content goes here.
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} Your Website
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Powered by <Link color="inherit" href="https://mui.com/">Material-UI</Link>
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
