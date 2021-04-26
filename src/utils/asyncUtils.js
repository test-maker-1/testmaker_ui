export const createActionString = (type) => {
  return { success: `${type}Success`, error: `${type}Error` };
};

export const reducerUtils = {
  init: () => ({
    data: null,
    loading: false,
    error: false
  }),

  loading: (prevData = null) => ({
    data: prevData,
    loading: true,
    error: false
  }),

  success: (data = null) => ({
    data: data,
    loading: false,
    error: false
  }),

  error: (error) => ({
    data: error,
    loading: false,
    error: true
  })
};
