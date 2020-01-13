import { Injectable } from '@angular/core';
import { PermissionCheckerService } from '@abp/auth/permission-checker.service';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { UrlHelper } from '@shared/helpers/UrlHelper';

import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
    } from '@angular/router';
import {TokenAuthServiceProxy} from "@shared/service-proxies/service-proxies";

@Injectable()
export class AppRouteGuard implements CanActivate, CanActivateChild {

    constructor(
        private _permissionChecker: PermissionCheckerService,
        private _router: Router,
        private _sessionService: AppSessionService,
        private _tokenAuthServiceProxy: TokenAuthServiceProxy
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if (state && UrlHelper.isInstallUrl(state.url)) {
            return true;
        }

        if (!this._sessionService.user) {
            this._tokenAuthServiceProxy.logoutMember("")
                .subscribe((result) => {
                    location.href = result.message;
                });
            return false;
        }

        if (!route.data || !route.data['permission']) {
            return true;
        }

        if (this._permissionChecker.isGranted(route.data['permission'])) {
            return true;
        }

        this._router.navigate([this.selectBestRoute()]);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    selectBestRoute(): string {

        if (!this._sessionService.user) {
            return '/account/login';
        }

        if (this._permissionChecker.isGranted('Pages.Administration.Host.Dashboard')) {
            return '/app/admin/hostDashboard';
        }

        if (this._permissionChecker.isGranted('Pages.Tenant.Dashboard')) {
            return '/app/main/dashboard';
        }

        if (this._permissionChecker.isGranted('Pages.Tenants')) {
            return '/app/admin/tenants';
        }

        if (this._permissionChecker.isGranted('Pages.Administration.Users')) {
            return '/app/admin/users';
        }

        return '/app/notifications';
    }
}
