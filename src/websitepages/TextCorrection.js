import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import './pages.css';
import aboutUs from '../assets/images/Text Correction.webp'
import Header from './Header'

function TextCorrection() {
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
                               Text Correction
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                            Say goodbye to spelling blunders with our Correction Checker! Let our advanced technology scan your text and suggest the right spellings. Get ready to up your writing game and make a lasting impression with error-free text.


                            </Typography>
                            <a href='/login'>  <button className='btn btn-success mt-3 fw-bold'>Login / Signup <span className='spaaner'>its free</span> </button></a>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={aboutUs} style={{ height: '350px', width: '100%' }} className='img-fluid ' alt='landing' />
                        </Grid>
                    </Grid>


                    <Grid container spacing={2} className="py-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3rem" }}>

                        <Grid item xs={12} md={3} />
                        <Grid item xs={12} md={6}  >
                            <Typography className='fw-bold' variant='h3' align='center'>
                                Correct Text, Better Impression
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                            Unleash your writing potential with our Sentence and Word Suggestion tool! Our state-of-the-art AI technology leverages vast amounts of data to provide the perfect words and phrases for every user. Say goodbye to writer's block and hello to effortless, fluent writing. Whether you're a professional writer or simply looking to improve your communication skills, our tool is the ideal solution. With a simple click, you can access a wealth of suggestions and improve your writing in real-time. Say goodbye to awkward phrasing and hello to clear, concise language that makes a lasting impression on your audience. And, with our cutting-edge AI technology, you can trust that our suggestions are not only accurate but also tailored to your specific needs. Experience the thrill of fluent writing and make your mark on the world with our Sentence and Word Suggestion tool!
</Typography>                        </Grid>
                        <Grid item xs={12} md={3} />
                    </Grid>
                </div>

            </body></>
    )
}

export default TextCorrection
