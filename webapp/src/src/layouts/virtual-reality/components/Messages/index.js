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
import Tooltip from "@mui/material/Tooltip";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/Argon/ArgonBox";
import ArgonTypography from "components/Argon/ArgonTypography";
import ArgonAvatar from "components/Argon/ArgonAvatar";



function Messages() {
  const messagesAvatarStyles = {
    border: ({ borders: { borderWidth }, palette: { white } }) =>
      `${borderWidth[2]} solid ${white.main}`,
    cursor: "pointer",
    position: "relative",
    ml: -1.5,

    "&:hover, &:focus": {
      zIndex: "10",
    },
  };

  return (
    <Card>
      <ArgonBox display="flex" alignItems="center" justifyContent="space-between" p={3}>
        <ArgonTypography variant="body2" color="text">
          Messages
        </ArgonTypography>
        <ArgonBox display="flex">
          <Tooltip title="2 New Messages" placement="top">
            
          </Tooltip>
          <Tooltip title="1 New Messages" placement="top">
          </Tooltip>
          <Tooltip title="13 New Messages" placement="top">
          </Tooltip>
          <Tooltip title="7 New Messages" placement="top">
          </Tooltip>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Messages;
