import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Add news function
  const handleSubmit = async (e) => {
    let resp = null;

    if (email && password) {
      try {
        resp = await axios.post(
          "https://cs-department-website-mern-backend.vercel.app/login",
          {
            email,
            password,
          }
        );
      } catch (error) {
        console.log("Cannot connect to server. Try later." + error);
      }

      // Checking server is working or not
      if (resp) {
        // if server is working
        // Getting data from response
        const respData = resp.data.message;
        if (respData == "User detail successfully matched.") {
          // Store the info in localStorage
          localStorage.setItem("userId", "admin");

          // storing in useStates
          props.userData.setUserId("admin");

          toast.success("You are successfully logged in.", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          // Wait for 2 seconds to display message
          setTimeout(() => {
            // show website
            navigate("/csadmin");
          }, 2000);

          //
        } else {
          toast.error("Incorrect detail !", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error("Cannot connect to server. Try later.", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("Something is missing !", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="loginContainer">
        <ToastContainer />
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                  <p className="text-white-50 mb-3">
                    Please enter your login and password!
                  </p>

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-2 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    size="lg"
                  />

                  <MDBCheckbox
                    name="flexCheck"
                    id="flexCheckDefault"
                    className="mb-2"
                    label="Remember password"
                  />

                  <button
                    onClick={() => {
                      handleSubmit();
                    }}
                    className="ripple ripple-surface ripple-surface-light btn btn-primary btn-lg mt-4"
                  >
                    Login
                  </button>

                  <hr className="my-4" />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
export default Login;
