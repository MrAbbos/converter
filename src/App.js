import { setAll, setCurrencies } from "./redux/converter/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  // defining variables
  let countryNames = [
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTC",
    "BTN",
    "BWP",
    "BYN",
    "BYR",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LVL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRO",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "STD",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VEF",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMK",
    "ZMW",
    "ZWL",
  ];
  const dispatch = useDispatch();

  //defining functions
  const diffe =
    useSelector((state) => state.currencyConverter.currencies) || 10650;
  const allCurr = useSelector((state) => state.currencyConverter.all);

  // fetching data
  const fetchingCurrency = async function () {
    let one = `https://free.currconv.com/api/v7/convert?apiKey=e7f7e44b70232d024210&q=${from}_${to}&compact=ultra`;

    const responseOne = await axios
      .get(one)
      .catch((error) => console.log(error));
    if (responseOne === undefined) {
      console.log(responseOne);
    } else {
      console.log(responseOne.data[Object.keys(responseOne.data)[0]]);
      dispatch(
        setCurrencies(responseOne.data[Object.keys(responseOne.data)[0]])
      );
    }
  };

  useEffect(() => {
    fetchingCurrency();
  }, []);

  //fetching data
  const fetchingAll = async function () {
    const response = await axios
      .get(
        "https://free.currconv.com/api/v7/currencies?apiKey=e7f7e44b70232d024210"
        //"http://data.fixer.io/api/latest?access_key=2c42fbcfc549f300b39df86a84033764&format=1"
      )
      .catch((error) => console.log(error));
    if (response === undefined) {
      console.log(response);
    } else {
      console.log(response.data);
      dispatch(setAll(response.data));
    }
  };

  useEffect(() => {
    fetchingAll();
  }, []);

  // currency handler
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("UZS");

  function currOnChangeHandler(e) {
    if (e.target.value.length === 3) {
      if (e.target.name === "from") {
        setFrom(e.target.value);
        console.log(from);
        fetchingCurrency();
      } else {
        setTo(e.target.value);
        fetchingCurrency();
      }
    }
  }

  // amount handling
  const [fromNum, setFromNum] = useState(0);
  const [toNum, setToNum] = useState(0);

  const NumberOnChangehandler = (e) => {
    if (e.target.name === "numberFrom") {
      setFromNum(e.target.value);
      setToNum(Math.round(e.target.value * diffe * 10) / 10);
    } else {
      setToNum(e.target.value);
      setFromNum(Math.round((e.target.value / diffe) * 100) / 100);
    }
  };

  // updating exchange when currency changes negadur ishlamadi

  // useEffect(() => {
  //   setToNum(fromNum * diffe);
  // }, [from, toNum]);
  // useEffect(() => {
  //   setFromNum(Math.round((toNum / diffe) * 100) / 100);
  // }, [to, toNum]);

  // pinned handling
  const [pinned, setPinned] = useState(["ALL"]);

  return (
    <div className="App">
      <section id="navbar">
        <div className="navbar px-12 py-6  flex justify-around border-b">
          <div>logo</div>
          <div>
            <button>Converter</button>
          </div>
        </div>
      </section>
      <section id="converter">
        <div className="converter m-12">
          <h1 className="text-center m-8">Currency converter</h1>

          <div className="from flex justify-around m-8">
            <div className="flex">
              <span>From: </span>
              <div>
                <input
                  name="from"
                  onChange={currOnChangeHandler}
                  list="brow"
                  className="border"
                  defaultValue={from}
                />
                <datalist id="brow">
                  {countryNames.map((el) => {
                    return <option key={el} value={el}></option>;
                  })}
                </datalist>
              </div>
            </div>
            <div>
              <span>Enter amount: </span>
              <input
                type="number"
                className="border"
                value={fromNum}
                name="numberFrom"
                onChange={NumberOnChangehandler}
              />
            </div>
          </div>
          <div className="to flex justify-around m-8">
            <div className="flex">
              <span>To: </span>
              <div>
                <input
                  onChange={currOnChangeHandler}
                  list="brow"
                  className="border"
                  defaultValue="UZS"
                />
                <datalist id="brow">
                  {countryNames.map((el) => {
                    return <option key={el} value={el}></option>;
                  })}
                </datalist>
              </div>
            </div>
            <div>
              <span>Enter amount: </span>
              <input
                onChange={NumberOnChangehandler}
                value={toNum}
                type="number"
                className="border"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="allCurrencies">
          <div className="pinned border-b">
            {pinned.map((el) => {
              if (el in allCurr) {
                return <div>{el}</div>;
              }
            })}
          </div>
          <div className="all">
            {Object.keys(allCurr).map(function (key, index) {
              if (pinned.includes(key) === false) {
                return (
                  <div className="flex justify-around m-2">
                    <div>{key}</div>
                    <button
                      className="border p-2"
                      onClick={setPinned([...pinned, key])}
                    >
                      pin
                    </button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
