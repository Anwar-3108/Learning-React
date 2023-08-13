import {img_cdn_url} from '../config'

import React from 'react'

function FoodItems({ name, cloudinaryImageId, totalRatingsString, cuisines ,costForTwo}) {
  return (
 <>
    <img src={img_cdn_url+cloudinaryImageId} alt="img" />
    <h2>{name}</h2>
    <h3>{costForTwo/100}</h3>
 </>
  )
}

export default FoodItems
