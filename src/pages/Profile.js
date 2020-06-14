import React from 'react';
import { Box, Grid, Paper, Avatar } from '@material-ui/core';
import { fetcher } from '../utils/fetcher';
import useSWR from 'swr';
import { ResponsiveCalendar } from '@nivo/calendar';
import profileData from '../utils/profile-data.json';

import AnswersTable from '../components/AnswersTable';
import { ResponsiveLine } from '@nivo/line';

function Profile({ phone }) {
  const { data: user } = useSWR(
    `http://localhost:8080/users/${phone}`,
    fetcher
  );

  const { data: answers } = useSWR(
    user ? `http://localhost:8080/answers?name=${user.name}` : null,
    fetcher
  );

  if (!user) return 'Loading...';

  let data = [
    {
      id: 'Individual',
      color: 'hsl(78, 70%, 50%)',
      data: [
        {
          x: '14/05',
          y: 8,
        },
        {
          x: '15/05',
          y: 7,
        },
        {
          x: '16/05',
          y: 8,
        },
        {
          x: '17/05',
          y: 5,
        },
        {
          x: '18/05',
          y: 5,
        },
        {
          x: '19/05',
          y: 4,
        },
      ],
    },
    {
      id: 'Média',
      color: 'hsl(78, 70%, 50%)',
      data: [
        {
          x: '14/05',
          y: 5,
        },
        {
          x: '15/05',
          y: 5,
        },
        {
          x: '16/05',
          y: 6,
        },
        {
          x: '17/05',
          y: 5,
        },
        {
          x: '18/05',
          y: 6,
        },
        {
          x: '19/05',
          y: 6,
        },
      ],
    },
  ];

  return (
    <Box>
      <Box display="flex" p={2} alignItems="center">
        <Avatar>{user.name[0].toUpperCase()}</Avatar>
        <Box component="h1" marginLeft={2}>{`Perfil ${user.name}`}</Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box component={Paper} padding={2}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <h2>Horas de Sono</h2>
            </Box>
            <Box height={500}>
              <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                  type: 'linear',
                  min: 'auto',
                  max: 'auto',
                  stacked: false,
                  reverse: false,
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  orient: 'bottom',
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Dias',
                  legendOffset: 36,
                  legendPosition: 'middle',
                }}
                axisLeft={{
                  orient: 'left',
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'Quantidade',
                  legendOffset: -40,
                  legendPosition: 'middle',
                }}
                colors={{ scheme: 'nivo' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                  {
                    anchor: 'top-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box component={Paper} padding={2}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <h2>Horas Trabalhadas</h2>
            </Box>
            <Box height={500} padding={2}>
              <ResponsiveCalendar
                data={profileData}
                from="2019-12-01"
                to="2020-12-30"
                emptyColor="#eeeeee"
                colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                  {
                    anchor: 'bottom-right',
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left',
                  },
                ]}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {answers && (
        <Box component={Paper} marginTop={2} p={2}>
          <AnswersTable answers={answers} />
        </Box>
      )}
    </Box>
  );
}

export default Profile;
