import { createSlice } from "@reduxjs/toolkit"; //create slice
//import axios from "axios";
import axios from "axios";

export const mandalasSlice = createSlice({
  //una parte del estado
  name: "mandalas", //nombre de Slice
  initialState: {
    list: [], //inicializa el estado
  },
  reducers: {
    //varios reducers puedo generar
    setMandalas: (state, action) => {
      //creo la action // se tiene que exportar
      state.list = action.payload; //actualiza la list con la nueva info o dato nuevo
    },
  },
});

export const { setMandalas } = mandalasSlice.actions;

export default mandalasSlice.reducer; //exporto por default los reducers de mi slice

export const getAllMandalas = () => (dispatch) => { //exportamos esta funcion para luego ejecutarla 
  //consulto a la api
  axios
    .get("https://reqres.in/api/users?per_page=12") //llamado a la Api
    .then((response) => {
      dispatch(setMandalas(response.data.data)); //le paso las respuesta con los datos //dispatch para ejecutar
    })
    .catch((error) => console.log(error));
};
