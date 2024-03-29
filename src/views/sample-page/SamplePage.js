import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">

      <DashboardCard title="Balady AI">
        <Typography>Balady ai future page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
