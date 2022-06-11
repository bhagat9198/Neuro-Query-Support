import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import InputFieldStyle from './InputField.module.css'

export default function InputField({ label, onChange, value, icon, type }) {
  return (
    <div className={InputFieldStyle.inputFieldContainer}>
      <FormControl variant="standard" className={InputFieldStyle.inputField}>
        <InputLabel htmlFor="input-with-icon-adornment">
          {label}
        </InputLabel>
        <Input
          type={type}
          value={value}
          onChange={onChange}
          id="input-with-icon-adornment"
          startAdornment={
            icon && (
              <InputAdornment position="start">
                {icon == 'Account' && <AccountCircle color='primary' />}
                {icon == 'Password' && <LockIcon color='primary' />}
              </InputAdornment>
            )
          }
        />
      </FormControl>
    </div>
  );
}
