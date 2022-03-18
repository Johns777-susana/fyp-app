import {
  ADMIN_LOGIN,
  DELETE_EMERGENCY,
  GET_ADMIN_DATA,
  GET_EMERGENCIES,
  LOGOUT,
  READ_EMERGENCY,
  UPLOAD_ADMIN_PROFILE_PICTURE,
  UPLOAD_CATEGORY_IMAGE,
} from '../actions/actionTypes';

const AdminReducers = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ADMIN_DATA:
      return {
        ...state,
        adminDetails: payload,
        isLoading: false,
      };

    case UPLOAD_ADMIN_PROFILE_PICTURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADMIN_LOGIN:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuth: true,
        isLoading: false,
      };

    case UPLOAD_CATEGORY_IMAGE:
      return {
        ...state,
        uploadCategoryImgId: payload,
        isLoading: false,
      };
    case GET_EMERGENCIES:
      return {
        ...state,
        emergencyData: payload,
        isLoading: false,
      };
    case DELETE_EMERGENCY:
      return {
        ...state,
        emergencyData: payload,
        isLoading: false,
      };
    case READ_EMERGENCY:
      return {
        ...state,
        adminDetails: payload,
        isLoading: false,
      };

    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('roomQty');
      localStorage.removeItem('doctorQty');
      localStorage.removeItem('categoryQty');
      localStorage.removeItem('userQty');
      return {
        ...state,
        payload: null,
        isAuth: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default AdminReducers;
