import { useEffect, useState } from "react";
import axios from "axios";

function GetAllStarships() {
  const [data, setData] = useState(null);

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
    {data && data.results ? (
    <div className="ships">
      {data.results.map((ship, index) => (
        <div key={index}>{ship.name}</div>
      ))}
    </div>
    ) : (
      <p>I dislike react...</p>  
    )}
    </>
  );
}

export { GetAllStarships }