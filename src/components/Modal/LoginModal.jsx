import {
  ModalHead,
  ModalInput,
  ModalSubmitButton,
  ModalText,
  PasswordShowButton,
} from './Modal.styled';
import { Formik, Form } from 'formik';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';
import { useState } from 'react';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../redux/authSlice';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password must be at least 8 characters'),
});

export const AuthForm = ({ handleClose, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleLogInSubmit = ({ email, password }, { resetForm }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(setAuthenticated(email));
        toast.success(`You are succesfully logged in!`);
        resetForm();
        handleClose();
      })
      .catch(e => toast.error(`Something was wrong`));
  };
  const handleRegisterSubmit = ({ name, email, password } ,  {resetForm}) => {
     createUserWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
           updateProfile(user, { displayName: name }); toast.success('You are registered!');
           resetForm();
         handleClose()
         })
       .catch(e => { console.log(e); toast.error(`Something went wrong, ${e}`);});
   };

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

   
  return (
    <>
      <ModalHead>{type === 'login' ? 'Log In' : 'Registration'}</ModalHead>
      <ModalText>
        {type === 'login'
          ? 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.'
          : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information'}
      </ModalText>
      <Formik
        initialValues={{
          name: '',
          email: "",
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={
          type === 'register' ? handleRegisterSubmit : handleLogInSubmit
        }
      >
        <Form>
          {type === 'register' && (
            <ModalInput type="name" name="name" placeholder="Name" />
          )}
          <ModalInput type="email" name="email" placeholder="Email" />
          <div style={{ position: 'relative' }}>
            <ModalInput
              style={{ marginBottom: '40px' }}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
            />
            <PasswordShowButton
              type="button"
              onClick={() => handleTogglePassword()}
            >
              {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
            </PasswordShowButton>
          </div>
          <ModalSubmitButton type="submit">
            {type === 'login' ? 'Log In' : 'Sign Up'}
          </ModalSubmitButton>
        </Form>
      </Formik>
    </>
  );
};
