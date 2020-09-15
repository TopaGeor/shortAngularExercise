import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-basic-form',
    templateUrl: './basic-form.component.html',
    styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit, OnDestroy {
    form: FormGroup;
    programmingLanguages = ['TS', 'JS', 'C#'];
    anObservable: Subscription;

    constructor() { }

    ngOnInit() {
        //const jsVersionControl = new FormControl(null, []);
        this.form = new FormGroup({
            firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
            lastName: new FormControl(null, Validators.required),
            hasExpirience: new FormControl(false, Validators.required),
            angularPreference: new FormControl("", Validators.required),
            programmingLanguage: new FormControl(null, Validators.required),
            jsVersion: new FormControl(null, [])
        });
        
        this.anObservable = this.form.get('jsVersion').valueChanges.subscribe(() => {
            if(this.form.get('programmingLanguage').value === 'JS') {
                this.form.get('jsVersion').setValidators(Validators.required);
            } else {
                this.form.get('jsVersion').clearValidators();
            } 
        });
    }

    ngOnDestroy(){
        this.anObservable.unsubscribe();
    }
}
