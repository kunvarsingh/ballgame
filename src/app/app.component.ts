import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ballgame';
  ballStack : any[] = [];
  totalPoints : number = 0;


  clickBall(){
  	let value = this.ballStack.length+1;
  	if(value){
  		if( value % 3 && value % 5 && value %15) this.ballStack.push({color : 'Pink',point:1});
	    else {

	    	if(value %15 ==0) this.ballStack.push({color : 'Purple',point:15});
	    	else{
		    	if( value % 3 == 0 ) this.ballStack.push({color : 'Green',point:3});
	        else if( value % 5 == 0 ) {
	            this.ballStack.push({color : 'Blue',point:5});
	        }
	    	}
        } 
  	}
  	else{
  		this.ballStack.push({color : 'Pink',point:1});
  	}

  	this.totalPoints = this.gettotalPoints();
  }


  gettotalPoints(){
  	let sum = 0;
  	for(var i=0;i<this.ballStack.length;i++){
  		sum = sum + this.ballStack[i].point;
  	}
  	return sum;
  }

}
