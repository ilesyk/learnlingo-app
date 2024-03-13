import { createSelector } from 'reselect';
export const selectTeachers = state => state.teachers.teachers;
export const selectError = state => state.teachers.error;
export const selectIsLoading = state => state.teachers.loading;
export const selectFavorites = state => state.favorites.favorites;
export const selectFilter = state => state.filter.filters;
export const selectUser = state => state.auth.isAuthenticated;
export const selectUserEmail = state => state.auth.userEmail;
export const selectUserName = state => state.auth.userName;

export const selectFilteredTeachers = createSelector(
  [selectFilter, selectTeachers],
  (filters, teachers) => {
    const { language, level, price } = filters;
    const areAllFiltersReset =
      language === 'all' && level === 'all' && price === 'all';
    if (areAllFiltersReset) {
      return teachers;
    }
    return teachers.filter(teacher => {
      const languageMatches =
        language.includes('all') ||
        teacher.languages.some(lang => language.includes(lang));
        const levelMatches =
            level === 'all' || teacher.levels.some(lev => lev.includes(level));
      const priceMatches =
        price === 'all' || teacher.price_per_hour === Number(price);

      return languageMatches && levelMatches && priceMatches;
    });
  }
);
