export const initialState = { lights: [false, false, true] };

export const smartDevicesReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        lights: state.lights.map((l, i) => (i === action.payload ? !l : l)),
      };
    case "allOn":
      return { ...state, lights: state.lights.map(() => true) };
    case "allOff":
      return { ...state, lights: state.lights.map(() => false) };
    default:
      return state;
  }
};
