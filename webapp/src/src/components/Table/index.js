import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import { Box, Checkbox, Table as MuiTable, TextField } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/Argon/ArgonBox";
import ArgonAvatar from "components/Argon/ArgonAvatar";
import ArgonTypography from "components/Argon/ArgonTypography";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import UnderlineTextField from "components/Form/UnderlineTextField";

function Table({ columns, rows }) {
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  const renderColumns = columns.map(({ name, label, align, width }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 3;
      pr = 3;
    } else if (key === columns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }

    return (
      <ArgonBox
        key={name}
        component="th"
        width={width || "auto"}
        pt={1.5}
        pb={1.25}
        pl={align === "left" ? pl : 3}
        pr={align === "right" ? pr : 3}
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color="secondary"

        sx={({ palette: { light } }) => ({ borderBottom: `${borderWidth[1]} solid ${light.main}` })}
      >
        {label}
      </ArgonBox>
    );
  });

  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const tableRow = columns.map(({ name, align }) => {
      let template;
      let tableCell;
      
      if (row[name]['type'] === 'checkbox') {
        tableCell = <Checkbox initialValue={row[name]['value']} />;
      }

      if (row[name]['type'] === 'text') {
        tableCell = <UnderlineTextField initialValue={row[name]['value']} />;
      }

      template = (
        <ArgonBox
          key={uuidv4()}
          component="td"
          width='20px '
          p={1}
          textAlign={align}
          lineHeight={0.65}
          sx={({ palette: { light } }) => ({
            borderBottom: row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null,
          })}
        >
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            color="secondary"
            sx={{ display: "inline-block", width: "max-content" }}
          >
            {tableCell}
          </ArgonTypography>
        </ArgonBox>
      );

      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });

  return useMemo(
    () => (
      <TableContainer>
        <MuiTable>
          <ArgonBox component="thead">
            <TableRow>{renderColumns}</TableRow>
          </ArgonBox>
          <TableBody>{renderRows}</TableBody>
        </MuiTable>
      </TableContainer>
    ),
    [columns, rows]
  );
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.any,
};

export default Table;
