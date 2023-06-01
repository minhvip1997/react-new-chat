import React from 'react'
import { Page } from '../utils/styles';
import RegisterForm from '../components/forms/Register';

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <Page><RegisterForm/></Page>
  )
}

export default RegisterPage;