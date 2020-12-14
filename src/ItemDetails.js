import React, { useState, useEffect } from "react";

export default function ItemDetails({ match }) {
  const [item, setItem] = useState({
    images: {},
  });

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItemFortnite = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const data = await fetchItemFortnite.json();
    setItem(data.data.item);
    console.log(data.data.item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt="" />
    </div>
  );
}
