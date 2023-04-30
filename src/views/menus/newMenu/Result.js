import { CCardHeader, CCard, CCardBody, CRow, CCol, CButton } from "@coreui/react";
import React from "react";
import { useHistory } from "react-router-dom";

const Result = () => {
  let history = useHistory()
    const backClick = () =>{
   history.push(`/menus/NewMenu`)
   localStorage.clear()
    }
    return (
        <>

            <CRow>
                <CCol lg="2"></CCol>
                <CCol lg="8">
                    <CCard>

                        <CCardHeader>
                           <CRow>
                            <CCol lg="5"><h1>Result</h1></CCol>
                            <CCol lg="5"></CCol>
                            <CCol lg="2">
                           <CButton
                           onClick={backClick}
                           className ="btn btn-danger"
                           >X</CButton>


                            </CCol>
                           </CRow>
                        </CCardHeader>

                        <CCardBody>
                            <CRow>
                                <CCol lg="1">
                                </CCol>
                                <CCol lg="3">Username</CCol>
                                <CCol lg="8">
                                    {localStorage.getItem("USERNAME")}
                                </CCol>
                                <CCol lg="1">
                                </CCol>
                            </CRow>
                            <br></br>
                            <CRow>
                                <CCol lg="1">
                                </CCol>
                                <CCol lg="3">Age</CCol>
                                <CCol lg="8">
                                {localStorage.getItem("AGE")}
                                </CCol>
                                <CCol lg="1">
                                </CCol>
                            </CRow>
                            <br></br>
                            <CRow>
                                <CCol lg="1">
                                </CCol>
                                <CCol lg="3">Phone</CCol>
                                <CCol lg="8">
                                {localStorage.getItem("PHONE")}
                                </CCol>
                                <CCol lg="1">
                                </CCol>
                            </CRow>
                            <br></br>

                            <CRow>
                                <CCol lg="1">
                                </CCol>
                                <CCol lg="3">Password</CCol>
                                <CCol lg="8">
                                {localStorage.getItem("PASSWORD")}
                                </CCol>
                                <CCol lg="1">
                                </CCol>
                            </CRow>
                            <br></br>

                            
                            <CRow>
                                <CCol lg="1">
                                </CCol>
                                <CCol lg="3">Japanese Skill</CCol>
                                <CCol lg="8">
                                {localStorage.getItem("JAPAN")}
                                </CCol>
                                <CCol lg="1">
                                </CCol>
                            </CRow>
                            <br></br>
                        </CCardBody>



                    </CCard>


                </CCol>
                <CCol lg="2"></CCol>
            </CRow>
        </>
    )
}

export default Result;