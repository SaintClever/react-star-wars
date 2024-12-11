import { useEffect, useState } from "react";
import axios from "axios";

function GetAllStarships() {
  const [data, setData] = useState("");

  const getData = async () => {
    let response = await axios.get("https://swapi.dev/api/starships/");
    console.log(response.data);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      data
    </>
  )
}

export { GetAllStarships }