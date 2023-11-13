import Form from "../components/Form"
import UpdateStockData from "../components/UpdateStockData"
import React, {useState} from "react";
import {Button, Paper} from "@mui/material";
import List from "../components/StockList";
import Box from "@mui/material/Box";

export default function Home() {
    const [todos, setTodos] = useState([]);

    const todoHandler = (todo) => {
        setTodos([...todos, todo])
    }

    const setResult = (result) => {

    }

    return (
        <div>
            <div className="">
                <Form
                    todoHandler={ todoHandler }
                />
            </div>            
        </div>
    );
}
