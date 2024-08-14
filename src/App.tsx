import { createThirdwebClient } from "thirdweb";
import "./App.css";
import { ConnectButton, ConnectEmbed, useActiveAccount } from "thirdweb/react";
import { optimism } from "thirdweb/chains";

// 创建 Thirdweb 客户端
const client = createThirdwebClient({
  clientId: import.meta.env.VITE_CLIENT_ID,
});

function App() {
  // 获取当前活跃的账户
  const account = useActiveAccount();

  return (
    <div className="container">
      <h1>Octopus SDK + Wallet + Pay</h1>
      <p>The simplest way to open the web3 door!</p>
      {account ? (
        // 已连接时显示 ConnectButton
        <ConnectButton 
          client={client}
          accountAbstraction={{
            factoryAddress: "0x3bA1941DC6673D07992a044df8B820dff43CA054", // Account Factory 的地址
            chain: optimism,
            sponsorGas: true,
          }}
        />
      ) : (
        // 未连接时显示 ConnectEmbed
        <ConnectEmbed 
          client={client} 
          accountAbstraction={{
            factoryAddress: "0x3bA1941DC6673D07992a044df8B820dff43CA054",
            chain: optimism,
            sponsorGas: true,
          }}
        />
      )}
    </div>
  );
}

export default App;
