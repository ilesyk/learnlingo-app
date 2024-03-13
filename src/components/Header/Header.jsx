import { Link } from 'react-router-dom';
import {
  FlexWrap,
  HeaderLink,
  HeaderLinkWrap,
  HeaderMenuWrap,
  HeaderWrapper,
  LogInButton,
  LogoText,
  PopUpButton,
  RegisterButton,
  RegisterButtonWrap,
} from './Header.styled';
import Logo from '../../images/logo.svg';
import LogIn from '../../images/log-in-01.svg';
import { useState } from 'react';
import { LoginModal } from 'components/Modal/AuthModal';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectUserName } from '../../redux/selectors';
import { clearAuthenticated } from '../../redux/authSlice';
import toast from 'react-hot-toast';
import { IoIosMenu } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const authUser = useSelector(selectUser);
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();

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
    const handleLogOut = () => {
    dispatch(clearAuthenticated());
    toast.success(`You are succesfully logged out!`);
};
  const handleOpenMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  };
  return (
    <>
      <header style={{ padding: '20px' }}>
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
          <RegisterButtonWrap>
            {authUser ? (
              <LogInButton onClick={() => handleLogOut()}>
                <img src={LogIn} width="28" alt="LogIn" />
                Log out
              </LogInButton>
            ) : (
              <LogInButton onClick={() => handleOpen('login')}>
                <img src={LogIn} width="28" alt="LogIn" />
                Log in
              </LogInButton>
            )}
            {authUser ? (
              <RegisterButton>{userName}</RegisterButton>
            ) : (
              <RegisterButton onClick={() => handleOpen('register')}>
                Registration
              </RegisterButton>
            )}
          </RegisterButtonWrap>
          <PopUpButton onClick={() => handleOpenMenu()}>
            {isMenuOpen ? (<IoCloseOutline size={32} />):(<IoIosMenu size={32} />)}
          </PopUpButton>
        </HeaderWrapper>
      </header>
      {isMenuOpen && (
        <HeaderMenuWrap isopen={isMenuOpen.toString()}>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/teachers">Teachers</HeaderLink>
          {authUser && <HeaderLink to="/favorites">Favorite</HeaderLink>}
          {authUser ? (
            <LogInButton onClick={() => handleLogOut()}>
              <img src={LogIn} width="28" alt="LogIn" />
              Log out
            </LogInButton>
          ) : (
            <LogInButton onClick={() => handleOpen('login')}>
              <img src={LogIn} width="28" alt="LogIn" />
              Log in
            </LogInButton>
          )}
          {authUser ? (
            <RegisterButton>{userName}</RegisterButton>
          ) : (
            <RegisterButton onClick={() => handleOpen('register')}>
              Registration
            </RegisterButton>
          )}
        </HeaderMenuWrap>
      )}
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
