import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  constructor() { }  
  
  @Input() inputModel: string = "";  
  @Input() maxLength: number = 200;  
  @Input() isNumeric: boolean = false;   
  
  @Output() inputModelChange = new EventEmitter<string>();  
  
  totalCharLengthText: string = ""
  
  textCount: number = 0;  
    
  ngOnInit() {  
    this.textCount = this.inputModel.length;  
    this.totalCharLengthText = (this.maxLength==0)?'Unlimited':(this.maxLength).toString();  
  }  
  
  textChange(){  
    this.inputModelChange.emit(this.inputModel);  
    this.textCount = this.inputModel.length;  
  }  
  
  numberOnly(event:any): boolean {  
    if(!this.isNumeric) return true;  
    const charCode = (event.which) ? event.which : event.keyCode;  
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !=46 ) {  
      return false;  
    }  
    return true;  
  }  
}
