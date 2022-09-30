function saveEmail(email) {
  const { props } = this;
  const action = { type: 'SAVE_EMAIL',
    payload: { email } };
  props.dispatch(action);
}

export default saveEmail;
