import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  projectForm: FormGroup;
  statuses = ['Stable','Critical','Finished'];
  forbiddenProjectName = ['test'];
  

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'mail': new FormControl(null, Validators.required),
      'projectStatus': new FormControl('Stable')
    });
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenProjectName.indexOf(control.value) !== -1){
      return {'projectNameIsForbidden': true}
    }
    // if validation is false, just return null or simply ommit the return statement, 
    return null;
  }

  onSubmit(){
    console.log(this.projectForm);
  }

}
