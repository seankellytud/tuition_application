import { AbstractControl, FormGroup } from '@angular/forms';
import { UriType } from 'src/app/models/UriType';

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
                    let passControl = control.root.get('userName').setErrors({userNameTaken: true});
                    return {userNameTaken: true};         
                }
            }
          };
          let data = 'username='+control.value;
          let uri: string = this.uriConstructor.constructUri(UriType.USER); 
          xmlhttp.open("GET", uri, true); 
          xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xmlhttp.send(data);
        }, 1000);      
    }

    return null;
}

