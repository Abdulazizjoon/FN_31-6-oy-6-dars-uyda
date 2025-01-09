import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function blogs() {
  let [data, setData] = useState([]);
  let [loader, setLoader] = useState(true);

  let navigate = useNavigate();
  useEffect(function () {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        if (response.status == 200) {
          return setData(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  if (loader) {
    return (
      <div className="loader">
        <img src="/src/img/loader.svg" alt="loading img" />
      </div>
    );
  }
  function click(e) {
    console.log(e.currentTarget.id);
    navigate(`/Details/${e.currentTarget.id}`);
  }
  return (
    <div className="container card-container">
      <div className="cards">
        {data.length > 0 &&
          data.map((value, index) => {
            return (
              <div className="card" id={value.id} onClick={click} key={index}>
                <h2 className="title">title: {value.title}</h2>
                <h3 className="id">id: {value.id}</h3>
                <h3 className="body">body: {value.body}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default blogs;
