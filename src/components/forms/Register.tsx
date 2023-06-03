import React from 'react'
import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles';
import styles from '../../components/forms/index.module.scss'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type Props = {}

const RegisterForm = (props: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    console.log(errors);
    
    const onSubmit=(data: any)=>{
        console.log(data);
        
        // event.preventDefault()
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
            <InputLabel htmlFor='email' style={{color: '#fff'}} >Email: </InputLabel>
            <InputField id='email' type='email' {...register('email',{required: 'Email is required'})}/>
        </InputContainer>
        <section className={styles.nameFieldRow}>
            <InputContainer>
                <InputLabel htmlFor='firstname' style={{color: '#fff'}} >First Name: </InputLabel>
                <InputField id='firstname' type='text' {...register('firstname',{required: 'First Name is required'})}/>
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor='lastname' style={{color: '#fff'}}>Last Name: </InputLabel>
                <InputField id='lastname' type='text' {...register('lastname',{required: 'Last Name is required'})}/>
            </InputContainer>
        </section>
        <InputContainer>
            <InputLabel htmlFor='password' style={{color: '#fff'}}>Password: </InputLabel>
            <InputField id='password' type='password' {...register('password',{required: 'Password is required'})}/>
        </InputContainer>
        <Button className={styles.button}>Create My Account</Button>
        <div className={styles.footerText}>
            <span>Already have an account? </span>
            <Link to="/login">
                <span>Login</span>
            </Link>
        </div>
    </form>
  )
}

export default RegisterForm;