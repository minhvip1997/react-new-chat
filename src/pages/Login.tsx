import React from 'react'
import LoginForm from '../components/forms/Login';
import { Page } from '../utils/styles';

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <Page><LoginForm/></Page>
  )
}

export default LoginPage;