import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField,FormControl  } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { toaster } from '../../../utils/toaster';
import Iconify from '../../../components/iconify';
// API Import 
import {UserRegister} from '../../../services/AuthenticationServices'
// ----------------------------------------------------------------------
const InitialState = {
  username: "",
  email: "",
  password: ""
}
export default function SignupForm() {
  const navigate = useNavigate();
  const [state, setState] = useState(InitialState);
  const [showPassword, setShowPassword] = useState(false);
  

  const handleClick = () => {
    console.log("User data is", state)
    Register();
    // navigate('/dashboard', { replace: true });
  };
  const handleChange = ({ target: { name, value } }) => {
    const temp = { ...state };
    temp[name] = value;
    setState(temp);
  }
  // Api Call Function
  const Register=()=>{
   
   UserRegister(state).then(  ({ data }) => {
          if (data.statusText==="Created") {
              navigate("/login");
          } else {
             toaster(data.statusText, "error")
          }
        })
        .catch(error => {
           toaster("Something went wrong", "error")
        })
  }


  
  return (
    <>
      <Stack spacing={3}>

      <FormControl required>
      <TextField name="name" label="User Name"   onChange={handleChange} required/>
      </FormControl>


        <TextField name="email" label="Email address" onChange={handleChange} required/>

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          required
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
