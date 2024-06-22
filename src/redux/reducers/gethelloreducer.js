const statein = { value: [] };
export const gethello = (state = statein, action) => {
  switch (action.type) {
    case "hello": {
      return { value: action.data };
    }
    default: {
      return state;
    }
  }
};
