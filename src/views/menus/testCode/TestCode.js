import React, { useEffect, useState } from "react";
import TestCodeComponent from "./TestCodeComponent";
import TestCodeCom2 from "./TestCodeCom2";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CCol, CRow } from "@coreui/react";
import { CCard, CCardBody } from '@coreui/react';
import ReactApexChart from 'react-apexcharts';
//npm install apexcharts react-apexcharts @coreui/react
const TestCode=()=>{
    const [startDate, setStartDate] = useState(new Date());
    const [chartData, setChartData] = useState({
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 180, 200]
        }
      ]
    });


    return(
        <div>
            <TestCodeCom2 name="Mg Mg" age="12" address="Yangon"/>
            <TestCodeComponent name="Sara"/>
            <TestCodeComponent name="Nice"/>
            <TestCodeCom2 name="Ma Ma" age="13" address="Singapore"/>     

            <CRow>
                <CCol lg="6">
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> 
                </CCol>
                </CRow> 
         
 
    <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />




        </div>
    )
}

export default TestCode;
