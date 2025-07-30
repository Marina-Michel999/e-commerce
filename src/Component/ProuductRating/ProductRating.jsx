import React from 'react'

export default function ProductRating({ratingAmount}) {
    const ratingNum = Math.trunc(ratingAmount);
    let id = 0;
  return (
    <>
    {ratingNum? Array.from({length : Math.trunc(ratingNum)}).map(()=>(
        <i className="fa-solid fa-star" key={id++}></i>
    )) : ""}
    {Math.round(ratingAmount) > ratingNum ? <i className="fa-regular fa-star-half-stroke"></i> : "" }
   
    {5 - Math.round(ratingAmount)? Array.from({length : 5 - Math.round(ratingAmount)}).map(()=>(
        <i className="fa-regular fa-star" key={id++}></i>
    )) 
    :""
    }

    </>
  )
}
