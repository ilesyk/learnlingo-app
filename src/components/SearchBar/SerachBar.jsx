import { Formik } from 'formik';
import {
  FilterResetButton,
  Label,
  StyledField,
  StyledForm,
} from './SearchBar.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { IoChevronDownOutline } from 'react-icons/io5';

const languages = [
  'All',
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Mandarin Chinese',
  'Vietnamese',
];

const levels = [
  'All',
  'A1 Beginner',
  'A2 Elementary',
  'B1 Intermediate',
  'B2 Upper-Intermediate',
  'C1 Advanced',
  'C2 Proficient',
];

const prices = ['All', '20', '25', '30', '35', '40', '45'];

export const SearchBar = () => {
  const dispatch = useDispatch();
  const initialValues = {
    language: 'all',
    level: 'all',
    price: 'all',
  };

  const [filterValues, setFilterValues] = useState(initialValues);

  useEffect(() => {
    dispatch(setFilter(filterValues));
  }, [filterValues, dispatch]);

  const handleLanguageChange = e => {
    setFilterValues(prevValues => ({
      ...prevValues,
      language: e.target.value,
    }));
  };

  const handleLevelChange = e => {
    setFilterValues(prevValues => ({
      ...prevValues,
      level: e.target.value,
    }));
  };

  const handlePriceChange = e => {
    setFilterValues(prevValues => ({
      ...prevValues,
      price: e.target.value,
    }));
  };

  const handleReset = () => {
    setFilterValues({
      language: 'all',
      level: 'all',
      price: 'all',
    });
  };

  return (
    <Formik initialValues={filterValues}>
      {() => (
        <StyledForm>
          <Label>
            Languages
            <StyledField
              className="language"
              name="language"
              as="select"
              onChange={handleLanguageChange}
              value={filterValues.language}
            >
              {languages.map((language, i) => {
                return (
                  <option key={i} value={language}>
                    {language}
                  </option>
                );
              })}
            </StyledField>
            <IoChevronDownOutline
              style={{ position: 'absolute', top: '40px', right: '14px' }}
              size={20}
              color={'#121417'}
            />
          </Label>
          <Label>
            Level of knowledge
            <StyledField
              className="level"
              name="level"
              as="select"
              onChange={handleLevelChange}
              value={filterValues.level}
            >
              {levels.map((level, i) => {
                return (
                  <option key={i} value={level}>
                    {level}
                  </option>
                );
              })}
            </StyledField>
            <IoChevronDownOutline
              style={{ position: 'absolute', top: '40px', right: '14px' }}
              size={20}
              color={"#121417"}
            />
          </Label>
          <Label>
            Price
            <StyledField
              className="price"
              name="price"
              as="select"
              onChange={handlePriceChange}
              value={filterValues.price}
            >
              {prices.map((price, i) => {
                return (
                  <option key={i} value={price}>
                    {price}
                  </option>
                );
              })}
            </StyledField>
            <IoChevronDownOutline
              style={{ position: 'absolute', top: '40px', right: '14px' }}
              size={20}
              color={'#121417'}
            />
          </Label>
          <FilterResetButton type="button" onClick={handleReset}>
            Reset
          </FilterResetButton>
        </StyledForm>
      )}
    </Formik>
  );
};
