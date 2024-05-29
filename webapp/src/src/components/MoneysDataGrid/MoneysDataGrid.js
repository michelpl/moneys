/* eslint-disable react/prop-types */
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import ArgonTypography from "../Argon/ArgonTypography";
import ArgonBox from "../Argon/ArgonBox";
import { useState } from "react";

export default function MoneysDataGrid() {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true, date: new Date('12/01/2022') },
    { make: "Ford", model: "F-Series", price: 33850, electric: false, date: new Date() },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false, date: new Date() },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      field: "make",
      editable: true,
    },
    { field: "model" },
    { field: "price" },
    {
      field: "electric",
      editable: true,
    },
    {
      field: "date" ,
      cellEditor: "agDateCellEditor",
      editable:true,
      valueFormatter: (params) => {
        if (!params.value) {
          return "";
        }
        const month = params.value.getMonth() + 1;
        const day = params.value.getDate();
        return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${params.value.getFullYear()}`;
      },
    },
    { field: "categories" },
  ]);
  return (<>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500, width: '100%' }} // the grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
        />
      </div>
  </>)
}