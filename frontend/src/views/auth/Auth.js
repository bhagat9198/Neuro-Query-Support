import BodyLayout from '../../components/BodyLayout'
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import {
  TEXT_AGE,
  TEXT_EDUCATION,
  TEXT_EMAIL,
  TEXT_NAME,
  TEXT_PASSWORD,
  TEXT_UPLOAD_IMAGE,
} from "../../constants/TextConstants";
// import InputField from "../components/Common/InputField/InputField";
import UISelect from "../../components/Common/Select/UISelect";
import UITabs from "../../components/Common/Tabs/UITabs";
import SigninSytle from "./Auth.module.css";
import SideBar from '../../components/Common/SideBar/SideBar';
import UIButton from '../../components/Common/Buttons/UIButton';
import UICard from '../../components/Common/Card/UICard';
import UIImageSelector from '../../components/Common/ImageSelector/UIImageSelector';
import InputField from '../../components/Common/InputField/InputField';
import {useDispatch, useSelector} from 'react-redux'
export default function Auth(props) {
  const tabValues = [
    {
      label: "Sign In",
      comp: <RenderLoginform />,
    },
    {
      label: "Sign Up",
      comp: <RenderSignUpform />,
    },
  ];
  return (
    <>
      <BodyLayout hideDrawer={true}>
        <div className={SigninSytle.homepageContainer}>
          <div className={SigninSytle.inputContainer}>
            <UICard>
              <UITabs tabs={tabValues} />
            </UICard>
          </div>
          <div className={SigninSytle.imageContainer}>
            <img
              className={SigninSytle.image}
              src="/images/homepage_image.jpg"
              alt='pic'
            />
          </div>
        </div>
      </BodyLayout>
    </>

  )
}


const RenderLoginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div className={SigninSytle.formContainer}>
      <div className={SigninSytle.textfieldContainer}>
        <InputField
          label={TEXT_EMAIL}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="Email"
        />
        <InputField
          label={TEXT_PASSWORD}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon="Password"
          type="Password"
        />
      </div>
      <div className={SigninSytle.buttonContainer}>
        <UIButton type="Primary">Login</UIButton>
      </div>
    </div>
  );
};

const RenderSignUpform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [education, setEducation] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  
  const education_data = [
    { label: "Junior School", value: "junior_school" },
    { label: "Senior School", value: "senior_school" },
    { label: "Under Graduate", value: "under_graduate" },
    { label: "Post Graduate", value: "post_graduate" },
  ];

  const submitHandler = e => {
    
  }


  return (
    <div className={SigninSytle.formContainer}>
      <div className={SigninSytle.textfieldContainer}>
        <UIImageSelector
          label={TEXT_UPLOAD_IMAGE}
          value={image}
          setValue={setImage}
          onChange={(e) => setImage(e.target.files)}
        />
        <InputField
          label={TEXT_NAME}
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon="Account"
        />
        <InputField
          label={TEXT_EMAIL}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="Email"
        />
        <InputField
          label={TEXT_PASSWORD}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon="Password"
          type="Password"
        />
        <InputField
          label={TEXT_AGE}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          icon="Calendar"
          type="number"
        />
        <UISelect
          label={TEXT_EDUCATION}
          data={education_data}
          value={education}
          setValue={setEducation}
        />

      </div>
      <div className={SigninSytle.buttonContainer}>
        <UIButton type="Secondary">Sign Up</UIButton>
      </div>
    </div>
  );
};