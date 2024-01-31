import React, { useEffect } from 'react'

export default function Wiki() {
    useEffect(()=>{
        document.title = 'Руководства по установке и решения'
    },[])
  return (
    <div>Wiki</div>
  )
}