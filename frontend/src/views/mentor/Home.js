import React from 'react'
import BodyLayout from '../../components/BodyLayout'

export default function Home(props) {
  const { userType } = props;
  console.log('Home :: userType ::', userType);
  return (
    <BodyLayout userType={userType} >
      hello
    </BodyLayout>
  )
}
