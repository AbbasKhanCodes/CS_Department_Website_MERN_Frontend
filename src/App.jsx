import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Admin from "./pages/Admin";
import CsAwkum from "./pages/CsAwkum";
import Login from "./pages/login";
import Event from "./pages/Event";
import NotFound from "./pages/NotFound";

import "./bootstrapStyle.css";

function App() {
  const [userId, setUserId] = useState("");

  const [loadingComplete, setLoadingComplete] = useState(false);
  const userData = { setUserId };

  // Retrieve the user Id from local/Storage
  useEffect(() => {
    const userIdTemp = localStorage.getItem("userId");

    setUserId(userIdTemp);
    setLoadingComplete(true);
  }, []);
  return (
    <>
      {loadingComplete ? (
        <BrowserRouter>
          <div>
            <div>
              <Routes>
                <Route
                  path="/csadminlogin"
                  element={<Login userData={userData} />}
                />

                {/* Admin routes */}
                <Route
                  path="/csadmin"
                  element={
                    userId == "admin" ? "" : <Navigate to="/csadminlogin" />
                  }
                >
                  <Route index element={<Admin />} />
                </Route>

                {/* CS Department Awkum Page */}
                <Route path="/csawkum" element={<CsAwkum />} />

                {/* Event Page */}

                <Route path="/csawkum/event/1" element={<Event />} />

                {/* Event Page */}
                <Route path="/csawkum/event/2" element={<Event />} />

                {/* Not Found  */}
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
