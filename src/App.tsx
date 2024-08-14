import { createThirdwebClient } from "thirdweb";
import "./App.css";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";
import { optimism } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: import.meta.env.VITE_CLIENT_ID,
});

function App() {
  const account = useActiveAccount();

  return (
    <div className="container">
      <h1>Octopus SDK + Wallet + Pay</h1>
      <p>The simplest way to open the web3 door!</p>
      <div className="wallet-container">
        {account ? (
          <ConnectButton
            client={client}
            accountAbstraction={{
              factoryAddress: "0x3bA1941DC6673D07992a044df8B820dff43CA054",
              chain: optimism,
              sponsorGas: true,
            }}
          />
        ) : (
          <ConnectEmbed
            client={client}
            accountAbstraction={{
              factoryAddress: "0x3bA1941DC6673D07992a044df8B820dff43CA054",
              chain: optimism,
              sponsorGas: true,
            }}
            showThirdwebBranding={false} // 隐藏 thirdweb branding
          />
        )}
      </div>
    </div>
  );
}

export default App;
