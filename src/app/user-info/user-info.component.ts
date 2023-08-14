import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PersonalInfoComponent } from "./personal-info/personal-info.component";

@Component({
    selector: 'user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss'],
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule,
        ReactiveFormsModule, NgIf, MatDatepickerModule, MatNativeDateModule, PersonalInfoComponent]
})
export class UserInfoComponent {

}
