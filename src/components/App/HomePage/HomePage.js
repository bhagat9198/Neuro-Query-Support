import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { TEXT_EMAIL, TEXT_PASSWORD } from '../../../constants/TextConstants'
import SearchAppBar from '../../Common/AppBar/AppBar'
import UIButton from '../../Common/Buttons/UIButton'
import UICard from '../../Common/Card/UICard'
import InputField from '../../Common/InputField/InputField'
import HomePageStyles from './HomePage.module.css'

function HomePage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const renderForm = () => {
    return (
      <>
      <SearchAppBar/>
      
      
      <div className={HomePageStyles.homepageContainer}>
     
        <UICard>
          <div className={HomePageStyles.formContainer}>
            <div className={HomePageStyles.textfieldContainer}>
              <InputField label={TEXT_EMAIL} value={email} onChange={(e) => setEmail(e.target.value)} icon="Account" />
              <InputField label={TEXT_PASSWORD} value={password} onChange={(e) => setPassword(e.target.value)} icon="Password" type="Password" />
            </div>
            <div className={HomePageStyles.buttonContainer}>
              <UIButton type="Primary">Login</UIButton>
              <UIButton  type="Secondary">Sign Up</UIButton>
            </div>
          </div>
        </UICard></div>
        </>
    )
  }
  return (
    <div>
      {renderForm()}
    </div>
  )
}

export default HomePage