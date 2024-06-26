/* eslint-disable no-unused-vars */
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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/Argon/ArgonBox";
import ArgonTypography from "components/Argon/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import Transactions from 'components/Transaction/Transactions'
import { useArgonController, setLayout, setShowSidenav } from "context";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Default({ bgColor, ...rest }) {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, showSidenav, darkMode } = controller;
  const background = darkMode && !bgColor ? "transparent" : bgColor;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
    setShowSidenav(dispatch, false)
  }, [pathname]);

  const setMarginLeft = () => {
    if (showSidenav) {
      return miniSidenav ? 0 : 274;
    }
    return 5;
  }

  return (
    <ArgonBox
          sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
            p: 3,

            [breakpoints.up("xl")]: {
              marginLeft: pxToRem(setMarginLeft()),
              transition: transitions.create(["margin-left", "margin-right"], {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.standard,
              }),
            },
          })}
    >
      <ArgonBox
        bgColor={background || "secondary"} //Topbar background
        height="500px"
        width="100vw"
        position="absolute"
        top={0}
        left={0}
        sx={darkMode && { bgColor: ({ palette: { background } }) => background.default }}
        {...rest}
      />
      <DashboardNavbar pageTitle={'Dashboard'} />
      <Transactions ></Transactions>
      <Footer />
    </ArgonBox>
  )
}

Default.propTypes = {
  bgColor: PropTypes.string,
};

export default Default;
