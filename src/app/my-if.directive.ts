import { Directive , ViewContainerRef ,TemplateRef, OnInit  } from '@angular/core';

@Directive({
  selector: '[MyIf]'
})
export class MyIfDirective implements OnInit {

  constructor(private viewcontain :ViewContainerRef ,private template :TemplateRef<object>) { }

  ngOnInit(){
   const condition = false;

   if(condition){
this.viewcontain.createEmbeddedView(this.template)
   }
    
  }

}
