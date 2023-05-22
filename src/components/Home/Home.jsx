import data from "../../data.jsx"; //esto sería reemplazado por la función que trae los mandalas
/* import { getAllMandalas } from '../../redux/sliceMandalas/index.js';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'; */
import "./Home.css";

export const Home = () => {
  /* const { list: mandalas } = useSelector(state => state.mandalas);
  console.log(mandalas)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMandalas());
  }, [dispatch]) */

  return (
    <div className="container mt-4">
      <div className=" h-screen absolute w-screen top-0 left-0 -z-10 object-cover">
        {data.map(
          (
            mandala,
            index //aca tiene que ir el estado de mandalas
          ) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card">
                <img src={mandala.img} alt={mandala.alt} />
                <h1 className="name">{mandala.name}</h1>
                <div className="card-body"></div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
