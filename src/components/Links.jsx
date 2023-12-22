import React from "react";

const Links = () => {
  const Data = [{
      isExternal: true,
      url: "https://bridge.dexo.exchange/",
      title: "Anonymous Transfer",
    },
    {
      isExternal: true,
      url: "https://bridge.dexo.exchange/bridge2",
      title: "Bridge",
    },
    // {
    //   isExternal: true,
    //   url: "https://staking.dexo.exchange/",
    //   title: "Staking",
    // },
    {
      isExternal: true,
      url: "https://app.dexo.exchange/swap",
      title: "Swap",
    },
    {
      isExternal: true,
      url: "https://bridge.dexo.exchange/crypto-prepaid-visa",
      title: "Crypto Visa Card",
    },
    {
      isExternal: true,
      url: "https://nft.dexo.exchange/explorer",
      title: "NFT Marketplace",
    },
  ];
  return ( <
    div className = "flex mx-auto flex-col xl:flex-row justify-center items-center" > {
      Data.map((obj) => ( <
        li className = "px-4 list-none py-3 xl:py-0 hover:text-[#6eebb7] transition-all text-white font-medium text-[18px] " >
        <
        a className = ""
        href = {
          obj.url
        }
        target = "_blank" > {
          obj.title
        } <
        /a> <
        /li>
      ))
    } <
    /div>
  );
};

export default Links;