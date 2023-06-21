import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Stack } from '@mui/material';

import { useNavigate } from "react-router-dom";


// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------




export default function DashboardAppPage() {

  const theme = useTheme();
 const navigate = useNavigate();


  const handleCardClick = (event) => {
    const divId = event.currentTarget.id;
    const redirectURL = `/dashboard/${divId}`;
 
    navigate(redirectURL);
   

  }

  return (
    <>
      <Helmet>
        <title> Dashboard | Urdu Grammarly</title>
      </Helmet>

      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" color="#323439">
            Hi, Welcome back
          </Typography>
          <Typography variant="h4" color="#323439">
            سلام، آپ کا خیر مقدم
          </Typography>
        </Stack>

        <Grid container spacing={3}>
         
          <Grid item xs={12} sm={12} md={6} id="WordsSuggestion" data-divId="WordsSuggestion" onClick={handleCardClick}>
            <AppWidgetSummary title="Words Suggestion"
              subtitle={"Unlock your writing potential with our AI-powered Sentence and Word Suggestion tool. Effortlessly improve your writing with tailored suggestions and say goodbye to writer's block."}
              color="info"
              urduTrans=".ہمارے اے آئی پاورڈ جملوں اور الفاظ کی تجویز کرنے والے ٹول کے ساتھ اپنی لکھائی کی صلاحیت کو کھولیں. اپنی لکھائی کو آسانی سے بہتر بنائیں اور لکھاریز کے بلاک کو وداع کہیں"
              // icon={'ant-design:apple-filled'} 
              icon={'ant-design:bulb-filled'} />
          </Grid>

          <Grid item xs={12} sm={12} md={6} id="SentenceCorrection" data-divId="SentenceCorrection" onClick={handleCardClick}>
            <AppWidgetSummary title="Sentence Correction"
              subtitle="Bye to spelling mistakes with our Correction Checker! Advanced technology for error-free text, elevating your writing game."
              urduTrans="اپنے اشتباہیں درست کرنے کے ساتھ خداحافظ کہیں ہمارے اصلاح چیکر کے ساتھ! انتہائی ترقی یافتہ ٹیکنالوجی کے ذریعہ آپ کے مواد کو سکین کرنے اور صحیح املا کی تجویز کرنے دیں. تیار رہیں کہ آپ کا لکھائی کو باضابطہ بنائیں اور غلطیوں سے پاک مواد کے ساتھ باقاعدہ اثر انداز کریں."
              color="info"
              // icon={'ant-design:windows-filled'} 
              icon={'ant-design:edit-filled'}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} id="GrammarChecking" data-divId="GrammarChecking" onClick={handleCardClick} >
            <AppWidgetSummary title="Grammar Check"
              color="info"
              subtitle="Eliminate grammar errors with Urdu Grammarly's AI-powered Grammar Check for flawless Urdu writing. Elevate your writing and impress your audience with impeccable grammar."
              urduTrans=".اعلٰی اردو کیلئے یو. آر. دو گرامرلی کی طاقتور ای آئی پاورڈ گرامر چیک کے ساتھ گرامر کی خامیاں ختم کریں. اپنے لکھائی کو اونچا اٹھائیں اور اپنے حضور کو بےعیب گرامر کے ساتھ پرجوش کریں"
              //  icon={'ant-design:android-filled'} 
              icon={'ant-design:check-square-filled'}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
