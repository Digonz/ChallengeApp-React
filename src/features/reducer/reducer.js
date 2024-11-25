const SET_DATA = 'SET_DATA';
const ADD_DATA = 'ADD_DATA';
const FILTER_DATA = 'FILTER_DATA';
const DELETE_DATA = 'DELETE_DATA';

const initialState = {
    data: [],
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {

      case SET_DATA:
        return {
          ...state,
          data: action.payload,
          filteredData: action.payload
        };

      case ADD_DATA:
        window.alert(`Se creó correctamente ${action.payload.nombre}`);
        return {
          ...state,
          data: [...state.data, action.payload],
          filteredData: [...state.filteredData, action.payload],
        };

      case FILTER_DATA:
        return {
          ...state,
          filteredData: state.data.filter(item =>
            item.nombre.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };

        case DELETE_DATA:
            window.alert(`Se eliminó correctamente ${action.payload.nombre}`);
            return {
              ...state,
              data: state.data.filter(item => item.id !== action.payload.id),
              filteredData: state.filteredData.filter(item => item.id !== action.payload.id)
            };
          default:
            return state;
        }
      };
  


  // ACCIONES
  export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
  });
  
  export const addData = (newData) => ({
    type: ADD_DATA,
    payload: newData,
  });
  
  export const filterData = (query) => ({
    type: FILTER_DATA,
    payload: query,
  });

  export const deleteData = (data) => ({
    type: DELETE_DATA,
    payload: data,
  });
  export default dataReducer;