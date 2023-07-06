import { Component } from '@angular/core';
/* decorator

Class Decorators: @Component and @NgModule
Property Decorators: @Input and @Output (These two decorators are used inside a class)
Method Decorators: @HostListener (This decorator is used for methods inside a class like a click, mouse hover, etc.)
Parameter Decorators: @Inject (This decorator is used inside class constructor).
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allImpiments';


 
}
