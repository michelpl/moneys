import CategoriesPicker from "components/CategoriesPicker/CategoriesPicker";
import ChipList from "components/CategoriesPicker/ChipList";
import { useEffect } from "react";

const getData = function() {
    const rows = [
        {
            order: 1,
            description: "Salário com descrição bem grande mesmo",
            amount: 129.9,
            isPaid: true,
            paymentDate: new Date('12/01/2022'),
            dueDate: new Date('05/10/2007'),
            categories: [
                {
                    id: 1,
                    label: 'Compras diversas',
                    backgroundColor: "#fdefde",
                    color: "#fdefde",
                },
            ]
        },
        {
            order: 1,
            description: "Segunda entrada com descrição grande",
            amount: 129.9,
            isPaid: true,
            paymentDate: new Date('12/01/2022'),
            dueDate: new Date('05/10/2007'),
            categories: [
                {
                    id: 1,
                    label: 'Salário',
                    backgroundColor: "#ddd",
                    color: "#ddd",
                },
                ,
                {
                    id: 2,
                    label: 'Mais uma categoria',
                    backgroundColor: "#abcabc",
                    color: "#abcabc",
                },
                {
                    id: 3,
                    label: 'Outras entradas',
                    backgroundColor: "#321fff",
                    color: "#321fff",
                },
            ]
        },
    ];

    const columns = [
        {
            field: "order",
            headerName: 'Ordem',
            editable: false,
            rowDrag: true,
            maxWidth:120
        },
        {
            field: "description",
            resizable: true,
            headerName: "Descrição",
            editable: true,
            
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