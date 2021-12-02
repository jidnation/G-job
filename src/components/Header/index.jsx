import { useWeb3React } from "@web3-react/core"
import { Link } from "react-router-dom";
import {injected} from '../../components/wallet/connector'

function Header() {

    const { active, account,  activate, deactivate } = useWeb3React()

    async function connect() {
      try {
        await activate(injected)
      } catch (ex) {
        console.log(ex, 'error')
      }
    }
  
    async function disconnect() {
      try {
        deactivate()
      } catch (ex) {
        console.log(ex)
      }
    }

    
    return (
        <div>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        Header
        <button onClick={connect}>Connect to MetaMask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}  
      <button onClick={disconnect}>Disconnect</button>
        </div>
    )
}

export default Header
