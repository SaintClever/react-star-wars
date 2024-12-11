import { Header } from "./Header.jsx";
import { GetAllStarships } from "../services/sw-api.jsx";

function App() {

  return (
    <>
      <Header />
      <GetAllStarships />
    </>
  )
}

export { App };