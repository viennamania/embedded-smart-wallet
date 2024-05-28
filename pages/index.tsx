{/*
import WebsiteMetrics from '@/app/shared/analytics-dashboard/website-metrics/table-widget';
import AccountRetention from '@/app/shared/analytics-dashboard/account-retention';
import Acquisition from '@/app/shared/analytics-dashboard/acquisition';
import ConversionRates from '@/app/shared/analytics-dashboard/conversion-rates';
import DeviceSessions from '@/app/shared/analytics-dashboard/device-sessions';
import GoalAccomplished from '@/app/shared/analytics-dashboard/goal-accomplished';
import StatCards from '@/app/shared/analytics-dashboard/stat-cards';
import TopTrafficSource from '@/app/shared/analytics-dashboard/top-traffic-source';
import UserMetrics from '@/app/shared/analytics-dashboard/user-metrics';
import PageMetrics from '@/app/shared/analytics-dashboard/page-metric/table-widget';
*/}




import {
  ConnectWallet,
  Web3Button,
  useOwnedNFTs,
  useAddress,
  useContract,
  ThirdwebNftMedia,
  useClaimNFT,
} from "@thirdweb-dev/react";


import styles from "../styles/Drop.module.css";

import { editionDropAddress } from "../const";

import { useEffect, useState } from "react";




import { NextPage } from "next";


const DropPage: NextPage = () => {



    const [toastMessageContentChecked, setToastMessageContentChecked] = useState(true);

    const address = useAddress();
    const { contract } = useContract(editionDropAddress);
    const { data, isLoading } = useOwnedNFTs(contract, address);
    const { mutateAsync: claim, isLoading: isClaiming } = useClaimNFT(contract);

    const [quantity, setQuantity] = useState(1);



    return (

        <div className="@container">




            <div className={styles.node}>
                <header className={styles.topMenu}>





                <div className={styles.topMenuContainerParent}>
                    <div className={styles.topMenuContainer}>
                        {/*
                        <div className={styles.logoContainerWrapper}>
                            <div className={styles.logoContainer}>
                            <img
                                className={styles.icon}
                                loading="lazy"
                                alt=""
                                src="/images/gpgpu/--1.svg"
                            />
                            <div className={styles.gpgpuWrapper}>
                                <img
                                className={styles.gpgpuIcon}
                                loading="lazy"
                                alt=""
                                src="/images/gpgpu/gpgpu.svg"
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className={styles.image31Parent}>
                        <img
                            className={styles.image31Icon}
                            loading="lazy"
                            alt=""
                            src="/images/gpgpu/image-31@2x.png"
                        />
                        <div className={styles.xedda28Wrapper}>
                            <div className={styles.xedda28}>0xed...da28</div>
                        </div>
                        */}
                    </div>
                </div>

                <div className={styles.gnbMenu}>
                    <div className={styles.gnbMenu1}>
                    <div className={styles.menuOn}>
                        <div className={styles.node1}>Node</div>
                    </div>
                    </div>
                    <div className={styles.gnbMenu2}>
                    <div className={styles.menuOn1}>
                        <div className={styles.stake}>Stake</div>
                    </div>
                    </div>
                    <div className={styles.gnbMenu3}>
                    <div className={styles.menuOff}>
                        <div className={styles.gp}>$GP</div>
                    </div>
                    </div>
                    <div className={styles.gnbMenu4}>
                    <div className={styles.menuOff1}>
                        <div className={styles.docs}>Docs</div>
                        <img
                        className={styles.iconthinarrowsquarein}
                        loading="lazy"
                        alt=""
                        src="/images/gpgpu/iconthinarrowsquarein.svg"
                        />
                    </div>
                    </div>
                </div>
                </header>



                <main className={styles.toastContainer}>








                <section className={styles.frameParent}>



                    <div className={styles.frameGroup}>


                    
                    <div className={styles.toastWrapper}>
                        <div className={styles.toast}>
                            {/*
                            <div className={styles.toastInner}>
                                <div className={styles.toastMessageContentParent}>
                                <input
                                    className={styles.toastMessageContent}
                                    checked={toastMessageContentChecked}
                                    type="checkbox"
                                    onChange={(event) =>
                                    setToastMessageContentChecked(event.target.checked)
                                    }
                                />
                                <div className={styles.successMessageWrapper}>
                                    <div className={styles.successMessage}>
                                    Referral code copied
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className={styles.toastChild}>
                                <img
                                className={styles.frameChild}
                                alt=""
                                src="/images/gpgpu/group-14223.svg"
                                />
                            </div>
                            */}
                        </div>
                    </div>


                    <div className={styles.frameWrapper}>
                        <div className={styles.frameContainer}>
                            <div className={styles.frameDiv}>
                                <img
                                className={styles.frameItem}
                                loading="lazy"
                                alt=""
                                src="/images/gpgpu/group-14214.svg"
                                />
                            </div>
                            <h1 className={styles.gpgpuNodeSale}>GPGPU Node Sale</h1>
                        </div>

                        <div className={styles.frameContainer}>


 





                        </div>


                    </div>

                    

        
                        
                        <div className={styles.menuPopup}>

                            {address && (
                                <ConnectWallet />
                            )}

                            <div className={styles.frameParent1}>

                            

                            {/*
                            <div className={styles.iconthingearWrapper}>
                                <img className={styles.iconthingear} alt="" />
                            </div>
                            <div className={styles.accountSettings}>Account Settings</div>
                            </div>
                            <div className={styles.frameParent2}>
                            <div className={styles.iconthinsignoutWrapper}>
                                <img
                                className={styles.iconthinsignout}
                                alt=""
                                src="/images/gpgpu/iconthinsignout.svg"
                                />
                            </div>
                            <input
                                className={styles.frameInner}
                                placeholder="Disconnect"
                                type="text"
                            />
                            */}

                            </div>
                        </div>
                        


                    </div>

                    <div className={styles.frameWrapper1}>
                    <div className={styles.referralParent}>
                        <div className={styles.referral}>
                        <div className={styles.referralLinkContentParent}>
                            <div className={styles.referralLinkContent}>
                            <div className={styles.copyReferralLinkWrapper}>
                                <h2 className={styles.copyReferralLink}>
                                Copy Referral Link
                                </h2>
                            </div>
                            <div className={styles.codeDisplayParent}>
                                <div className={styles.codeDisplay}>
                                <h1 className={styles.qqa5ut}>QQA5UT</h1>
                                <input className={styles.icon20} type="checkbox" />
                                <div className={styles.invalidPromoCode}>
                                    Invalid promo code.
                                </div>
                                </div>
                                <button className={styles.copyReferralLinkParent}>
                                <div className={styles.copyReferralLink1}>
                                    COPY REFERRAL LINK
                                </div>
                                <img
                                    className={styles.iconthinlinksimple}
                                    alt=""
                                    src="/images/gpgpu/iconthinlinksimple.svg"
                                />
                                </button>
                            </div>
                            </div>
                            <div className={styles.discountOnNodes5CashbackWrapper}>
                            <div className={styles.discountOnNodesContainer}>
                                <p className={styles.discountOnNodes}>
                                <span className={styles.span}>10%</span>
                                <span> Discount on nodes</span>
                                </p>
                                <p className={styles.cashback}>
                                <span className={styles.span1}>5%</span>
                                <span> Cashback</span>
                                </p>
                                <p className={styles.qualificationForRepresentati}>
                                Qualification for representative staker.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className={styles.tierTable}>
                        <div className={styles.tierRows}>
                            <div className={styles.tierRowContent}>
                            <div className={styles.tierData}>
                                <div className={styles.tier1}>Tier 1</div>
                                <div className={styles.eth}>0.1000ETH</div>
                            </div>
                            <div className={styles.rectangleParent}>
                                <div className={styles.rectangleDiv} />
                                <div className={styles.rowBackground} />
                            </div>
                            </div>
                            <div className={styles.tierData1}>
                            <div className={styles.tierData2}>
                                <div className={styles.tier2}>Tier 2</div>
                                <div className={styles.eth1}>0.1080ETH</div>
                            </div>
                            <div className={styles.rectangleGroup}>
                                <div className={styles.frameChild1} />
                                <div className={styles.rowBackground1} />
                            </div>
                            </div>
                            <div className={styles.tierData3}>
                            <div className={styles.tierData4}>
                                <div className={styles.tier3}>Tier 3</div>
                                <div className={styles.eth2}>0.1166ETH</div>
                            </div>
                            <div className={styles.rectangleContainer}>
                                <div className={styles.frameChild2} />
                                <div className={styles.rowBackground2} />
                            </div>
                            </div>
                            <div className={styles.tierData5}>
                            <div className={styles.tierData6}>
                                <div className={styles.tier4}>Tier 4</div>
                                <div className={styles.eth3}>0.1166ETH</div>
                            </div>
                            <div className={styles.groupDiv}>
                                <div className={styles.frameChild3} />
                                <div className={styles.rowBackground3} />
                            </div>
                            <div className={styles.rectangleParent1}>
                                <div className={styles.frameChild4} />
                                <img
                                className={styles.groupIcon}
                                loading="lazy"
                                alt=""
                                src="/images/gpgpu/group-14225.svg"
                                />
                            </div>
                            </div>
                        </div>
                        <div className={styles.frameParent3}>
                            <div className={styles.frameParent4}>
                            <img
                                className={styles.frameChild5}
                                loading="lazy"
                                alt=""
                                src="/images/gpgpu/group-14213.svg"
                            />
                            <div className={styles.frameParent5}>
                                <div className={styles.frameParent6}>
                                <div className={styles.gpgpuNodeTier1Wrapper}>
                                    <h2 className={styles.gpgpuNode}>
                                    GPGPU Node - Tier 1
                                    </h2>
                                </div>
                                <div className={styles.youCanBuy}>
                                    You can buy 5 per wallet
                                </div>
                                </div>
                                <div className={styles.ethParent}>
                                <div className={styles.eth4}>0.1ETH</div>
                                <div className={styles.usd}>≈ 302.77USD</div>
                                </div>
                            </div>
                            </div>
                            <div className={styles.remainingWrapper}>
                            <div className={styles.remaining}>
                                <div className={styles.remainingNode}>Remaining Node</div>
                                <div className={styles.rectangleParent2}>
                                <div className={styles.frameChild6} />
                                <div className={styles.indicatorBackground} />
                                </div>
                                <div className={styles.parent}>
                                <div className={styles.div}>4892/5000</div>
                                <div className={styles.div1}>97.8%</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tierSelector}>
                            <div className={styles.tierOne}>
                            <img
                                className={styles.component1Icon}
                                loading="lazy"
                                alt=""
                                src="/images/gpgpu/component-1.svg"
                            />
                            </div>
                            <div className={styles.separator}>0</div>
                            <div className={styles.tierTwo}>
                            <img
                                className={styles.component1Icon1}
                                loading="lazy"
                                alt=""
                                src="/images/gpgpu/component-1-1.svg"
                            />
                            <button className={styles.maxTier}>
                                <div className={styles.max}>MAX</div>
                            </button>
                            </div>
                        </div>
                        <div className={styles.referral1}>
                            <div className={styles.code}>
                            <h2 className={styles.referralCode}>Referral Code</h2>
                            <div className={styles.discountApplied}>
                                10% discount applied
                            </div>
                            </div>
                            <div className={styles.input}>
                            <div className={styles.codeField}>
                                <h1 className={styles.enterCode}>Enter code</h1>
                                <div className={styles.invalidPromoCode1}>
                                Invalid promo code.
                                </div>
                            </div>
                            <button className={styles.applyButton}>
                                <div className={styles.apply}>Apply</div>
                            </button>
                            </div>
                        </div>
                        <div className={styles.total}>
                            <div className={styles.calculation}>
                            <div className={styles.value}>
                                <h2 className={styles.total1}>Total</h2>
                                <div className={styles.perNode01}>per Node 0.1 ETH</div>
                            </div>
                            <div className={styles.totalValue}>
                                <div className={styles.eth5}>0 ETH</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.agreement}>
                            <div className={styles.checkbox}>
                            <input className={styles.checkmark} type="checkbox" />
                            <div className={styles.agreeToThe}>
                                Agree to the terms of the GPGPU Node
                            </div>
                            </div>
                            <div className={styles.checkbox1}>
                            <input className={styles.frameInput} type="checkbox" />
                            <input
                                className={styles.iUnderstandThat}
                                placeholder="I understand that I can receive rewards through KYC"
                                type="text"
                            />
                            </div>
                        </div>
                        
                        {address && (
                            <button
                                className={styles.tierRows1}
                                onClick={() => {
                                    claim({
                                        tokenId: 0,
                                        quantity: 1,
                                    });
                                }}
                            >
                                <div className={styles.confirm}>Confirm</div>
                            </button>
                        )}
                        

                        {!address && (
                            <ConnectWallet />
                        )}

  


                            
                        {address && isLoading ? <p>Loading Owned NFTs...</p> : null}

                        {address && !isLoading && data && data.length === 0 ? (
                        <p>
                            {isClaiming
                            ? "Claiming..."
                            : ""}
                        </p>
                        ) : null}

                        {data &&
                            data?.map((nft) => (
                                <div key={nft.metadata.id}
                                className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg"
                                >
                                <ThirdwebNftMedia metadata={nft.metadata} />
                                <p>
                                    You own {nft.quantityOwned} {
                                        //nft.metadata.name
                                       
                                    } Node
                                </p>
                                </div>
                            ))
                        }



                        </div>
                        <div className={styles.tier}>
                        <div className={styles.tableContent}>
                            <div className={styles.tierRow}>
                            <div className={styles.tierData7}>
                                <div className={styles.tier5}>Tier</div>
                            </div>
                            <div className={styles.priceRow}>
                                <div className={styles.priceeth}>Price(ETH)</div>
                            </div>
                            <div className={styles.uSDRow}>
                                <div className={styles.usd1}>USD</div>
                            </div>
                            </div>
                            <div className={styles.amountRow}>
                            <div className={styles.amountData}>
                                <div className={styles.amount}>Amount</div>
                            </div>
                            <div className={styles.walletCapRow}>
                                <div className={styles.walletPerCap}>Wallet per Cap</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableBackground} />
                        <div className={styles.tableContent1}>
                            <div className={styles.frameParent7}>
                            <div className={styles.wrapper}>
                                <div className={styles.div2}>1</div>
                            </div>
                            <div className={styles.container}>
                                <div className={styles.div3}>0.0600</div>
                            </div>
                            <div className={styles.frame}>
                                <div className={styles.div4}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent8}>
                            <div className={styles.wrapper1}>
                                <div className={styles.div5}>7,000</div>
                            </div>
                            <div className={styles.wrapper2}>
                                <div className={styles.div6}>5</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent2}>
                            <div className={styles.frameParent9}>
                            <div className={styles.wrapper3}>
                                <div className={styles.div7}>2</div>
                            </div>
                            <div className={styles.wrapper4}>
                                <div className={styles.div8}>0.0648</div>
                            </div>
                            <div className={styles.wrapper5}>
                                <div className={styles.div9}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent10}>
                            <div className={styles.wrapper6}>
                                <div className={styles.div10}>6,800</div>
                            </div>
                            <div className={styles.wrapper7}>
                                <div className={styles.div11}>10</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent3}>
                            <div className={styles.frameParent11}>
                            <div className={styles.wrapper8}>
                                <div className={styles.div12}>3</div>
                            </div>
                            <div className={styles.wrapper9}>
                                <div className={styles.div13}>0.0700</div>
                            </div>
                            <div className={styles.wrapper10}>
                                <div className={styles.div14}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent12}>
                            <div className={styles.wrapper11}>
                                <div className={styles.div15}>6,600</div>
                            </div>
                            <div className={styles.wrapper12}>
                                <div className={styles.div16}>15</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent4}>
                            <div className={styles.frameParent13}>
                            <div className={styles.wrapper13}>
                                <div className={styles.div17}>4</div>
                            </div>
                            <div className={styles.wrapper14}>
                                <div className={styles.div18}>0.0816</div>
                            </div>
                            <div className={styles.wrapper15}>
                                <div className={styles.div19}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent14}>
                            <div className={styles.wrapper16}>
                                <div className={styles.div20}>6,400</div>
                            </div>
                            <div className={styles.wrapper17}>
                                <div className={styles.div21}>20</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent5}>
                            <div className={styles.frameParent15}>
                            <div className={styles.wrapper18}>
                                <div className={styles.div22}>5</div>
                            </div>
                            <div className={styles.wrapper19}>
                                <div className={styles.div23}>0.0882</div>
                            </div>
                            <div className={styles.wrapper20}>
                                <div className={styles.div24}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent16}>
                            <div className={styles.wrapper21}>
                                <div className={styles.div25}>6,200</div>
                            </div>
                            <div className={styles.wrapper22}>
                                <div className={styles.div26}>30</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent6}>
                            <div className={styles.frameParent17}>
                            <div className={styles.wrapper23}>
                                <div className={styles.div27}>6</div>
                            </div>
                            <div className={styles.wrapper24}>
                                <div className={styles.div28}>0.0952</div>
                            </div>
                            <div className={styles.wrapper25}>
                                <div className={styles.div29}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent18}>
                            <div className={styles.wrapper26}>
                                <div className={styles.div30}>6,000</div>
                            </div>
                            <div className={styles.wrapper27}>
                                <div className={styles.div31}>40</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent7}>
                            <div className={styles.frameParent19}>
                            <div className={styles.wrapper28}>
                                <div className={styles.div32}>7</div>
                            </div>
                            <div className={styles.wrapper29}>
                                <div className={styles.div33}>0.1028</div>
                            </div>
                            <div className={styles.wrapper30}>
                                <div className={styles.div34}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent20}>
                            <div className={styles.wrapper31}>
                                <div className={styles.div35}>6,000</div>
                            </div>
                            <div className={styles.wrapper32}>
                                <div className={styles.div36}>50</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent8}>
                            <div className={styles.frameParent21}>
                            <div className={styles.wrapper33}>
                                <div className={styles.div37}>8</div>
                            </div>
                            <div className={styles.wrapper34}>
                                <div className={styles.div38}>0.1111</div>
                            </div>
                            <div className={styles.wrapper35}>
                                <div className={styles.div39}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent22}>
                            <div className={styles.wrapper36}>
                                <div className={styles.div40}>6,000</div>
                            </div>
                            <div className={styles.wrapper37}>
                                <div className={styles.div41}>100</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent9}>
                            <div className={styles.frameParent23}>
                            <div className={styles.wrapper38}>
                                <div className={styles.div42}>9</div>
                            </div>
                            <div className={styles.wrapper39}>
                                <div className={styles.div43}>0.1199</div>
                            </div>
                            <div className={styles.wrapper40}>
                                <div className={styles.div44}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent24}>
                            <div className={styles.wrapper41}>
                                <div className={styles.div45}>5,800</div>
                            </div>
                            <div className={styles.wrapper42}>
                                <div className={styles.div46}>200</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent10}>
                            <div className={styles.frameParent25}>
                            <div className={styles.wrapper43}>
                                <div className={styles.div47}>10</div>
                            </div>
                            <div className={styles.wrapper44}>
                                <div className={styles.div48}>0.1295</div>
                            </div>
                            <div className={styles.wrapper45}>
                                <div className={styles.div49}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent26}>
                            <div className={styles.wrapper46}>
                                <div className={styles.div50}>5,600</div>
                            </div>
                            <div className={styles.wrapper47}>
                                <div className={styles.div51}>300</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent11}>
                            <div className={styles.frameParent27}>
                            <div className={styles.wrapper48}>
                                <div className={styles.div52}>11</div>
                            </div>
                            <div className={styles.wrapper49}>
                                <div className={styles.div53}>0.1399</div>
                            </div>
                            <div className={styles.wrapper50}>
                                <div className={styles.div54}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent28}>
                            <div className={styles.wrapper51}>
                                <div className={styles.div55}>5,400</div>
                            </div>
                            <div className={styles.wrapper52}>
                                <div className={styles.div56}>400</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent12}>
                            <div className={styles.frameParent29}>
                            <div className={styles.wrapper53}>
                                <div className={styles.div57}>12</div>
                            </div>
                            <div className={styles.wrapper54}>
                                <div className={styles.div58}>0.1511</div>
                            </div>
                            <div className={styles.wrapper55}>
                                <div className={styles.div59}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent30}>
                            <div className={styles.wrapper56}>
                                <div className={styles.div60}>5,200</div>
                            </div>
                            <div className={styles.wrapper57}>
                                <div className={styles.div61}>500</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent13}>
                            <div className={styles.frameParent31}>
                            <div className={styles.wrapper58}>
                                <div className={styles.div62}>13</div>
                            </div>
                            <div className={styles.wrapper59}>
                                <div className={styles.div63}>0.1632</div>
                            </div>
                            <div className={styles.wrapper60}>
                                <div className={styles.div64}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent32}>
                            <div className={styles.wrapper61}>
                                <div className={styles.div65}>5,000</div>
                            </div>
                            <div className={styles.wrapper62}>
                                <div className={styles.div66}>1,000</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent14}>
                            <div className={styles.frameParent33}>
                            <div className={styles.wrapper63}>
                                <div className={styles.div67}>14</div>
                            </div>
                            <div className={styles.wrapper64}>
                                <div className={styles.div68}>0.1762</div>
                            </div>
                            <div className={styles.wrapper65}>
                                <div className={styles.div69}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent34}>
                            <div className={styles.wrapper66}>
                                <div className={styles.div70}>4,800</div>
                            </div>
                            <div className={styles.unlimitedWrapper}>
                                <div className={styles.unlimited}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent15}>
                            <div className={styles.frameParent35}>
                            <div className={styles.wrapper67}>
                                <div className={styles.div71}>15</div>
                            </div>
                            <div className={styles.wrapper68}>
                                <div className={styles.div72}>0.1762</div>
                            </div>
                            <div className={styles.wrapper69}>
                                <div className={styles.div73}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent36}>
                            <div className={styles.wrapper70}>
                                <div className={styles.div74}>4,600</div>
                            </div>
                            <div className={styles.unlimitedContainer}>
                                <div className={styles.unlimited1}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent16}>
                            <div className={styles.frameParent37}>
                            <div className={styles.wrapper71}>
                                <div className={styles.div75}>16</div>
                            </div>
                            <div className={styles.wrapper72}>
                                <div className={styles.div76}>0.1903</div>
                            </div>
                            <div className={styles.wrapper73}>
                                <div className={styles.div77}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent38}>
                            <div className={styles.wrapper74}>
                                <div className={styles.div78}>4,400</div>
                            </div>
                            <div className={styles.unlimitedFrame}>
                                <div className={styles.unlimited2}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent17}>
                            <div className={styles.frameParent39}>
                            <div className={styles.wrapper75}>
                                <div className={styles.div79}>17</div>
                            </div>
                            <div className={styles.wrapper76}>
                                <div className={styles.div80}>0.2056</div>
                            </div>
                            <div className={styles.wrapper77}>
                                <div className={styles.div81}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent40}>
                            <div className={styles.wrapper78}>
                                <div className={styles.div82}>4,200</div>
                            </div>
                            <div className={styles.unlimitedWrapper1}>
                                <div className={styles.unlimited3}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent18}>
                            <div className={styles.frameParent41}>
                            <div className={styles.wrapper79}>
                                <div className={styles.div83}>18</div>
                            </div>
                            <div className={styles.wrapper80}>
                                <div className={styles.div84}>0.2220</div>
                            </div>
                            <div className={styles.wrapper81}>
                                <div className={styles.div85}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent42}>
                            <div className={styles.wrapper82}>
                                <div className={styles.div86}>4,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper2}>
                                <div className={styles.unlimited4}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent19}>
                            <div className={styles.frameParent43}>
                            <div className={styles.wrapper83}>
                                <div className={styles.div87}>19</div>
                            </div>
                            <div className={styles.wrapper84}>
                                <div className={styles.div88}>0.2398</div>
                            </div>
                            <div className={styles.wrapper85}>
                                <div className={styles.div89}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent44}>
                            <div className={styles.wrapper86}>
                                <div className={styles.div90}>3,800</div>
                            </div>
                            <div className={styles.unlimitedWrapper3}>
                                <div className={styles.unlimited5}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent20}>
                            <div className={styles.frameParent45}>
                            <div className={styles.wrapper87}>
                                <div className={styles.div91}>20</div>
                            </div>
                            <div className={styles.wrapper88}>
                                <div className={styles.div92}>0.2589</div>
                            </div>
                            <div className={styles.wrapper89}>
                                <div className={styles.div93}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent46}>
                            <div className={styles.wrapper90}>
                                <div className={styles.div94}>3,600</div>
                            </div>
                            <div className={styles.unlimitedWrapper4}>
                                <div className={styles.unlimited6}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent21}>
                            <div className={styles.frameParent47}>
                            <div className={styles.wrapper91}>
                                <div className={styles.div95}>21</div>
                            </div>
                            <div className={styles.wrapper92}>
                                <div className={styles.div96}>0.2797</div>
                            </div>
                            <div className={styles.wrapper93}>
                                <div className={styles.div97}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent48}>
                            <div className={styles.wrapper94}>
                                <div className={styles.div98}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper5}>
                                <div className={styles.unlimited7}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent22}>
                            <div className={styles.frameParent49}>
                            <div className={styles.wrapper95}>
                                <div className={styles.div99}>22</div>
                            </div>
                            <div className={styles.wrapper96}>
                                <div className={styles.div100}>0.3020</div>
                            </div>
                            <div className={styles.wrapper97}>
                                <div className={styles.div101}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent50}>
                            <div className={styles.wrapper98}>
                                <div className={styles.div102}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper6}>
                                <div className={styles.unlimited8}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent23}>
                            <div className={styles.frameParent51}>
                            <div className={styles.wrapper99}>
                                <div className={styles.div103}>23</div>
                            </div>
                            <div className={styles.wrapper100}>
                                <div className={styles.div104}>0.3262</div>
                            </div>
                            <div className={styles.wrapper101}>
                                <div className={styles.div105}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent52}>
                            <div className={styles.wrapper102}>
                                <div className={styles.div106}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper7}>
                                <div className={styles.unlimited9}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent24}>
                            <div className={styles.frameParent53}>
                            <div className={styles.wrapper103}>
                                <div className={styles.div107}>24</div>
                            </div>
                            <div className={styles.wrapper104}>
                                <div className={styles.div108}>0.3523</div>
                            </div>
                            <div className={styles.wrapper105}>
                                <div className={styles.div109}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent54}>
                            <div className={styles.wrapper106}>
                                <div className={styles.div110}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper8}>
                                <div className={styles.unlimited10}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent25}>
                            <div className={styles.frameParent55}>
                            <div className={styles.wrapper107}>
                                <div className={styles.div111}>25</div>
                            </div>
                            <div className={styles.wrapper108}>
                                <div className={styles.div112}>0.3805</div>
                            </div>
                            <div className={styles.wrapper109}>
                                <div className={styles.div113}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent56}>
                            <div className={styles.wrapper110}>
                                <div className={styles.div114}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper9}>
                                <div className={styles.unlimited11}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent26}>
                            <div className={styles.frameParent57}>
                            <div className={styles.wrapper111}>
                                <div className={styles.div115}>26</div>
                            </div>
                            <div className={styles.wrapper112}>
                                <div className={styles.div116}>0.4109</div>
                            </div>
                            <div className={styles.wrapper113}>
                                <div className={styles.div117}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent58}>
                            <div className={styles.wrapper114}>
                                <div className={styles.div118}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper10}>
                                <div className={styles.unlimited12}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent27}>
                            <div className={styles.frameParent59}>
                            <div className={styles.wrapper115}>
                                <div className={styles.div119}>27</div>
                            </div>
                            <div className={styles.wrapper116}>
                                <div className={styles.div120}>0.4438</div>
                            </div>
                            <div className={styles.wrapper117}>
                                <div className={styles.div121}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent60}>
                            <div className={styles.wrapper118}>
                                <div className={styles.div122}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper11}>
                                <div className={styles.unlimited13}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent28}>
                            <div className={styles.frameParent61}>
                            <div className={styles.wrapper119}>
                                <div className={styles.div123}>28</div>
                            </div>
                            <div className={styles.wrapper120}>
                                <div className={styles.div124}>0.4793</div>
                            </div>
                            <div className={styles.wrapper121}>
                                <div className={styles.div125}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent62}>
                            <div className={styles.wrapper122}>
                                <div className={styles.div126}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper12}>
                                <div className={styles.unlimited14}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent29}>
                            <div className={styles.frameParent63}>
                            <div className={styles.wrapper123}>
                                <div className={styles.div127}>29</div>
                            </div>
                            <div className={styles.wrapper124}>
                                <div className={styles.div128}>0.5176</div>
                            </div>
                            <div className={styles.wrapper125}>
                                <div className={styles.div129}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent64}>
                            <div className={styles.wrapper126}>
                                <div className={styles.div130}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper13}>
                                <div className={styles.unlimited15}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        <div className={styles.tableContent30}>
                            <div className={styles.frameParent65}>
                            <div className={styles.wrapper127}>
                                <div className={styles.div131}>30</div>
                            </div>
                            <div className={styles.wrapper128}>
                                <div className={styles.div132}>0.5590</div>
                            </div>
                            <div className={styles.wrapper129}>
                                <div className={styles.div133}>-</div>
                            </div>
                            </div>
                            <div className={styles.frameParent66}>
                            <div className={styles.wrapper130}>
                                <div className={styles.div134}>1,000</div>
                            </div>
                            <div className={styles.unlimitedWrapper14}>
                                <div className={styles.unlimited16}>Unlimited</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </main>
                <footer className={styles.footer}>
                <div className={styles.footerBackground} />
                <div className={styles.footerContent}>
                    <div className={styles.footerInfo}>
                    <img
                        className={styles.icon1}
                        loading="lazy"
                        alt=""
                        src="/images/gpgpu/--1-1.svg"
                    />
                    <div className={styles.copyrightByGpgpuai}>
                        © Copyright by gpgpu.ai, inc.
                    </div>
                    <div className={styles.social}>
                        <img
                        className={styles.socialIcons}
                        loading="lazy"
                        alt=""
                        src="/images/gpgpu/frame-14215.svg"
                        />
                        <img
                        className={styles.socialIcons1}
                        loading="lazy"
                        alt=""
                        src="/images/gpgpu/frame-14216.svg"
                        />
                    </div>
                    </div>
                </div>
                </footer>
            </div>













            <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">

            {/*
            <StatCards className="grid-cols-1 @xl:grid-cols-2 @4xl:col-span-2 @6xl:grid-cols-4 @7xl:col-span-12" />

            <Acquisition className="@7xl:col-span-4" />

            <DeviceSessions className="@7xl:col-span-4" />

            <TopTrafficSource className="@7xl:col-span-4" />

            <UserMetrics className="@4xl:col-span-2 @7xl:col-span-12" />

            */}
            
            {/*
            <GoalAccomplished className="@4xl:col-start-2 @4xl:row-start-3 @7xl:col-span-6 @7xl:col-start-auto @7xl:row-start-auto @[90rem]:col-span-5 @[112rem]:col-span-4" />

            <ConversionRates className="@7xl:col-span-6 @[90rem]:col-span-7 @[112rem]:col-span-8" />
            */}



            {/*
            <PageMetrics className="@4xl:col-span-2 @4xl:row-start-5 @7xl:col-span-12 @7xl:row-start-auto @[90rem]:col-span-7 @[112rem]:col-span-8" />

            <AccountRetention className="@7xl:col-span-12 @[90rem]:col-span-5 @[112rem]:col-span-4" />

            <WebsiteMetrics className="@4xl:col-span-2 @7xl:col-span-12" />
            */}


            </div>
        </div>
    );
}


export default DropPage;