// globals.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
// tslint:disable-next-line:class-name
export class ResponsiveService {
    private isMobile = new Subject();
    public screenWidth: string;
    width: number;


    constructor() {
        this.checkWidth();
    }

    onMobileChange(status: boolean) {
        this.isMobile.next(status);
        //window.location.reload();
    }

    getMobileStatus(): Observable<any> {
        return this.isMobile.asObservable();
    }

    public checkWidth() {
        // tslint:disable-next-line:whitespace
        this.width = window.innerWidth;
        // tslint:disable-next-line:whitedth;
        if (this.width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        } else if (this.width > 768 && this.width <= 992) {
            this.screenWidth = 'md';
            this.onMobileChange(false);
        } else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
    }

}