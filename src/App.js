import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";

function App() {
  console.log(process.env.REACT_APP_storageBucket)
  return (
    <div className="max-w-[1600px] mx-auto">
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
    </div>
  );
}

export default App;
