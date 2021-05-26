import React, { ComponentProps } from 'react'

export default function Geoloc({props}: any) {
    return (
        <div>
              <button className="btn-city" title="Use your geolocalization coords" onClick={ ()=> props.action() }> <i className="fas fa-map-marked-alt fa-2x icon"></i> </button>
        </div>
    )
}
