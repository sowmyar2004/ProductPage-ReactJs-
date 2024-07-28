import React from 'react';
import classes from './ProductPreview.module.css'

export const ProductPreview = (props) => {
    const currenthour=new Date().getHours()>9?new Date().getHours():'0'+new Date().getHours();
    const currentmin=new Date().getMinutes()>9?new Date().getMinutes():'0'+new Date().getMinutes();
  return (
    
    <div className={classes.Productpre}>
        <img src={props.currentPreviewimg} alt="" srcset="" />
        {
          props.currentselectedfeature === 1?        
          <div className={classes.heartbeatsection}>
            <i className="fa-solid fa-heart-pulse"></i>
            <p>76</p>
        </div>
        :
        <div className={classes.timesection}>
        <p>{`${currenthour}:${currentmin}`}</p>
        </div>

        }
    </div>
  )
}
