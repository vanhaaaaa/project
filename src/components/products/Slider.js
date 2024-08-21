import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°DD`;
}
const marks = [
  {
    value: 0,
    label: 'min',
  },
  {
    value: 25,
    label: '1 trieu',
  },
  {
    value: 50,
    label: '10 trieu',
  },
  {
    value: 75,
    label: '15 trieu',
  },
  {
    value: 100,
    label: 'max',
  },
];
const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([0, 100]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };



  

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
         step={null}

        marks={marks}
      />
      
    </Box>
  );
}