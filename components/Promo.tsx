import React from 'react'

const Promo = () => {
  return (
    <div>
      <video className="w-full"  muted controls>
        <source src="https://youtu.be/t8U7GRrlYW8?t=160" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Promo
