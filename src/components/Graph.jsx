import { BarChart } from '@mui/x-charts';

const dataset = [
    { value: 10, month: 'Jan' },
    { value: 15, month: 'Feb' },
    { value: 20, month: 'Mar' },
    { value: 25, month: 'Apr' },
    { value: 30, month: 'May' },
    { value: 35, month: 'Jun' },
    { value: 40, month: 'Jul' },
    { value: 35, month: 'Aug' },
    { value: 35, month: 'Sep' },
    { value: 40, month: 'Oct' },
    { value: 45, month: 'Nov' },
    { value: 50, month: 'Dec' },
];

export default function Graph() {
    return (
        <div style={{ width: '100%' }}>
<BarChart
  dataset={dataset}
  series={[
    {
      dataKey: 'value',
      color: '#03594E',
      valueFormatter: (v) => `${v}`,
    },
  ]}
  xAxis={[
    {
      dataKey: 'month',
      scaleType: 'band',
      tickSize: 0,
      disableLine: true,
      tickPlacement: 'middle',
      tickLabelStyle: {
        fill: '#171717',
        fontSize: '0.75rem',
        fontFamily: 'inherit',
        fontWeight: 600,
      },
      categoryGapRatio: 0.4,
    },
  ]}
  yAxis={[
    {
      width: 0,
      disableLine: true,
      tickSize: 0,
      tickLabelStyle: {
        display: 'none',
      },
    },
  ]}
  height={300}
  margin={{ top: 10, bottom: 20, left: 0, right: 0 }}
  slotProps={{
    bar: {
      width: 32,
      rx: 4,
    },
  }}
/>

        </div>
    );
}