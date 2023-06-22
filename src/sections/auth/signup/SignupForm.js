// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // @mui
// import { Stack, IconButton, InputAdornment, TextField, FormControl } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// // components
// import { toaster } from '../../../utils/toaster';
// import Iconify from '../../../components/iconify';
// // API Import
// import { UserRegister } from '../../../services/AuthenticationServices';
// // ----------------------------------------------------------------------
// // const InitialState = {
// //   username: '',
// //   email: '',
// //   password: '',
// // };
// const InitialState = { username:'', email:'', password:'' }


// export default function SignupForm() {
//   const navigate = useNavigate();
//   const [state, setState] = useState(InitialState);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleClick = () => {
//     console.log('User data is', state);
//     Register();
//     // navigate('/dashboard', { replace: true });
//   };
//   const handleChange = ({ target: { name, value } }) => {
//     const temp = { ...state };
//     temp[name] = value;
//     setState(temp);
//   };
//   // Api Call Function
//   //   const Register=()=>{
//   // // eslint-disable-next-line no-debugger
//   // debugger
//   //    UserRegister(state).then(  ({ data }) => {
//   //           if (data.statusText==="Created") {
//   //               navigate("/login");
//   //           } else {
//   //              toaster(data.statusText, "error")
//   //           }
//   //         })
//   //         .catch(error => {
//   //            toaster("Something went wrong", "error")
//   //         })
//   //   }


//   const Register = () => {
//     // Send the form data to the backend API
//     // eslint-disable-next-line no-debugger
//    debugger
//     fetch('http://127.0.0.1:8000/api/users/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(state)
//     })
//     .then(response => {
//       // eslint-disable-next-line no-debugger
//       debugger
//       console.log("APi Response is",response);
//       const user=response.json();
//       console.log("User is",user);
//       if(response.statusText==="Created"){
//         toaster("Account Created Successfully", "success")
//         navigate("/login");
//       }
//       else if(response.statusText==="Bad Request"){
//         toaster("Unable to Create account. User name already exist", "error")
//       }
//     })
//     .catch(error =>{
//       toaster("Something went wrong", "error")
//     });
//   };

//   return (
//     <>
//       <Stack spacing={3}>
//         <FormControl required autoComplete="off">
//           <TextField name="username" label="User Name" onChange={handleChange} required  autoComplete="off"/>
//         </FormControl>

//         <TextField name="email" label="Email address" type="email" onChange={handleChange} required  autoComplete="off" />

//         <TextField
//           name="password"
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           onChange={handleChange}
//           required
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-off-fill' : 'ic:round-remove-red-eye'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//           autoComplete="off"
//         />
//       </Stack>

//       <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
//         {/* <Checkbox name="remember" label="Remember me"  style={{color:"#323439"}}/>
//         <Link variant="subtitle2" underline="hover"  style={{color:"#323439"}}>
//           Forgot password?
//         </Link> */}
//         <p className="text-center mb-3 mt-3 text-muted small" style={{ fontSize: '14px' }}>
//           By signing up, you agree to the{' '}
//           <a href="#action" style={{ textDecoration: 'underline' }}>
//             Terms and Conditions{' '}
//           </a>{' '}
//           and{' '}
//           <a href="#act" style={{ textDecoration: 'underline' }}>
//             Privacy Policy.
//           </a>{' '}
//         </p>
//       </Stack>

//       <LoadingButton
//         fullWidth
//         size="large"
//         type="submit"
//         variant="contained"
//         onClick={handleClick}
//         style={{ backgroundColor: '#323439', color: '#ffffff' }}
//       >
//         Agree & Sign up
//       </LoadingButton>
//     </>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, FormControl } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { toaster } from '../../../utils/toaster';
import Iconify from '../../../components/iconify';
// API Import
import { UserRegister } from '../../../services/AuthenticationServices';

const InitialState = { username: '', email: '', password: '' };

export default function SignupForm() {
  const navigate = useNavigate();
  const [state, setState] = useState(InitialState);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleClick = () => {
    if (validateForm()) {
      Register();
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    const temp = { ...state };
    temp[name] = value;
    setState(temp);

    if (name === 'username') {
      if (value.trim() === '') {
        setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
      }
    } else if (name === 'email') {
      if (value.trim() === '') {
        setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
      } else if (!validateEmail(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
      }
    } else if (name === 'password') {
      if (value.trim() === '') {
        setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
      }
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (state.username.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username is required' }));
      isValid = false;
    }

    if (state.email.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
      isValid = false;
    } else if (!validateEmail(state.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      isValid = false;
    }

    if (state.password.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
      isValid = false;
    }

    return isValid;
  };

  const validateEmail = (email) => {
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const Register = () => {
    fetch('http://127.0.0.1:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })
      .then((response) => {
        if (response.status === 201) {
          toaster('Account Created Successfully', 'success');
          navigate('/login');
        } else if (response.status === 400) {
          toaster('Unable to create account. Username already exists', 'error');
        } else {
          toaster('Something went wrong', 'error');
        }
      })
      .catch((error) => {
        toaster('Something went wrong', 'error');
      });
  };

  return (
    <>
      <Stack spacing={3}>
        <FormControl required autoComplete="off">
          <TextField
            name="username"
            label="User Name"
            onChange={handleChange}
            required
            error={!!errors.username}
            helperText={errors.username}
            autoComplete="off"
          />
        </FormControl>

        <TextField
          name="email"
          label="Email address"
          type="email"
          onChange={handleChange}
          required
          error={!!errors.email}
          helperText={errors.email}
          autoComplete="off"
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          required
          error={!!errors.password}
          helperText={errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-off-fill' : 'ic:round-remove-red-eye'} />
                </IconButton>
              </InputAdornment>
            )
          }}
          autoComplete="off"
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <Checkbox name="remember" label="Remember me"  style={{color:"#323439"}}/>
        <Link variant="subtitle2" underline="hover"  style={{color:"#323439"}}>
          Forgot password?
        </Link> */}
        <p className="text-center mb-3 mt-3 text-muted small" style={{ fontSize: '14px' }}>
          By signing up, you agree to the{' '}
          <a href="#action" style={{ textDecoration: 'underline' }}>
            Terms and Conditions{' '}
          </a>{' '}
          and{' '}
          <a href="#act" style={{ textDecoration: 'underline' }}>
            Privacy Policy.
          </a>{' '}
        </p>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
        style={{ backgroundColor: '#323439', color: '#ffffff' }}
      >
        Agree & Sign up
      </LoadingButton>
    </>
  );
}
