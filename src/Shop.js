import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {

  const linkStyle ={
    // color: 'black',
    // textDecoration: 'none'  ,
    // display: 'inline-flex'
};

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );

    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };
  return (
    <div>
      <h1>Shop Page Bro </h1>
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link style={linkStyle} to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}
