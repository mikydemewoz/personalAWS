import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert, AlertTitle, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {
  const [loggin, setLoggin] = useState(false);
  const [userData, setUserData] = useState();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(email, date, fullName, message) {
    return { email, date, fullName, message };
  }
  function dateFormater(day,month,year){
    return day+"/"+month+"/"+year
  }
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const idtoken = window.location.href;
    const code = idtoken.split("=")[1];
    const url = "https://zedagem-personal.auth.us-east-1.amazoncognito.com/oauth2/token/";

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", "5i0rtph6jg8bkv6lqpciie3glh");
    params.append("redirect_uri", "https://www.zedagem.link/admin");
    params.append("code", code);

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(url, params, config)
      .then((r) => {
        setUserData(r.data);
        setLoggin(true);
        console.log(r.data);
      })
      .catch((e) => {
        setUserData({});
        setLoggin(false);
        console.log(e)
      });
  }, []);

  useEffect(() => {
    if (loggin) {
      console.log(userData.id_token);
      axios
        .get(
          "https://r1k4rvyym5.execute-api.us-east-1.amazonaws.com/v1/portfolio",
          {
            headers: {
              Authorization: userData.id_token,
            },
          }
        )
        .then((r) => {
          const data = r.data;
          let arr = []
          for(let obj of data){
            let newDate = new Date(obj.date)
            let date = dateFormater(newDate.getDate(),newDate.getMonth(),newDate.getFullYear())
            arr.push(createData(obj.email,date, obj.fullName, obj.message))
            setRows(arr)
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setLoggin(false);
    }
  }, [loggin]);

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Admin</h1>
      {loggin ? null : (
        <div>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Error occured while login —
            <Button variant="text">
              <a href="https://zedagem-personal.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=5i0rtph6jg8bkv6lqpciie3glh&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fwww.zedagem.link%2Fadmin">
                Login Here
              </a>
            </Button>
          </Alert>
        </div>
      )}
      {!loggin ? null : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Full Name</StyledTableCell>
                <StyledTableCell align="right">Message</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={Math.random()}>
                  <StyledTableCell component="th" scope="row">
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.fullName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.message}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
