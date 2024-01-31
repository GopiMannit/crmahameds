// store/index.js

export const state = () => ({
    employee: null,
  });
  
  export const mutations = {
    setEmployee(state, employee) {
      state.employee = employee;
    },
  };
  