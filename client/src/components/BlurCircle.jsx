import React from 'react'

const BlurCircle = ({
  top = 'auto',
  left = 'auto',
  right = 'auto',
  bottom = 'auto',
}) => {
  return (
    <div
      className="
        absolute
        w-[420px]
        h-[420px]
        rounded-full
        bg-red-500/35
        blur-[120px]
        -z-10
      "
      style={{
        top,
        left,
        right,
        bottom,
      }}
    />
  )
}

export default BlurCircle
