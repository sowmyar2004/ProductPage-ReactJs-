import React from 'react';
import classes from './Productdetails.module.css';


export const Productdetails = (props) => {
    const colorOptions=props.data.colorOptions.map((item,pos)=>{
        const clsarray=[classes.prodimg]
        if (pos===props.currentPreviewimgpos){
          clsarray.push(classes.selectedimg);

        }

        return(

            <img key={pos} className={clsarray.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.onColoroptionclick(pos)}/>
            
          );
    })
  const featurelist=props.data.featureList.map((item,pos)=>{
    const clsarray=[classes.Featureitem]
    if(pos===props.currentselectedfeature){
      clsarray.push(classes.selecteditem);
    }
    return(
      <button onClick={()=>props.onfeatureitemclick(pos)} key={pos} className={clsarray.join(' ')}>{item}</button>
      
    )


  })    
  return (
    <div className={classes.Productdata}>
      <h1 className={classes.Producttitle}>{props.data.title}</h1>
      <p className={classes.Productdesc}>{props.data.description}</p>
      <h3 className={classes.sectionhead}>Select color</h3>
      <div>
      {colorOptions}
       
      </div>
      <h3 className={classes.sectionhead}>Features</h3>
      <div>
        {featurelist}
       
      </div>
      <button className={classes.Primarybutton}>Buy Now</button>
    
    </div>
  )
}
