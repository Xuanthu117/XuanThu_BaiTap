export default {
  addList(state, listData) {
    state.listData = listData;
  },
  deleteElement(state) {
    state.listData = state.listData.slice(1, state.listData.length);
    console.log(state.listData.length);
  },
  nextStep(state) {
    state.currentStep = state.currentStep + 1;
  },
  previousStep(state) {
    state.currentStep = state.currentStep - 1;
  },
  resetForm(state) {
    (state.currentStep = 1),
      (state.formData = {
        name: "",
        email: "",
        companyName: "",
        employees: 0,
        source: "",
        isAccepted: false,
      });
  },
  ADD_PROVINCE(state, data) {
    state.PROVINCES = data;
  },
  REMOVE_PROVINCE(state, id) {
    state.PROVINCES.map((province) => {
      if (province.code == id) {
        province.isChecked = !province.isChecked;
      }
    });
  },
};
