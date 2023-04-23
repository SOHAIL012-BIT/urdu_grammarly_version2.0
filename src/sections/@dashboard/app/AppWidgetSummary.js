// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ subtitle, urduTrans, title, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}

      style={{
        margin: "10px 10px 10px 10px ",
      }}
    >
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </StyledIcon>

      {/* <Typography variant="h3">{fShortenNumber(title)}</Typography> */}
      <Typography variant="h3" sx={{ opacity: 1 }}>
        {title}
      </Typography>


      <Typography variant="subtitle2" sx={{ opacity: 1 }} align="justify" padding={2} style={{ fontSize:"12pt"}}>
        {subtitle}
      </Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.92 }} gutterBottom="true" align="justify" padding={2}
        style={{
          direction: 'rtl', // Set text direction to right-to-left
          textAlign: 'right', // Set text alignment to right
          fontFamily: 'Nastaliq', // Use a Urdu-specific font for better display
          fontSize:"12pt"
        }}
        >
        {urduTrans}
      </Typography>
    </Card>
  );
}
