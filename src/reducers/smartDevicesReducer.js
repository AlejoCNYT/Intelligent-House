// src/reducers/smartDevicesReducer.js
export function smartDevicesReducer(state, action) {
  switch (action.type) {
    case 'toggle': {
      const i = action.payload;
      return {
        ...state,
        lights: state.lights.map((on, idx) => (idx === i ? !on : on)),
      };
    }
    case 'allOn': {
      return {
        ...state,
        lights: state.lights.map(() => true),
      };
    }
    case 'allOff': {
      return {
        ...state,
        lights: state.lights.map(() => false),
      };
    }
    default:
      return state;
  }
}
