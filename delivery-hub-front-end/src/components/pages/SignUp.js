import React from 'react';
import '../../App.css';
import Footer from './../Footer';
import SignupForm from './../SignupForm';


export default function SignUp() {

    return (
        <>
            <h1 className='sign-up'>sign up page</h1>
            <SignupForm/>
            <Footer/>
        </>
    );
}
