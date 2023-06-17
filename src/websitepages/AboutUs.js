import React from 'react';
import { Container, Grid, Typography } from '@mui/material';


import { makeStyles } from "@material-ui/core/styles";

import aboutUs from '../assets/images/aboutus.png'
import logo from '../assets/images/dashboardLogo.png'

import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
    banner: {
        // background: `linear-gradient(to right, #f5f5f5, #ffffff)`,
        background: "#1f243c",
        padding: theme.spacing(4),
        marginBottom: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        height: 300,
    },
    bannerText: {
        fontSize: '32pt',
        fontWeight: 'bold',
        color: "#ffffff",
        marginRight: theme.spacing(2),
    },
    bannerImage: {
        maxWidth: '80%',
        height: '80%',
    },
    columnContainer: {
        marginBottom: theme.spacing(4),
        color: "#1f243c"
    },
    subtitle: {
        fontStyle: 'italic',
        color: '#ffffff',
        marginBottom: theme.spacing(2),
    },
    introText: {
        // fontSize: "14pt",
        color: "#1f243c",
        fontFamily: "'Google Sans', sans-serif",
        fontWeight: "bold"
    },
    bannerDetail: {
        backgroundColor: "#ffffff"
    }
}));

function About() {
    const classes = useStyles();

    return (
        <>
            <Header />
            <div className={classes.banner}>
                <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" className={classes.bannerText} align="center">
                                About Us
                            </Typography>
                            <br />
                            <Typography variant="h6" className={classes.subtitle} align="center">
                                Helping You Communicate Better in Urdu
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={logo} alt='logo' className={classes.bannerImage} />
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                            <img src={aboutUs} alt='logo' className={classes.bannerImage} />
                        </Grid> */}
                    </Grid>
                </Container>
            </div >
            <div className={classes.bannerDetail}>
                <Container maxWidth="lg" className={classes.columnContainer}>

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" component="h2" gutterBottom style={{ textAlign: "center" }} className={classes.introText}>
                                Improve lives by improving communication
                            </Typography>
                            <br />
                            <Typography variant="subtitle1" component="h2" gutterBottom style={{ textAlign: "center" }} className={classes.introText}>
                                We’ve climbed a long way — with much farther to the summit
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg" className={classes.columnContainer}>

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6}>

                            <Typography variant="body1" align="justify" className={classes.introText}>
                                Urdu is our national language and a source of pride for us. With the goal of encouraging Urdu writing and the use of Urdu in everyday speech, we provide Grammar Check, Sentence Correction, and Word Suggestions. At Urdu Grammarly, we seek to enable individuals to communicate in Urdu with one another whenever and wherever they can. Grammarly promotes efficient and productive writing. Our ideas assist in identifying and replacing complex phrases with more efficient ones, refreshing repetitious terminology, and maintaining correct spelling, punctuation, and grammar.
                            </Typography>
                            <Typography variant="body1" align="justify" style={{ marginTop: "1rem" }} className={classes.introText}>
                                We founded Urdu Grammarly with the goal of helping people communicate more effectively.Our app shall help the Urdu Columnists, Social Scientists, Novelists, News Reporters, and Urdu writers being the ultimate custodian of this language.Urdu Grammarly shall create a setup that ease to write Urdu for its every user Urdu.Urdu Grammarly has grown the capabilities of our writing assistance to go way beyond grammar and spelling to analyze complex aspects of language and communication.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" align="justify" style={{ textAlign: "center", direction: "rtl" }} className={classes.introText}>
                                اردو ہماری قومی زبان ہے اور ہمارے لئے فخر کا باعث ہے۔ اردو لکھنے اور ہر روزہ گفتگو میں اردو کے استعمال کی ترویج کے مقصد کے ساتھ ہم گرامر چیک، جملہ میں تصحیح اور الفاظ کی تجاویز فراہم کرتے ہیں۔ ہم یوں چاہتے ہیں کہ افراد اردو میں بات چیت کریں جب بھی اور جہاں بھی وہ چاہیں۔ گرامرلی موثر اور پیداوارکار تحریر کو فروغ دیتی ہے۔ ہمارے خیالات مدد کرتے ہیں کہ مشکل عبارات کو مددگر الفاظ سے تبدیل کیا جائے، تکرار کے الفاظ کو تازہ کیا جائے، درست ہجے، علامات وقفے اور گرامر کی حفاظت رکھی جائے۔
                            </Typography>
                            <Typography variant="body1" align="justify" style={{ marginTop: "1rem", textAlign: "center", direction: "rtl" }} className={classes.introText}>
                                ہم نے اردو گرامرلی کی بنیاد اس مقصد کے ساتھ رکھی ہے کہ لوگوں کو زیادہ مؤثر طریقے سے بات چیت کرنے میں مدد ملے۔ ہماری ایپ اردو کالم نگاروں، سماجی سائنسدانوں، ناول نگاروں، نیوز رپورٹروں، اور اردو مصنفین کو اس زبان کے حتمی محافظ ہونے میں مدد دے گی۔ اپنے ہر صارف کے لیے اردو لکھیں۔ اردو گرامر نے زبان اور مواصلات کے پیچیدہ پہلوؤں کا تجزیہ کرنے کے لیے گرامر اور املا سے آگے بڑھنے کے لیے ہماری تحریری معاونت کی صلاحیتوں میں اضافہ کیا ہے۔
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <Footer/>
        </>
    );
}

export default About;
