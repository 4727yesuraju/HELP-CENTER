import React from 'react'
import { ColorRing } from 'react-loader-spinner'

function Loader({width,height}) {
  return (
    <div className="flex-grow flex justify-center w-full">

        <ColorRing
            visible={true}
            height={height || "30"}
            width={width || "30"}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  )
}

export default Loader
