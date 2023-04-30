/* eslint-disable jsx-a11y/alt-text */

/**
 * Pass Click Model Form
 *
 * @author YuwaKoKo
 *
 * @create 20/9/2022
 *
 */

import React from "react";
import {
  CModal,
  CImg,
  CModalHeader,
  CModalBody,
  CRow,
} from "@coreui/react";

const ResultClickModel = (props) => {
  const {
    popUpShow,
    closeBtn,
    userName,
  } = props;


  return (
    <>
      <CModal
        size="lg"
        centered
        closeOnBackdrop={true}
        show={popUpShow}
        id="advanced"
        onClose={closeBtn}
      >
        <CModalHeader
          style={{
            background: "#eff1fe",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            justifyContent: "end",
            borderBottomColor: "#eff1fe",
            paddingBottom: "10px",
          }}
        >

          <CRow style={{ marginRight: "10px", cursor: "pointer" }}>
            <CImg
              onClick={closeBtn}
              src={process.env.PUBLIC_URL + "/image/Close.svg"}
              width={33}
              height={33}
            />
          </CRow>
        </CModalHeader>
        <CModalBody
          style={{
            background: "#eff1fe",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            paddingRight: "30px",
            paddingLeft: "30px",
          }}
        >
        <p>Hello</p>
        <h1>I am Pop Up</h1>
        <h1>My Name is {userName}</h1>
       
        </CModalBody>
      </CModal>
    </>
  );
};
export default ResultClickModel;
