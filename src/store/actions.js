import axios from 'axios';

export const getDataTable = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5001/api/getDataTable');
      dispatch({ type: 'SET_DATA', payload: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch({ type: 'SET_DATA', payload: [] });
    }
  };
};