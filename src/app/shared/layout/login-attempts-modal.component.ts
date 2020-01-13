import { Component, ViewChild, Injector } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { AppComponentBase } from '@shared/common/app-component-base';

import { UserLoginServiceProxy, ProfileServiceProxy, UserLoginAttemptDto } from '@shared/service-proxies/service-proxies';

import * as moment from 'moment';

@Component({
    selector: 'loginAttemptsModal',
    templateUrl: './login-attempts-modal.component.html'
})
export class LoginAttemptsModalComponent extends AppComponentBase {

    @ViewChild('loginAttemptsModal') modal: ModalDirective;

    userLoginAttempts: UserLoginAttemptDto[];
    profilePicture = '/assets/common/images/default-profile-picture.png';

    constructor(
        injector: Injector,
        private _userLoginService: UserLoginServiceProxy,
        private _profileService: ProfileServiceProxy
    ) {
        super(injector);
    }

    show(): void {
        this._userLoginService.getRecentUserLoginAttempts().subscribe(result => {
            this.userLoginAttempts = result.items;
            this._profileService.getProfilePicture().subscribe(result => {
                if (result && result.profilePicture) {
                    this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
                }
                this.modal.show();
            });
        });
    }

    close(): void {
        this.modal.hide();
    }

    setProfilePictureClass(userLoginAttemptResult: string): any {
        const classes = {
            label: true,
            'label-success': userLoginAttemptResult === 'Success',
            'label-danger': userLoginAttemptResult !== 'Success'
        };

        return classes;
    }

    getLoginAttemptTime(userLoginAttempt: UserLoginAttemptDto): string {
        return moment(userLoginAttempt.creationTime).fromNow() + ' (' + moment(userLoginAttempt.creationTime).format('YYYY-MM-DD hh:mm:ss') + ')';
    }
}
