import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=28&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <h1 className='text-3xl font-bold text-center'>Available Crypto Currencies</h1>
            <p className='text-center font-semibold my-2 text-xl'>Total coins: <span className='text-orange-600'>{coins.length}</span></p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 mt-16'>
                {
                    coins.map(coin => <CoinCard key={coin.id} coin={coin}></CoinCard>)
                }
            </div>
        </div>
    );
};

export default Coins;