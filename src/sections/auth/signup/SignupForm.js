import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function SignupForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <Stack spacing={3}>

      <TextField name="name" label="User Name" />
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                <Iconify icon={showPassword ?'eva:eye-off-fill':'ic:round-remove-red-eye'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <Checkbox name="remember" label="Remember me"  style={{color:"#323439"}}/>
        <Link variant="subtitle2" underline="hover"  style={{color:"#323439"}}>
          Forgot password?
        </Link> */}
        <p
                    className="text-center mb-3 mt-3 text-muted small"
                    style={{ fontSize: "14px" }}
                  >
                    By signing up, you agree to the{" "}
                    <a href="#action" style={{ textDecoration: "underline" }}>
                      Terms and Conditions{" "}
                    </a>{" "}
                    and{" "}
                    <a href="#act" style={{ textDecoration: "underline" }}>
                      Privacy Policy.
                    </a>{" "}
                  </p>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}  style={{backgroundColor:"#323439", color:"#ffffff"}}>
        Agree & Sign up
      </LoadingButton>
    </>
  );
}
