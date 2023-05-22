import { configureStore } from '@reduxjs/toolkit';
// importo los reducers
import sliceMandalas from './sliceMandalas';



export default configureStore({
  reducer: {
   sliceMandalas //ya esta mi slice en el store y pasa a toda la aplicación a través del provider
  }
});