import {useEffect, useState} from "react";
import styled from 'styled-components';
import {useParams} from "react-router-dom";

import React from 'react'

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const data = await fetch(
            `https://spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
            );
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData)
    }

    useEffect(()=>{
            fetchDetails();
    },[params.name]);

  return (
    <div>
        <h2>
            {details.title}
        </h2>
        <img src={details.image} alt="" />
        <div>
            <h3 dangerouslySetInnerHTML={{__html: details.summary}}>
                {details.summary}
            </h3>
        </div>
    </div>
  )
}

export default Recipe