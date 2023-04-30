import { CButton, CCard, CCardBody, CCardHeader, CCol, CImg, CInput, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SuccessError from "../common/SuccessError";
import $ from "jquery";
import { nullChk, validateName } from "../common/CommonValidation";
const LoginReact = () => {
  let history = useHistory();
  const [zoomSize, setZoomSize] = useState(
    Math.round(window.devicePixelRatio * 100)
  ); //browser zoom level
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState([]);
  const [error, setError] = useState([]);
  const userNameChange = (e) => {
    setUserName(e.target.value);
  }
  const passwordChange = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
    $(window).resize(function () {
      setZoomSize(Math.round(window.devicePixelRatio * 100));
    });
  }, []);

  const LoginClick = () => {
    let errMsg = [];
    if (!nullChk(userName)) {
      errMsg.push("Please fill Username");
    } else if (!validateName(userName)) {
      errMsg.push("Please fill Character Only in Username");
    }
    if (!nullChk(password)) {
      errMsg.push("Please fill Password");
    }
    if (errMsg.length <= 0) {
      if (userName == "KyawKyaw" && password == "12345") {
        history.push(`/welcome`);
        localStorage.setItem(`LoginProcess`, "true");
      } else {
        setError(["UserName or Password is Wrong"])
      }
    } else {
      setError(errMsg)
    }
  }

  const keyDownHandler = (e) => {
    if (e.key == "Enter") {
       LoginClick();
      e.preventDefault();
    }
  };


  return (
    <>
      {zoomSize < 150 && (
        <div className="min-vh-100  flex-row align-items-center login-bg">
          <CRow>
            <CCol lg="6">

            </CCol>
            <CCol lg="6">
              <CRow>
                <CCol lg="2"></CCol>
                <CCol lg="8">
                  <CCard style={{ marginTop: "200px" }} >
                    <CCardHeader className="Ccard-design-start">
                      <h3 style={{ marginTop: "15px" }}>LoginForm</h3>
                    </CCardHeader>
                    <CCardBody className="Ccard-design-end">
                      <SuccessError success={success} error={error} />
                      <CRow>
                        <CCol lg="4"><h5 style={{ marginTop: "7px" }}>UserName</h5></CCol>
                        <CCol lg="8"><CInput type="text"
                          onKeyDown={keyDownHandler}
                        className="input-field-blue-background" value={userName} onChange={userNameChange} /></CCol>
                      </CRow>
                      <CRow className="mt-3">
                        <CCol lg="4"><h5 style={{ marginTop: "7px" }}>Password</h5></CCol>
                        <CCol lg="8"><CInput type="password"
                          onKeyDown={keyDownHandler}
                        className="input-field-blue-background" value={password} onChange={passwordChange} /></CCol>
                      </CRow>

                      <CRow style={{ justifyContent: "end", marginRight: "3px" }}
                        className="mt-4"
                      >
                        <CButton className="btn create-btn"
                          onClick={LoginClick}     
                        >
                          <p style={{ marginTop: "4px" }}> Login
                          </p>

                        </CButton>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol lg="2"></CCol>
              </CRow>


            </CCol>
          </CRow>








        </div>

      )}

      {zoomSize > 149 && (

        <div className="login-bg-mobile">
          <br></br>
          <br></br>
          <h2 style={{ textAlign: "center", fontWeight: "800", color: "white" }}>
            Login Form
          </h2>

          <CRow style={{ justifyContent: "center" }}>
            <CImg
              src={"/image/logo.png"}
              width={200}
            ></CImg>
          </CRow>




          <CRow
            lg="12"
            style={{ paddingLeft: "100px", paddingRight: "100px" }}
          >
            <CCol lg="3">

            </CCol>

            <CCol lg="6">
              <br></br>
              <SuccessError success={success} error={error} />

              <label
                style={{
                  fontWeight: "800",
                  color: "#0b3570",
                  fontSize: "15px",
                  marginTop: "20px",
                }}
              >
                Username
              </label>
              <br></br>
              <CInput type="text" value={userName} 
                onKeyDown={keyDownHandler}
              className="input-field-blue-background" onChange={userNameChange} />
              <br></br>
              <label
                style={{
                  fontWeight: "800",
                  color: "#0b3570",
                  fontSize: "15px",
                  marginTop: "20px",
                }}
              >
                Password
              </label>
              <br></br>
              <CInput type="password" value={password} 
                onKeyDown={keyDownHandler}
              className="input-field-blue-background" onChange={passwordChange} />
              <br></br>
            </CCol>

            <CCol lg="3">

            </CCol>
          </CRow>
          <br></br>
          <CRow
            style={{
              paddingLeft: "100px",
              paddingRight: "100px",
              justifyContent: "center",
            }}
          >
            <CButton className="btn create-btn"
              onClick={LoginClick}      
            >
              <p style={{ marginTop: "3px" }}> Login
              </p>

            </CButton>
          </CRow>
          <CRow style={{ height: "100px" }}>&nbsp;</CRow>
        </div>
      )}
    </>


  )
}

export default LoginReact;
