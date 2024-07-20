/* eslint-disable react/prop-types */
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useMemo, useState } from "react";
import MoodEditor from "./MoodEditor";
import ChipList from "../CategoriesPicker/ChipList";
import { randomColor, randomId, randomJobTitle } from "@mui/x-data-grid-generator";
import CategoriesPicker from "../CategoriesPicker/CategoriesPicker";
import { Chip } from "@mui/material";

const MoodRenderer = (props) => {
  const imageForMood = mood => 'https://www.ag-grid.com/example-assets/smileys/' + (mood === 'Happy' ? 'happy.png' : 'sad.png');

  const mood = useMemo(() => imageForMood(props.value), [props.value]);

  return (
    <div className="mood-renderer"><img width="20px" src={mood} /></div>
  );
}

export default function MoneysDataGrid() {
  const [rowData, setRowData] = useState([
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      date: new Date('12/01/2022'),
      categories: [
        {
          id: randomId(),
          label: 'Teste',
          backgroundColor: randomColor(),
          color: randomColor(),
        },
        {
          id: randomId(),
          label: randomJobTitle(),
          backgroundColor: randomColor(),
          color: randomColor(),
        },
        {
          id: randomId(),
          label: randomJobTitle(),
          backgroundColor: randomColor(),
          color: randomColor(),
        },
      ]
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      date: new Date(),
      categories: [
        {
          id: randomId(),
          label: randomJobTitle(),
          backgroundColor: randomColor(),
          color: randomColor(),
        },
        {
          id: randomId(),
          label: randomJobTitle(),
          backgroundColor: randomColor(),
          color: randomColor(),
        },
        {
          id: randomId(),
          label: randomJobTitle(),
          backgroundColor: randomColor(),
          color: randomColor(),
        },
        {
          id: randomId(),
          label: randomJobTitle(),
          backgroundColor: randomColor(),
          color: randomColor(),
        },
        {
          id: randomId(),
          label: randomJobTitle(),
          backgroundColor: randomColor(),
          color: randomColor(),
        }
      ]
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      date: new Date(),
      categories: [
        {
          label: "Despesas fixas",
          id: "23465633223",
          backgroundColor: randomColor(),
          color: randomColor(),
        },
        {
          id: randomId(),
          label: randomJobTitle(),
          backgroundColor: randomColor(),
          color: randomColor(),
        },
        {
          id: randomId(),
          label: randomJobTitle(),
          backgroundColor: randomColor(),
          color: randomColor(),
        },
      ]
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      field: "make",
      editable: true,
      rowDrag: true
    },
    { field: "model" },
    { field: "price" },
    {
      field: "electric",
      editable: true,
    },
    {
      field: "date",
      headerName: 'Data de pagamento',
      cellEditor: "agDateCellEditor",
      editable: true,
      valueFormatter: (params) => {
        if (!params.value) {
          return "";
        }
        const month = params.value.getMonth() + 1;
        const day = params.value.getDate();
        return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${params.value.getFullYear()}`;
      },
    },
    {
      field: "categories",
      headerName: 'Categorias',
      cellRenderer: ChipList,
      cellEditor: CategoriesPicker,
      cellEditorPopup: true,
      editable: true,
    },
    {
      field: "mood",
      headerName: "Custom Mood",
      cellRenderer: MoodRenderer,
      cellEditor: MoodEditor,
      cellEditorPopup: true,
      editable: true,
    },
  ]);
  return (<>
    <div
      className="ag-theme-quartz"
      style={{ height: 400, width: '100%' }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        reactiveCustomComponents={true}
        defaultColDef={defaultColDef}
        rowDragManaged={true}
      />
    </div>
  </>)
}