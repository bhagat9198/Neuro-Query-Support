import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { TEXT_AGE, TEXT_EDUCATION, TEXT_EMAIL, TEXT_NAME, TEXT_PASSWORD, TEXT_UPLOAD_IMAGE } from '../../../constants/TextConstants'
import UIButton from '../../Common/Buttons/UIButton'
import UICard from '../../Common/Card/UICard'
import UIImageSelector from '../../Common/ImageSelector/UIImageSelector'
import InputField from '../../Common/InputField/InputField'
import UISelect from '../../Common/Select/UISelect'
import UITabs from '../../Common/Tabs/UITabs'
import HomePageStyles from './HomePage.module.css'



function HomePage() {
  const tabValues = [{
    label: "Sign In",
    comp: <RenderLoginform />
  }, {
    label: "Sign Up",
    comp: <RenderSignUpform />
  }]
  return (
    <div className={HomePageStyles.homepageContainer}>
      <div className={HomePageStyles.inputContainer}>
      <UICard>
        <UITabs tabs={tabValues} />
      </UICard></div>
      <div className={HomePageStyles.imageContainer} >
        <img className={HomePageStyles.image} src='/images/homepage_image.jpg' />
      </div>
    </div>
  )
}

const RenderLoginform = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className={HomePageStyles.formContainer}>
      <div className={HomePageStyles.textfieldContainer}>
        <InputField label={TEXT_EMAIL} value={email} onChange={(e) => setEmail(e.target.value)} icon="Email" />
        <InputField label={TEXT_PASSWORD} value={password} onChange={(e) => setPassword(e.target.value)} icon="Password" type="Password" />
      </div>
      <div className={HomePageStyles.buttonContainer}>
        <UIButton type="Primary">Login</UIButton>
      </div>
    </div>

  )
}

const RenderSignUpform = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [education, setEducation] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [image, setImage] = useState("")
  const education_data = [
    {label: 'Junior School', value: "junior_school"},
    {label: 'Senior School', value: "senior_school"},
    {label: 'Under Graduate', value: "under_graduate"},
    {label: 'Post Graduate', value: "post_graduate"}
  ]
  console.log(image)
  return (
    <div className={HomePageStyles.formContainer}>
      <div className={HomePageStyles.textfieldContainer}>
        <InputField label={TEXT_NAME} value={name} onChange={(e) => setName(e.target.value)} icon="Account" />
        <InputField label={TEXT_EMAIL} value={email} onChange={(e) => setEmail(e.target.value)} icon="Email" />
        <InputField label={TEXT_PASSWORD} value={password} onChange={(e) => setPassword(e.target.value)} icon="Password" type="Password" />
        <InputField label={TEXT_AGE} value={age} onChange={(e) => setAge(e.target.value)} icon="Calendar" type="number" />
        <UISelect label={TEXT_EDUCATION} data={education_data} value={education} setValue={setEducation} />
        <UIImageSelector label={TEXT_UPLOAD_IMAGE} value={image} setValue={setImage} onChange={(e) => setImage(e.target.files)} />
      </div>
      <div className={HomePageStyles.buttonContainer}>
        <UIButton type="Secondary">Sign Up</UIButton>
      </div>
    </div>
  )
}

export default HomePage