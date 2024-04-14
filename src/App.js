
import React ,{Component} from 'react';
import classes from './App.module.css';

import { ProductPreview } from './ProductPreview/ProductPreview';
import { Productdetails } from './ProductDetails/Productdetails';
import { Topbar } from './Topbar/Topbar';
import ProductData from './Utils/ProductData';



class App extends Component{
  state={
    productdata: ProductData,
    currentPreviewimgpos:0,
    currentselectedfeature:0,

  }
  onColoroptionclick=(pos)=>{
    this.setState({currentPreviewimgpos:pos});
  }
  onfeatureitemclick=(pos)=>{

    this.setState({currentselectedfeature:pos});
  }

  render(){
    return (
      <div className="App">
      <Topbar/>
      <div className={classes.Maincont}>
      <div className={classes.Productpre}>
        <ProductPreview currentPreviewimg={this.state.productdata.colorOptions[this.state.currentPreviewimgpos].imageUrl  }
          currentselectedfeature={this.state.currentselectedfeature}
          
        />
  
      </div>
      <div className={classes.Productdata}>
          <Productdetails data={this.state.productdata} onColoroptionclick={this.onColoroptionclick}
            currentPreviewimgpos={this.state.currentPreviewimgpos}
            onfeatureitemclick={this.onfeatureitemclick}
            currentselectedfeature={this.state.currentselectedfeature}

          />
      
      </div>
        
      </div>
      </div>
    );
  }
  
}

export default App;
