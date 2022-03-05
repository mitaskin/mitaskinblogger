import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PropTypes from "prop-types";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function BasicTable() {
  return (
    <>
      <>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", m: 5 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </>

      <>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
          <Item>
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  bgcolor: "background.paper",
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: 1,
                  fontWeight: "bold",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                    m: 3,
                    minWidth: { md: 350 },
                  }}
                >
                  <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                    123 Main St, Phoenix AZ
                  </Box>
                  <Box
                    component="span"
                    sx={{ color: "primary.main", fontSize: 22 }}
                  >
                    $280,000 — $310,000
                  </Box>
                  <Box
                    sx={{
                      mt: 1.5,
                      p: 0.5,
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.1),
                      borderRadius: "5px",
                      color: "primary.main",
                      fontWeight: "medium",
                      display: "flex",
                      fontSize: 12,
                      alignItems: "center",
                      "& svg": {
                        fontSize: 21,
                        mr: 0.5,
                      },
                    }}
                  >
                    <ErrorOutlineIcon />
                    CONFIDENCE SCORE 85%
                  </Box>
                </Box>
              </Box>
            </>
          </Item>
          <Item><>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  bgcolor: "background.paper",
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: 1,
                  fontWeight: "bold",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                    m: 3,
                    minWidth: { md: 350 },
                  }}
                >
                  <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                    123 Main St, Phoenix AZ
                  </Box>
                  <Box
                    component="span"
                    sx={{ color: "primary.main", fontSize: 22 }}
                  >
                    $280,000 — $310,000
                  </Box>
                  <Box
                    sx={{
                      mt: 1.5,
                      p: 0.5,
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.1),
                      borderRadius: "5px",
                      color: "primary.main",
                      fontWeight: "medium",
                      display: "flex",
                      fontSize: 12,
                      alignItems: "center",
                      "& svg": {
                        fontSize: 21,
                        mr: 0.5,
                      },
                    }}
                  >
                    <ErrorOutlineIcon />
                    CONFIDENCE SCORE 85%
                  </Box>
                </Box>
              </Box>
            </></Item>
          <Item><>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  bgcolor: "background.paper",
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: 1,
                  fontWeight: "bold",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                    m: 3,
                    minWidth: { md: 350 },
                  }}
                >
                  <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                    123 Main St, Phoenix AZ
                  </Box>
                  <Box
                    component="span"
                    sx={{ color: "primary.main", fontSize: 22 }}
                  >
                    $280,000 — $310,000
                  </Box>
                  <Box
                    sx={{
                      mt: 1.5,
                      p: 0.5,
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.1),
                      borderRadius: "5px",
                      color: "primary.main",
                      fontWeight: "medium",
                      display: "flex",
                      fontSize: 12,
                      alignItems: "center",
                      "& svg": {
                        fontSize: 21,
                        mr: 0.5,
                      },
                    }}
                  >
                    <ErrorOutlineIcon />
                    CONFIDENCE SCORE 85%
                  </Box>
                </Box>
              </Box>
            </></Item>
        </Box>
      </>
    </>
  );
}
