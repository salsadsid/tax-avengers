import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#005d1f",
              color:"#fff"
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </>
  );
}

export default App;
