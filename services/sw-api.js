import { useEffect, useState } from "react";
import axios from "axios";

export function getAllStarships() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    let response = await axios.get("https://swapi.dev/api/starships");
    console.log(response.data);
    setData(response.data);
  }


}