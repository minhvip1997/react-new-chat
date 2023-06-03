import React from 'react'
import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles'
import styles from '../../components/forms/index.module.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
type Props = {}

const LoginForm = (props: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit=(data: any)=>{
    }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
            <InputLabel htmlFor='email' style={{color: '#fff'}}>Email: </InputLabel>
            <InputField id='email' type='email' {...register('email',{required: 'Email is required'})}/>
        </InputContainer>
        <InputContainer className={styles.loginFormPassword}>
            <InputLabel htmlFor='password' style={{color: '#fff'}}>Password: </InputLabel>
            <InputField id='password' type='password' {...register('password',{required: 'Password is required'})}/>
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