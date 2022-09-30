function saveEmail(email) {
  const action = { type: 'SAVE_EMAIL',
    payload: { email } };
  dispatch(action);
}

export default saveEmail;
