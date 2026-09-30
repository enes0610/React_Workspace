import React, { useEffect } from "react";

function ComponentDidMount() {
  useEffect(() => {
    console.log("Bileşen yüklendi!");
  }, []); // Bu işlemi sadece "ilk başta bir kere yap" demektir. 

  return <h1>Merhaba!</h1>;
}

export default ComponentDidMount;