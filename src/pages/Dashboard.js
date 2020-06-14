import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveRadar } from '@nivo/radar';

import {
  Box,
  Grid,
  Paper,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@material-ui/core';
import useSWR from 'swr';

import { fetcher } from '../utils/fetcher';

function Dashboard() {
  const { data: users } = useSWR(
    `${process.env.REACT_APP_API_URL}/users`,
    fetcher
  );

  let data = [
    {
      id: 'Covid 19',
      color: 'hsl(78, 70%, 50%)',
      data: [
        {
          x: '14/05',
          y: 100,
        },
        {
          x: '15/05',
          y: 140,
        },
        {
          x: '16/05',
          y: 160,
        },
        {
          x: '17/05',
          y: 180,
        },
        {
          x: '18/05',
          y: 200,
        },
        {
          x: '19/05',
          y: 300,
        },
      ],
    },
    {
      id: 'Diabetes',
      color: 'hsl(78, 70%, 50%)',
      data: [
        {
          x: '14/05',
          y: 30,
        },
        {
          x: '15/05',
          y: 30,
        },
        {
          x: '16/05',
          y: 30,
        },
        {
          x: '17/05',
          y: 31,
        },
        {
          x: '18/05',
          y: 31,
        },
        {
          x: '19/05',
          y: 32,
        },
      ],
    },
    {
      id: 'Varizes',
      color: 'hsl(78, 70%, 50%)',
      data: [
        {
          x: '14/05',
          y: 134,
        },
        {
          x: '15/05',
          y: 134,
        },
        {
          x: '16/05',
          y: 132,
        },
        {
          x: '17/05',
          y: 132,
        },
        {
          x: '18/05',
          y: 145,
        },
        {
          x: '19/05',
          y: 148,
        },
      ],
    },
    {
      id: 'Hepatite B',
      color: 'hsl(78, 70%, 50%)',
      data: [
        {
          x: '14/05',
          y: 56,
        },
        {
          x: '15/05',
          y: 59,
        },
        {
          x: '16/05',
          y: 62,
        },
        {
          x: '17/05',
          y: 60,
        },
        {
          x: '18/05',
          y: 60,
        },
        {
          x: '19/05',
          y: 57,
        },
      ],
    },
  ];

  const pieData = [
    {
      id: 'covid',
      label: 'Covid 19',
      value: 300,
      color: 'hsl(230, 70%, 50%)',
    },
    {
      id: 'varizes',
      label: 'Varizes',
      value: 148,
      color: 'hsl(313, 70%, 50%)',
    },
    {
      id: 'hepatite',
      label: 'Hepatite B',
      value: 57,
      color: 'hsl(51, 70%, 50%)',
    },
    {
      id: 'diabetes',
      label: 'Diabetes',
      value: 32,
      color: 'hsl(53, 70%, 50%)',
    },
  ];

  const radarData = [
    {
      taste: 'Cansaço',
      value: 46,
    },
    {
      taste: 'Sono',
      value: 43,
    },
    {
      taste: 'Dores',
      value: 49,
    },
    {
      taste: 'Depressão',
      value: 116,
    },
  ];
  return (
    <Box height="500px">
      <h1>Dashboard</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box component={Paper} height={500} padding={2}>
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
        </Grid>
        <Grid item xs={4}>
          <Box component={Paper} height={500} padding={2}>
            <List>
              {users &&
                users.map((user) => [
                  <ListItem key={user.phone + 'item'} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar>{user.name[0].toUpperCase()}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={<React.Fragment>300 pontos</React.Fragment>}
                    />
                  </ListItem>,
                  <Divider
                    key={user.phone + 'divider'}
                    variant="inset"
                    component="li"
                  />,
                ])}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box component={Paper} height={500} padding={2}>
            <ResponsivePie
              data={pieData}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors={{ scheme: 'nivo' }}
              borderWidth={1}
              borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor={{ from: 'color' }}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              defs={[
                {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: 'rgba(255, 255, 255, 0.3)',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: 'ruby',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'c',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'go',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'python',
                  },
                  id: 'dots',
                },
                {
                  match: {
                    id: 'scala',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'lisp',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'elixir',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'javascript',
                  },
                  id: 'lines',
                },
              ]}
              legends={[
                {
                  anchor: 'bottom',
                  direction: 'row',
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  symbolSize: 18,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000',
                      },
                    },
                  ],
                },
              ]}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box component={Paper} height={500} padding={2}>
            <ResponsiveRadar
              data={radarData}
              keys={['value']}
              indexBy="taste"
              maxValue="auto"
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              curve="linearClosed"
              borderWidth={2}
              borderColor={{ from: 'color' }}
              gridLevels={5}
              gridShape="circular"
              gridLabelOffset={36}
              enableDots={true}
              dotSize={10}
              dotColor={{ theme: 'background' }}
              dotBorderWidth={2}
              dotBorderColor={{ from: 'color' }}
              enableDotLabel={true}
              dotLabel="value"
              dotLabelYOffset={-12}
              colors={{ scheme: 'nivo' }}
              fillOpacity={0.25}
              blendMode="multiply"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              isInteractive={true}
              legends={[
                {
                  anchor: 'top-left',
                  direction: 'column',
                  translateX: -50,
                  translateY: -40,
                  itemWidth: 80,
                  itemHeight: 20,
                  itemTextColor: '#999',
                  symbolSize: 12,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000',
                      },
                    },
                  ],
                },
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
