import React from 'react'

const CopyIcon = ({ iconColor, width, height }) => (
    <svg
        width={width ? width : 15}
        height={height ? height : 17}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.333 4.333v10h2v-10h-2ZM11.667 15H3.333v2h8.334v-2Zm-9-.667v-10h-2v10h2Zm.666-10.666H5v-2H3.333v2Zm6.667 0h1.667v-2H10v2ZM3.333 15a.667.667 0 0 1-.666-.667h-2A2.667 2.667 0 0 0 3.333 17v-2Zm9-.667a.667.667 0 0 1-.666.667v2a2.667 2.667 0 0 0 2.666-2.667h-2Zm2-10a2.667 2.667 0 0 0-2.666-2.666v2c.368 0 .666.298.666.666h2Zm-11.666 0c0-.368.298-.666.666-.666v-2A2.667 2.667 0 0 0 .667 4.333h2Zm4-2.333h1.666V0H6.667v2Zm1.666 1.333H6.667v2h1.666v-2Zm-1.666 0A.667.667 0 0 1 6 2.667H4a2.667 2.667 0 0 0 2.667 2.666v-2ZM9 2.667a.667.667 0 0 1-.667.666v2A2.667 2.667 0 0 0 11 2.667H9ZM8.333 2c.369 0 .667.298.667.667h2A2.667 2.667 0 0 0 8.333 0v2ZM6.667 0A2.667 2.667 0 0 0 4 2.667h2C6 2.298 6.298 2 6.667 2V0Z"
            fill={iconColor ? iconColor : '#576788'}
        />
    </svg>
)

export default CopyIcon