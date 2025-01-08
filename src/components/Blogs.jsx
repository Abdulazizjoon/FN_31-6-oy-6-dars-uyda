import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function blogs() {
  let [data, setData] = useState([])
  let navigate=useNavigate()
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
      });
  }, [])
  function click(e) {
    console.log(e.currentTarget.id);
    navigate(`/Details/${e.currentTarget.id}`);
  }
  return (
    <div className="container">
      <div className="cards">
        {data.length > 0 &&
          data.map((value, index) => {
            return (
              <div className="card" id={value.id} onClick={click} key={index}>
                <h2>title: {value.title}</h2>
                <h3>id: {value.id}</h3>
                <h3>body: {value.body}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default blogs;


