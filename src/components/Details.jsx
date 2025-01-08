import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 
function details() {
  let [data, setData] = useState([]);
  let [loader, setLoader] = useState(true);
    let params = useParams();
    
  let api= "https://jsonplaceholder.typicode.com/posts"
  useEffect(function () {
    axios
      .get(`${api}${params}`) 
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

  return (
    <div className="container">
      {data && (
        <div className="cardd">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default details;
