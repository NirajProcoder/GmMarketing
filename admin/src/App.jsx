import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { createContext, useState } from "react";

const MyContext = createContext();
function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">           
              <div className={`overflow-hidden sidebarwrapper ${isSidebarOpen===true ? "w-[18%]" : "w-[0px] opacity-0"} transition-all`}> 
                <Sidebar />
              </div>
              <div className={`contentRight py-4 px-5 w-[82%]  ${isSidebarOpen===false ? "w-[100%]" : "w-[82%]"} transition-all`}>
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);

  const values = {
    isSidebarOpen,
    setisSidebarOpen,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
