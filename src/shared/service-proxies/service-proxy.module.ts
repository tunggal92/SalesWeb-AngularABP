import { NgModule } from '@angular/core';

import * as ApiServiceProxies from '@shared/service-proxies/service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.AuditLogServiceProxy,
        ApiServiceProxies.CachingServiceProxy,
        ApiServiceProxies.ChatServiceProxy,
        ApiServiceProxies.CommonLookupServiceProxy,
        ApiServiceProxies.EditionServiceProxy,
        ApiServiceProxies.FriendshipServiceProxy,
        ApiServiceProxies.HostSettingsServiceProxy,
        ApiServiceProxies.InstallServiceProxy,
        ApiServiceProxies.LanguageServiceProxy,
        ApiServiceProxies.NotificationServiceProxy,
        ApiServiceProxies.OrganizationUnitServiceProxy,
        ApiServiceProxies.PermissionServiceProxy,
        ApiServiceProxies.ProfileServiceProxy,
        ApiServiceProxies.RoleServiceProxy,
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.TenantServiceProxy,
        ApiServiceProxies.TenantDashboardServiceProxy,
        ApiServiceProxies.TenantSettingsServiceProxy,
        ApiServiceProxies.TimingServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.UserLinkServiceProxy,
        ApiServiceProxies.UserLoginServiceProxy,
        ApiServiceProxies.WebLogServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        ApiServiceProxies.TenantRegistrationServiceProxy,
        ApiServiceProxies.HostDashboardServiceProxy,
        ApiServiceProxies.PaymentServiceProxy,
        ApiServiceProxies.DemoUiComponentsServiceProxy,
        ApiServiceProxies.InvoiceServiceProxy,
        ApiServiceProxies.SubscriptionServiceProxy,
        ApiServiceProxies.InstallServiceProxy,
        ApiServiceProxies.UiCustomizationSettingsServiceProxy,
        ApiServiceProxies.CustomerMemberServiceProxy,
        ApiServiceProxies.ProjectServiceProxy,
        ApiServiceProxies.DiagramaticServiceProxy,
        ApiServiceProxies.BookingHistoryServiceProxy,
        ApiServiceProxies.TransactionServiceProxy,
        ApiServiceProxies.AdminServiceProxy,
        ApiServiceProxies.AdminUnitTypeServiceProxy,
        ApiServiceProxies.PaymentOBServiceProxy,
        ApiServiceProxies.DashboardSPServiceProxy,
        ApiServiceProxies.MyCommissionSPServiceProxy,
        ApiServiceProxies.MyProfileSPServiceProxy,
        ApiServiceProxies.MyCustomerSPServiceProxy,
        ApiServiceProxies.CustomerPPServiceProxy,
        ApiServiceProxies.RefundPPServiceProxy,
        ApiServiceProxies.PaymentPPServiceProxy,
        ApiServiceProxies.OrderPPServiceProxy,
        ApiServiceProxies.TransactionPPServiceProxy,
        ApiServiceProxies.TaskListSPServiceProxy,
        ApiServiceProxies.TransactionPPServiceProxy,
        ApiServiceProxies.AdminNewProjectServiceProxy,
        ApiServiceProxies.AdminManageProjectServiceProxy,
        ApiServiceProxies.AdminProductSetupPPOLServiceProxy,
        ApiServiceProxies.AdminProductSetupServiceProxy,
        ApiServiceProxies.AdminPromoServiceProxy,        
        ApiServiceProxies.SetupPPServiceProxy,
        ApiServiceProxies.MsProjectServiceProxy,
        ApiServiceProxies.RequirementDetailSPServiceProxy,
        ApiServiceProxies.MsClusterServiceProxy,
        ApiServiceProxies.ADConfigurationServiceProxy,
        ApiServiceProxies.BankReconcileServiceProxy,
        ApiServiceProxies.MsUnitStatusServiceProxy,
        ApiServiceProxies.ClosingAccountServiceProxy,
        ApiServiceProxies.MsAccountServiceProxy,
        ApiServiceProxies.PaymentLkOthersTypeServiceProxy,
        ApiServiceProxies.PaymentLkPayTypeServiceProxy,
        ApiServiceProxies.PaymentLkPayForServiceProxy,
        ApiServiceProxies.PaymentBookingFeeServiceProxy,
        ApiServiceProxies.MsEventServiceProxy,
        ApiServiceProxies.BulkPaymentServiceProxy,
        ApiServiceProxies.MsPotentialCustomerPriceRangeServiceProxy,
        ApiServiceProxies.MsSalesLeadTypeServiceProxy
    ]
})
export class ServiceProxyModule { }
