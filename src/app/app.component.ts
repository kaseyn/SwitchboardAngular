import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switches = [false, false, false, false, false, false, false, false, false, false];
  switch(index) {
  	if (this.switches[index]){
  		this.switches[index] = false;
  	}
  	else if (!this.switches[index]){
  		this.switches[index] = true;
  	}
  }
}
