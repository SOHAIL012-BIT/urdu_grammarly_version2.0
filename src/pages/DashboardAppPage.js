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
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography> */}
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

          {/* <Grid item xs={12} sm={12} md={6}>
            <AppWidgetSummary title="Bug Reports" subtitle={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid> */}



          {/* <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
