import React from 'react'

type geoProps = {
    action:  ()=> void 
}

export default function Geoloc({action}: geoProps) {
    return (
              <button className="btn-city" title="Use your geolocalization coords" onClick={ ()=> action() }> 
              <i className="fas fa-map-marked-alt fa-2x icon"></i> </button>
    )
}
