import Modal from 'react-modal';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  ModalCloseButton,
  ModalHead,
  ModalInput,
  ModalSubmitButton,
  ModalTeacherAvatar,
  ModalTeacherLegend,
  ModalText,
  RadioBox,
  RadioWrap,
  RadioField,
  ModalTeacherName,
} from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';

const validationSchema = Yup.object({
  reason: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  tel: Yup.string().required('Required'),
});
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(18, 20, 23, 0.50)',
    zIndex: '2',
    overflow: 'none',
  },
  content: {
    maxWidth: '566px',
    maxHeight: '90vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '30px',
    transform: 'translate(-50%, -50%)',
    padding: '64px',
    overflowY: 'auto',
  },
};
Modal.setAppElement('#root');

export const TeacherModal = ({ isOpen, handleClose, teacher }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={() => {
        handleClose();
      }}
    >
      <ModalCloseButton onClick={handleClose}>
        <IoCloseOutline size={32} />
      </ModalCloseButton>
      <ModalHead>Book trial lesson</ModalHead>
      <ModalText style={{marginBottom: "20px"}}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </ModalText>
      <div style={{ display: 'flex', gap: '14px', marginBottom: '40px' }}>
        <ModalTeacherAvatar
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${teacher.avatar_url})`,
          }}
        ></ModalTeacherAvatar>
        <div>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '1.33',
              color: '#8A8A89',
              marginBottom: "4px"
            }}
          >
            Your teacher
          </p>
          <ModalTeacherName>
            {teacher.name} {teacher.surname}
          </ModalTeacherName>
        </div>
      </div>
      <Formik
        initialValues={{
          reason: '',
          name: '',
          email: '',
          phone: '',
        }}
        validationSchema={validationSchema}
        // onSubmit={handleSubmit}
      >
        <>
          <div style={{ marginBottom: "40px"}} role="group" aria-labelledby="reason-group-label">
            <ModalTeacherLegend id="reason-group-label">
              What is your main reason for learning English?
            </ModalTeacherLegend>
            <RadioWrap>
              <RadioBox>
                <RadioField
                  type="radio"
                  id="career"
                  name="reason"
                  value="career"
                />
                <label htmlFor="career">Career and business</label>
              </RadioBox>
              <RadioBox>
                <RadioField
                  type="radio"
                  id="lesson"
                  name="reason"
                  value="lesson"
                />
                <label htmlFor="lesson">Lesson for kids</label>
              </RadioBox>
              <RadioBox>
                <RadioField
                  type="radio"
                  id="abroad"
                  name="reason"
                  value="abroad"
                />
                <label htmlFor="abroad">Living abroad</label>
              </RadioBox>
              <RadioBox>
                <RadioField
                  type="radio"
                  id="exams"
                  name="reason"
                  value="exams"
                />
                <label htmlFor="exams">Exams and coursework</label>
              </RadioBox>
              <RadioBox>
                <RadioField
                  type="radio"
                  id="culture"
                  name="reason"
                  value="culture"
                />
                <label htmlFor="culture">Culture, travel or hobby</label>
              </RadioBox>
            </RadioWrap>
            <ErrorMessage name="reason" component="div" />
          </div>
          <Form>
            <ModalInput type="name" name="name" placeholder="Full Name" />
            <ModalInput type="email" name="email" placeholder="Email" />
            <ModalInput
              style={{ marginBottom: '40px' }}
              type="phone"
              name="phone"
              placeholder="Phone Number"
            />
            <ModalSubmitButton type="submit">Book</ModalSubmitButton>
          </Form>
        </>
      </Formik>
    </Modal>
  );
};
