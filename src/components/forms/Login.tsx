import React from 'react'
import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles'
import styles from '../../components/forms/index.module.scss'
import { Link } from 'react-router-dom'
type Props = {}

const LoginForm = (props: Props) => {
    const onSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
    }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
        <InputContainer>
            <InputLabel htmlFor='email' style={{color: '#fff'}}>Email: </InputLabel>
            <InputField id='email' type='email'/>
        </InputContainer>
        <InputContainer className={styles.loginFormPassword}>
            <InputLabel htmlFor='password' style={{color: '#fff'}}>Password: </InputLabel>
            <InputField id='password' type='password'/>
        </InputContainer>
        <Button className={styles.button}>Login</Button>
        <div className={styles.footerText}>
            <span>Don't have an account? </span>
            <Link to='/register'>
                <span>Sign Up</span>
            </Link>
        </div>
    </form>
  )
}

export default LoginForm