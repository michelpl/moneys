/* eslint-disable react/prop-types */
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useCallback, useMemo, useState } from "react";
import MoodEditor from "./MoodEditor";
import ChipList from "../CategoriesPicker/ChipList";
import { randomColor, randomId, randomJobTitle } from "@mui/x-data-grid-generator";
import CategoriesPicker from "../CategoriesPicker/CategoriesPicker";
import { Box, Button, Chip } from "@mui/material";

const MoodRenderer = (props) => {
  const imageForMood = mood => 'https://www.ag-grid.com/example-assets/smileys/' + (mood === 'Happy' ? 'happy.png' : 'sad.png');

  const mood = useMemo(() => imageForMood(props.value), [props.value]);

  return (
    <div className="mood-renderer"><img width="20px" src={mood} /></div>
  );
}

export default function MoneysDataGrid({columns, data}) {
  const [rowData, setRowData] = useState(data);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const emptyItem = 
    
      {
        order: null,
        description: "",
        amount: null,
        isPaid: "",
        paymentDate: null,
        dueDate: null,
        categories: [
        ]
      }
  ;
  
  const addEmptyRow = useCallback(
    (append) => {
        const newStore = rowData.slice();
        newStore.push(emptyItem);
        
        setRowData(newStore);
    },
    [rowData]
);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState(columns);
  return (<>
    <div
      className="ag-theme-quartz"
      style={{ height: '500px', width: '100%', padding: '10px 0' }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        undoRedoCellEditing={true}
        undoRedoCellEditingLimit={20}
        defaultColDef={defaultColDef}
        rowDragManaged={true}
      />
      <Box sx={{margin: "10px"}}>
        <Button onClick={() => {addEmptyRow()}} value="Add">Adicionar</Button>
      </Box>

    </div>
  </>)
}