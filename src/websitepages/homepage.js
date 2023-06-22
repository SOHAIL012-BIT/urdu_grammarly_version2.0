import React from 'react';
import './pages.css';
import aboutUs from '../assets/images/aboutus.png'
import Header from './Header'

function HomePage() {
    return (
        <>
        
        <body className='abcd'>
            
<Header/>
            <div className='container home-container'>
                <div className='row mt-5 gap-5'>
                    <div className='col-md-5 mt-5 main-text-heading'>
                        <h2 className='fw-bold'>Welcome to, <br />
                            Urdu Grammerly
                        </h2>
                        <p className='first_para'>
                            {/* Urdu Grammerly shall create a setup that ease to write Urdu for its every Urdu user. It will help the user through modernly AI developed approaches which use huge data for training and then predicting and suggesting */}

                            Urdu Grammerly is an intuitive platform that makes writing in Urdu effortless for its users. By utilizing cutting-edge AI technologies, the system will provide personalized support through the use of vast amounts of training data to make accurate predictions and offer practical suggestions.
                        </p>
                      <a href='/login'>  <button className='btn btn-success mt-3 fw-bold'>Login / Signup <span className='spaaner'>its free</span> </button></a>
                    </div>
                    <div className='col-md-6 d-lg-block d-none '>
                        <img src={aboutUs} style={{ height: '400px', width: '100%' }} className='img-fluid ' alt='landing' />

                    </div>
                    <div className='col-lg-12 second_heading text-center mt-3'>
                        <h2 className='fw-bold'> Scaling New Heights in Writing Excellence</h2>
                        <p className='second_para mt-3'>Welcome to Urdu Grammarly, your partner in crafting impeccable written content. With its advanced technology, Urdu Grammarly elevates your writing to new heights, whether you're composing an important email, a school essay, or a professional document. Say goodbye to grammar, spelling, and punctuation errors and hello to clear, concise, and effective writing. Let Urdu Grammarly's algorithms work their magic and see the transformative impact it has on your writing today.  </p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    <h2 className='fw-bold text-center mt-3 await_heading'>  Unleash Your Writing Potential</h2>
                    <p className='Await_para text-center mt-3 pb-5'>Embrace the opportunity to elevate your writing to new heights. Sign up for a free Urdu Grammarly account and unlock your full potential as a writer. Say goodbye to grammar and spelling mistakes and hello to clear, confident, and impactful writing. Unleash the power of Urdu Grammarly today and see what you can achieve.  </p>
                    <div className='d-flex justify-content-center pb-2'>

                        <a href="/login"><button className='btn btn-success'>Get Urdu Grammerly <span>It's free</span></button></a>
                    </div>
                  
                </div>
            </div>
        </body></>
    )
}

export default HomePage
