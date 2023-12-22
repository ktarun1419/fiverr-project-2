import classNames from "classnames"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"

const StakeDetails = ({plan, plans, setPlan}) => {
    const { blockChainData } = useContext(GlobalContext)

    function convertTimestamp(timestamp) {
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
            ampm = 'AM',
            time;
    
        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }
    
        // ie: 2014-03-24, 3:00 PM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
        return time;
    }

    
    console.log("blockchainData: ", plan.Rewardperday);
    
    useEffect(()=>{
        setPlan(plans[0])
    }, [blockChainData.apy.one_month_apy, blockChainData.apy.three_month_apy, blockChainData.apy.six_month_apy, blockChainData.apy.nine_month_apy, blockChainData.apy.one_year_apy])
    
    return (
        <>
            <div className="p-6 flex items-center justify-center space-x-2 md:space-x-8 text-white">
                <button className={classNames('uppercase min-w-[90px] bg-white font-bold truncate text-sm px-4 py-2 rounded-full bg-gradient-to-r from-[#53f] to-[#c561ff]', {'scale-110': plan.plan === 0})} onClick={()=> setPlan(plans[0])}>15 Days</button>

                <button className={classNames('uppercase min-w-[90px] bg-white font-bold truncate text-sm px-4 py-2 rounded-full bg-gradient-to-r from-[#53f] to-[#c561ff]', {'scale-110': plan.plan === 1})} onClick={()=> setPlan(plans[1])}>30 Days</button>

                <button className={classNames('uppercase min-w-[90px] bg-white font-bold truncate text-sm px-4 py-2 rounded-full bg-gradient-to-r from-[#53f] to-[#c561ff]', {'scale-110': plan.plan === 2})} onClick={()=> setPlan(plans[2])}>90 Days</button>
            </div>
            <div className="p-6 pt-1 flex items-center justify-center space-x-2 md:space-x-8 text-white">
                <button className={classNames('uppercase min-w-[90px] bg-white font-bold truncate text-sm px-4 py-2 rounded-full bg-gradient-to-r from-[#53f] to-[#c561ff]', {'scale-110': plan.plan === 3})} onClick={()=> setPlan(plans[3])}>120 Days</button>

                <button className={classNames('uppercase min-w-[90px] bg-white font-bold truncate text-sm px-4 py-2 rounded-full bg-gradient-to-r from-[#53f] to-[#c561ff]', {'scale-110': plan.plan === 4})} onClick={()=> setPlan(plans[4])}>12 Months</button>
            </div>
            <div className="mt-4 flex items-start justify-between">
                <div className="space-y-4 text-sm mr-4">
                    <p className="text-left">Lock period: {plan.duration}</p>
                    <p className="text-left">Re-locks on registration: Yes</p>
                    <p className="text-left">Status: Locked</p>
                    <p className="text-left">Daily Reward: {plan.Rewardperday === "0.0" ? "" :Number(plan.Rewardperday).toFixed(3)}</p>
                    <p className="text-left">Unstake Time: {!plan.ExpireDay || plan.ExpireDay === "1296000"? "" : convertTimestamp(plan.ExpireDay)}</p>
                </div>
                <div className="text-center md:mr-6">
                    <h3 className="uppercase text-2xl font-bold">APY</h3>
                    <h1 className="font-bold text-4xl text-[#c561ff]" >{plan.apy && parseFloat(plan.apy.toString())/100}%</h1>
                </div>
            </div>
        </>
    )
}

export default StakeDetails