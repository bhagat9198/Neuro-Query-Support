import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function UISelect({ label, data, value, setValue }) {

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ mb: 2, mt: 2, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.map((val) => (
            <MenuItem value={val.value}>{val.label}</MenuItem>
          ))}
      </Select>
    </FormControl>
      // <FormControl fullWidth>
      //   <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      //   <Select
      //     labelId="demo-simple-select-standard-label"
      //     id="demo-simple-select-standard"
      //     value={value}
      //     label="Age"
      //     onChange={handleChange}
      //   >
      //     {data.map((val) => (
      //       <MenuItem value={val.value}>{val.label}</MenuItem>
      //     ))}
      //   </Select>
      // </FormControl>
  );
}
