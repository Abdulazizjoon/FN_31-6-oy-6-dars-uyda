import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img from "/src/img/loader.svg";
function Details() {
  let [data, setData] = useState([]);
  let [loader, setLoader] = useState(true);
    let params = useParams().id
    
  let api = "https://jsonplaceholder.typicode.com/posts/"
  console.log(params);
  
  useEffect(function () {
    axios
      .get(api+params) 
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
        <img src={img} alt="loading img" />
      </div>
    );
  }

  return (
    <div className="container cardd-container">
      {data && (
        <div className="cardd">
          <h2 className="title">title: {data.title}</h2>
          <div className="id">id: { data.id}</div>
          <p className="body">body: {data.body}</p>
        </div>
      )}
    </div>
  );
}

export default Details;
