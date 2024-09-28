import React from 'react'
import { useTheme } from '../context/ThemeContext'

function Footer() {
  const {theme} = useTheme();
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h6 className={`text-center
        ${theme === "light" ? "text-neutral-900" : "text-neutral-400"}
        `}>Made with ❤️ by Kamal Kant Sahu</h6>
    </div>
  )
}

export default Footer
