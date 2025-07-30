import React from 'react'
import { SyncLoader } from 'react-spinners'

export default function Loading() {
  return (
    <>
        <div className="w-full p-14 flex bg-tranparent  justify-center items-center ">
            <SyncLoader color="#AA60C8" size={16} />
        </div>
    </>
  )
}
