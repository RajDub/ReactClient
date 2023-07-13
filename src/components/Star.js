 
 import React, { Component } from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
 export class Star extends Component
{

static displayName = Star.name;
    render(){

return (
<div  class="crop" style={{width:this.props.width}}>
<div style={{width:86}}>

        <span class="glyphicon glyphicon-star"> </span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
</div>
</div>
        
);
    }
}

{/* <div class="crop" 
        [style.width.px]="starWidth"
        [title]="rating"
        (click)="onClick()">
         <div style="width: 86px">
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        </div>
</div> */}