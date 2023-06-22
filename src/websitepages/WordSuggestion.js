import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import './pages.css';
import aboutUs from '../assets/images/suggestion.webp'
import Header from './Header'

function WordSuggestion() {
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
                               Words Suggestions
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                            Urdu Grammerly shall create a setup that ease to write Urdu for its every Urdu user. It will help the user through modernly AI developed approaches which use huge data for training and then predicting and suggesting
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
                            We've climbed a long way with much farther to the summit

                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                            Welcome to Urdu Grammarly, the ultimate writing tool for error-free and polished writing. Whether you're writing an important email, crafting a school essay, or preparing a professional document, Urdu Grammarly can help you improve your grammar, spelling, and punctuation, and enhance your overall writing style. With our advanced algorithms, you can be sure that your writing is clear, concise, and effective. Try Grammarly today and see the difference it makes in your writing!"</Typography>                        </Grid>
                        <Grid item xs={12} md={3} />
                    </Grid>
                </div>

            </body></>
    )
}

export default WordSuggestion
