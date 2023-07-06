import { Component } from '@angular/core';
import { ɵafterNextNavigation } from '@angular/router';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-basic-angular',
  templateUrl: './basic-angular.component.html',
  styleUrls: ['./basic-angular.component.css']
})
export class BasicAngularComponent {

  subTittle1 = "angular flow of executions"
  subTittle2 ='Component';
  subTittle3 =' decorator'
  subTittle4='Data Binding'


  decorator =[{name:"Class Decorators: ",detail :' @Component and @NgModule'},
{name:'Property Decorators:',detail :'@Input and @Output (These two decorators are used inside a class)'},
{name:'Method Decorators: ',detail:" @HostListener (This decorator is used for methods inside a class like a click, mouse hover, etc.)"}
,{name: "Parameter Decorators:",detail:"@Inject (This decorator is used inside class constructor)."}]



   components =[
    {SiNo :1 , detail :"component are the key features of agular"},
    {SiNo :2 , detail :" Each components has Sepaated style (css),template HTML coding & Bussiness Logic"},
    {SiNo :3 , detail :"its a reusable template."},
    {SiNo :4 , detail :"Appcomponent is the root component of angular project "},
   ]
   
   dataBinding =[{name:'Interpolation ',details:`nterpolation is a procedure that allows the user to bind a value to the user interface element. Interpolation binds the data one-way,
    which means that data moves in one direction from the components to HTML elements.`,example :"{{TEXT}}"},{name:'',details:"",example:""}
    ,{name:'Property Binding',details:`Property binding is a one-way data binding mechanism that
     allows you to set the properties for HTML elements.It uses the "[]" syntax for data binding.  `,example:`<img [src] = "image" alt="" style="height: 100px; width: 250px" class="center">`}
    ,{name:'Event Binding',details:`Event binding type is when information flows from the view to the component when an event is 
    triggered`,example:`<br><button (click)="onClick()">Subscribe to Simplilearn</button></div>`},
  {name:`Two-way Data Binding`,details:`two-way binding is a mechanism where data flows from the component 
  to the view and back. This binding ensures that the component and view are always in sync.
   Any changes made on either end are immediately reflected on both. The general syntax to
   denote two-way data binding is a combination of Square brackets and parentheses "[()]". `,example:`<input [(ngModel)]="random" type="text"> <br>`}]
   display = new Observable ( obser  =>{
  console.log('event is clicked')
  obser.next ('next is clicked');
  obser.next("hello")
  obser.closed
obser.next ('thank you')

   }, 
   
);}
