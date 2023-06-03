import React from 'react'
import LoginForm from '../components/forms/Login';
import { Page } from '../utils/styles';

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <Page display='flex' justifyContent='center' alignItems='center'>
      <LoginForm/>
    </Page>
  )
}

export default LoginPage;