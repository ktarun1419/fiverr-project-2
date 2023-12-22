import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import FooterComponent from "./components/FooterComponent";
import AlertBox from "./components/AlertBox";
import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import CONFIG from "./abi/config";
import stakeABI from "./abi/staking.json";
import { GlobalContext } from "./context/GlobalContext";
import LoadingSpinner from "./components/LoadingSpinner";
import { useBlockChainData } from "./hooks/loadBlockchainData";
import LoadingScreen from "./components/LoadingScreen";
import TokenProvider from "./components/hooks/DataProvider";
import ComingSoon from "./components/ComingSoon";

function App() {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [dataLoading, setDataLoading] = useState(false);
  useBlockChainData(setDataLoading);

  useEffect(() => {
    // loadBlockChain()
  }, []);

  return (
    <>
      <TokenProvider>
        <div className="">
          <div className="">
            <LoadingScreen dataLoading={dataLoading} />
            <Header setError={setError} setErrMsg={setErrMsg} />
            <Main setError={setError} setErrMsg={setErrMsg} />
            {error && (
              <AlertBox
                msg={errMsg}
                setError={setError}
                setErrMsg={setErrMsg}
              />
            )}
            <ComingSoon />
          </div>
          {/* <FooterComponent /> */}
        </div>
      </TokenProvider>
    </>
  );
}

export default App;
