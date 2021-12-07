/* eslint-disable jsx-a11y/alt-text */
// import { useWeb3React } from "@web3-react/core"
// import { injected } from "../../components/wallet/connector"
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
//  import { ConnectButton, Hero, HeroTextDiv, Span, TwoPartDiv, Wrapper, Circle, SocialsWrapper} from "./style"
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FB from "../../assets/facebook.png";
import TW from "../../assets/twitter.png";
import DS from "../../assets/discord.png";
import lily from "../../assets/lilypad.png";
import ChillFr from "../../assets/frog.gif.gif";

toast.configure();
const mainnetChainId = "0x1";
const Home = () => {
  //   const { active,  activate, deactivate } = useWeb3React()
  // //account, library, connector,

  //   async function disconnect() {
  //     try {
  //       deactivate()
  //     } catch (ex) {
  //       console.log(ex)
  //     }
  //   }

  //   async function connect() {
  //     if (!window.ethereum) {
  //       return toast.error("Please install MetaMask to use this website")
  //     }

  //     if (active) { return disconnect() }

  //     try {
  //       await activate(injected)
  //     } catch (ex) {
  //       console.log(ex, 'error')
  //     }
  //   }

  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      toast.error("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    checkForNetwork(ethereum);

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      toast.error("No authorized account found");
    }
  };

  /*
   * Implement your connectWallet method here
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.error("Get MetaMask!");
        return;
      }

      /*
       * Fancy method to request access to account.
       */
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      checkForNetwork(ethereum);

      /*
       * Boom! This should print out public address once we authorize Metamask.
       */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const disConnectWallet = () => setCurrentAccount("");

  const checkForNetwork = async (ethereum) => {
    let chainId = await ethereum.request({ method: "eth_chainId" });
    console.log("Connected to chain " + chainId);

    // String, hex code of the chainId of the Rinkebey test network

    if (chainId !== mainnetChainId) {
      toast.error("You are not connected to the main Network!");
    }
  };

  useEffect(() => {
    //checkIfWalletIsConnected();
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async () => {
        checkIfWalletIsConnected();
      });

      window.ethereum.on("chainChanged", async (chainId) => {
        checkIfWalletIsConnected();
      });
    }
    return () => {};
  }, [checkIfWalletIsConnected]);

  return (
    <div className="container">
      <div className="container1">
        <div className="first">
          <div className= 'contain'>
            <h1> Welcome to Chill Frogs</h1>
            <img src={lily} />
          </div>

          <h3>
            <span>Frozen</span> Hands
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            qui odit itaque sit numquam ducimus ullam, aperiam voluptates
            voluptatem quam ad? Soluta eveniet repudiandae voluptates aliquam
            deleniti, molestias totam repellendus, aperiam voluptates voluptatem
            quam ad? Soluta eveniet repudiandae voluptates aliquam deleniti,
            molestias totam repellendus Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis qui odit itaque sit numquam ducimus
            ullam, aperiam voluptates voluptatem quam ad? Soluta eveniet
            repudiandae voluptates aliquam deleniti, molestias totam
            repellendus!{" "}
          </p>
          <div className="buttonCont">
            {currentAccount === "" ? (
              <button onClick={connectWallet} className="button">
                {" "}
                Connect Wallet{" "}
              </button>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
        <footer>
          <div>
            <img src={TW} alt="twitter" />
          </div>
          <div>
            <img src={DS} alt="discord" />
          </div>
          <div>
            <img src={FB} alt="facebook" />
          </div>
        </footer>
        <div className="second">
          <div className="gifBack">
            <div className="gifImage"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// <>

//       <h1>Welcome to Chill Frogs</h1>
//       <h2 style ={{wordSpacing:'3rem'}}>
//         <Span>
//            {/* primary outline */}
//         Frozen
//         </Span>
//         <Span>
//           {/* warning */}
//         Hands
//         </Span>
//          </h2>
//       <p style ={{color:'whitesmoke', lineHeight:'1.5rem'}}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web
//       m Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web
//         </p>

//          {currentAccount === "" ?  <ConnectButton onClick={connectWallet} > Connect Wallet </ConnectButton>
//           : ''}
//       {/* </HeroTextDiv> */}

//   {/* <Wrapper>
//     <Circle> */}
//   <img src = {ChillFr} alt = 'fr'/>

//     {/* </Circle>
//     </Wrapper>   */}

//    {/* </TwoPartDiv> */}

// {/* <SocialsWrapper> */}
// <div>
// <img src = {TW} alt = 'twitter' />
// </div>
// <div>
// <img src = {DS} alt = 'discord' />
// </div>
// <div>
// <img src = {FB} alt = 'facebook' />
// </div>
//  {/* </SocialsWrapper> */}

//  {/* </Hero> */}
// </>
//   );
// }

export default Home;
