import { randomBoolean, randomColor, randomCommodity, randomCompanyName, randomDate, randomPrice, randomUnitPrice, randomUserName } from "@mui/x-data-grid-generator";
import CategoriesPicker from "components/CategoriesPicker/CategoriesPicker";
import ChipList from "components/CategoriesPicker/ChipList";
import {useCallback, useEffect} from "react";

const getData = function() {
    const rows = [
        {
            description: "Salário com descrição bem grande mesmo",
            amount: 129.9,
            isPaid: true,
            paymentDate: new Date('12/01/2022'),
            dueDate: new Date('05/10/2007'),
            categories: [
                {
                    id: 1,
                    label: 'Compras diversas',
                    backgroundColor: "#abcd",
                    color: "#fdefde",
                },
            ]
        },
        {
            description: "Segunda entrada com descrição grande",
            amount: 129.9,
            isPaid: true,
            paymentDate: new Date('12/01/2022'),
            dueDate: new Date('05/10/2007'),
            categories: [
                {
                    id: 1,
                    label: 'Salário',
                    backgroundColor: "#abcd",
                    color: "#ddd",
                },
                ,
                {
                    id: 2,
                    label: 'Mais uma categoria',
                    backgroundColor: "#abfff",
                    color: "#abcabc",
                },
                {
                    id: 3,
                    label: 'Outras entradas',
                    backgroundColor: "#321fefe",
                    color: "#321fff",
                },
            ]
        },
        {
            description: randomCompanyName(),
            amount: randomUnitPrice(),
            isPaid: randomBoolean(),
            paymentDate: new Date(),
            dueDate: new Date(),
            categories: [
                {
                    id: 1,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 2,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 3,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
            ]
        },
        {
            description: randomCompanyName(),
            amount: randomUnitPrice(),
            isPaid: randomBoolean(),
            paymentDate: new Date(),
            dueDate: new Date(),
            categories: [
                {
                    id: 1,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 2,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 3,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
            ]
        },
        {
            description: randomCompanyName(),
            amount: randomUnitPrice(),
            isPaid: randomBoolean(),
            paymentDate: new Date(),
            dueDate: new Date(),
            categories: [
                {
                    id: 1,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 2,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 3,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
            ]
        },
        {
            description: randomCompanyName(),
            amount: randomUnitPrice(),
            isPaid: randomBoolean(),
            paymentDate: new Date(),
            dueDate: new Date(),
            categories: [
                {
                    id: 1,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 2,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 3,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
            ]
        },
        {
            description: randomCompanyName(),
            amount: randomUnitPrice(),
            isPaid: randomBoolean(),
            paymentDate: new Date(),
            dueDate: new Date(),
            categories: [
                {
                    id: 1,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 2,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 3,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
            ]
        },
        {
            description: randomCompanyName(),
            amount: randomUnitPrice(),
            isPaid: randomBoolean(),
            paymentDate: new Date(),
            dueDate: new Date(),
            categories: [
                {
                    id: 1,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 2,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
                {
                    id: 3,
                    label: randomCommodity(),
                    backgroundColor: randomColor(),
                    color: randomColor(),
                },
            ]
        },
    ];
    const columns = [
        {
            field: "description",
            resizable: true,
            headerName: "Descrição",
            editable: true,
            rowDrag: true,
        },
        {
            field: "amount",
            resizable: true,
            headerName: "Valor",
            editable: true,
            maxWidth: 150,
            
        },
        {
            field: "isPaid",
            headerName: "Pago?",
            editable: true,
            cellRenderer: 'agCheckboxCellRenderer',
            cellEditor: 'agCheckboxCellEditor',
            maxWidth: 100,
            resizable: false
        },
        {
            field: "paymentDate",
            resizable: true,
            headerName: 'Data do pagamento',
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
            field: "dueDate",
            headerName: 'Data de vencimento',
            cellEditor: "agDateCellEditor",
            resizable: true,
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
            resizable: true,
            cellEditor: CategoriesPicker,
            cellEditorPopup: true,
            editable: true,
        },
        {
            field: "actions",
            headerName: 'Ações',
            editable: false,
        }
    ];
    return {
        columns: columns,
        rows: rows
    };
}

export default getData;