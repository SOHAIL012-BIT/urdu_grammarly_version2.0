import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
// components
import { useChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppConversionRates.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  chartColors: PropTypes.arrayOf(PropTypes.string),
};

export default function AppConversionRates({ title, subheader, chartColors, chartData, ...other }) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  // const chartOptions = useChart({
  //   colors: chartColors,
  //   tooltip: {
  //     marker: { show: false },
  //     y: {
  //       formatter: (seriesName) => fNumber(seriesName),
  //       title: {
  //         formatter: () => '',
  //       },
  //     },
  //   },
  //   plotOptions: {
  //     bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
  //   },
  //   xaxis: {
  //     categories: chartLabels,
  //   },
  // });
  const chartOptions = useChart({
    // colors: chartColors,
    colors: ['#323439'],
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      // bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
      bar: { 
        horizontal: true, 
        barHeight: '28%', 
        borderRadius: 2,
        color: '#323439', // set the color of the bars
      },
    },
    xaxis: {
      categories: chartLabels,
      labels: {
        style: {
          fontSize: '12pt', // set the font size of x-axis labels
          fontWeight: 'bold', // set the font weight of x-axis labels
          color: '#323439', // set the color of x-axis labels
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12pt', // set the font size of y-axis labels
          fontWeight: 'bold', // set the font weight of y-axis labels
          color: '#323439', // set the color of y-axis labels
        },
      },
    },
    chart: {
      toolbar: {
        show: true, // hide the chart toolbar
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} style={{fontSize:"18pt"}}/>

      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={[{ data: chartSeries }]} options={chartOptions} height={150} 
         style={{ color: '#323439', 
         fontSize: '18px',
        //  backgroundColor:"#323439"
         }}
         />
      </Box>
    </Card>
  );
}
