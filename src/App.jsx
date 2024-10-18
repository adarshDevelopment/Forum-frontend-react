
// import Home1 from './Home1';

import { RouterProvider } from "react-router-dom"
import router from "./Router"





function App() {

  return (
    <>
      {/* main screen */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
