import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usecurrinfo from './hooks/useCurrinfo.js'

function App() {
  const [curr1, setcurr1] = useState(100)
  const [curr2, setcurr2] = useState(0)
  const [currt1, setcurrt1] = useState('inr')
  const [currt2, setcurrt2] = useState('usd')


  let obj = usecurrinfo(currt1);
  let keys = Object.keys(obj);
  // console.log(keys);
  const swapclicked = () => {
    let t = currt1;
    setcurrt1(currt2);
    setcurrt2(t);
  }

  return (
    <div className="w-screen h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center" style={{
      backgroundImage: `url('https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?cs=srgb&dl=pexels-micha%C5%82-ludwiczak-1239162.jpg&fm=jpg')`
    }}>
      <div className='bg-white p-5 bg-opacity-70 rounded-xl flex flex-col items-center gap-3 relative' style={{ width: '550px' }}>
        <inputbox>
          <div className='bg-white rounded-xl p-3 flex flex-col gap-3' style={{ width: '520px', height: '80px' }}>
            <span className='flex flex-row justify-between text-zinc-700'>
              <p>FROM</p>
              <p>Currency Type</p>
            </span>
            <span className='flex flex-row justify-between'>
              <input type='number' className='border-0 h-6 bg-transparent outline-none' placeholder={'ENTER AMOUNT'} onChange={(e) => setcurr1(e.target.value)} />
              <select className='w-30 outline-none' value={currt1} onChange={(e) => setcurrt1(e.target.value)}>
                {keys.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency.toUpperCase()}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </inputbox>
        <button type='button' className='bg-blue-700 rounded-lg p-1 text-white border-white border-4 absolute' style={{ top: '90px' }} onClick={swapclicked}>SWAP</button>
        <inputbox>
          <div className='bg-white rounded-xl p-3 flex flex-col gap-3' style={{ width: '520px', height: '80px' }}>
            <span className='flex flex-row justify-between text-zinc-700'>
              <p>TO</p>
              <p>Currency Type</p>
            </span>
            <span className='flex flex-row justify-between'>
              <input type='number' className='border-0 h-6 bg-transparent outline-none' disabled value={curr2} />
              <select className='w-30 outline-none' value={currt2} onChange={(e) => setcurrt2(e.target.value)}>
                {keys.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency.toUpperCase()}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </inputbox>
        <button type='button' className='bg-blue-700 rounded-lg p-2 text-white' style={{ width: '520px' }} onClick={() => setcurr2(curr1 * obj[currt2])}>CONVERT {currt1.toUpperCase()} TO {currt2.toUpperCase()}</button>
      </div>
    </div>
  )
}

export default App