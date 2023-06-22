import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import './pages.css';
import aboutUs from '../assets/images/aboutus.png'
import Header from './Header'

function Features() {
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
                            <Typography className='fw-bold' variant='h2'>Features
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                                Urdu Grammerly shall create a setup that ease to write Urdu for its every Urdu user. It will help the user through modernly AI developed approaches which use huge data for training and then predicting and suggesting
                            </Typography>
                            <a href='/login'>  <button className='btn btn-success mt-3 fw-bold'>Login / Signup <span className='spaaner'>its free</span> </button></a>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={aboutUs} style={{ height: '400px', width: '100%' }} className='img-fluid ' alt='landing' />
                        </Grid>
                    </Grid>


                    <Grid container spacing={2} className="py-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3rem" }}>
                        <Grid item xs={12} md={4} >
                            <Typography className='fw-bold' variant='h3'>Grammar Check
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                            From subject-verb agreement to punctuation misuse, our algorithm leaves no stone unturned in its quest to improve the quality of your writing. Not only does our algorithm identify grammar errors, but it also provides helpful suggestions for improvement. These suggestions are designed to guide you towards more accurate and polished writing. Whether it's recommending alternative word choices, suggesting appropriate punctuation, or highlighting potential sentence structure issues, our algorithm aims to elevate the overall grammatical accuracy of your text.
                               </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Typography className='fw-bold' variant='h3'>
                                Text Correction
                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                                With our state-of-the-art Correction Checker, you can bid adieu to the frustration of misspelled words and welcome a seamless writing experience. Our advanced algorithm meticulously scans your text, swiftly identifying any inaccuracies and suggesting precise corrections. Whether you're crafting an important business proposal, writing an academic paper, or composing an engaging blog post, our tool guarantees that your message will be conveyed accurately and effectively.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Typography className='fw-bold' variant='h3'>
                            Word Suggestion

                            </Typography>
                            <Typography variant='body1' className='first_para' style={{ textAlign: "justify" }}>
                            With a vast database of words at its disposal, our tool intelligently analyzes your writing and provides suggestions for more sophisticated or captivating vocabulary options. By incorporating advanced vocabulary, you can enhance the overall tone and style of your writing, making it more formal, persuasive, or captivating depending on your specific goals. Whether you're working on a business report, academic essay, or creative piece, our feature ensures that your language stands out and leaves a lasting impact on your readers. </Typography>
                        </Grid>
                    </Grid>
                </div>

            </body></>
    )
}

export default Features
