import { useState } from 'react';
import usecurrinfo from '../hooks/useCurrinfo';

function Inputbox({ label, val, currused, onamountchange, oncurrchange, currencyDisable = false, objkeys = [] }) {

    let obj = usecurrinfo(currused);

    return (
        <div className='bg-white rounded-xl p-3 flex flex-col gap-3' style={{ width: '520px', height: '80px' }}>
            <span className='flex flex-row justify-between text-zinc-700'>
                <p>{label}</p>
                <p>Currency Type</p>
            </span>
            <span className='flex flex-row justify-between'>
                <input type='number' className='border-0 h-6 bg-transparent outline-none' placeholder={!currencyDisable ? 'ENTER AMOUNT' : ''} disabled={currencyDisable} />
                <select className='w-30 outline-none' >
                    {objkeys.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </span>
        </div>
    )
}

export default Inputbox;