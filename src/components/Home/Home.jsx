import data from "../../data.jsx";

import "./Home.css";




export const Home = () => {
  return (
    <div className="container mt-4">
      <div className=" h-screen absolute w-screen top-0 left-0 -z-10 object-cover">
        {data.map((mandala, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card">
              <img src={mandala.img} alt={mandala.alt} />
              <h1 className="name">{mandala.name}</h1>
              <div className="card-body"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


