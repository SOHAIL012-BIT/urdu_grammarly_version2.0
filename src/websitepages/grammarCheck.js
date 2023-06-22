import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import './pages.css';
import aboutUs from '../assets/images/grammar.webp'
import Header from './Header'

function GrammarCheck() {
    return (
        <>

            <body className='abcd'>

                <Header />


                <div style={{
                    paddingLeft: '10rem',
                    paddingRight: '10rem'

                }}>
                    <Grid container spacing={2} className="py-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Grid item xs={12} md={6} >
                            <Typography className='fw-bold' variant='h2'>
                                Grammar Check
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                                Unleash the power of effortless Urdu writing with Urdu Grammerly! Say goodbye to grammar headaches and hello to a world of seamless expression. Our cutting-edge AI technology uses vast amounts of data to train, predict, and suggest the perfect words and phrases for every user. Experience the thrill of fluent Urdu writing and make your mark on the world!

                            </Typography>
                            <a href='/login'>  <button className='btn btn-success mt-3 fw-bold'>Login / Signup <span className='spaaner'>its free</span> </button></a>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={aboutUs} style={{ height: '400px', width: '100%' }} className='img-fluid ' alt='landing' />
                        </Grid>
                    </Grid>


                    <Grid container spacing={2} className="py-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3rem" }}>

                        <Grid item xs={12} md={3} />
                        <Grid item xs={12} md={6}  >
                            <Typography className='fw-bold' variant='h3' align='center'>
                              Correct Grammar of your Urdu writing
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                                Welcome to Urdu Grammarly, your partner in crafting impeccable written content. With its advanced technology, Urdu Grammarly elevates your writing to new heights, whether you're composing an important email, a school essay, or a professional document. Say goodbye to grammar, spelling, and punctuation errors and hello to clear, concise, and effective writing. Let Urdu Grammarly's algorithms work their magic and see the transformative impact it has on your writing today.                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={3} />
                    </Grid>
                </div>

            </body></>
    )
}

export default GrammarCheck
