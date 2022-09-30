import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';

const Dashboard = () => (
  <>
    <Head>
      <title>CS UNDERGRADUATE RESEARCH</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}></Container>
    </Box>
  </>
);

Dashboard.getLayout = () => <DashboardLayout />

export default Dashboard;
