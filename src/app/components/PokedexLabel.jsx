import React from 'react'

export default function PokedexLabel({className}) {
  return (
    <div className={`grid grid-cols-1 self-start justify-self-start col-span-2 w-full 2xl:max-w-xl `}>
        <p className="fixed justify-self-center top-[10] bg-white px-2 rounded-md w-full max-w-xl text-center font-bold text-6xl tracking-widest">
          POKéDEX
        </p>
        <div className="grid text-5xl max-w-xl text-white text-center fixed top-[25%] justify-self-start w-60">
          <p className={`border-b-4 border-white-500 justify-self-center ${className}`}>
            AVISTADOS
          </p>
          <h2 className={`justify-self-center ${className}`}>133</h2>
        </div>
        <div className="grid text-5xl max-w-xl text-white text-center fixed top-[50%] justify-self-start w-60">
          <p className={`border-b-4 border-white-500  justify-self-center ${className}`}>
            ATRAPADOS
          </p>
          <p className={`justify-self-center ${className}`}>133</p>
        </div>
      </div>
  )
}
