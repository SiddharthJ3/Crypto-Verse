import React, { useEffect, useState } from 'react'
import "./CoinsTable.css"
import axios from 'axios';
import { CoinList } from '../Config/api';
import { State } from "../Components/Context"
import { useNavigate } from 'react-router';
import Pagination from '@material-ui/lab/Pagination';
import {
  Container,
  TableCell,
  LinearProgress,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core';

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);


  const navigate = useNavigate();

  const { currency, symbol } = State();

  const fetchData = async () => {

    setLoading(true);
    const { data } = await axios.get(CoinList(currency));

    setCoins(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  const useStyles = makeStyles({
    row: {
      backgroundColor: "white",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "grey",
      },
      fontFamily: "Montserrat",
      
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "black",
      },
    },
  });

  const classes = useStyles();

  return (
    <div className='page2'>
      <div className='market'>
        <span style={{ fontSize: 40, marginLeft: "40%", fontFamily: "Raleway"}}>
          <span style={{ textDecoration: "underline" }}>CURRENT</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span style={{ color: "lime", backgroundColor: "black", filter: "drop-shadow(0 0 30px lime)" }}>
            ↿MAR</span>
          <span style={{ color: "#F72119", backgroundColor: "black", filter: "drop-shadow(0 0 30px #F72119)" }}>
            KET⇂</span>
        </span>
      </div>

      <div className='table'>
        <Container style={{ textAlign: "center" }}>

          <TextField
            label="Search The Crypto Verse..."
            variant="outlined"
            style={{ marginBottom: 20, width: "100%" }}
            onChange={(e) => setSearch(e.target.value)}
          />

          <TableContainer component={Paper}>
            {loading ? (
              <LinearProgress style={{ backgroundColor: "black" }} />
            ) : (
              <Table aria-label="simple table">
                <TableHead style={{ backgroundColor: "black" }}>
                  <TableRow>
                    <TableCell style={{ color: "white" }}>Currency Name</TableCell>
                    <TableCell style={{ color: "white" }} align="right">Price</TableCell>
                    <TableCell style={{ color: "white" }} align="right">24h Change</TableCell>
                    <TableCell style={{ color: "white" }} align="right">Market Cap</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {handleSearch()
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((row) => {
                      const profit = row.price_change_percentage_24h > 0;
                      return (
                        <TableRow
                          onClick={() => navigate(`/coins/${row.id}`)}
                          className={classes.row}
                          key={row.name}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              display: "flex",
                              gap: 15,
                            }}
                          >
                            <img
                              src={row?.image}
                              alt={row.name}
                              height="50"
                              style={{ marginBottom: 10 }}
                            />
                            <div
                              style={{ display: "flex", flexDirection: "column" }}
                            >
                              <span
                                style={{
                                  textTransform: "uppercase",
                                  fontSize: 22,
                                }}
                              >
                                {row.symbol}
                              </span>
                              <span style={{ color: "darkgrey" }}>
                                {row.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell align="right">
                            {symbol}{" "}
                            {numberWithCommas(row.current_price.toFixed(2))}
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{
                              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                              fontWeight: 500,
                            }}
                          >
                            {profit && "+"}
                            {row.price_change_percentage_24h.toFixed(2)}%
                          </TableCell>
                          <TableCell align="right">
                            {symbol}{" "}
                            {numberWithCommas(
                              row.market_cap.toString().slice(0, -6)
                            )}
                            M
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            )}
          </TableContainer>

          <Pagination
            count={(handleSearch()?.length / 10).toFixed(0)}
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            classes={{ ul: classes.pagination }}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 100);
            }}
          />
        </Container>
      </div>
    </div>
  )
}

export default CoinsTable;

