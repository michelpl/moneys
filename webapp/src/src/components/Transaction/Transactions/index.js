/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/Argon/ArgonBox";
import ArgonTypography from "components/Argon/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "components/Table";

// Data
import TransactionsTable from "components/Transaction/Transactions/data/TransactionsTable";
import { TextField } from "@mui/material";

function Transactions() {
  const { columns: prCols, rows: prRows } = TransactionsTable;

  return (
    <ArgonBox py={3}>
      <Card>
        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <ArgonTypography variant="h6">Entradas</ArgonTypography>
        </ArgonBox>
        <ArgonBox
          sx={{
            "& .MuiTableRow-root:not(:last-child)": {
              "& td": {
                borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                  `${borderWidth[1]} solid ${borderColor}`,
              },
            },
          }}
        >
          <Table columns={prCols} rows={prRows} />
        </ArgonBox>
      </Card>
    </ArgonBox>
  );
}

export default Transactions;
