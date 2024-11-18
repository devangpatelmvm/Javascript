import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLinear = true;
  form: any;
  projectName: any;
  uiFramework: any;
  inputValue: any;
  // formNameGroup?: FormGroup;
  // formPasswordGroup?: FormGroup;
  // formEmailGroup?: FormGroup;
  // formPhoneGroup?: FormGroup;

  // formNameGroup: any;
  // formPasswordGroup: any;
  // formEmailGroup: any;
  // formPhoneGroup: any;

  selectedData: any = "";
  selectedIndex: any;

  stepOne: any = "";

  stepperData: any = {
    dropdown: [
      { name: "Angular" }, 
      { name: "React" }, 
      { name: "vue.js" }, 
    ],

    htmlSection: [
      [
      { section: '<table class="example-full-width" cellspacing="0"><tr> <td><mat-form-field class="example-full-width" appearance="fill"> <mat-label>Enter Something</mat-abel><input matInput></mat-form-field></td></tr></table>', name: "Mat Input Field", },
      { section: '<textarea placeholder="Textarea"></textarea>', name: "Text area" },
      { section: '<button mat-raised-button color="primary" >Button</button>' , name: "Radio Button" },
      ],
      [
        { section: '<input matInput type="text" placeholder="Type here" />', name: "Mui Input Feild", },
        { section: "<textarea></textarea>", name: "Radio Button" },
        { section: "<button>Button</button>", name: "Text Area" },
      ],
      [
        { section: '<input matInput type="text" placeholder="Type here" />', name: "Mat Input Field", },
        { section: "<textarea></textarea>", name: "Radio Button" },
        { section: "<button>Button</button>", name: "Text Area" },
      ]
    ],
  };


  isEditable = true;
  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
 
    // console.log(this.form.value);
    
  }

  firstFormGroup = this.formBuilder.group({
    firstCtrl1: ['', Validators.required],
    firstCtrl2: ['', Validators.required],
  });
  
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  

  stepperForm() {
    this.form = this.formBuilder.group(
      {
        firstCtrl1: ['', Validators.required ],
        firstCtrl2: ['', Validators.required]
      },
    );
  }

  get firstCtrl1() {
    return this.firstFormGroup.get('firstCtrl1') as FormControl;
  }
  get firstCtrl2() {
    return this.firstFormGroup.get('firstCtrl2') as FormControl;
  }


  matSelectSetp1(index: any) {
    console.log(index);
    this.stepOne = index;
  }

  matSelectSetp2(item: any, index: number) {
    
    console.log(item);
    console.log(this.selectedData);
    this.selectedData = item;
    this.selectedIndex = index;
  }


}
