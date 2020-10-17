var initialState = {
  locale: 'en',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        ...state,
        locale: action.locale,
        locale_name: action.locale_name,
      };
    default:
      return state;
  }
}
