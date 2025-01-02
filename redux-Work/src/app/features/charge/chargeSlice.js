import { createSlice } from "@reduxjs/toolkit";

export const chargeSlice = createSlice({
  name: "charge",
  initialState: { value: 0, history: [] },
  reducers: {
    positive: (state) => {
      if (state.value < 10) {
        state.value += 1;
        state.history.unshift({
            type: 'increase',
            value: state.value,
            timestamp: new Date().toISOString()
        })
        if (state.history.length > 5) {
            state.history.pop()
        }
      } else {
        console.log("Limit reached ---> 10");
      }
    },
    negative: (state) => {
      if (state.value > 0) {
        state.value -= 1;
        state.history.unshift({
            type: 'decrease',
            value: state.value,
            timestamp: new Date().toISOString()
        });

        if (state.history.length > 5) {
            state.history.pop();
        }
      } else {
        console.log("Limit reached ---> 0");
      }
    },
    reset: (state) => {
        const check = prompt(`Are you sure you want to reset ${state.value} to 0`)
        if (check === "yes"){
            state.value = 0
            state.history.unshift({
                type: 'reset',
                value: [],
                timestamp: new Date().toISOString()
            })
        }
    }
  },
});

export const { positive, negative, reset } = chargeSlice.actions;
export default chargeSlice.reducer;
