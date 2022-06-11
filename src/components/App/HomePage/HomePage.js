import React, { useState } from 'react'
import { TEXT_EMAIL } from '../../../constants/TextConstants'
import InputWithIcon from '../../Common/InputField/InputField'

function HomePage() {
  const [email, setEmail] = useState("")
  return (
    <InputWithIcon label={TEXT_EMAIL} value={email} onChange={(e) => setEmail(e.target.value)} />
  )
}

export default HomePage