import React from 'react'
import { Button, InputContainer, InputField, InputLabel } from '../../utils/styles';
import styles from '../../components/forms/index.module.scss'
import { Link } from 'react-router-dom';

type Props = {}

const RegisterForm = (props: Props) => {
    const onSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
    }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
        <InputContainer>
            <InputLabel htmlFor='email' style={{color: '#fff'}}>Email: </InputLabel>
            <InputField id='email' type='email'/>
        </InputContainer>
        <section className={styles.nameFieldRow}>
            <InputContainer>
                <InputLabel htmlFor='firstname' style={{color: '#fff'}}>First Name: </InputLabel>
                <InputField id='firstname' type='text'/>
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor='lastname' style={{color: '#fff'}}>Last Name: </InputLabel>
                <InputField id='lastname' type='text'/>
            </InputContainer>
        </section>
        <InputContainer>
            <InputLabel htmlFor='password' style={{color: '#fff'}}>Password: </InputLabel>
            <InputField id='password' type='password'/>
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