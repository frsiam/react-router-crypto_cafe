import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({coin}) => {
    return (
        <div className='shadow-lg rounded-xl w-[250px] bg-white p-4'>
            <Link to='/'>
                <div className='flex justify-between items-center gap-4'>
                    <div className='flex-shrink-0'>
                        <img className='mx-auto object-cover rounded-full w-16 h-16' src={coin.image} alt="coinImg" />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <span className='text-gray-600 font-medium'>{coin.name}</span>
                        <span className='text-gray-400 text-xs'>{coin.symbol}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CoinCard;