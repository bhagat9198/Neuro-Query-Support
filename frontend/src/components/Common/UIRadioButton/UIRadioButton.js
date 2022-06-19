import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function UIRadioButton({ label, options, onChange }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: 12, mt: 2}}>{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={options[0].value}
        name="radio-buttons-group"
        onChange={onChange}
        sx={{display: 'flex', flexDirection: 'row'}}
      >
        {options.map((option) => (
          <FormControlLabel value={option.value} control={<Radio />} label={option.name} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
