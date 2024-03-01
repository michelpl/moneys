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
import MoneyTextField from "components/Form/MoneyTextField";
import { TextField } from "@mui/material";

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

const checkbox = (
  <Checkbox />
);

const moneyTextField = (
  < MoneyTextField />
);

const TransactionsTable = {
  columns: [
    { name: "checkbox", label: checkbox, align: "center" },
    { name: "description", label: "Descrição", align: "left" },
    { name: "amount", label: "Valor", align: "left", type: 'input' },
    { name: "installment", label: "Parcela", align: "left", type: 'input'},
    { name: "due_date", label: "Vencimento", align: "left", type: 'input' },
    { name: "payment_date", label: "Data pagamento", align: "left", type: 'input' },
    { name: "actions", label: "", align: "center" },
  ],

  rows: [
    {
      checkbox,
      description: [logoSpotify, "Spotift"],
      amount: '1034.99',
      installment:'working',
      due_date: "info",
      payment_date: "R$2,500",
      actions,
    },
    {
      checkbox,
      description: [logoInvesion, "Invesion"],
      amount: '1034.99',
      installment:'working',
      due_date: "info",
      payment_date: "R$2,500",
      actions,
    },
    {
      checkbox,
      description: [logoJira, "Jira"],
      amount: '1034.99',
      installment:'working',
      due_date: "info",
      payment_date: "R$2,500",
      actions,
    },
    {
      checkbox,
      description: [logoSlack, "Slack"],
      amount: '1034.99',
      installment:'working',
      due_date: "info",
      payment_date: "R$2,500",
      actions,
    },
    {
      checkbox,
      description: [logoWebDev, "Webdev"],
      amount: '1034.99',
      installment:'working',
      due_date: "info",
      payment_date: "R$2,500",
      actions,
    },
    {
      checkbox,
      description: [logoXD, "Adobe XD"],
      amount: '1034.99',
      installment:'working',
      due_date: "info",
      payment_date: "R$2,500",
      actions,
    },
  ],
};

export default TransactionsTable;
