import React from 'react'

const logoUrl = process.env.REACT_APP_logoURL;

export default function Header() {
    return (
        <div className="header"> 
        <p className="title">La memeteo</p>
          <img src={logoUrl} className="logo" alt="Memeteo logo"/>
        </div>
    )
}
