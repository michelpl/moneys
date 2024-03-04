/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/Argon/ArgonBox";
import ArgonTypography from "components/Argon/ArgonTypography";
import ArgonProgress from "components/Argon/ArgonProgress";

// Images
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import Checkbox from '@mui/material/Checkbox';
import { TextField } from "@mui/material";
import UnderlineTextField from "components/Form/UnderlineTextField";

function Completion({ value, color }) {
  return (
    <ArgonBox display="flex" alignItems="center">
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </ArgonTypography>
      <ArgonBox width="8rem">
        <ArgonProgress value={value} color={color} variant="gradient" label={false} />
      </ArgonBox>
    </ArgonBox>
  );
}

const actions = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);



const TransactionsTable = {
  columns: [
    { name: "checkbox", label: <Checkbox />, align: "center" },
    { name: "description", label: "Descrição", align: "left" },
    { name: "amount", label: "Valor", align: "left", type: 'input' },
    { name: "installments", label: "Parcelas", align: "left", type: 'input'},
    { name: "due_date", label: "Vencimento", align: "left", type: 'input' },
    { name: "payment_date", label: "Data pagamento", align: "left", type: 'input' },
    { name: "actions", label: "", align: "center" },
  ],

  rows: [
    {
      checkbox: {value: false, type: 'checkbox'},
      description: {value: 'Texto', type: 'text'},
      amount:{value: '1500.00', type: 'currency'},
      installments: {value: '0', type: 'text'},
      due_date: {value: '2024-01-01', type: 'date'},
      payment_date: {value: '2024-01-01', type: 'currency'},
      actions: {type: 'actions'},
    },
  ],
};


export default TransactionsTable;
