//Sourced: https://github.com/AzharHusain/reactive-form-custom-validation/blob/master/src/app/validator.ts
import { AbstractControl, FormGroup } from '@angular/forms'; 


export function passwordValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) { //set stipulations for control to move forward with fuction
        const confirmPassword = control.value; //save control into variable

        const passControl = control.root.get('password'); //get value that was passed into the first password field
        if (passControl) {
            const passValue = passControl.value; //save that value into variable
            if (passValue !== confirmPassword || passValue === '') { //compare the two variables
                return {
                    isError: true
                };
            }
        }
    }

    return null;
}