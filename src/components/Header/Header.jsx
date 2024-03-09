import { Link } from 'react-router-dom';
import {
  FlexWrap,
  HeaderLink,
  HeaderLinkWrap,
  HeaderWrapper,
  LogInButton,
  LogoText,
  RegisterButton,
} from './Header.styled';
import Logo from '../../images/logo.svg';
import LogIn from '../../images/log-in-01.svg';
import { useState } from 'react';
import { LoginModal } from 'components/Modal/AuthModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectUserEmail } from '../../redux/selectors';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);
  const userEmail = useSelector(selectUserEmail);
  const handleOpen = type => {
    setModalType(type);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleClose = () => {
      setIsOpen(false);
      setModalType('');
    document.body.style.overflow = 'auto';
    
  };
  return (
    <>
      <header>
        <HeaderWrapper>
          <Link to="/">
            <FlexWrap>
              <img src={Logo} width="28" alt="Logo" />
              <LogoText>LearnLingo</LogoText>
            </FlexWrap>
          </Link>
          <HeaderLinkWrap>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/teachers">Teachers</HeaderLink>
            {authUser && <HeaderLink to="/favorites">Favorite</HeaderLink>}
          </HeaderLinkWrap>
          <FlexWrap>
            <LogInButton onClick={() => handleOpen('login')}>
              <img src={LogIn} width="28" alt="LogIn" />
              Log in
            </LogInButton>
            <RegisterButton onClick={() => handleOpen('register')}>
              Registration
            </RegisterButton>
          </FlexWrap>
        </HeaderWrapper>
      </header>
      {isOpen && (
        <LoginModal
          isOpen={isOpen}
          handleClose={handleClose}
          type={modalType}
        />
      )}
    </>
  );
};
