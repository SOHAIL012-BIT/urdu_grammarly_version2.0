import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import './pages.css';
import aboutUs from '../assets/images/aboutus.png'
import Header from './Header'
import Footer from './Footer'

function HomePage() {
    return (
        <>

            <body className='abcd'>

                <Header />
              

                <div style={{
                    paddingLeft:'10rem',
                    paddingRight:'10rem'
                    
                }}>
                    <Grid container spacing={2} className="py-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Grid item xs={12} md={6} >
                            <Typography className='fw-bold' variant='h2'>Welcome to, <br />
                                Urdu Grammarly
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                                Urdu Grammerly is an intuitive platform that makes writing in Urdu effortless for its users. By utilizing cutting-edge AI technologies, the system will provide personalized support through the use of vast amounts of training data to make accurate predictions and offer practical suggestions.
                            </Typography>
                            <a href='/login'>  <button className='btn btn-success mt-3 fw-bold'>Login / Signup <span className='spaaner'>its free</span> </button></a>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={aboutUs} style={{ height: '400px', width: '100%' }} className='img-fluid ' alt='landing' />
                        </Grid>
                    </Grid>


                    <Grid container spacing={2} className="py-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginTop:"3rem" }}>
                        <Grid item xs={12} md={6} >
                            <Typography className='fw-bold' variant='h3'>Unleash Your Writing Potential
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                            Embrace the opportunity to elevate your writing to new heights. Sign up for a free Urdu Grammarly account and unlock your full potential as a writer. Say goodbye to grammar and spelling mistakes and hello to clear, confident, and impactful writing. Unleash the power of Urdu Grammarly today and see what you can achieve.                              </Typography>
                            <a href='/login'>  <button className='btn btn-success mt-3 fw-bold'>Get Urdu Grammerly <span>It's free</span></button></a>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Typography className='fw-bold' variant='h3'>
                            Scaling New Heights in Writing Excellence
                            </Typography>
                            <Typography  variant='body1' className='first_para' style={{textAlign:"justify"}}>
                            Welcome to Urdu Grammarly, your partner in crafting impeccable written content. With its advanced technology, Urdu Grammarly elevates your writing to new heights, whether you're composing an important email, a school essay, or a professional document. Say goodbye to grammar, spelling, and punctuation errors and hello to clear, concise, and effective writing. Let Urdu Grammarly's algorithms work their magic and see the transformative impact it has on your writing today.                          </Typography>
                        </Grid>
                    </Grid>
                </div>

{/* <Footer/> */}
            </body></>
    )
}

export default HomePage
