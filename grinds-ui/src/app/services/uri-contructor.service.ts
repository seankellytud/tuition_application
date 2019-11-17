import { Injectable } from '@angular/core';
import { UriType } from '../models/UriType';

@Injectable()
export class UriConstructorService {
    readonly apiVersion = 'v1';
    readonly uriBase = '/server/api/';
    readonly userUri = '/users';
    readonly grindUri = '/grinds';
    readonly authenticationUri = '/authentication';
    readonly registrationUri = '/registration';

    constructor(){}

    public constructUri(type: UriType): string {
        let base: string = `${this.uriBase}`+`${this.apiVersion}`;
        switch(type){
            case UriType.USER:
                return base + `${this.userUri}`;
            case UriType.GRIND:
                return base + `${this.grindUri}`;
            case UriType.AUTHENTICATION:
                return base + `${this.authenticationUri}`;
            case UriType.REGISTRATION:
                return base + `${this.registrationUri}`; 
        }
        return 'Unknown uri type';
    }
    
}