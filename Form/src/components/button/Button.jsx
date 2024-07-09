import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import btn from './Button.module.css'

function Button({isOutline,icon,text}) {
  return (
    <button  className={isOutline ?  btn.btns2 : btn.btns}>
        {icon}
       {text}
      
    </button>
  )
}

export default Button