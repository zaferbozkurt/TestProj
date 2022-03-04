let dropdownAlertRef;

export const setDropdownAlert = (ref) => {
  dropdownAlertRef = ref;
};

const show = (type, message, { data, duration } = {}) => {
  dropdownAlertRef.show({ type, message, data, duration });
};

export default {
  show
};
