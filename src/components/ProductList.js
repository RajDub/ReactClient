import React, { Component } from 'react';
import {Star} from './Star'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../custom.css'

 export class ProductList extends Component {
  static displayName = ProductList.name;
   
 personsData= [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 1.0,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
]
  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true,showImage:false };
   
  }
  state={userName:''};
  componentDidMount() {
   // this.populateWeatherData();
    this.setState({forecasts:this.personsData,loading:false,showImage:false})
  }
 
  toggleImage=()=>{
     this.setState({showImage:!this.state.showImage});  
   }

  

 // visibilityEx=()=>{return this.state.showImage===true?"visible":"hidden"; }
   renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th><button className='btn btn-primary'
                                onClick={this.toggleImage}>
                                 Image
                            </button>
            </th>
            <th>Product</th>
            <th>Code</th>
            <th>Release Date</th>
            <th>Price</th>
            <th>Star Rating</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.productId}>
              <td>
                 {/* <img style={{visibility:this.visibilityEx()}}  */}
                 <img style={{visibility:this.state.showImage===true?'visible':'hidden'}} 
                 src={forecast.imageUrl} 
                 width="25" 
                 title={forecast.productName} 
                 margin="1" 
                 alt="Cannot display image"></img> 
              </td>
              <td>{forecast.productName}</td>
              <td>{forecast.productCode}</td>
              <td>{forecast.releaseDate}</td>
              <td>${forecast.price}</td>
              {/* <td>{forecast.starRating}</td> */}
              <td><Star width={forecast.starRating*86/5}/></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }



  pageTitle = 'Product List';
  filteredby="";

  onTextChange=(evnt)=>{
    let filterby = evnt.target.value.toLocaleLowerCase();
    var copy=this.state.forecasts.slice();
    let  x= filterby ? this.state.forecasts.filter(f=>f.productName.toLocaleLowerCase().indexOf(filterby) !== -1) :this.personsData
this.filteredby=filterby;
//productName.toLocaleLowerCase().indexOf(filterBy) !== -1

//this.filteredProducts = x ? this.setState({forecasts:x}) : this.products;
 this.setState({forecasts:x});
 
    
  }
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderForecastsTable(this.state.forecasts);

    return (
      
        
<div>
        <div className='card'>
            <div className='card-header'>
                {this.pageTitle}
            </div>
    <div className='card-body'>
        <div className='row'>
            <div className='col-md-2'>Filter by:</div>
            <div className='col-md-4'>
                <input type='text' value={this.state.userName}  onChange={this.onTextChange} />
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <h4>Filtered by: {this.filteredby}  </h4>
            </div>
        </div>
        <div className='table-responsive'></div>
        {contents}
      </div>
      </div>
      </div>

    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
  // const response = await fetch(this._productUrl);
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
