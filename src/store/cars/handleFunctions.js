export const handlePending = (state) => {
  state.accountPending = true;
};

export const handleRejected = (state, { payload }) => {
  state.accountPending = false;
  state.error = payload;
};

export const handleFulfilled = (state) => {
  state.accountPending = false;
  state.error = "";
};
