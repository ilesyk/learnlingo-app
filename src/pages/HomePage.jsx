import {
  GetStartedButton,
  HomePageDescription,
  HomePageDetailsNumber,
  HomePageDetailsText,
  HomePageDetailsWrap,
  HomePageHead,
  HomePageImage,
  HomePageText,
  HomePageWrap,
} from '../components/Home/Home.styled';
import HomeImg from '../images/home_img.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: "0 20px" }}>
      <HomePageWrap>
        <HomePageDescription>
          <HomePageHead>
            Unlock your potential with the best{' '}
            <i
              style={{
                borderRadius: '8px',
                background: ' rgb(251, 233, 186)',
                fontWeight: '400',
              }}
            >
              language
            </i>{' '}
            tutors
          </HomePageHead>
          <HomePageText>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </HomePageText>
          <Link to="teachers">
            <GetStartedButton>Get started</GetStartedButton>
          </Link>
        </HomePageDescription>
        <HomePageImage>
          <img src={HomeImg} alt="student and laptop" />
        </HomePageImage>
      </HomePageWrap>
      <HomePageDetailsWrap>
        <div style={{ display: 'flex', gap: '16px' }}>
          <HomePageDetailsNumber>32,000 +</HomePageDetailsNumber>
          <HomePageDetailsText>Experienced tutors</HomePageDetailsText>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <HomePageDetailsNumber>300,000 +</HomePageDetailsNumber>
          <HomePageDetailsText>5-star tutor reviews</HomePageDetailsText>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <HomePageDetailsNumber>120 +</HomePageDetailsNumber>
          <HomePageDetailsText>Subjects taught</HomePageDetailsText>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <HomePageDetailsNumber>200 +</HomePageDetailsNumber>
          <HomePageDetailsText>Tutor nationalities</HomePageDetailsText>
        </div>
      </HomePageDetailsWrap>
    </div>
  );
};

export default Home;
