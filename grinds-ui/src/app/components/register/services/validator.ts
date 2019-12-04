//Sourced: https://github.com/AzharHusain/reactive-form-custom-validation/blob/master/src/app/validator.ts
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms'; 

export function usernameValidator(control: AbstractControl) {
    let debouncer: any;
    if (control && (control.value !== null || control.value !== undefined)) {
        debouncer = setTimeout(() => {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var userNameExists = JSON.parse(this.responseText);
                  if(userNameExists == true){
                    console.log('UsernameValidator --> resolve: '+userNameExists+ "isError = true");
                    control.setErrors({userNameTaken: true});
                    return {userNameTaken: true};         
                }
            }
          };
          let data = 'username='+control.value;
          xmlhttp.open("POST", "/server/api/v1/registration", true); 
          xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xmlhttp.send(data);
        }, 1000);      
    }

    return null;
}