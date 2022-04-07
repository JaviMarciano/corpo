(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 39242);
/* harmony import */ var _components_login_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login/login.component */ 33540);
/* harmony import */ var _components_modal_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal/modal-page/modal-page.component */ 17182);
/* harmony import */ var _components_report_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/report/attendance/attendance.component */ 18647);
/* harmony import */ var _components_shift_my_reservation_my_reservation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shift/my-reservation/my-reservation.component */ 68997);
/* harmony import */ var _components_statistics_periodization_goals_periodization_goals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/statistics/periodization-goals/periodization-goals.component */ 6509);
/* harmony import */ var _components_statistics_periodization_report_periodization_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/statistics/periodization-report/periodization-report.component */ 46718);
/* harmony import */ var _components_statistics_wod_goals_wod_goals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/statistics/wod-goals/wod-goals.component */ 12096);
/* harmony import */ var _components_user_email_edit_email_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/email-edit/email-edit.component */ 82831);
/* harmony import */ var _components_user_medical_history_injury_history_injury_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/medical-history/injury-history/injury-history.component */ 2176);
/* harmony import */ var _components_user_medical_history_medical_history_create_medical_history_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/medical-history/medical-history-create/medical-history-create.component */ 30443);
/* harmony import */ var _components_user_medical_history_medical_history_edit_medical_history_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/medical-history/medical-history-edit/medical-history-edit.component */ 53695);
/* harmony import */ var _components_user_member_create_member_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/member-create/member-create.component */ 91349);
/* harmony import */ var _components_user_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/member-edit/member-edit.component */ 37264);
/* harmony import */ var _components_user_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/my-account/my-account.component */ 21065);
/* harmony import */ var _components_user_my_debts_my_debts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/my-debts/my-debts.component */ 67887);
/* harmony import */ var _components_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/user-create/user-create.component */ 42970);
/* harmony import */ var _components_workout_periodization_periodization_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/workout/periodization/periodization.component */ 85197);
/* harmony import */ var _components_workout_rating_rating_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/workout/rating/rating.component */ 59309);
/* harmony import */ var _components_workout_reports_effort_effort_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/workout/reports/effort/effort.component */ 75431);
/* harmony import */ var _components_workout_wod_week_wod_week_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/workout/wod-week/wod-week.component */ 40118);
/* harmony import */ var _components_workout_wod_wod_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/workout/wod/wod.component */ 9815);

























const routes = [
    {
        path: '',
        redirectTo: 'folder/Inbox',
        pathMatch: 'full'
    },
    {
        path: 'user-create',
        component: _components_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_16__.UserCreateComponent
    },
    {
        path: 'member-create',
        component: _components_user_member_create_member_create_component__WEBPACK_IMPORTED_MODULE_12__.MemberCreateComponent
    },
    {
        path: 'historia-medica-crear',
        component: _components_user_medical_history_medical_history_create_medical_history_create_component__WEBPACK_IMPORTED_MODULE_10__.MedicalHistoryCreateComponent
    },
    {
        path: 'shift',
        component: _components_shift_my_reservation_my_reservation_component__WEBPACK_IMPORTED_MODULE_4__.MyReservationComponent
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'workout-rating',
        component: _components_workout_rating_rating_component__WEBPACK_IMPORTED_MODULE_18__.RatingComponent
    },
    {
        path: 'my-account',
        component: _components_user_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_14__.MyAccountComponent
    },
    {
        path: 'my-debts',
        component: _components_user_my_debts_my_debts_component__WEBPACK_IMPORTED_MODULE_15__.MyDebtsComponent
    },
    {
        path: 'login',
        component: _components_login_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
    },
    {
        path: 'member-edit',
        component: _components_user_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_13__.MemberEditComponent
    },
    {
        path: 'medical-history-edit',
        component: _components_user_medical_history_medical_history_edit_medical_history_edit_component__WEBPACK_IMPORTED_MODULE_11__.MedicalHistoryEditComponent
    },
    {
        path: 'modal',
        component: _components_modal_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_2__.ModalPageComponent
    },
    {
        path: 'email-edit',
        component: _components_user_email_edit_email_edit_component__WEBPACK_IMPORTED_MODULE_8__.EmailEditComponent
    },
    {
        path: 'injury-history',
        component: _components_user_medical_history_injury_history_injury_history_component__WEBPACK_IMPORTED_MODULE_9__.InjuryHistoryComponent
    },
    {
        path: 'attendance',
        component: _components_report_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_3__.AttendanceComponent
    },
    {
        path: 'wod',
        component: _components_workout_wod_wod_component__WEBPACK_IMPORTED_MODULE_21__.WodComponent
    },
    {
        path: 'wod-week',
        component: _components_workout_wod_week_wod_week_component__WEBPACK_IMPORTED_MODULE_20__.WodWeekComponent
    },
    {
        path: 'effort',
        component: _components_workout_reports_effort_effort_component__WEBPACK_IMPORTED_MODULE_19__.EffortComponent
    },
    {
        path: 'periodization-report',
        component: _components_statistics_periodization_report_periodization_report_component__WEBPACK_IMPORTED_MODULE_6__.PeriodizationReportComponent
    },
    {
        path: 'goals',
        component: _components_statistics_periodization_goals_periodization_goals_component__WEBPACK_IMPORTED_MODULE_5__.PeriodizationGoalsComponent
    },
    {
        path: 'periodization',
        component: _components_workout_periodization_periodization_component__WEBPACK_IMPORTED_MODULE_17__.PeriodizationComponent
    },
    {
        path: 'wod-goals',
        component: _components_statistics_wod_goals_wod_goals_component__WEBPACK_IMPORTED_MODULE_7__.WodGoalsComponent
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 60810)).then(m => m.FolderPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_24__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/account.service */ 15921);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);








let AppComponent = class AppComponent {
    constructor(accountService, platform, alertController, router, location) {
        this.accountService = accountService;
        this.platform = platform;
        this.alertController = alertController;
        this.router = router;
        this.location = location;
        this.appPages = [
            { title: 'Corpo', url: '/folder/Inbox', icon: 'mail' },
            { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
            { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
            { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
            { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
            { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.backButtonEvent();
    }
    oneSignalInit() {
        // Uncomment to set OneSignal device logging to VERBOSE  
        // OneSignal.setLogLevel(6, 0);
        console.log("init");
        // NOTE: Update the setAppId value below with your OneSignal AppId.
        /*
            OneSignal.setAppId("d6082c87-a24f-4f4b-b63c-da6919618143");
        
            OneSignal.setNotificationOpenedHandler((jsonData) => this.router.navigate(['/my-account']));
            this.guid = this.generateUUID();
            OneSignal.setExternalUserId(this.guid)
        
            // iOS - Prompts the user for notification permissions.
            //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
            OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
              console.log("User accepted notifications: " + accepted);
            });*/
    }
    generateUUID() {
        var d = new Date().getTime(); //Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0; //Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16; //random number between 0 and 16
            if (d > 0) { //Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            }
            else { //Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    backButtonEvent() {
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.routerOutlets.forEach((outlet) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                if (this.router.url != '/home') {
                    // await this.router.navigate(['/']);
                    yield this.location.back();
                }
                else if ((this.router.url === '/home') || (this.router.url === '/')) {
                    if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                        this.lastTimeBackPress = new Date().getTime();
                        this.presentAlertConfirm();
                    }
                    else {
                        navigator['app'].exitApp();
                    }
                }
            }));
        });
    }
    showNotification(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'corpo',
                message: data,
                cssClass: 'custom-alert',
                buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: (blah) => { }
                    }]
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // header: 'Confirm!',
                header: 'corpo',
                message: 'Estás seguro que deseas salir de la app?',
                cssClass: 'custom-alert',
                buttons: [{
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: (blah) => { }
                    }, {
                        text: 'Salir',
                        handler: () => {
                            navigator['app'].exitApp();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        this.userLogged = this.accountService.getLoggedUser();
        this.oneSignalInit();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location }
];
AppComponent.propDecorators = {
    routerOutlets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRouterOutlet,] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _components_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/user-create/user-create.component */ 42970);
/* harmony import */ var _components_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user-form/user-form.component */ 18885);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _components_corpo_corpoheader_corpoheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/corpo/corpoheader/corpoheader.component */ 10496);
/* harmony import */ var _components_workout_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/workout/rating/rating.component */ 59309);
/* harmony import */ var _components_user_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/my-account/my-account.component */ 21065);
/* harmony import */ var _components_shift_shift_create_shift_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shift/shift-create/shift-create.component */ 28158);
/* harmony import */ var _components_login_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login/login.component */ 33540);
/* harmony import */ var _components_user_my_debts_my_debts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/my-debts/my-debts.component */ 67887);
/* harmony import */ var _components_shift_shift_list_shift_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shift/shift-list/shift-list.component */ 84771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_shift_my_reservation_my_reservation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shift/my-reservation/my-reservation.component */ 68997);
/* harmony import */ var _components_shift_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shift/reservation/reservation.component */ 72649);
/* harmony import */ var _components_user_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/member-form/member-form.component */ 63814);
/* harmony import */ var _components_user_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/member-edit/member-edit.component */ 37264);
/* harmony import */ var _components_user_medical_history_medical_history_edit_medical_history_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/medical-history/medical-history-edit/medical-history-edit.component */ 53695);
/* harmony import */ var _components_user_medical_history_medical_history_form_medical_history_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/medical-history/medical-history-form/medical-history-form.component */ 47859);
/* harmony import */ var _components_user_email_edit_email_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user/email-edit/email-edit.component */ 82831);
/* harmony import */ var _components_user_medical_history_injury_history_injury_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user/medical-history/injury-history/injury-history.component */ 2176);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 59832);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 57154);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ion2-calendar */ 29260);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_report_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/report/attendance/attendance.component */ 18647);
/* harmony import */ var _interceptors_authentication_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./interceptors/authentication-interceptor */ 90129);
/* harmony import */ var _components_user_member_create_member_create_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/user/member-create/member-create.component */ 91349);
/* harmony import */ var _components_user_medical_history_medical_history_create_medical_history_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/user/medical-history/medical-history-create/medical-history-create.component */ 30443);
/* harmony import */ var _components_workout_wod_week_wod_week_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/workout/wod-week/wod-week.component */ 40118);
/* harmony import */ var _components_workout_wod_wod_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/workout/wod/wod.component */ 9815);
/* harmony import */ var _components_workout_reports_effort_effort_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/workout/reports/effort/effort.component */ 75431);
/* harmony import */ var _components_workout_periodization_periodization_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/workout/periodization/periodization.component */ 85197);
/* harmony import */ var _components_statistics_periodization_goals_periodization_goals_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/statistics/periodization-goals/periodization-goals.component */ 6509);
/* harmony import */ var _components_statistics_periodization_report_periodization_report_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/statistics/periodization-report/periodization-report.component */ 46718);
/* harmony import */ var _components_statistics_wod_goals_wod_goals_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/statistics/wod-goals/wod-goals.component */ 12096);









































//import { MatSliderModule } from '@angular/material/slider'; 
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_33__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_34__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _components_user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_2__.UserCreateComponent,
            _components_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_3__.UserFormComponent,
            _components_workout_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__.RatingComponent,
            _components_corpo_corpoheader_corpoheader_component__WEBPACK_IMPORTED_MODULE_4__.CorpoheaderComponent,
            _components_user_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_6__.MyAccountComponent,
            _components_shift_shift_create_shift_create_component__WEBPACK_IMPORTED_MODULE_7__.ShiftCreateComponent,
            _components_login_login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent,
            _components_user_my_debts_my_debts_component__WEBPACK_IMPORTED_MODULE_9__.MyDebtsComponent,
            _components_shift_shift_list_shift_list_component__WEBPACK_IMPORTED_MODULE_10__.ShiftListComponent,
            _components_shift_my_reservation_my_reservation_component__WEBPACK_IMPORTED_MODULE_11__.MyReservationComponent,
            _components_shift_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_12__.ReservationComponent,
            _components_user_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_13__.MemberFormComponent,
            _components_user_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_14__.MemberEditComponent,
            _components_user_medical_history_medical_history_edit_medical_history_edit_component__WEBPACK_IMPORTED_MODULE_15__.MedicalHistoryEditComponent,
            _components_user_medical_history_medical_history_form_medical_history_form_component__WEBPACK_IMPORTED_MODULE_16__.MedicalHistoryFormComponent,
            _components_workout_rating_rating_component__WEBPACK_IMPORTED_MODULE_5__.RatingComponent,
            _components_user_email_edit_email_edit_component__WEBPACK_IMPORTED_MODULE_17__.EmailEditComponent,
            _components_user_medical_history_injury_history_injury_history_component__WEBPACK_IMPORTED_MODULE_18__.InjuryHistoryComponent,
            _components_report_attendance_attendance_component__WEBPACK_IMPORTED_MODULE_22__.AttendanceComponent,
            _components_user_member_create_member_create_component__WEBPACK_IMPORTED_MODULE_24__.MemberCreateComponent,
            _components_user_medical_history_medical_history_create_medical_history_create_component__WEBPACK_IMPORTED_MODULE_25__.MedicalHistoryCreateComponent,
            _components_workout_wod_wod_component__WEBPACK_IMPORTED_MODULE_27__.WodComponent,
            _components_workout_wod_week_wod_week_component__WEBPACK_IMPORTED_MODULE_26__.WodWeekComponent,
            _components_workout_reports_effort_effort_component__WEBPACK_IMPORTED_MODULE_28__.EffortComponent,
            _components_workout_periodization_periodization_component__WEBPACK_IMPORTED_MODULE_29__.PeriodizationComponent,
            _components_statistics_periodization_goals_periodization_goals_component__WEBPACK_IMPORTED_MODULE_30__.PeriodizationGoalsComponent,
            _components_statistics_periodization_report_periodization_report_component__WEBPACK_IMPORTED_MODULE_31__.PeriodizationReportComponent,
            _components_statistics_wod_goals_wod_goals_component__WEBPACK_IMPORTED_MODULE_32__.WodGoalsComponent
            //  MatSliderModule
        ],
        entryComponents: [_components_user_my_debts_my_debts_component__WEBPACK_IMPORTED_MODULE_9__.MyDebtsComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_35__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_36__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
            ion2_calendar__WEBPACK_IMPORTED_MODULE_21__.CalendarModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_39__.CommonModule
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_39__.DatePipe,
            _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_19__.FileTransfer,
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_20__.File,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_40__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_36__.IonicRouteStrategy
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_37__.HTTP_INTERCEPTORS,
                useClass: _interceptors_authentication_interceptor__WEBPACK_IMPORTED_MODULE_23__.AuthInterceptor,
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 10496:
/*!***********************************************************************!*\
  !*** ./src/app/components/corpo/corpoheader/corpoheader.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorpoheaderComponent": () => (/* binding */ CorpoheaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_corpoheader_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./corpoheader.component.html */ 66410);
/* harmony import */ var _corpoheader_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corpoheader.component.scss */ 51939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




let CorpoheaderComponent = class CorpoheaderComponent {
    constructor() { }
    ngOnInit() { }
};
CorpoheaderComponent.ctorParameters = () => [];
CorpoheaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CorpoheaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'corpo-header',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_corpoheader_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_corpoheader_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CorpoheaderComponent);



/***/ }),

/***/ 39242:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 5503);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 85886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 33540:
/*!***********************************************************!*\
  !*** ./src/app/components/login/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.component.html */ 83865);
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ 67007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_domain_user_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/user/account */ 69939);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ 15921);
/* harmony import */ var src_app_services_custom_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/custom-alert.service */ 10908);









let LoginComponent = class LoginComponent {
    constructor(formBuilder, accountService, customAlertService, router, route) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.customAlertService = customAlertService;
        this.router = router;
        this.route = route;
        this.sent = false;
        this.return = '';
        this.formLogin = this.formBuilder.group({
            email: ['lucaslopez@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            password: ['Abcd1234', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ngOnInit() {
    }
    get f() {
        return this.formLogin.controls;
    }
    logIn() {
        this.sent = true;
        if (this.formLogin.valid) {
            let account = new src_app_domain_user_account__WEBPACK_IMPORTED_MODULE_2__.Account();
            {
                account.email = this.formLogin.value.email,
                    account.password = this.formLogin.value.password;
            }
            ;
            this.requesting = true;
            this.accountService.logIn(account).subscribe(result => {
                this.requesting = false;
                console.log(result);
                this.accountService.setToken(result.token);
                this.accountService.setAuthenticated(true);
                this.accountService.setLoggedUser(result.user);
                this.router.navigate(['/']);
            }, error => {
                this.requesting = false;
                console.error(error);
                if (error.status === 400) {
                    this.customAlertService.displayAlert("Gestión de Autenticación de Usuarios", error.error.errores);
                }
                if (error.status === 500) {
                    this.customAlertService.displayAlert("Gestión de Autenticación de Usuarios", ["Hubo un problema al intentar iniciar sesión."]);
                }
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService },
    { type: src_app_services_custom_alert_service__WEBPACK_IMPORTED_MODULE_4__.CustomAlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 17182:
/*!*********************************************************************!*\
  !*** ./src/app/components/modal/modal-page/modal-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageComponent": () => (/* binding */ ModalPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal-page.component.html */ 30556);
/* harmony import */ var _modal_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-page.component.scss */ 4969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let ModalPageComponent = class ModalPageComponent {
    constructor() { }
    ngOnInit() { }
};
ModalPageComponent.ctorParameters = () => [];
ModalPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-modal-page',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_modal_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalPageComponent);



/***/ }),

/***/ 18647:
/*!**********************************************************************!*\
  !*** ./src/app/components/report/attendance/attendance.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceComponent": () => (/* binding */ AttendanceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./attendance.component.html */ 82502);
/* harmony import */ var _attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance.component.scss */ 40686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_attendance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/attendance.service */ 53311);





let AttendanceComponent = class AttendanceComponent {
    constructor(attendanceService) {
        this.attendanceService = attendanceService;
        this.attendance = [];
    }
    ngOnInit() {
        this.attendanceService.getByMonth(1).subscribe((data) => {
            data.result.forEach(date => {
                this.attendance.push(this.getDayConfig(date));
            });
            this.setupAttendance();
        });
    }
    setupAttendance() {
        this.options = {
            color: "red",
            weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            showMonthPicker: false,
            daysConfig: this.attendance
        };
    }
    onChange($event) {
        console.log($event);
    }
    getDayConfig(today) {
        var date = new Date(today);
        return {
            date: date,
            marked: true,
            title: date.getDate().toString(),
            subTitle: "si",
            cssClass: "attended"
        };
    }
};
AttendanceComponent.ctorParameters = () => [
    { type: src_app_services_attendance_service__WEBPACK_IMPORTED_MODULE_2__.AttendanceService }
];
AttendanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-attendance',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AttendanceComponent);



/***/ }),

/***/ 68997:
/*!*****************************************************************************!*\
  !*** ./src/app/components/shift/my-reservation/my-reservation.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyReservationComponent": () => (/* binding */ MyReservationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_reservation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-reservation.component.html */ 54655);
/* harmony import */ var _my_reservation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-reservation.component.scss */ 82824);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _domain_attendance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/attendance */ 91065);
/* harmony import */ var _domain_shift_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/shift-list */ 23324);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/account.service */ 15921);
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/attendance.service */ 53311);
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/credit.service */ 53133);
/* harmony import */ var _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/custom-alert.service */ 10908);
/* harmony import */ var _services_shift_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/shift.service */ 29952);













let MyReservationComponent = class MyReservationComponent {
    constructor(attendanceService, accountService, shiftService, dp, creditService, customAlertService, modalController, routerOutlet) {
        this.attendanceService = attendanceService;
        this.accountService = accountService;
        this.shiftService = shiftService;
        this.dp = dp;
        this.creditService = creditService;
        this.customAlertService = customAlertService;
        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
        this.attendances = [];
        this.diplayReserve = false;
        this.shifts = [];
        this.className = "";
        this.currentDate = new Date(Date.now());
        this.availableNegative = 5;
        this.idMember = this.accountService.getLoggedUser().id;
        this.creditId = this.accountService.getLoggedUser().creditId;
        this.currentCredit = this.accountService.getLoggedUser().credit;
        this.from = this.dp.transform(new Date(), 'yyyy-MM-dd');
        console.log(this.from);
        let to = new Date();
        this.to = this.dp.transform(to.setDate(to.getDate() + 30), 'yyyy-MM-dd');
        console.log(this.to);
    }
    ngOnInit() {
        this.getAll();
        this.getCreditMember();
    }
    close() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    getAll() {
        this.requesting = true;
        this.attendanceService.getAllReservations(this.idMember).subscribe(result => {
            console.log(result.result);
            this.requesting = false;
            this.attendances = result.result;
            this.getAttendanceShiftsList(this.attendances);
        }, error => {
            console.error(error);
            this.requesting = false;
        });
    }
    getAttendanceShiftsList(attendances) {
        for (var i = 0; i < attendances.length; i++) {
            var shiftList = new _domain_shift_list__WEBPACK_IMPORTED_MODULE_3__.ShiftList();
            const shift = attendances[i].shift;
            shiftList.id = shift.id;
            shiftList.day = this.getDayShift(shift.day) + " " + shift.day.substr(8, 2) + "/" + shift.day.substr(5, 2);
            shiftList.hour = shift.hour.substr(0, 5);
            shiftList.quota = shift.quota;
            shiftList.available = shift.available;
            shiftList.className = shift.class.name;
            console.log(shiftList);
            this.attendances[i].shift = shiftList;
        }
        console.log(this.attendances);
    }
    getDayShift(date) {
        let dayShift = '';
        const day = new Date(date).getDay();
        switch (day) {
            case 0:
                dayShift = "Domingo";
                break;
            case 1:
                dayShift = "Lunes";
                break;
            case 2:
                dayShift = "Martes";
                break;
            case 3:
                dayShift = "Miercoles";
                break;
            case 4:
                dayShift = "Jueves";
                break;
            case 5:
                dayShift = "Viernes";
                break;
            case 6:
                dayShift = "Sábado";
                break;
            default:
        }
        return dayShift;
    }
    getShiftsList(result) {
        for (var i = 0; i < result.length; i++) {
            var shiftList = new _domain_shift_list__WEBPACK_IMPORTED_MODULE_3__.ShiftList();
            const shift = result[i];
            shiftList.id = shift.id;
            shiftList.day = this.getDayShift(shift.day) + " " + shift.day.substr(8, 2) + "/" + shift.day.substr(5, 2);
            shiftList.hour = shift.hour.substr(0, 5);
            shiftList.quota = shift.quota;
            shiftList.available = shift.available;
            shiftList.classId = shift.class.id;
            shiftList.className = shift.class.name;
            let reserved = this.attendances.find(x => x.shiftId == shift.id);
            if (reserved) {
                shiftList.reserved = true;
            }
            else {
                shiftList.reserved = false;
            }
            ;
            console.log(shiftList);
            this.shifts.push(shiftList);
        }
        console.log(this.shifts);
    }
    viewReserve() {
        this.diplayReserve = true;
        this.getAllShift();
    }
    getAllShift() {
        this.shifts = [];
        this.requestingShifts = true;
        this.shiftService.getAll(this.from, this.to, 0).subscribe(result => {
            console.log(result);
            this.getShiftsList(result);
            this.requestingShifts = false;
        }, error => {
            this.requestingShifts = false;
            console.error(error);
        });
    }
    reserve(id, className) {
        document.getElementById("trigger-button").click();
        this.selectedShiftId = id;
        this.className = className;
    }
    getCreditMember() {
        let negatives = 5;
        this.creditService.getById(this.creditId).subscribe(result => {
            console.log(result);
            this.credit = result.result;
            console.log(this.credit.negative);
            this.availableNegative = (negatives - this.credit.negative);
            console.log(this.availableNegative);
        }, error => console.error(error));
    }
    createAttendance() {
        let newAttendance = new _domain_attendance__WEBPACK_IMPORTED_MODULE_2__.Attendance();
        newAttendance.memberId = this.idMember;
        newAttendance.shiftId = this.selectedShiftId;
        newAttendance.status = _domain_attendance__WEBPACK_IMPORTED_MODULE_2__.Status.reserved;
        return newAttendance;
    }
    updateCredit() {
        if (this.currentCredit > 0) {
            this.credit.creditConsumption = this.credit.creditConsumption + 1;
        }
        else {
            this.credit.negative = this.credit.negative + 1;
        }
    }
    confirmReserve() {
        let attendance = this.createAttendance();
        this.attendanceService.add(attendance).subscribe(result => {
            console.log(result);
            this.updateCredit();
            this.creditService.update(this.credit).subscribe(result => this.getAll(), error => {
                console.error(error);
                if (error.status === 400) {
                    this.customAlertService.displayAlert("Gestión de Asistencias", error.error.errores);
                }
                if (error.status === 500) {
                    this.customAlertService.displayAlert("Gestión de Asistencias", ["Hubo un problema al descontar el crédito."]);
                }
            });
        }, error => {
            console.error(error);
            if (error.status === 400) {
                this.customAlertService.displayAlert("Gestión de Asistencias", error.error.errores);
            }
            if (error.status === 500) {
                this.customAlertService.displayAlert("Gestión de Asistencias", ["Hubo un problema al reservar."]);
            }
        });
    }
    cancell(id) {
        this.customAlertService.displayAlert("Gestión de Asistencias", ["¿Está seguro que desea cancelar la reserva del turno?"], () => {
            this.attendanceService.cancelReservation(id, this.credit).subscribe(result => {
                this.getAll();
            }, error => {
                console.error(error);
                this.customAlertService.displayAlert("Eliminación", ["Error al intentar cancelar la reserva del turno."]);
            });
        }, true);
    }
};
MyReservationComponent.ctorParameters = () => [
    { type: _services_attendance_service__WEBPACK_IMPORTED_MODULE_5__.AttendanceService },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService },
    { type: _services_shift_service__WEBPACK_IMPORTED_MODULE_8__.ShiftService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _services_credit_service__WEBPACK_IMPORTED_MODULE_6__.CreditService },
    { type: _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_7__.CustomAlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRouterOutlet }
];
MyReservationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-my-reservation',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_reservation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_reservation_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyReservationComponent);



/***/ }),

/***/ 72649:
/*!***********************************************************************!*\
  !*** ./src/app/components/shift/reservation/reservation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationComponent": () => (/* binding */ ReservationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reservation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reservation.component.html */ 88633);
/* harmony import */ var _reservation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.component.scss */ 62976);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _domain_attendance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domain/attendance */ 91065);
/* harmony import */ var _domain_shift_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domain/shift-list */ 23324);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/account.service */ 15921);
/* harmony import */ var _services_attendance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/attendance.service */ 53311);
/* harmony import */ var _services_credit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/credit.service */ 53133);
/* harmony import */ var _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/custom-alert.service */ 10908);
/* harmony import */ var _services_shift_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/shift.service */ 29952);












let ReservationComponent = class ReservationComponent {
    constructor(attendanceService, accountService, shiftService, dp, creditService, customAlertService /*,
    public modalController: ModalController,
    public routerOutlet: IonRouterOutlet*/) {
        this.attendanceService = attendanceService;
        this.accountService = accountService;
        this.shiftService = shiftService;
        this.dp = dp;
        this.creditService = creditService;
        this.customAlertService = customAlertService;
        this.attendances = [];
        this.diplayReserve = false;
        this.shifts = [];
        this.className = "";
        this.currentDate = new Date(Date.now());
        this.availableNegative = 5;
        this.idMember = this.accountService.getLoggedUser().id;
        this.creditId = this.accountService.getLoggedUser().creditId;
        this.currentCredit = this.accountService.getLoggedUser().credit;
        this.from = this.dp.transform(new Date(), 'yyyy-MM-dd');
        console.log(this.from);
        let to = new Date();
        this.to = this.dp.transform(to.setDate(to.getDate() + 30), 'yyyy-MM-dd');
        console.log(this.to);
    }
    ngOnInit() {
    }
    /*
    close() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
        'dismissed': true
      });
    }
    */
    getAll() {
        try {
            this.attendanceService.getAllReservations(this.idMember).subscribe(result => {
                console.log(result.result);
                this.attendances = result.result;
                this.getAttendanceShiftsList(this.attendances);
            }, error => console.error(error));
        }
        catch (_a) {
            console.log("Error");
        }
    }
    getAttendanceShiftsList(attendances) {
        try {
            for (var i = 0; i < attendances.length; i++) {
                var shiftList = new _domain_shift_list__WEBPACK_IMPORTED_MODULE_3__.ShiftList();
                const shift = attendances[i].shift;
                if (shift) {
                    shiftList.id = shift.id;
                    shiftList.day = this.getDayShift(shift.day) + " " + shift.day.substr(8, 2) + "/" + shift.day.substr(5, 2);
                    shiftList.hour = shift.hour.substr(0, 5);
                    shiftList.quota = shift.quota;
                    shiftList.available = shift.available;
                    shiftList.className = shift.class.name;
                    console.log(shiftList);
                    this.attendances[i].shift = shiftList;
                }
            }
            console.log(this.attendances);
        }
        catch (_a) { }
    }
    getDayShift(date) {
        let dayShift = '';
        const day = new Date(date).getDay();
        switch (day) {
            case 0:
                dayShift = "Domingo";
                break;
            case 1:
                dayShift = "Lunes";
                break;
            case 2:
                dayShift = "Martes";
                break;
            case 3:
                dayShift = "Miercoles";
                break;
            case 4:
                dayShift = "Jueves";
                break;
            case 5:
                dayShift = "Viernes";
                break;
            case 6:
                dayShift = "Sábado";
                break;
            default:
        }
        return dayShift;
    }
    getShiftsList(result) {
        for (var i = 0; i < result.length; i++) {
            var shiftList = new _domain_shift_list__WEBPACK_IMPORTED_MODULE_3__.ShiftList();
            const shift = result[i];
            shiftList.id = shift.id;
            shiftList.day = this.getDayShift(shift.day) + " " + shift.day.substr(8, 2) + "/" + shift.day.substr(5, 2);
            shiftList.hour = shift.hour.substr(0, 5);
            shiftList.quota = shift.quota;
            shiftList.available = shift.available;
            console.log("shift.class", shift.class);
            shiftList.classId = shift.class.id;
            shiftList.className = shift.class.name;
            let reserved = this.attendances.find(x => x.shiftId == shift.id);
            if (reserved) {
                shiftList.reserved = true;
            }
            else {
                shiftList.reserved = false;
            }
            ;
            console.log(shiftList);
            this.shifts.push(shiftList);
        }
        console.log(this.shifts);
    }
    viewReserve() {
        this.diplayReserve = true;
        this.getAllShift();
    }
    getAllShift() {
        this.shifts = [];
        this.shiftService.getAll(this.from, this.to, 0).subscribe(result => {
            console.log(result);
            this.getShiftsList(result);
        }, error => {
            console.error(error);
        });
    }
    reserve(id, className) {
        document.getElementById("trigger-button").click();
        this.selectedShiftId = id;
        this.className = className;
    }
    getCreditMember() {
        let negatives = 5;
        this.creditService.getById(this.creditId).subscribe(result => {
            console.log(result);
            this.credit = result.result;
            console.log(this.credit.negative);
            this.availableNegative = (negatives - this.credit.negative);
            console.log(this.availableNegative);
        }, error => console.error(error));
    }
    createAttendance() {
        let newAttendance = new _domain_attendance__WEBPACK_IMPORTED_MODULE_2__.Attendance();
        newAttendance.memberId = this.idMember;
        newAttendance.shiftId = this.selectedShiftId;
        newAttendance.status = _domain_attendance__WEBPACK_IMPORTED_MODULE_2__.Status.reserved;
        return newAttendance;
    }
    updateCredit() {
        if (this.currentCredit > 0) {
            this.credit.creditConsumption = this.credit.creditConsumption + 1;
        }
        else {
            this.credit.negative = this.credit.negative + 1;
        }
    }
    confirmReserve() {
        let attendance = this.createAttendance();
        this.attendanceService.add(attendance).subscribe(result => {
            console.log(result);
            this.updateCredit();
            this.creditService.update(this.credit).subscribe(result => this.getAll(), error => {
                console.error(error);
                if (error.status === 400) {
                    this.customAlertService.displayAlert("Gestión de Asistencias", error.error.errores);
                }
                if (error.status === 500) {
                    this.customAlertService.displayAlert("Gestión de Asistencias", ["Hubo un problema al descontar el crédito."]);
                }
            });
        }, error => {
            console.error(error);
            if (error.status === 400) {
                this.customAlertService.displayAlert("Gestión de Asistencias", error.error.errores);
            }
            if (error.status === 500) {
                this.customAlertService.displayAlert("Gestión de Asistencias", ["Hubo un problema al reservar."]);
            }
        });
    }
    cancell(id) {
        this.customAlertService.displayAlert("Gestión de Asistencias", ["¿Está seguro que desea cancelar la reserva del turno?"], () => {
            this.attendanceService.cancelReservation(id, this.credit).subscribe(result => {
                this.getAll();
            }, error => {
                console.error(error);
                this.customAlertService.displayAlert("Eliminación", ["Error al intentar cancelar la reserva del turno."]);
            });
        }, true);
    }
};
ReservationComponent.ctorParameters = () => [
    { type: _services_attendance_service__WEBPACK_IMPORTED_MODULE_5__.AttendanceService },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService },
    { type: _services_shift_service__WEBPACK_IMPORTED_MODULE_8__.ShiftService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _services_credit_service__WEBPACK_IMPORTED_MODULE_6__.CreditService },
    { type: _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_7__.CustomAlertService }
];
ReservationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-reservation',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reservation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reservation_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReservationComponent);



/***/ }),

/***/ 28158:
/*!*************************************************************************!*\
  !*** ./src/app/components/shift/shift-create/shift-create.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftCreateComponent": () => (/* binding */ ShiftCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shift_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./shift-create.component.html */ 74203);
/* harmony import */ var _shift_create_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-create.component.scss */ 64492);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_domain_attendance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/attendance */ 91065);
/* harmony import */ var src_app_services_attendance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/attendance.service */ 53311);
/* harmony import */ var src_app_services_credit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/credit.service */ 53133);
/* harmony import */ var _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/custom-alert.service */ 10908);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/member.service */ 62004);
/* harmony import */ var _services_shift_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/shift.service */ 29952);











let ShiftCreateComponent = class ShiftCreateComponent {
    constructor(attendanceService, memberService, customAlertService, creditService, shiftService, dp) {
        this.attendanceService = attendanceService;
        this.memberService = memberService;
        this.customAlertService = customAlertService;
        this.creditService = creditService;
        this.shiftService = shiftService;
        this.dp = dp;
        this.attendances = [];
        this.viewSelectAddMember = false;
        this.filterMember = "";
        this.members = [];
        this.viewBtnAddMember = true;
        this.currentDate = new Date(Date.now());
        this.getAllShifts = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    }
    ngOnInit() {
        console.log(this.shiftId);
        this.getAllMembers();
        console.log(this.currentDate);
    }
    modalClick() {
        console.log(document.getElementById("modal-attendance"));
        document.getElementById("modal-attendance").click();
        this.viewBtnAddMember = true;
        console.log(this.currentDate);
    }
    getShift(id) {
        this.shiftService.getById(id).subscribe(result => {
            console.log(result);
            this.shift = result.result;
            this.shift.day = this.getDayShift(this.shift.day) + " " + this.shift.day.substr(8, 2) + "/" + this.shift.day.substr(5, 2);
            this.shift.hour = this.shift.hour.substr(0, 5);
            this.getAll(id);
        }, error => console.error(error));
    }
    getDayShift(date) {
        let dayShift = '';
        const day = new Date(date).getDay();
        switch (day) {
            case 0:
                dayShift = "Domingo";
                break;
            case 1:
                dayShift = "Lunes";
                break;
            case 2:
                dayShift = "Martes";
                break;
            case 3:
                dayShift = "Miercoles";
                break;
            case 4:
                dayShift = "Jueves";
                break;
            case 5:
                dayShift = "Viernes";
                break;
            case 6:
                dayShift = "Sábado";
                break;
            default:
        }
        return dayShift;
    }
    getAll(id) {
        this.shiftId = id;
        this.attendanceService.getAllByIdShift(id).subscribe(result => {
            console.log(result);
            this.attendances = result.result;
            this.quotaAvailable = this.shift.quota - this.attendances.length;
        }, error => console.error(error));
    }
    getAllMembers() {
        this.memberService.getAll().subscribe(result => {
            console.log(result);
            this.members = result;
        }, error => console.error(error));
    }
    viewSelectListMember() {
        this.viewSelectAddMember = !this.viewSelectAddMember;
        this.viewBtnAddMember = false;
    }
    clearInput() {
        this.filterMember = "";
    }
    completeInput() {
        if (this.member) {
            this.filterMember = this.member.lastName + " " + this.member.name;
        }
    }
    selectMember(event) {
        this.member = event;
        console.log(this.member);
        this.filterMember = this.member.lastName + " " + this.member.name;
        this.getCreditMember(this.member.creditId);
    }
    getCreditMember(id) {
        this.creditService.getById(id).subscribe(result => {
            console.log(result);
            this.credit = result.result;
        }, error => console.error(error));
    }
    createAttendance() {
        let newAttendance = new src_app_domain_attendance__WEBPACK_IMPORTED_MODULE_2__.Attendance();
        newAttendance.memberId = this.member.id;
        newAttendance.shiftId = this.shiftId;
        newAttendance.status = src_app_domain_attendance__WEBPACK_IMPORTED_MODULE_2__.Status.reserved;
        return newAttendance;
    }
    updateCredit() {
        console.log(this.credit.expiration);
        console.log(this.currentDate);
        let expirationDate = new Date(this.credit.expiration.substr(0, 10));
        console.log(expirationDate);
        if (this.currentDate.getTime() > expirationDate.getTime()) {
            this.credit.negative = this.credit.negative + 1;
        }
        else {
            this.credit.creditConsumption = this.credit.creditConsumption + 1;
        }
    }
    addMember() {
        if (this.credit.negative > 5) {
            this.customAlertService.displayAlert("Gestión de Asistencias", ["El socio superó la cantidad de negativos permitidos."]);
        }
        else {
            let attendance = this.createAttendance();
            this.attendanceService.add(attendance).subscribe(result => {
                console.log(result);
                this.updateCredit();
                this.creditService.update(this.credit).subscribe(result => {
                    this.getAll(this.shiftId);
                    this.viewSelectAddMember = false;
                    this.viewBtnAddMember = true;
                    this.getAllShifts.emit();
                }, error => {
                    console.error(error);
                    if (error.status === 400) {
                        this.customAlertService.displayAlert("Gestión de Asistencias", error.error.errores);
                    }
                    if (error.status === 500) {
                        this.customAlertService.displayAlert("Gestión de Asistencias", ["Hubo un problema al descontar el crédito."]);
                    }
                });
            }, error => {
                console.error(error);
                if (error.status === 400) {
                    this.customAlertService.displayAlert("Gestión de Asistencias", error.error.errores);
                }
                if (error.status === 500) {
                    this.customAlertService.displayAlert("Gestión de Asistencias", ["Hubo un problema al reservar."]);
                }
            });
        }
    }
    cancell(id, memberId) {
        let creditId = this.members.find(x => x.id == memberId).creditId;
        this.getCreditMember(creditId);
        this.customAlertService.displayAlert("Gestión de Asistencias", ["¿Está seguro que desea cancelar la reserva del turno?"], () => {
            this.attendanceService.cancelReservation(id, this.credit).subscribe(result => {
                this.getAll(this.shiftId);
            }, error => {
                console.error(error);
                this.customAlertService.displayAlert("Eliminación", ["Error al intentar cancelar la reserva del turno."]);
            });
        }, true);
    }
};
ShiftCreateComponent.ctorParameters = () => [
    { type: src_app_services_attendance_service__WEBPACK_IMPORTED_MODULE_3__.AttendanceService },
    { type: _services_member_service__WEBPACK_IMPORTED_MODULE_6__.MemberService },
    { type: _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_5__.CustomAlertService },
    { type: src_app_services_credit_service__WEBPACK_IMPORTED_MODULE_4__.CreditService },
    { type: _services_shift_service__WEBPACK_IMPORTED_MODULE_7__.ShiftService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe }
];
ShiftCreateComponent.propDecorators = {
    getAllShifts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
ShiftCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-shift-create',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shift_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_shift_create_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShiftCreateComponent);



/***/ }),

/***/ 84771:
/*!*********************************************************************!*\
  !*** ./src/app/components/shift/shift-list/shift-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftListComponent": () => (/* binding */ ShiftListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shift_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./shift-list.component.html */ 93139);
/* harmony import */ var _shift_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-list.component.scss */ 77258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_domain_shift_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/shift-list */ 23324);
/* harmony import */ var src_app_services_shift_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shift.service */ 29952);
/* harmony import */ var _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/custom-alert.service */ 10908);
/* harmony import */ var _shift_create_shift_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shift-create/shift-create.component */ 28158);
/* harmony import */ var _modal_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modal/modal-page/modal-page.component */ 17182);












let ShiftListComponent = class ShiftListComponent {
    constructor(modalController, shiftService, dp, customAlertService, routerOutlet) {
        this.modalController = modalController;
        this.shiftService = shiftService;
        this.dp = dp;
        this.customAlertService = customAlertService;
        this.routerOutlet = routerOutlet;
        this.shifts = [];
        this.from = this.dp.transform(new Date(), 'yyyy-MM-dd');
        console.log(this.from);
        let to = new Date();
        this.to = this.dp.transform(to.setDate(to.getDate() + 30), 'yyyy-MM-dd');
        console.log(this.to);
    }
    ngOnInit() {
        this.getAll();
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_page_modal_page_component__WEBPACK_IMPORTED_MODULE_6__.ModalPageComponent,
                cssClass: 'my-custom-class',
                swipeToClose: true,
                presentingElement: this.routerOutlet.nativeEl
            });
            return yield modal.present();
        });
    }
    /*
    async presentModal() {
      const modal = await this.modalController.create({
        component: ModalPage,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }*/
    getAll() {
        this.shifts = [];
        this.shiftService.getAll(this.from, this.to, 0).subscribe(result => {
            console.log(result);
            this.getShiftsList(result);
        }, error => {
            console.error(error);
        });
    }
    getShiftsList(result) {
        for (var i = 0; i < result.length; i++) {
            var shiftList = new src_app_domain_shift_list__WEBPACK_IMPORTED_MODULE_2__.ShiftList();
            const shift = result[i];
            shiftList.id = shift.id;
            shiftList.checked = false;
            shiftList.day = this.getDayShift(shift.day) + " " + shift.day.substr(8, 2) + "/" + shift.day.substr(5, 2);
            shiftList.hour = shift.hour.substr(0, 5);
            shiftList.quota = shift.quota;
            shiftList.available = shift.available;
            shiftList.classId = shift.class.id;
            shiftList.className = shift.class.name;
            shiftList.userId = shift.user.id;
            shiftList.userName = shift.user.lastName + " " + shift.user.name;
            this.shifts.push(shiftList);
        }
        console.log(this.shifts);
    }
    getDayShift(date) {
        let dayShift = '';
        const day = new Date(date).getDay();
        switch (day) {
            case 0:
                dayShift = "Domingo";
                break;
            case 1:
                dayShift = "Lunes";
                break;
            case 2:
                dayShift = "Martes";
                break;
            case 3:
                dayShift = "Miercoles";
                break;
            case 4:
                dayShift = "Jueves";
                break;
            case 5:
                dayShift = "Viernes";
                break;
            case 6:
                dayShift = "Sábado";
                break;
            default:
        }
        return dayShift;
    }
    goToAttendances(id) {
        this.shiftCreateComponent.modalClick();
        this.shiftCreateComponent.getShift(id);
    }
};
ShiftListComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_services_shift_service__WEBPACK_IMPORTED_MODULE_3__.ShiftService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe },
    { type: _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_4__.CustomAlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet }
];
ShiftListComponent.propDecorators = {
    shiftCreateComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_shift_create_shift_create_component__WEBPACK_IMPORTED_MODULE_5__.ShiftCreateComponent, { static: true },] }]
};
ShiftListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-shift-list',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shift_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_shift_list_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ShiftListComponent);



/***/ }),

/***/ 6509:
/*!********************************************************************************************!*\
  !*** ./src/app/components/statistics/periodization-goals/periodization-goals.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodizationGoalsComponent": () => (/* binding */ PeriodizationGoalsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_periodization_goals_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./periodization-goals.component.html */ 94737);
/* harmony import */ var _periodization_goals_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./periodization-goals.component.scss */ 8749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 71871);





let PeriodizationGoalsComponent = class PeriodizationGoalsComponent {
    constructor() {
        chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_2__.registerables);
    }
    ngOnInit() {
        console.log(this.barCanvas1);
        // 
    }
    ngAfterViewInit() {
        this.renderChart(this.barCanvas1, [3, 4, 3, 5, 5]);
    }
    renderChart(canvas, data) {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(canvas.nativeElement, {
            type: 'line',
            data: {
                labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
                datasets: [
                    {
                        label: 'Asistencias',
                        data: data,
                        borderColor: 'rgba(27, 255, 27, 0.3)',
                        backgroundColor: 'rgba(148, 228, 148, 0.3)',
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        suggestedMin: 0,
                        suggestedMax: 7
                    }
                }
            }
        });
    }
};
PeriodizationGoalsComponent.ctorParameters = () => [];
PeriodizationGoalsComponent.propDecorators = {
    barCanvas1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['barCanvas1',] }]
};
PeriodizationGoalsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-periodization-goals',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_periodization_goals_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_periodization_goals_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PeriodizationGoalsComponent);



/***/ }),

/***/ 46718:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/statistics/periodization-report/periodization-report.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodizationReportComponent": () => (/* binding */ PeriodizationReportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_periodization_report_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./periodization-report.component.html */ 38974);
/* harmony import */ var _periodization_report_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./periodization-report.component.scss */ 85905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 71871);






let PeriodizationReportComponent = class PeriodizationReportComponent {
    constructor(router) {
        this.router = router;
        chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_2__.registerables);
    }
    goToGoals() {
        this.router.navigate(['/goals']);
    }
    ngOnInit() {
        console.log(this.barCanvas1);
        // 
    }
    ngAfterViewInit() {
        this.renderChart(this.barCanvas1, [20, 18, 20, 15, 20, 20, 19, 28, 17, 25, 24, 28]);
    }
    renderChart(canvas, data) {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(canvas.nativeElement, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                datasets: [
                    {
                        label: 'Asistencias por mes',
                        data: data,
                        borderColor: 'rgba(27, 255, 27, 0.3)',
                        backgroundColor: 'rgba(148, 228, 148, 0.3)',
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        suggestedMin: 10,
                        suggestedMax: 30
                    }
                }
            }
        });
    }
};
PeriodizationReportComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PeriodizationReportComponent.propDecorators = {
    barCanvas1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['barCanvas1',] }]
};
PeriodizationReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-periodization-report',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_periodization_report_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_periodization_report_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PeriodizationReportComponent);



/***/ }),

/***/ 12096:
/*!************************************************************************!*\
  !*** ./src/app/components/statistics/wod-goals/wod-goals.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WodGoalsComponent": () => (/* binding */ WodGoalsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wod_goals_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./wod-goals.component.html */ 98900);
/* harmony import */ var _wod_goals_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wod-goals.component.scss */ 5784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let WodGoalsComponent = class WodGoalsComponent {
    constructor() { }
    ngOnInit() { }
};
WodGoalsComponent.ctorParameters = () => [];
WodGoalsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-wod-goals',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wod_goals_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_wod_goals_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WodGoalsComponent);



/***/ }),

/***/ 82831:
/*!********************************************************************!*\
  !*** ./src/app/components/user/email-edit/email-edit.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailEditComponent": () => (/* binding */ EmailEditComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_edit_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-edit.component.html */ 73821);
/* harmony import */ var _email_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-edit.component.scss */ 47480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_domain_user_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/user/account */ 69939);
/* harmony import */ var src_app_validations_control_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/validations/control.equal */ 42447);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/account.service */ 15921);
/* harmony import */ var _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/custom-alert.service */ 10908);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/member.service */ 62004);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/user.service */ 77524);












let EmailEditComponent = class EmailEditComponent {
    constructor(formBuilder, accountService, userService, memberService, router, customAlertService) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.userService = userService;
        this.memberService = memberService;
        this.router = router;
        this.customAlertService = customAlertService;
        this.sendForm = false;
        this.user = this.accountService.getLoggedUser();
        this.accountId = this.user.accountId;
        this.modificationForm = this.formBuilder.group({
            email: '',
            newEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
            repeatNewEmail: '',
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
        }, { validators: src_app_validations_control_equal__WEBPACK_IMPORTED_MODULE_3__.ControlEqual.mustMatch('newEmail', 'repeatNewEmail') });
    }
    ngOnInit() {
        if (this.user.userType == 1) {
            this.userService.getById(this.user.id).subscribe(result => {
                console.log(result);
                this.email = result.email;
                this.modificationForm.patchValue({
                    email: this.email
                });
            }, error => console.error(error));
        }
        else {
            this.memberService.getById(this.user.id).subscribe(result => {
                console.log(result);
                this.email = result.email;
                this.modificationForm.patchValue({
                    email: this.email
                });
            }, error => console.error(error));
        }
    }
    get f() {
        return this.modificationForm.controls;
    }
    updateAccount() {
        let account = new src_app_domain_user_account__WEBPACK_IMPORTED_MODULE_2__.Account();
        account.id = this.accountId;
        account.email = this.modificationForm.value.newEmail;
        account.password = this.modificationForm.value.password;
        return account;
    }
    submit() {
        this.sendForm = true;
        if (this.modificationForm.valid) {
            let account = this.updateAccount();
            this.accountService.updateEmail(account).subscribe(result => {
                console.log(result);
                this.router.navigate(['/my-account']);
            }, error => {
                console.error(error);
                if (error.status === 400) {
                    this.customAlertService.displayAlert("Gestión de modifcación de datos de la cuenta", error.error.errores);
                }
                if (error.status === 500) {
                    this.customAlertService.displayAlert("Gestión de modifcación de datos de la cuenta", ["No se pudo modificar el email."]);
                }
            });
        }
    }
};
EmailEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: _services_member_service__WEBPACK_IMPORTED_MODULE_6__.MemberService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_5__.CustomAlertService }
];
EmailEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-email-edit',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_edit_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_email_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailEditComponent);



/***/ }),

/***/ 2176:
/*!********************************************************************************************!*\
  !*** ./src/app/components/user/medical-history/injury-history/injury-history.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InjuryHistoryComponent": () => (/* binding */ InjuryHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_injury_history_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./injury-history.component.html */ 13146);
/* harmony import */ var _injury_history_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injury-history.component.scss */ 36923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_domain_member_injury__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/member/injury */ 72942);
/* harmony import */ var src_app_services_custom_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/custom-alert.service */ 10908);
/* harmony import */ var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/member.service */ 62004);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 59832);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 57154);









//import { File } from '@awesome-cordova-plugins/file';

let InjuryHistoryComponent = class InjuryHistoryComponent {
    constructor(memberService, route, router, customAlertService, transfer, file) {
        this.memberService = memberService;
        this.route = route;
        this.router = router;
        this.customAlertService = customAlertService;
        this.transfer = transfer;
        this.file = file;
        this.injury = false;
        this.upperLimbs = ["Cervical", "Hombro", "Brazo", "Codo", "Muñeca", "Manos", "Torso"];
        this.lowerLimbs = ["Cadera", "Pierna", "Rodilla", "Tibia", "Tobillo", "Pie"];
        this.optionsLimbs = true;
        this.files = [];
        this.urls = [];
        this.injuries = [];
        this.route.queryParams.subscribe(params => {
            this.memberId = parseInt(params['id']),
                this.medicalHistoryId = parseInt(params['medicalHistoryId']);
        });
        this.fileTransfer = this.transfer.create();
    }
    ngOnInit() {
        this.getAllInjuries(this.medicalHistoryId);
    }
    getAllInjuries(id) {
        this.injuryFiles = [];
        this.memberService.getAllInjuries(id).subscribe(result => {
            console.log(result);
            this.injuries = result;
            for (var i = 0; i < this.injuries.length; i++) {
                var files = this.injuries[i].files;
                for (var j = 0; j < files.length; j++) {
                    files[j].name = files[j].name.substr(0, 20);
                    this.injuryFiles.push(files[j]);
                }
            }
        }, error => console.error(error));
    }
    checkedInjury(event) {
        this.injury = (event == 1);
    }
    selectLimb(event) {
        this.nameInjury = event;
    }
    checkedLimbs(event) {
        this.optionsLimbs = !this.optionsLimbs;
        if (event == 1) {
            document.getElementById("LowerLimb").value = "";
        }
        else {
            document.getElementById("UpperLimb").value = "";
        }
    }
    onFileSelection(event) {
        const files = event.target.files;
        this.files.splice(0, this.files.length);
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            this.files.push(file);
            console.log(this.files);
        }
        this.urls = [];
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    console.log(event.target.result);
                    this.urls.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
        console.log(this.urls);
    }
    selectInjury(event) {
        console.log(event);
        if (event == "all") {
            this.getAllInjuries(this.medicalHistoryId);
        }
        else {
            this.injuryFiles = this.injuries[event].files;
        }
    }
    deleteFile(id) {
        this.memberService.deleteFile(id).subscribe(result => {
            console.log(result);
            this.getAllInjuries(this.medicalHistoryId);
        }, error => console.error(error));
    }
    addInjury() {
        console.log("pase");
        var newInjury = new src_app_domain_member_injury__WEBPACK_IMPORTED_MODULE_2__.Injury();
        console.log(this.nameInjury);
        newInjury.name = this.nameInjury;
        newInjury.medicalHistoryId = this.medicalHistoryId;
        if (newInjury.name != undefined) {
            this.memberService.addInjury(newInjury).subscribe(result => {
                let id = result.result.id;
                this.memberService.addFile(id, this.files).subscribe(result => {
                    console.log(result);
                    this.getAllInjuries(this.medicalHistoryId);
                }, error => {
                    console.error(error);
                    this.customAlertService.displayAlert("Gestión de antecedentes de lesiones", [error.error.errores]);
                });
            }, error => {
                console.error(error);
                this.customAlertService.displayAlert("Gestión de antecedentes de lesiones", [error.error]);
            });
        }
        else {
            this.customAlertService.displayAlert("Gestión de antecedentes de lesiones", ["Debe seleccionar una lesión."]);
        }
    }
    return() {
        this.router.navigate(['/historia-médica-editar'], { queryParams: { id: this.memberId, medicalHistoryId: this.medicalHistoryId } });
    }
    downloadDeprecated(i) {
        console.log(i);
        console.log(this.injuryFiles[i]);
        let fileName = this.injuryFiles[i].path;
        console.log(fileName);
        this.memberService.download(fileName).subscribe((response) => {
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {
                type: response.type
            }));
            if (fileName)
                downloadLink.setAttribute('download', fileName);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        });
    }
    download(i) {
        let fileName = this.injuryFiles[i].path;
        const url = 'http://www.example.com/file.pdf';
        this.fileTransfer.download(fileName, this.file.dataDirectory + 'file.pdf').then((entry) => {
            console.log('download complete: ' + entry.toURL());
        }, (error) => {
            // handle error
        });
    }
};
InjuryHistoryComponent.ctorParameters = () => [
    { type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_4__.MemberService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_custom_alert_service__WEBPACK_IMPORTED_MODULE_3__.CustomAlertService },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__.FileTransfer },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File }
];
InjuryHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-injury-history',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_injury_history_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_injury_history_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InjuryHistoryComponent);



/***/ }),

/***/ 30443:
/*!************************************************************************************************************!*\
  !*** ./src/app/components/user/medical-history/medical-history-create/medical-history-create.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalHistoryCreateComponent": () => (/* binding */ MedicalHistoryCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_medical_history_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./medical-history-create.component.html */ 22330);
/* harmony import */ var _medical_history_create_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-history-create.component.scss */ 55837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/custom-alert.service */ 10908);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/member.service */ 62004);
/* harmony import */ var _medical_history_form_medical_history_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../medical-history-form/medical-history-form.component */ 47859);








let MedicalHistoryCreateComponent = class MedicalHistoryCreateComponent {
    constructor(memberService, route, router, customAlertService) {
        this.memberService = memberService;
        this.route = route;
        this.router = router;
        this.customAlertService = customAlertService;
        this.medicalHistoryCreate = false;
        this.basicMedicalHistory = true;
        this.route.queryParams.subscribe(params => { this.id = parseInt(params['id']); });
    }
    ngOnInit() {
        this.memberService.getById(this.id).subscribe(result => {
            console.log(result);
            this.member = result;
            this.planType = this.member.planType;
            console.log(this.planType);
        }, error => console.error(error));
        this.memberService.getAge(this.id).subscribe(result => {
            this.age = result.result.age;
            console.log(this.age);
        }, error => console.error(error));
        this.memberService.getMedicalHistoryByIdMember(this.id).subscribe(result => {
            console.log(result);
            this.medicalHistoryId = result.result.id;
            this.router.navigate(["/historia-médica-editar"], { queryParams: { id: this.id, medicalHistoryId: this.medicalHistoryId } });
        }, error => {
            console.error(error);
            if (error.status == 400) {
                console.log("no existe");
            }
        });
    }
    create() {
        this.medicalHistoryCreate = true;
    }
    submit() {
        var newMedicalHistory = this.formMedicalHistory.createMedicalHistory();
        this.memberService.addMedicalHistory(this.id, newMedicalHistory).subscribe(result => {
            if (this.planType == 2) {
                this.router.navigate(['/member-list']);
            }
            else {
                this.medicalHistoryId = result.result.id;
                this.router.navigate(['/injury-history'], { queryParams: { id: this.id, medicalHistoryId: this.medicalHistoryId } });
            }
        }, error => {
            console.error(error);
            if (error.status === 400) {
                this.customAlertService.displayAlert("Gestión de Socios", error.error.errores);
            }
            if (error.status === 500) {
                this.customAlertService.displayAlert("Gestión de Socios", ["No se pudo guardar la historia médica."]);
            }
        });
    }
};
MedicalHistoryCreateComponent.ctorParameters = () => [
    { type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__.MemberService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_2__.CustomAlertService }
];
MedicalHistoryCreateComponent.propDecorators = {
    formMedicalHistory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_medical_history_form_medical_history_form_component__WEBPACK_IMPORTED_MODULE_4__.MedicalHistoryFormComponent, { static: true },] }]
};
MedicalHistoryCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-medical-history-create',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_medical_history_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_medical_history_create_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MedicalHistoryCreateComponent);



/***/ }),

/***/ 53695:
/*!********************************************************************************************************!*\
  !*** ./src/app/components/user/medical-history/medical-history-edit/medical-history-edit.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalHistoryEditComponent": () => (/* binding */ MedicalHistoryEditComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_medical_history_edit_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./medical-history-edit.component.html */ 28047);
/* harmony import */ var _medical_history_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-history-edit.component.scss */ 3594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/custom-alert.service */ 10908);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/member.service */ 62004);
/* harmony import */ var _medical_history_form_medical_history_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../medical-history-form/medical-history-form.component */ 47859);








let MedicalHistoryEditComponent = class MedicalHistoryEditComponent {
    constructor(router, route, customAlertService, memberService) {
        this.router = router;
        this.route = route;
        this.customAlertService = customAlertService;
        this.memberService = memberService;
        this.route.queryParams.subscribe(params => { this.id = parseInt(params['id']); });
    }
    ngOnInit() {
        this.memberService.getById(this.id).subscribe(result => {
            console.log(result);
            this.planType = result.planType;
            console.log(this.planType);
        }, error => console.error(error));
        this.memberService.getAge(this.id).subscribe(result => {
            this.age = result.result.age;
            console.log(this.age);
        }, error => console.error(error));
        this.formMedicalHistory.getMedicalHistoryUpdate(this.id);
    }
    submit() {
        var newMedicalHistory = this.formMedicalHistory.createMedicalHistory();
        this.memberService.updateMedicalHistory(this.formMedicalHistory.medicalHistory.id, newMedicalHistory).subscribe(result => {
            if (this.planType == 2) {
                this.router.navigate(['/member-list']);
            }
            else {
                this.router.navigate(['/injury-history'], { queryParams: { medicalHistoryId: this.formMedicalHistory.medicalHistory.id, id: this.id } });
            }
        }, error => {
            console.error(error);
            if (error.status === 400) {
                this.customAlertService.displayAlert("Gestión de Socios", error.error.errores);
            }
            if (error.status === 500) {
                this.customAlertService.displayAlert("Gestión de Socios", ["No se pudo guardar la historia médica."]);
            }
        });
    }
};
MedicalHistoryEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_2__.CustomAlertService },
    { type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__.MemberService }
];
MedicalHistoryEditComponent.propDecorators = {
    formMedicalHistory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_medical_history_form_medical_history_form_component__WEBPACK_IMPORTED_MODULE_4__.MedicalHistoryFormComponent, { static: true },] }]
};
MedicalHistoryEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-medical-history-edit',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_medical_history_edit_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_medical_history_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MedicalHistoryEditComponent);



/***/ }),

/***/ 47859:
/*!********************************************************************************************************!*\
  !*** ./src/app/components/user/medical-history/medical-history-form/medical-history-form.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalHistoryFormComponent": () => (/* binding */ MedicalHistoryFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_medical_history_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./medical-history-form.component.html */ 9460);
/* harmony import */ var _medical_history_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medical-history-form.component.scss */ 95219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_domain_member_medical_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/member/medical-history */ 50722);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/member.service */ 62004);







let MedicalHistoryFormComponent = class MedicalHistoryFormComponent {
    constructor(formBuilder, memberService) {
        this.formBuilder = formBuilder;
        this.memberService = memberService;
        this.feminine = false;
        this.inputAllergies = false;
        this.inputHeartDisease = false;
        this.inputRespiratoryDisease = false;
        this.inputHabitualMedication = false;
        this.inputSurgicalIntervention = false;
        this.sendForm = false;
        this.formCreate = this.formBuilder.group({
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            period: '',
            age: this.age,
            weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            allergies: '',
            allergiesChecked: 'off',
            heartDisease: '',
            heartDiseaseChecked: 'no',
            respiratoryDisease: '',
            respiratoryDiseaseChecked: 'no',
            habitualMedication: '',
            habitualMedicationChecked: 'no',
            surgicalIntervention: '',
            surgicalInterventionChecked: 'no',
            observations: ''
        });
    }
    ngOnInit() {
        this.formCreate.patchValue({
            age: this.age
        });
        this.formCreate.get('period').disable();
        this.formCreate.get('allergies').disable();
        this.formCreate.get('heartDisease').disable();
        this.formCreate.get('habitualMedication').disable();
        this.formCreate.get('respiratoryDisease').disable();
        this.formCreate.get('surgicalIntervention').disable();
    }
    get f() {
        return this.formCreate.controls;
    }
    selectGender(event) {
        if (event == 'woman') {
            this.formCreate.get('period').enable();
        }
        else {
            this.formCreate.get('period').disable();
        }
    }
    enableInput(event, name) {
        console.log("enableInput");
        console.log("event", event);
        console.log("name", name);
        if (event == 'no') {
            this.formCreate.get(name).disable();
        }
        else {
            this.formCreate.get(name).enable();
        }
    }
    createMedicalHistory() {
        this.sendForm = true;
        if (this.formCreate.valid) {
            var newMedicalHistory = new src_app_domain_member_medical_history__WEBPACK_IMPORTED_MODULE_2__.MedicalHistory();
            newMedicalHistory.gender = this.formCreate.value.gender;
            newMedicalHistory.period = this.formCreate.value.period;
            newMedicalHistory.weight = this.formCreate.value.weight;
            newMedicalHistory.allergies = this.formCreate.value.allergies;
            newMedicalHistory.heartDisease = this.formCreate.value.heartDisease;
            newMedicalHistory.respiratoryDisease = this.formCreate.value.respiratoryDisease;
            newMedicalHistory.habitualMedication = this.formCreate.value.habitualMedication;
            if (this.formCreate.value.observations == "") {
                newMedicalHistory.observations = undefined;
            }
            else {
                newMedicalHistory.observations = this.formCreate.value.observations;
            }
            ;
            console.log(newMedicalHistory);
            return newMedicalHistory;
        }
    }
    getMedicalHistoryUpdate(id) {
        this.memberService.getMedicalHistoryByIdMember(id).subscribe(result => {
            this.medicalHistory = result.result;
            this.toCompleteForm();
        }, error => console.error(error));
    }
    toCompleteForm() {
        if (this.medicalHistory.gender == 'woman')
            this.formCreate.get('period').enable();
        if (this.medicalHistory.allergies != null) {
            this.formCreate.get('allergies').enable();
            this.formCreate.patchValue({ allergiesChecked: "yes" });
        }
        if (this.medicalHistory.heartDisease != null) {
            this.formCreate.get('heartDisease').enable();
            this.formCreate.patchValue({ heartDiseaseChecked: "yes" });
        }
        if (this.medicalHistory.habitualMedication != null) {
            this.formCreate.get('habitualMedication').enable();
            this.formCreate.patchValue({ habitualMedicationChecked: "yes" });
        }
        if (this.medicalHistory.respiratoryDisease != null) {
            this.formCreate.get('respiratoryDisease').enable();
            this.formCreate.patchValue({ respiratoryDiseaseChecked: "yes" });
        }
        if (this.medicalHistory.surgicalIntervention != null) {
            this.formCreate.get('surgicalIntervention').enable();
            this.formCreate.patchValue({ surgicalInterventionChecked: "yes" });
        }
        this.formCreate.patchValue({
            gender: this.medicalHistory.gender,
            period: this.medicalHistory.period,
            age: this.age,
            weight: this.medicalHistory.weight,
            allergies: this.medicalHistory.allergies,
            heartDisease: this.medicalHistory.heartDisease,
            respiratoryDisease: this.medicalHistory.respiratoryDisease,
            habitualMedication: this.medicalHistory.habitualMedication,
            surgicalIntervention: this.medicalHistory.surgicalIntervention,
            observations: this.medicalHistory.observations
        });
        console.log(this.formCreate.value);
    }
};
MedicalHistoryFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__.MemberService }
];
MedicalHistoryFormComponent.propDecorators = {
    age: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
MedicalHistoryFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-medical-history-form',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_medical_history_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_medical_history_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MedicalHistoryFormComponent);



/***/ }),

/***/ 91349:
/*!**************************************************************************!*\
  !*** ./src/app/components/user/member-create/member-create.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberCreateComponent": () => (/* binding */ MemberCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_member_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./member-create.component.html */ 91842);
/* harmony import */ var _member_create_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-create.component.scss */ 9406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/account.service */ 15921);
/* harmony import */ var _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/custom-alert.service */ 10908);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/member.service */ 62004);
/* harmony import */ var _member_form_member_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../member-form/member-form.component */ 63814);










let MemberCreateComponent = class MemberCreateComponent {
    constructor(memberService, router, customAlertService, accountService, alertController) {
        this.memberService = memberService;
        this.router = router;
        this.customAlertService = customAlertService;
        this.accountService = accountService;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    return() {
        if (this.accountService.isAuthenticated()) {
            this.router.navigate(['/member-list']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    submit() {
        console.log("inicio");
        const newMember = this.formMember.createMember();
        console.log("newMember", newMember);
        if (newMember !== null) {
            console.log("por aquí");
            this.memberService.add(newMember).subscribe(result => {
                console.log(result.result.id);
                let id = result.result.id;
                this.customAlertService.display("Gestión de Socios", ["¿Desea cargar la historia médica?"], () => {
                    this.router.navigate(["/historia-medica-crear"], { queryParams: { id: id } });
                }, true, () => { this.router.navigate(["/login"]); });
            }, error => {
                console.error(error);
                if (error.status === 400) {
                    this.customAlertService.display("Gestión de Socios", error.error.errores);
                }
                if (error.status === 500) {
                    this.customAlertService.display("Gestión de Socios", ["No se pudo guardar el socio."]);
                }
            });
        }
        else {
            console.log("por aquí no");
        }
    }
};
MemberCreateComponent.ctorParameters = () => [
    { type: _services_member_service__WEBPACK_IMPORTED_MODULE_4__.MemberService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_3__.CustomAlertService },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
MemberCreateComponent.propDecorators = {
    formMember: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_5__.MemberFormComponent, { static: false },] }]
};
MemberCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-member-create',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_member_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_member_create_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MemberCreateComponent);



/***/ }),

/***/ 37264:
/*!**********************************************************************!*\
  !*** ./src/app/components/user/member-edit/member-edit.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberEditComponent": () => (/* binding */ MemberEditComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_member_edit_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./member-edit.component.html */ 86710);
/* harmony import */ var _member_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-edit.component.scss */ 46155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/account.service */ 15921);
/* harmony import */ var _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/custom-alert.service */ 10908);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/member.service */ 62004);
/* harmony import */ var _member_form_member_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../member-form/member-form.component */ 63814);









let MemberEditComponent = class MemberEditComponent {
    constructor(memberService, route, router, customAlertService, accountService) {
        this.memberService = memberService;
        this.route = route;
        this.router = router;
        this.customAlertService = customAlertService;
        this.accountService = accountService;
        this.user = this.accountService.getLoggedUser();
        if (this.user.userType == 2) {
            this.id = this.user.id;
        }
        else {
            this.route.queryParams.subscribe(params => {
                this.id = parseInt(params['id']);
            });
        }
    }
    ngOnInit() {
        this.formMember.getMemberUpdate(this.id);
    }
    submit() {
        var memberUpdate = this.formMember.createMember();
        console.log(memberUpdate);
        this.memberService.update(this.id, memberUpdate).subscribe(result => {
            this.router.navigate(['/my-account']);
        }, error => {
            console.error(error);
            if (error.status === 400) {
                this.customAlertService.displayAlert("Gestión de Socios", error.error.errores);
            }
            if (error.status === 500) {
                this.customAlertService.displayAlert("Gestión de Socios", ["No se pudo modificar el socio."]);
            }
        });
    }
};
MemberEditComponent.ctorParameters = () => [
    { type: _services_member_service__WEBPACK_IMPORTED_MODULE_4__.MemberService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_custom_alert_service__WEBPACK_IMPORTED_MODULE_3__.CustomAlertService },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService }
];
MemberEditComponent.propDecorators = {
    formMember: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_5__.MemberFormComponent, { static: true },] }]
};
MemberEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-member-edit',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_member_edit_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_member_edit_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MemberEditComponent);



/***/ }),

/***/ 63814:
/*!**********************************************************************!*\
  !*** ./src/app/components/user/member-form/member-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberFormComponent": () => (/* binding */ MemberFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_member_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./member-form.component.html */ 19971);
/* harmony import */ var _member_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-form.component.scss */ 37500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_domain_member_member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/member/member */ 343);
/* harmony import */ var src_app_domain_user_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/user/account */ 69939);
/* harmony import */ var src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/plan.service */ 25929);
/* harmony import */ var src_app_validations_control_equal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/validations/control.equal */ 42447);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/member.service */ 62004);











let MemberFormComponent = class MemberFormComponent {
    constructor(formBuilder, memberService, router, planService) {
        this.formBuilder = formBuilder;
        this.memberService = memberService;
        this.router = router;
        this.planService = planService;
        this.dt = new Date();
        this.unamePattern = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,15}$";
        this.sendForm = false;
        this.plans = [];
        this.modeCreate = true;
        this.formCreate = this.formBuilder.group({
            lastName: ['marchetti', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            name: ['javier', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            birthDate: [this.dt, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            phone: ['3815113489', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            socialSecurity: 'osde',
            address: ['Belgrano 121', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            emergencyPhone: ['3815113489', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            emergencyContact: ['3815113489', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            instagram: 'test',
            facebook: 'test',
            planId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
        });
        this.formAccount = this.formBuilder.group({
            email: ['j@gmail.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
            password: ['Abcd1234', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(this.unamePattern)]],
            repeatPassword: 'Abcd1234',
        }, { validators: src_app_validations_control_equal__WEBPACK_IMPORTED_MODULE_5__.ControlEqual.mustMatch('password', 'repeatPassword') });
    }
    ngOnInit() {
        this.planService.getAll().subscribe(result => {
            this.plans = result;
        }, error => console.error(error));
    }
    get f() {
        return this.formCreate.controls;
    }
    get fAccount() {
        return this.formAccount.controls;
    }
    selectPlan(event) {
        this.formCreate.value.planId = event;
        this.planType = this.plans.find(x => x.id == event).type;
    }
    fillInEmptyFormFields() {
        let form = this.formCreate.value;
        for (const control in form) {
            if (form[control] == '' || "") {
                form[control] = "-";
            }
        }
    }
    createMember() {
        this.sendForm = true;
        if (this.formCreate.valid) {
            this.fillInEmptyFormFields();
            let newMember = new src_app_domain_member_member__WEBPACK_IMPORTED_MODULE_2__.Member();
            newMember.lastName = this.formCreate.value.lastName;
            newMember.name = this.formCreate.value.name;
            newMember.birthDate = this.formCreate.value.birthDate;
            newMember.address = this.formCreate.value.address;
            newMember.phone = this.formCreate.value.phone;
            newMember.socialSecurity = this.formCreate.value.socialSecurity;
            newMember.emergencyPhone = this.formCreate.value.emergencyPhone;
            newMember.emergencyContact = this.formCreate.value.emergencyContact;
            newMember.instagram = this.formCreate.value.instagram;
            newMember.facebook = this.formCreate.value.facebook;
            newMember.planId = this.formCreate.value.planId;
            if (this.modeCreate) {
                var account = this.createAccount();
                newMember.email = account.email;
                newMember.password = account.password;
            }
            ;
            console.log(newMember);
            return newMember;
        }
        else {
            return null;
        }
    }
    createAccount() {
        this.sendForm = true;
        if (this.formAccount.valid) {
            var newAccount = new src_app_domain_user_account__WEBPACK_IMPORTED_MODULE_3__.Account();
            newAccount.email = this.formAccount.value.email;
            newAccount.password = this.formAccount.value.password;
            return newAccount;
        }
        else {
            return null;
        }
    }
    getMemberUpdate(id) {
        this.memberService.getById(id).subscribe(result => {
            this.member = result;
            console.log(this.member);
            this.toCompleteForm();
        }, error => console.error(error));
    }
    toCompleteForm() {
        this.modeCreate = false;
        this.dt = new Date(this.member.birthDate);
        this.formCreate.patchValue({
            lastName: this.member.lastName,
            name: this.member.name,
            birthDate: new Date(this.member.birthDate),
            phone: this.member.phone,
            email: this.member.email,
            address: this.member.address,
            socialSecurity: this.member.socialSecurity,
            emergencyPhone: this.member.emergencyPhone,
            emergencyContact: this.member.emergencyContact,
            instagram: this.member.instagram,
            facebook: this.member.facebook,
            planId: this.member.planId
        });
    }
};
MemberFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_member_service__WEBPACK_IMPORTED_MODULE_6__.MemberService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_plan_service__WEBPACK_IMPORTED_MODULE_4__.PlanService }
];
MemberFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-member-form',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_member_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_member_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MemberFormComponent);



/***/ }),

/***/ 21065:
/*!********************************************************************!*\
  !*** ./src/app/components/user/my-account/my-account.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountComponent": () => (/* binding */ MyAccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_account_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-account.component.html */ 19697);
/* harmony import */ var _my_account_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account.component.scss */ 25076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/account.service */ 15921);
/* harmony import */ var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/member.service */ 62004);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 77524);








let MyAccountComponent = class MyAccountComponent {
    constructor(userService, memberService, router, accountService) {
        this.userService = userService;
        this.memberService = memberService;
        this.router = router;
        this.accountService = accountService;
        this.userLogged = this.accountService.getLoggedUser();
        console.log("userLogged", this.userLogged);
        this.id = this.userLogged.id;
        this.userType = this.userLogged.userType;
    }
    ngOnInit() {
        this.requesting = true;
        if (this.userType == 1) {
            this.userService.getById(this.id).subscribe(result => {
                console.log("user getById", result);
                this.user = result;
            }, error => console.error(error));
        }
        else {
            this.memberService.getById(this.id).subscribe(result => {
                this.requesting = false;
                console.log("getById", result);
                this.user = result;
            }, error => {
                this.requesting = false;
                console.error(error);
            });
        }
        ;
    }
    modifyPersonalInformation() {
        if (this.userType == 1) {
            this.router.navigate(['/user-edit']);
        }
        else {
            this.router.navigate(['/member-edit']);
        }
    }
    modifyMedicalHistory() {
        this.router.navigate(['/medical-history-edit'], { queryParams: { id: this.id } });
    }
    modifyEmail() {
        this.router.navigate(['/email-edit']);
    }
};
MyAccountComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_3__.MemberService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService }
];
MyAccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-my-account',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_account_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_account_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyAccountComponent);



/***/ }),

/***/ 67887:
/*!****************************************************************!*\
  !*** ./src/app/components/user/my-debts/my-debts.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDebtsComponent": () => (/* binding */ MyDebtsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_debts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-debts.component.html */ 82411);
/* harmony import */ var _my_debts_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-debts.component.scss */ 93090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_balance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/balance.service */ 13197);
/* harmony import */ var src_app_services_fee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fee.service */ 77601);
/* harmony import */ var src_app_services_sale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sale.service */ 71801);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/account.service */ 15921);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ 77524);










let MyDebtsComponent = class MyDebtsComponent {
    constructor(balanceService, saleService, userService, feeService, accountService, modalController) {
        this.balanceService = balanceService;
        this.saleService = saleService;
        this.userService = userService;
        this.feeService = feeService;
        this.accountService = accountService;
        this.modalController = modalController;
        this.balances = [];
        this.detailsSale = [];
        this.feeDetail = [];
        this.idMember = this.accountService.getLoggedUser().id;
    }
    ngOnInit() {
        this.requesting = true;
        this.balanceService.getAllByIdMember(this.idMember).subscribe(result => {
            this.requesting = false;
            this.balances = result;
            this.total = result.reduce((x, i) => x + i.balance, 0);
        }, error => {
            this.requesting = false;
            console.error(error);
        });
    }
    close() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    modalClickSale() {
        this.displaySale = true;
        this.displayFee = false;
    }
    modalClickFee() {
        this.displaySale = false;
        this.displayFee = true;
    }
    getTransaction(balance) {
        if (balance.transaction == 1) {
            this.getSale(balance.transactionId);
            this.modalClickSale();
        }
        else {
            this.getFee(balance.transactionId);
            this.modalClickFee();
        }
    }
    getSale(id) {
        this.saleService.getSaleById(id).subscribe(result => {
            this.sale = result.result;
            this.getDetailsSale(id);
            this.status = this.sale.status;
        }, error => console.error(error));
    }
    getDetailsSale(id) {
        this.saleService.getSaleDetail(id).subscribe(result => {
            console.log(result);
            document.getElementById("trigger-button").click();
            this.detailsSale = result;
        }, error => console.error(error));
    }
    getFee(id) {
        this.feeService.getById(id).subscribe(result => {
            document.getElementById("trigger-button").click();
            this.fee = result;
            this.feeDetail = [this.fee];
        }, error => console.error(error));
    }
};
MyDebtsComponent.ctorParameters = () => [
    { type: src_app_services_balance_service__WEBPACK_IMPORTED_MODULE_2__.BalanceService },
    { type: src_app_services_sale_service__WEBPACK_IMPORTED_MODULE_4__.SaleService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: src_app_services_fee_service__WEBPACK_IMPORTED_MODULE_3__.FeeService },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
MyDebtsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-my-debts',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_debts_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_debts_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyDebtsComponent);



/***/ }),

/***/ 42970:
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-create/user-create.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCreateComponent": () => (/* binding */ UserCreateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-create.component.html */ 81715);
/* harmony import */ var _user_create_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create.component.scss */ 30122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/member.service */ 62004);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var _member_form_member_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../member-form/member-form.component */ 63814);








let UserCreateComponent = class UserCreateComponent {
    constructor(userService, router /*, private customAlertService: CustomAlertService*/, memberService) {
        this.userService = userService;
        this.router = router;
        this.memberService = memberService;
        this.step = 1;
    }
    ngOnInit() {
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const newUser = this.formUser.createMember();
            if (newUser !== null) {
                /*await this.memberService.add(newUser)
                  .then(() => {
                    this.step = 2;
                  })
                  .catch((response) => {
                    console.log(response);
                    if (response.status === 400) {
                      //this.customAlertService.displayAlert("Gestión de Usuarios", response.error.errores);
                    }
                    if (response.status === 500) {
                      //this.customAlertService.displayAlert("Gestión de Usuarios", ["No se pudo guardar el usuario."]);
                    }
          
                  });*/
            }
        });
    }
};
UserCreateComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__.MemberService }
];
UserCreateComponent.propDecorators = {
    formUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_member_form_member_form_component__WEBPACK_IMPORTED_MODULE_4__.MemberFormComponent, { static: false },] }]
};
UserCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-user-create',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_create_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_create_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserCreateComponent);



/***/ }),

/***/ 18885:
/*!******************************************************************!*\
  !*** ./src/app/components/user/user-form/user-form.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFormComponent": () => (/* binding */ UserFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-form.component.html */ 71986);
/* harmony import */ var _user_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-form.component.scss */ 7655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_domain_user_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/user/account */ 69939);
/* harmony import */ var src_app_domain_user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/user/user */ 25165);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 77524);
/* harmony import */ var src_app_validations_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/validations/password */ 244);









let UserFormComponent = class UserFormComponent {
    constructor(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.roles = [];
        this.sendForm = false;
        this.dt = new Date();
        this.modeCreate = true;
        this.unamePattern = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,15}$";
        this.formCreate = this.formBuilder.group({
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            birthDate: [this.dt, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            roleId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
        this.formAccount = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.unamePattern)]],
            repeatPassword: '',
        }, { validators: src_app_validations_password__WEBPACK_IMPORTED_MODULE_5__.Password.mustMatch('password', 'repeatPassword') });
    }
    ngOnInit() {
        this.userService.getRoles().
            subscribe(result => {
            this.roles = result;
            console.log(this.roles);
        }, error => console.error(error));
    }
    get f() {
        return this.formCreate.controls;
    }
    get fAccount() {
        return this.formAccount.controls;
    }
    createUser() {
        this.sendForm = true;
        if (this.formCreate.valid) {
            var newUser = new src_app_domain_user_user__WEBPACK_IMPORTED_MODULE_3__.User();
            newUser.roleId = parseInt(this.formCreate.value.roleId);
            newUser.lastName = this.formCreate.value.lastName;
            newUser.name = this.formCreate.value.name;
            newUser.birthDate = this.formCreate.value.birthDate;
            newUser.phone = this.formCreate.value.phone;
            newUser.address = this.formCreate.value.address;
            if (this.modeCreate) {
                var account = this.createAccount();
                newUser.email = account.email;
                newUser.password = account.password;
            }
            return newUser;
        }
        else {
            return null;
        }
    }
    createAccount() {
        this.sendForm = true;
        if (this.formAccount.valid) {
            var newAccount = new src_app_domain_user_account__WEBPACK_IMPORTED_MODULE_2__.Account();
            newAccount.email = this.formAccount.value.email;
            newAccount.password = this.formAccount.value.password;
            return newAccount;
        }
        else {
            return null;
        }
    }
    getUserUpdate(id) {
        this.userService.getById(id).subscribe(result => {
            this.user = result;
            console.log(this.user);
            this.toCompleteForm();
        }, error => console.error(error));
    }
    toCompleteForm() {
        this.modeCreate = false;
        this.dt = new Date(this.user.birthDate);
        this.formCreate.patchValue({
            lastName: this.user.lastName,
            name: this.user.name,
            birthDate: new Date(this.user.birthDate),
            phone: this.user.phone,
            email: this.user.email,
            address: this.user.address,
            roleId: this.user.roleId,
        });
    }
};
UserFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
UserFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-user-form',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_form_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_form_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserFormComponent);



/***/ }),

/***/ 85197:
/*!*****************************************************************************!*\
  !*** ./src/app/components/workout/periodization/periodization.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodizationComponent": () => (/* binding */ PeriodizationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_periodization_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./periodization.component.html */ 58985);
/* harmony import */ var _periodization_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./periodization.component.scss */ 39223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_periodization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/periodization.service */ 40479);





let PeriodizationComponent = class PeriodizationComponent {
    constructor(periodizationService) {
        this.periodizationService = periodizationService;
    }
    ngOnInit() {
        this.requesting = true;
        this.periodizationService.get().subscribe((periodization) => {
            this.requesting = false;
            this.periodization = periodization.result;
            console.log(this.periodization);
        }, error => {
            this.requesting = false;
        });
    }
};
PeriodizationComponent.ctorParameters = () => [
    { type: _services_periodization_service__WEBPACK_IMPORTED_MODULE_2__.PeriodizationService }
];
PeriodizationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-periodization',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_periodization_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_periodization_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PeriodizationComponent);



/***/ }),

/***/ 59309:
/*!***************************************************************!*\
  !*** ./src/app/components/workout/rating/rating.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./rating.component.html */ 91434);
/* harmony import */ var _rating_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.component.scss */ 53324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let RatingComponent = class RatingComponent {
    constructor() {
        this.rate = 5;
    }
    ngOnInit() { }
};
RatingComponent.ctorParameters = () => [];
RatingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-rating',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_rating_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rating_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RatingComponent);



/***/ }),

/***/ 75431:
/*!***********************************************************************!*\
  !*** ./src/app/components/workout/reports/effort/effort.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffortComponent": () => (/* binding */ EffortComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_effort_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./effort.component.html */ 66090);
/* harmony import */ var _effort_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effort.component.scss */ 32462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 71871);





let EffortComponent = class EffortComponent {
    constructor() {
        chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_2__.registerables);
        //Chart.register(LineController, LineElement, PointElement, LinearScale, Title);
    }
    lineChartMethod() {
    }
    barChartMethod(canvas, data) {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(canvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Dom', 'Lun', 'Mart', 'Mier', 'Jue', 'Vie', 'Sab'],
                datasets: [{
                        label: 'esfuerzo',
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.3)',
                            'rgba(54, 162, 235, 0.3)',
                            'rgba(255, 206, 86, 0.3)',
                            'rgba(75, 192, 192, 0.3)',
                            'rgba(115, 132, 154, 0.3)',
                            'rgba(255, 159, 64, 0.3)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(115, 132, 154, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {}
            }
        });
    }
    ngAfterViewInit() {
        // this.lineChartMethod()
        this.barChartMethod(this.barCanvas1, [0, 7, 9, 9, 7, 8, 0]);
        this.barChartMethod(this.barCanvas2, [0, 8, 6, 9, 7, 8, 0]);
        this.barChartMethod(this.barCanvas3, [0, 8, 10, 9, 6, 8, 0]);
        this.barChartMethod(this.barCanvas4, [0, 10, 6, 9, 7, 10, 0]);
    }
};
EffortComponent.ctorParameters = () => [];
EffortComponent.propDecorators = {
    barCanvas1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['barCanvas1',] }],
    barCanvas2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['barCanvas2',] }],
    barCanvas3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['barCanvas3',] }],
    barCanvas4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['barCanvas4',] }]
};
EffortComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-effort',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_effort_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_effort_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EffortComponent);



/***/ }),

/***/ 40118:
/*!*******************************************************************!*\
  !*** ./src/app/components/workout/wod-week/wod-week.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WodWeekComponent": () => (/* binding */ WodWeekComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wod_week_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./wod-week.component.html */ 96059);
/* harmony import */ var _wod_week_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wod-week.component.scss */ 16451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 29243);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_domain_workout_wod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/workout/wod */ 99316);
/* harmony import */ var src_app_domain_workout_wor_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/domain/workout/wor-group */ 81089);
/* harmony import */ var src_app_services_wod_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/wod.service */ 63278);








let WodWeekComponent = class WodWeekComponent {
    constructor(wodService) {
        this.wodService = wodService;
        this.wods = [];
        this.days = [];
        this.wodDates = [];
    }
    ngOnInit() {
        this.requesting = true;
        this.wodService.getAll().subscribe((data) => {
            this.requesting = false;
            this.result = data.result;
            data.result.forEach(wod => {
                this.wods.push(this.getDayConfig(wod.date));
                this.wodDates.push(moment__WEBPACK_IMPORTED_MODULE_2__(wod.date).locale('es').format("dddd DD"));
            });
            this.days = this.getCurrentWeek();
            this.setupWods();
        }, error => {
            this.requesting = false;
        });
    }
    setupWods() {
        this.options = {
            color: "red",
            weekdays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            daysConfig: this.wods,
            canBackwardsSelected: true,
            showAdjacentMonthDay: false
        };
    }
    onChange($event) {
        var res = this.result.find(x => (moment__WEBPACK_IMPORTED_MODULE_2__(x.date)).format('DD-MM-YYYY') == $event.format('DD-MM-YYYY'));
        console.log(res);
        this.wod = this.getWod(res);
    }
    getWod(wodResponse) {
        console.log("wodResponse", wodResponse);
        var wod = new src_app_domain_workout_wod__WEBPACK_IMPORTED_MODULE_3__.Wod();
        var indexes = wodResponse.wodGroupsMember.map(x => x.groupIndex);
        wod.goal = wodResponse.goal;
        //indexes.filter((x, i, a) => a.indexOf(x) == i)
        indexes = [...new Set(indexes)];
        indexes.forEach(i => {
            var wodGroup = new src_app_domain_workout_wor_group__WEBPACK_IMPORTED_MODULE_4__.WodGroup();
            var exercises = wodResponse.wodGroupsMember.filter(x => x.groupIndex == i).map(e => {
                return {
                    exercise: e.exercise,
                    modality: e.modality,
                    units: e.units,
                    detail: e.detail,
                    mode: e.mode,
                    value: e.value
                };
            });
            console.log("exercise", exercises);
            wodGroup.exercises = exercises;
            wodGroup.detail = wodResponse.wodGroupsMember.find(x => x.groupIndex == i).detail;
            wod.addGroup(wodGroup);
            wod.goal;
        });
        return wod;
    }
    closeWod() {
        this.wod = null;
    }
    getDayConfig(today) {
        var date = new Date(today);
        return {
            date: date,
            marked: true,
            title: date.getDate().toString(),
            subTitle: "",
            cssClass: "attended"
        };
    }
    getCurrentWeek() {
        var currentDate = moment__WEBPACK_IMPORTED_MODULE_2__();
        var weekStart = currentDate.clone().startOf('isoWeek');
        var weekEnd = currentDate.clone().endOf('isoWeek');
        var days = [];
        console.log("wodDates", this.wodDates);
        for (var i = 0; i <= 6; i++) {
            var date = moment__WEBPACK_IMPORTED_MODULE_2__(weekStart).add(i, 'days').locale('es').format("dddd DD");
            console.log("date", date);
            if (this.wodDates.includes(date)) {
                console.log("si");
                days.push(date);
            }
        }
        console.log("days", days);
        return days;
    }
    getActiveDay() {
        return moment__WEBPACK_IMPORTED_MODULE_2__().locale('es').format("dddd DD");
    }
    viewWod(date) {
        console.log("date", date);
        var res = this.result.find(x => (moment__WEBPACK_IMPORTED_MODULE_2__(x.date)).locale('es').format("dddd DD") == date);
        console.log(res);
        this.wod = this.getWod(res);
    }
};
WodWeekComponent.ctorParameters = () => [
    { type: src_app_services_wod_service__WEBPACK_IMPORTED_MODULE_5__.WodService }
];
WodWeekComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-wod-week',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wod_week_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_wod_week_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WodWeekComponent);



/***/ }),

/***/ 9815:
/*!*********************************************************!*\
  !*** ./src/app/components/workout/wod/wod.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WodComponent": () => (/* binding */ WodComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wod_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./wod.component.html */ 39038);
/* harmony import */ var _wod_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wod.component.scss */ 14822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_wod_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/wod.service */ 63278);





let WodComponent = class WodComponent {
    constructor(wodService) {
        this.wodService = wodService;
        this.wodEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.wodService.getAll().subscribe((wods) => {
            console.log(wods);
        });
    }
    ngOnChanges(changes) {
        console.log("wod", this.wod);
    }
    goBack() {
        this.wodEventEmitter.emit();
    }
    openVideo(url) {
        console.log(url);
        window.open(url, '_system');
    }
    getValue(exercise) {
        return exercise.value + " " + exercise.mode;
    }
    getGoals(goals) {
        return goals.split("-");
    }
};
WodComponent.ctorParameters = () => [
    { type: src_app_services_wod_service__WEBPACK_IMPORTED_MODULE_2__.WodService }
];
WodComponent.propDecorators = {
    wod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    wodEventEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
WodComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-wod',
        template: _home_javier_projects_cap_corpo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wod_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_wod_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WodComponent);



/***/ }),

/***/ 91065:
/*!**************************************!*\
  !*** ./src/app/domain/attendance.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attendance": () => (/* binding */ Attendance),
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
class Attendance {
}
var Status;
(function (Status) {
    Status[Status["reserved"] = 1] = "reserved";
    Status[Status["attended"] = 2] = "attended";
    Status[Status["cancelled"] = 3] = "cancelled";
})(Status || (Status = {}));


/***/ }),

/***/ 72942:
/*!*****************************************!*\
  !*** ./src/app/domain/member/injury.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Injury": () => (/* binding */ Injury)
/* harmony export */ });
class Injury {
}


/***/ }),

/***/ 50722:
/*!**************************************************!*\
  !*** ./src/app/domain/member/medical-history.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalHistory": () => (/* binding */ MedicalHistory)
/* harmony export */ });
class MedicalHistory {
}


/***/ }),

/***/ 343:
/*!*****************************************!*\
  !*** ./src/app/domain/member/member.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Member": () => (/* binding */ Member)
/* harmony export */ });
class Member {
}


/***/ }),

/***/ 23324:
/*!**************************************!*\
  !*** ./src/app/domain/shift-list.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftList": () => (/* binding */ ShiftList)
/* harmony export */ });
class ShiftList {
}


/***/ }),

/***/ 69939:
/*!****************************************!*\
  !*** ./src/app/domain/user/account.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Account": () => (/* binding */ Account)
/* harmony export */ });
class Account {
}


/***/ }),

/***/ 25165:
/*!*************************************!*\
  !*** ./src/app/domain/user/user.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

/***/ 99316:
/*!***************************************!*\
  !*** ./src/app/domain/workout/wod.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wod": () => (/* binding */ Wod),
/* harmony export */   "wodTemplateResponse": () => (/* binding */ wodTemplateResponse),
/* harmony export */   "wodTemplateGroup": () => (/* binding */ wodTemplateGroup),
/* harmony export */   "wodTemplateGroupResponse": () => (/* binding */ wodTemplateGroupResponse)
/* harmony export */ });
/* harmony import */ var _wor_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wor-group */ 81089);

class Wod {
    constructor() {
        this.wodGroups = [];
    }
    addGroup(wodGroup) {
        this.wodGroups.push(wodGroup);
    }
}
class wodTemplateResponse {
    constructor() {
        this.wodGroups = [];
    }
    getWod() {
        var wod = new Wod();
        var indexes = this.wodGroups.map(x => x.groupIndex);
        indexes.filter((x, i, a) => a.indexOf(x) == i);
        indexes.forEach(i => {
            var wodGroup = new _wor_group__WEBPACK_IMPORTED_MODULE_0__.WodGroup();
            var exercises = this.wodGroups.filter(x => x.groupIndex == i).map(e => {
                return {
                    exercise: e.exercise,
                    modality: e.modality,
                    units: e.units
                };
            });
            wodGroup.exercises = exercises;
            wod.addGroup(wodGroup);
        });
        return {
            wodGroups: this.wodGroups.map(g => new _wor_group__WEBPACK_IMPORTED_MODULE_0__.WodGroup())
        };
    }
}
class wodTemplateGroup {
}
class wodTemplateGroupResponse {
}


/***/ }),

/***/ 81089:
/*!*********************************************!*\
  !*** ./src/app/domain/workout/wor-group.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WodGroup": () => (/* binding */ WodGroup)
/* harmony export */ });
class WodGroup {
    constructor() {
        this.exercises = [];
    }
}


/***/ }),

/***/ 90129:
/*!************************************************************!*\
  !*** ./src/app/interceptors/authentication-interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 15921);






let AuthInterceptor = class AuthInterceptor {
    constructor(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${this.accountService.getToken()}`,
            },
        });
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => { }, (err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
                if (err.status !== 401) {
                    return;
                }
                this.router.navigate(['login']);
            }
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], AuthInterceptor);



/***/ }),

/***/ 15921:
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let AccountService = class AccountService {
    constructor(http, url) {
        this.http = http;
        this.logueado = false;
        this.url = url;
    }
    add(newAccount) {
        console.log(newAccount);
        return this.http.post(this.url + 'api/account/add', newAccount, httpOptions).toPromise();
    }
    logIn(account) {
        return this.http.post(this.url + 'api/account/logIn?account', account);
    }
    updateEmail(account) {
        console.log(account);
        return this.http.put(this.url + 'api/account/updateEmail', account, httpOptions);
    }
    updatePassword(account) {
        console.log(account);
        return this.http.put(this.url + 'api/account/updatePassword', account, httpOptions);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    isAuthenticated() {
        console.log("isAuthenticated", localStorage.getItem('logueado'));
        return "true" == localStorage.getItem('logueado');
    }
    setAuthenticated(authenticated) {
        localStorage.setItem('logueado', authenticated.toString());
    }
    getLoggedUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    setLoggedUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.setAccess(user.access);
    }
    getAccess() {
        return JSON.parse(localStorage.getItem('access'));
    }
    setAccess(access) {
        localStorage.setItem('access', JSON.stringify(access));
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
AccountService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ 53311:
/*!************************************************!*\
  !*** ./src/app/services/attendance.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceService": () => (/* binding */ AttendanceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let AttendanceService = class AttendanceService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getAllByIdShift(id) {
        return this.http.get(this.url + 'api/attendance/getAllByIdShift?id=' + id);
    }
    getByMonth(month) {
        return this.http.get(this.url + 'api/attendance/get-by-id-member-by-month?month=' + month);
    }
    add(attendance) {
        return this.http.post(this.url + 'api/attendance/add', attendance, httpOptions);
    }
    cancelReservation(id, credit) {
        return this.http.put(this.url + 'api/attendance/cancelReservation?id=' + id, credit, httpOptions);
    }
    getAllReservations(id) {
        return this.http.get(this.url + 'api/attendance/getAllReservations?id=' + id);
    }
    getByPeriodization(id) {
        return this.http.get(this.url + 'api/wod-member/attendance?id=' + id);
    }
};
AttendanceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
AttendanceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AttendanceService);



/***/ }),

/***/ 13197:
/*!*********************************************!*\
  !*** ./src/app/services/balance.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BalanceService": () => (/* binding */ BalanceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let BalanceService = class BalanceService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    add(balance) {
        console.log(balance);
        return this.http.post(this.url + 'api/balance/add', balance, httpOptions);
    }
    getAll() {
        return this.http.get(this.url + 'api/balance/getAll');
    }
    getAllByIdMember(id) {
        return this.http.get(this.url + 'api/balance/getAllByIdMember?id=' + id);
    }
    getById(id) {
        return this.http.get(this.url + 'api/balance/getById?id=' + id);
    }
    getPositiveBalanceByIdMember(id) {
        return this.http.get(this.url + 'api/balance/getPositiveBalanceByIdMember?id=' + id);
    }
    update(id, balance) {
        return this.http.put(this.url + 'api/balance/update?id=' + id, balance, httpOptions);
    }
    cancelBalance(payCancelBalance) {
        return this.http.put(this.url + 'api/balance/cancelBalance', payCancelBalance, httpOptions);
    }
};
BalanceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
BalanceService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], BalanceService);



/***/ }),

/***/ 53133:
/*!********************************************!*\
  !*** ./src/app/services/credit.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditService": () => (/* binding */ CreditService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let CreditService = class CreditService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    add(feeDto) {
        return this.http.post(this.url + 'api/credit/add', feeDto, httpOptions);
    }
    update(credit) {
        return this.http.put(this.url + 'api/credit/update', credit, httpOptions);
    }
    getById(id) {
        return this.http.get(this.url + 'api/credit/getById?id=' + id);
    }
};
CreditService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
CreditService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CreditService);



/***/ }),

/***/ 10908:
/*!**************************************************!*\
  !*** ./src/app/services/custom-alert.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomAlertService": () => (/* binding */ CustomAlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);



let CustomAlertService = class CustomAlertService {
    constructor(alertController
    /*private modalService: NgbModal*/ ) {
        this.alertController = alertController;
    }
    displayAlert(title, messages, thenFunction = null, displayCancel = false, cancelFunction = null) {
        /* console.log("display alert")
         const modalRef = this.modalService.open(CustomAlertComponent, { backdrop: "static", keyboard: false });
         modalRef.componentInstance.title = title;
         modalRef.componentInstance.messages = messages;
         modalRef.componentInstance.displayCancel = displayCancel;
     
         modalRef.result.then((result) => {
           console.log("")
           if (result) {
             modalRef.result.then(thenFunction);
           }
           else {
             modalRef.result.then(cancelFunction);
           }
         });
         */
    }
    display(title, messages, thenFunction = null, displayCancel = false, cancelFunction = null) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            var buttons = [];
            if (displayCancel)
                buttons.push({
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: cancelFunction ? cancelFunction : () => { }
                });
            buttons.push({
                text: 'Aceptar',
                handler: thenFunction ? thenFunction : () => { }
            });
            const alert = yield this.alertController.create({
                header: title,
                message: messages.join(''),
                cssClass: 'custom-alert',
                buttons: buttons
            });
            yield alert.present();
        });
    }
};
CustomAlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
CustomAlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CustomAlertService);



/***/ }),

/***/ 77601:
/*!*****************************************!*\
  !*** ./src/app/services/fee.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeeService": () => (/* binding */ FeeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let FeeService = class FeeService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getAll() {
        return this.http.get(this.url + 'api/fee/getAll');
    }
    getById(id) {
        return this.http.get(this.url + 'api/fee/getById?id=' + id);
    }
    add(feeDto) {
        console.log(feeDto);
        return this.http.post(this.url + 'api/fee/add', feeDto, httpOptions);
    }
    delete(id) {
        return this.http.delete(this.url + 'api/fee/delete?id=' + id);
    }
    getAllByIdMember(id) {
        return this.http.get(this.url + 'api/fee/getAllByIdMember?id=' + id);
    }
};
FeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
FeeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], FeeService);



/***/ }),

/***/ 62004:
/*!********************************************!*\
  !*** ./src/app/services/member.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberService": () => (/* binding */ MemberService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let MemberService = class MemberService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    // member
    getAll() {
        return this.http.get(this.url + 'api/member/getAll');
    }
    getById(id) {
        return this.http.get(this.url + 'api/member/getById?id=' + id);
    }
    add(newMember) {
        return this.http.post(this.url + 'api/member/add', newMember, httpOptions);
    }
    update(id, memberUpdate) {
        console.log(memberUpdate);
        return this.http.put(this.url + 'api/member/update?id=' + id, memberUpdate, httpOptions);
    }
    delete(id) {
        return this.http.delete(this.url + 'api/member/delete?id=' + id);
    }
    updateDueDate(expiration) {
        return this.http.put(this.url + 'api/member/updateDueDate', expiration, httpOptions);
    }
    //medicalHistory
    addMedicalHistory(memberId, medicalHistory) {
        console.log(medicalHistory);
        return this.http.post(this.url + 'api/member/addMedicalHistory?memberId=' + memberId, medicalHistory, httpOptions);
    }
    updateMedicalHistory(id, medicalHistory) {
        return this.http.put(this.url + 'api/member/updateMedicalHistory?id=' + id, medicalHistory, httpOptions);
    }
    getMedicalHistoryByIdMember(id) {
        return this.http.get(this.url + 'api/member/getMedicalHistoryByIdMember?id=' + id);
    }
    getMedicalHistoryById(id) {
        return this.http.get(this.url + 'api/member/getMedicalHistoryById?id=' + id);
    }
    getAge(id) {
        return this.http.get(this.url + 'api/member/getAge?id=' + id);
    }
    //injury
    addInjury(injury) {
        return this.http.post(this.url + 'api/member/addInjury', injury, httpOptions);
    }
    addFile(id, files) {
        console.log(files);
        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files', file);
            console.log(formData);
        });
        return this.http.post(this.url + `api/member/${id}/addFile`, formData);
    }
    getAllInjuries(id) {
        return this.http.get(this.url + 'api/member/getAllInjuries?id=' + id);
    }
    getAllFiles(id) {
        return this.http.get(this.url + 'api/member/getAllFiles?id=' + id);
    }
    deleteFile(id) {
        return this.http.delete(this.url + 'api/member/deleteFile?id=' + id);
    }
    download(fileName) {
        return this.http.get(this.url + 'api/member/download?fileName=' + fileName, {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().append('Content-Type', 'application/json')
        });
    }
};
MemberService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
MemberService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], MemberService);



/***/ }),

/***/ 40479:
/*!***************************************************!*\
  !*** ./src/app/services/periodization.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodizationService": () => (/* binding */ PeriodizationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let PeriodizationService = class PeriodizationService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    get() {
        return this.http.get(this.url + 'api/periodization');
    }
    getByYear() {
        return this.http.get(this.url + 'api/periodization/by-year');
    }
};
PeriodizationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
PeriodizationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PeriodizationService);



/***/ }),

/***/ 25929:
/*!******************************************!*\
  !*** ./src/app/services/plan.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanService": () => (/* binding */ PlanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let PlanService = class PlanService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getAll() {
        return this.http.get(this.url + 'api/plan/getPlans');
    }
    add(newPlan) {
        console.log(newPlan);
        return this.http.post(this.url + 'api/plan/add', newPlan, httpOptions);
    }
    getById(id) {
        return this.http.get(this.url + 'api/plan/getById?id=' + id);
    }
    update(id, planEdit) {
        console.log(planEdit);
        return this.http.put(this.url + 'api/plan/update?id=' + id, planEdit, httpOptions);
    }
    delete(id) {
        return this.http.delete(this.url + 'api/plan/delete?id=' + id);
    }
};
PlanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
PlanService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PlanService);



/***/ }),

/***/ 71801:
/*!******************************************!*\
  !*** ./src/app/services/sale.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleService": () => (/* binding */ SaleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let SaleService = class SaleService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getAll() {
        return this.http.get(this.url + 'api/sale/getAll');
    }
    getSaleDetail(idSale) {
        return this.http.get(this.url + 'api/sale/getDetailsSale?idSale=' + idSale);
    }
    add(newSale) {
        return this.http.post(this.url + 'api/sale/add', newSale, httpOptions);
    }
    cancel(id, cancelSale) {
        console.log(cancelSale);
        return this.http.post(this.url + 'api/sale/cancel?id=' + id, cancelSale, httpOptions);
    }
    getCancelSale(idSale) {
        return this.http.get(this.url + 'api/sale/getCancelSale?idSale=' + idSale);
    }
    getSaleById(id) {
        return this.http.get(this.url + 'api/sale/getSaleById?id=' + id);
    }
};
SaleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
SaleService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SaleService);



/***/ }),

/***/ 29952:
/*!*******************************************!*\
  !*** ./src/app/services/shift.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftService": () => (/* binding */ ShiftService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let ShiftService = class ShiftService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getAll(from, to, classId) {
        return this.http.get(this.url + 'api/shift/getAll?from=' + from + '&to=' + to + '&classId=' + classId);
    }
    add(shifts) {
        console.log(shifts);
        return this.http.post(this.url + 'api/shift/add', shifts, httpOptions);
    }
    update(shifts) {
        console.log(shifts);
        return this.http.put(this.url + 'api/shift/update', shifts, httpOptions);
    }
    delete(idShifts) {
        return this.http.post(this.url + 'api/shift/delete', idShifts, httpOptions);
    }
    getById(id) {
        return this.http.get(this.url + 'api/shift/getById?id=' + id);
    }
};
ShiftService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
ShiftService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ShiftService);



/***/ }),

/***/ 77524:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let UserService = class UserService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getRoles() {
        return this.http.get(this.url + 'api/user/getRoles');
    }
    getAll() {
        return this.http.get(this.url + 'api/user/getAll');
    }
    getById(id) {
        return this.http.get(this.url + 'api/user/getById?id=' + id);
    }
    getAllByNameRole(role) {
        return this.http.get(this.url + 'api/user/getAllByNameRole?role=' + role);
    }
    add(newUser) {
        return this.http.post(this.url + 'api/user/add', newUser, httpOptions).toPromise();
    }
    update(id, userUpdate) {
        console.log(userUpdate);
        return this.http.put(this.url + 'api/user/update?id=' + id, userUpdate, httpOptions);
    }
    delete(id, email) {
        console.log(id);
        return this.http.delete(this.url + 'api/user/delete?id=' + id + '&&email=' + email);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 63278:
/*!*****************************************!*\
  !*** ./src/app/services/wod.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WodService": () => (/* binding */ WodService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let WodService = class WodService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
    }
    getAll() {
        return this.http.get(this.url + 'api/wod-member');
    }
    getById(id) {
        return this.http.get(this.url + 'api/wod-member/getById?id=' + id);
    }
};
WodService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: ['BASE_URL',] }] }
];
WodService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], WodService);



/***/ }),

/***/ 42447:
/*!**********************************************!*\
  !*** ./src/app/validations/control.equal.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlEqual": () => (/* binding */ ControlEqual)
/* harmony export */ });
class ControlEqual {
    static mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
}


/***/ }),

/***/ 244:
/*!*****************************************!*\
  !*** ./src/app/validations/password.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Password": () => (/* binding */ Password)
/* harmony export */ });
class Password {
    static mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
}


/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBaseUrl": () => (/* binding */ getBaseUrl)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function getBaseUrl() {
    //return document.getElementsByTagName('base')[0].href;
    return "http://antofanari-001-site1.gtempurl.com/";
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <input [value]=\"guid\">\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>Corpo</ion-list-header>\n\n          <ion-note *ngIf=\"userLogged\">{{userLogged.name}} {{userLogged.lastName}}</ion-note>\n          <ion-menu-toggle auto-hide=\"true\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"['/member-create']\">\n              <ion-icon name=\"home\"></ion-icon>\n              <ion-label>Registro</ion-label>\n            </ion-item>\n            <ion-item routerDirection=\"root\" [routerLink]=\"['/home']\">\n              <ion-icon name=\"home\"></ion-icon>\n              <ion-label>Inicio</ion-label>\n            </ion-item>\n            <ion-item routerDirection=\"root\" [routerLink]=\"['/my-account']\">\n              <ion-icon name=\"person\"></ion-icon>\n              <ion-label>Mi cuenta</ion-label>\n            </ion-item>           \n            <ion-item routerDirection=\"root\" [routerLink]=\"['/shift']\">\n              <ion-icon name=\"calendar-clear\"></ion-icon>\n              <ion-label>turnos</ion-label>\n            </ion-item>\n            <ion-item routerDirection=\"root\" [routerLink]=\"['/wod-week']\">\n              <ion-icon name=\"barbell\"></ion-icon>\n              <ion-label>WOD</ion-label>\n            </ion-item>\n            <ion-item routerDirection=\"root\" [routerLink]=\"['/my-debts']\">\n              <ion-icon name=\"logo-usd\"></ion-icon>\n              <ion-label>Deudas</ion-label>\n            </ion-item>           \n            <ion-item routerDirection=\"root\" [routerLink]=\"['/attendance']\">\n              <ion-icon name=\"calendar\"></ion-icon>\n              <ion-label>Mis asistencias</ion-label>\n            </ion-item>  \n            <ion-item routerDirection=\"root\" [routerLink]=\"['/login']\">\n              <ion-icon name=\"log-in\"></ion-icon>\n              <ion-label>Cerrar sesión</ion-label>\n            </ion-item>      \n            <ion-item routerDirection=\"root\" [routerLink]=\"['/effort']\">\n              <ion-icon name=\"stats-chart\"></ion-icon>\n              <ion-label>Esfuerzo</ion-label>\n            </ion-item>    \n            <ion-item routerDirection=\"root\" [routerLink]=\"['/periodization-report']\">\n              <ion-icon name=\"stats-chart\"></ion-icon>\n              <ion-label>Estadísticas</ion-label>\n            </ion-item>    \n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>");

/***/ }),

/***/ 66410:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/corpo/corpoheader/corpoheader.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <ng-content></ng-content>\n    </ion-title>\n  </ion-toolbar>");

/***/ }),

/***/ 5503:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/home/home.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n\n  <div class=\"wrapper\">\n    <ion-grid class=\"square\">\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-content class=\"box\">\n              <img src=\"../../../assets/img/corpo.png\">\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <ion-card-content class=\"box\">\n              <button [routerLink]=\"['/shift']\">\n                Reservar\n              </button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card>\n            <ion-card-content class=\"box\">\n              <button [routerLink]=\"['/my-account']\">\n                Mi cuenta\n              </button>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>");

/***/ }),

/***/ 83865:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/login/login/login.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid style=\"height: 100%\">\n  <ion-row justify-content-center align-items-center style=\"height: 100%\">\n   \n\n\n    <ion-card>\n      <section class=\"wrapper\">\n        <div id=\"login-page\">\n          <form class=\"container login-container\" [formGroup]=\"formLogin\">\n            <div class=\"form-login\">\n              <h2 class=\"form-login-heading\">Iniciar Sesión</h2>\n              <div class=\"login-wrap\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" autofocus formControlName=\"email\">\n                <p class=\"formValidators\" *ngIf=\"sent && f.email.errors?.required\">*Ingrese el email.</p>\n                <br>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" formControlName=\"password\">\n                <p class=\"formValidators\" *ngIf=\"sent && f.password.errors?.required\">*Ingrese la contraseña.</p>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" value=\"remember-me\"> Recordar\n                  <span>\n                    <a class=\"login-passw-modal\" data-toggle=\"modal\" href=\"#myModal\">Olvidaste tu contraseña?</a>\n                  </span>\n                </label>\n                <ion-spinner *ngIf=\"requesting\"></ion-spinner>\n                <button class=\"btn btn-success btn-sign-in\" type=\"submit\" (click)=\"logIn()\" *ngIf=\"!requesting\">INICIAR SESIÓN</button>\n                <hr>\n                <div class=\"registration\">\n                  ¿Aún no tienes una cuenta?<br />\n                  <a class=\"\" [routerLink]=\"['/member-create']\">\n                    Registrarse\n                  </a>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </section>\n      <ion-card class=\"logo\"> \n        <ion-card-content class=\"box\">\n          <img src=\"../../../assets/img/corpo.png\">\n        </ion-card-content>\n      </ion-card>\n      <!-- modal -->\n      <div class=\"container\">\n        <!--<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">Abrir ventana de diálogo</button>-->\n\n        <div class=\"modal fade\" id=\"myModal\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n\n              <!-- cabecera del diálogo -->\n              <div class=\"modal-header modal-title\">\n                <h4 class=\"modal-title\">Olvidaste tu contraseña?</h4>\n                <!--<button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>-->\n              </div>\n\n              <!-- cuerpo del diálogo -->\n              <div class=\"modal-body\">\n                <p>Ingresa tu dirección de correo electrónico a continuación para restablecer tu contraseña.</p>\n                <input type=\"text\" name=\"email\" placeholder=\"Email\" autocomplete=\"off\"\n                  class=\"form-control placeholder-no-fix\">\n              </div>\n\n              <!-- pie del diálogo -->\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n                <button type=\"button\" class=\"btn btn-success\">Enviar</button>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </ion-card>\n  </ion-row>\n</ion-grid>");

/***/ }),

/***/ 30556:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/modal/modal-page/modal-page.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Button to Open the Modal -->\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n  Open modal\n</button>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal Heading</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        Modal body..\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 82502:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/report/attendance/attendance.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Asistencias</corpo-header>\n<ion-content>\n    <ion-calendar \n        [(ngModel)]=\"date\" \n        (change)=\"onChange($event)\" \n        [type]=\"type\" \n       \n        [options]=\"options\">\n    </ion-calendar>\n</ion-content>");

/***/ }),

/***/ 54655:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/shift/my-reservation/my-reservation.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Mis reservas</corpo-header>\n<section class=\"wrapper\" *ngIf=\"!diplayReserve\">\n  <div class=\"task-panel \">\n    <button type=\"button\" class=\"btn btn-success main-center\" (click)=\"viewReserve()\">Reservar</button>\n  </div>\n  <div *ngIf=\"attendances.length > 0\" class=\"col-md-12\">\n    <section id=\"no-more-tables\">\n      <div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n        <table class=\"table table-bordered table-condensed cf mb-0 user-table\">\n          <thead class=\"cf\">\n            <tr>\n              <th class=\"numeric\">Fecha</th>\n              <th class=\"numeric\">Clase</th>\n              <th class=\"numeric\">Acción</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"scrollme span-margin\" *ngFor=\"let attendance of attendances\">\n              <td class=\"td-title\" data-title=\"Fecha\"><span>{{attendance.shift.day}} {{attendance.shift.hour}}</span>\n              </td>\n              <td class=\"td-title text-ajust\" data-title=\"Clase\"><span>{{attendance.shift.className}}</span></td>\n              <td class=\"td-title\" data-title=\"Acción\">\n                <span class=\"btn-action-container\">\n                  <button *ngIf=\"attendance.status == 1\" class=\"btn btn-danger btn-action-list\"\n                    (click)=\"cancell(attendance.id)\">Cancelar</button>\n                  <button *ngIf=\"attendance.status == 3\"\n                    class=\"btn btn-warning btn-action-list text-white\">Cancelado</button>\n                </span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </section>\n  </div>\n\n  <ion-spinner *ngIf=\"requesting\"></ion-spinner>\n  <h5 *ngIf=\"!requesting && attendances.length == 0\">No tienes reservas.</h5>\n</section>\n\n<section class=\"wrapper\" *ngIf=\"diplayReserve\">\n  <div *ngIf=\"shifts.length > 0\" class=\"col-md-12\">\n    <section id=\"no-more-tables\">\n      <div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n        <table class=\"table table-bordered table-condensed cf mb-0 user-table\">\n          <thead class=\"cf\">\n            <tr>\n              <th class=\"numeric\">Fecha</th>\n              <th class=\"numeric\">Clase</th>\n              <th class=\"numeric\">Acción</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"scrollme span-margin\" *ngFor=\"let shift of shifts\">\n              <td class=\"td-title\" data-title=\"Fecha\"><span>{{shift.day}} - {{shift.hour}}</span></td>\n              <td class=\"td-title text-ajust\" data-title=\"Clase\"><span>{{shift.className}}</span></td>\n              <td class=\"td-title\" data-title=\"Acción\">\n                <span class=\"btn-action-container\">\n                  <button *ngIf=\"shift.available>0 && !shift.reserved\" class=\"btn btn-primary btn-action-list\"\n                    data-toggle=\"modal\" href=\"#myModalReserve\"\n                    (click)=\"reserve(shift.id, shift.className)\">Reservar</button>\n                  <button *ngIf=\"shift.reserved\" class=\"btn btn-success btn-action-list\">Reservado</button>\n                  <button *ngIf=\"shift.available==0 && !shift.reserved\"\n                    class=\"btn btn-success btn-action-list text-white\">No Disponible</button>\n                </span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </section>\n  </div>\n\n  <ion-spinner *ngIf=\"requestingShifts\"></ion-spinner>\n  <h5 *ngIf=\"!requestingShifts && shifts.length == 0\">No hay turnos disponibles.</h5>\n</section>\n\n\n<!-- Use a trigger -->\n<ion-button id=\"trigger-button\" class=\"d-none\">Click to open modal</ion-button>\n<ion-modal trigger=\"trigger-button\">\n  <ng-template>\n    <ion-content>\n\n\n      <ion-button id=\"trigger-button\" (click)=\"close()\" class=\"pull-rigth\">X</ion-button>\n      <div class=\"wrapper\">\n        <div *ngIf=\"currentCredit !=0\" class=\"text-center col-12\">\n          <p>Tienes {{currentCredit}} disponibles</p>\n\n          <button class=\"btn btn-success btn-action-list\" (click)=\"confirmReserve()\">Reservar</button>\n        </div>\n        <div *ngIf=\"currentCredit == 0\" class=\"row justify-content-center aling-items-center\">\n          <div class=\"text-center col-12\">\n            <p>No tienes créditos sificientes</p>\n          </div>\n          <div class=\"text-center col-12\">\n            <p>Tienes {{availableNegative}} negativos disponible</p>\n            <button *ngIf=\"availableNegative != 0\" class=\"btn btn-danger btn-action-list\"\n              (click)=\"confirmReserve()\">Utilizar Negativo</button>\n          </div>\n        </div>\n      </div>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n\n\n\n<button id=\"modal-reserve\" data-toggle=\"modal\" href=\"#myModalReserve\" class=\"d-none\"></button>\n<section class=\"modal mt-4\" id=\"myModalReserve\" *ngIf=\"credit\">\n  <div class=\"container-fluid modal-content modal-sm p-0\">\n\n    <!-- cabecera del diálogo -->\n    <div class=\"modal-header modal-title bg-success d-block\">\n      <h4 class=\"modal-title text-white text-center\">{{className}}</h4>\n      <!--<button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>-->\n    </div>\n\n    <!-- cuerpo del diálogo -->\n    <div class=\"modal-body\">\n\n    </div>\n\n  </div>\n</section>");

/***/ }),

/***/ 88633:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/shift/reservation/reservation.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  reservation works!\n</p>\n");

/***/ }),

/***/ 74203:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/shift/shift-create/shift-create.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button id=\"modal-attendance\" data-toggle=\"modal\" href=\"#myModalAttendance\" class=\"d-none\"></button>\n<!--<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">Abrir ventana de diálogo</button>-->\nhola\n<section>\n  <div class=\"container-fluid modal-content modal-lg p-0\">\n\n    <!-- cabecera del diálogo -->\n    <div class=\"modal-header modal-title bg-success d-block\">\n      <h4 class=\"modal-title text-white text-center\">Asistencias - {{quotaAvailable}} disponible </h4>\n      <!--<button type=\"button\" class=\"close\" data-dismiss=\"modal\">X</button>-->\n    </div>\n\n\n    <!-- cuerpo del diálogo -->\n    <div class=\"modal-body\">\n      <table *ngIf=\"attendances.length>0; else: elseBlock\" class=\"table table-bordered table-condensed cf scrollme user-table\">\n        <thead class=\"cf\">\n          <tr>\n            <th class=\"numeric\">{{shift.day}} {{shift.hour}}</th>\n            <th class=\"numeric\">Créditos restantes</th>\n            <th class=\"numeric\">Vencimiento</th>\n            <th class=\"numeric\">Acción</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let attendance of attendances\">\n            <td data-title=\"Turno\"><span>{{attendance.name}}</span></td>\n            <td data-title=\"Créditos restantes\"><span>{{(attendance.remainingCredit)}}</span></td>\n            <td data-title=\"Vencimiento\"><span>{{attendance.expiration | date: 'dd/MM/yyyy'}}</span></td>\n            <td data-title=\"Acción\">\n              <button *ngIf=\"attendance.status == 1\" class=\"btn btn-danger btn-xs btn-action-list\" (click)=\"cancell(attendance.id, attendance.memberId)\"><i class=\"fa fa-trash-o \"></i></button>\n              <button *ngIf=\"attendance.status == 3\" class=\"btn btn-warning btn-xs btn-action-list text-white\">Cancelado</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <ng-template #elseBlock><h5>No hay socios agregados</h5></ng-template>\n      <div *ngIf=\"viewBtnAddMember\" class=\"row justify-content-center align-items-center\">\n        <div class=\"text-center mb-2\">\n          <button type=\"button\" class=\"btn btn-info col-3 text-white\" (click)=\"viewSelectListMember()\">Agregar socio</button>\n        </div>\n      </div>\n      <div *ngIf=\"viewSelectAddMember\" class=\"card card-body\">\n        <a class=\"dropdown-toggle\" id=\"dropdown1\" data-toggle=\"dropdown\">\n          <label class=\"form-label text-black\">Socio:</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Buscar Socio\" [(ngModel)]=\"filterMember\" (click)=\"clearInput()\" (blur)=\"completeInput()\" />\n        </a>\n        <div class=\"dropdown-menu form-control\">\n          <a *ngFor=\"let member of members  | searchFilterMember: filterMember \" class=\"dropdown-item\" (click)=\"selectMember(member)\">{{member.lastName}} {{member.name}}</a>\n        </div>\n        <div>\n          <button type=\"button\" class=\"btn btn-outline-success btn-block col-12 mb-2\" (click)=\"addMember()\">Confirmar</button>\n          <button type=\"button\" class=\"btn btn-outline-danger btn-block col-12\" (click)=\"viewSelectListMember()\">Cancelar</button>\n        </div>\n      </div>\n\n      <!-- pie del diálogo -->\n\n      <div class=\"modal-footer p-0\">\n        <button type=\"button\" class=\"btn btn-success col-3 col-lg-2\" data-dismiss=\"modal\">Aceptar</button>\n      </div>\n\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ 93139:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/shift/shift-list/shift-list.component.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Turnos</corpo-header>\n\n\n\n<!-- Use a trigger -->\n<ion-button id=\"trigger-button\">Click to open modal</ion-button>\n<ion-modal trigger=\"trigger-button\">\n  <ng-template>\n    <ion-content>Modal ion-content\n\n\n      <ion-button id=\"trigger-button\" (click)=\"close()\">Click to open modal</ion-button>\n\n      <app-shift-create (getAllShifts)=\"getAll()\"></app-shift-create>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n\n\n\n<section class=\"wrapper\">\n  <div *ngIf=\"shifts.length>0; else elseBlock\" class=\"col-md-12\">\n    <div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n      <table class=\"table table-bordered table-condensed cf mb-0 user-table\">\n        <thead class=\"cf\">\n          <tr>\n            <th class=\"numeric\">Fecha</th>\n            <th class=\"numeric\">Nº</th>\n            <th class=\"numeric\">Tipo</th>\n            <th class=\"numeric\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"scrollme span-margin\" *ngFor=\"let shift of shifts\">\n            <td class=\"td-title\" data-title=\"Fecha\"><span>{{shift.day}} {{shift.hour}}</span></td>\n            <td class=\"td-title\" data-title=\"Turnos\"><span>{{shift.available}}</span></td>\n            <td class=\"td-title text-ajust\" data-title=\"Tipo\"><span>{{shift.className}}</span></td>\n            <td class=\"td-title\" data-title=\"Acción\">\n              <span class=\"btn-action-container\">\n                <button class=\"btn btn-success btn-xs btn-action-list\" (click)=\"goToAttendances(shift.id)\">ver</button>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n  <ng-template #elseBlock>\n    <h5>No hay turnos disponibles</h5>\n  </ng-template>\n</section>\n\n");

/***/ }),

/***/ 94737:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/statistics/periodization-goals/periodization-goals.component.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-button [routerLink]=\"['/periodization-report']\" routerDirection=\"back\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n    </ion-button>    \n  </ion-buttons>\n  <ion-title>\n    Objetivos y Asistencia\n  </ion-title>\n</ion-toolbar>\n\n\n\n<div class=\"card-body\">\n  <div class=\"month text-center\" >\n    <div class=\"\"> Enero</div>\n    <div>Objetivo: Fuerza</div>\n  </div>\n  <div class=\"row mt-3 week-container\">\n    <div class=\"col-12 mt-3\">\n      <div class=\"week text-center\" [routerLink]=\"['/wod-goals']\">\n        <h6>semana 1</h6>\n        <p class=\"goal-text\">Objetivo: Hipertrofia Sarcoplasmica</p>\n      </div>\n    </div>\n    <div class=\"col-12 mt-3\">     \n      <div class=\"week text-center\">\n        <h6>semana 2</h6>\n        <p class=\"goal-text\">Objetivo: Fuerza</p>\n      </div>\n    </div>\n    <div class=\"col-12 mt-3\">\n      <div class=\"week text-center\">\n        <h6>semana 3</h6>\n        <p class=\"goal-text\">Objetivo: HIIT Aeróbico</p>\n      </div>\n    </div>\n    <div class=\"col-12 mt-3\">\n      <div class=\"week text-center\">\n        <h6>semana 4</h6>\n        <p class=\"goal-text\">Objetivo: Fuerza</p>\n      </div>\n    </div>\n  </div>\n</div>\n<section class=\"wrapper\">\n\n      <ion-card class=\"card-chart\">\n        <ion-card-header>\n          Enero\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #barCanvas1 style=\"position: relative; height:20vh; width:40vw\"></canvas>\n        </ion-card-content>\n      </ion-card>  \n</section>");

/***/ }),

/***/ 38974:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/statistics/periodization-report/periodization-report.component.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Reporte</corpo-header>\n<div class=\"card-body\">\n  <div class=\"month text-center\" [routerLink]=\"['/goals-report']\">Enero</div>\n  <div class=\"row mt-3\">\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 1</div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 2</div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 3</div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 4</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"card-body\">\n  <div class=\"month text-center\"  (click)=\"goToGoals()\">Febrero</div>\n  <div class=\"row mt-3\">\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 1</div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 2</div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 3</div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 4</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"card-body\">\n  <div class=\"month text-center\"  [routerLink]=\"['/goals-report']\">Marzo</div>\n  <div class=\"row mt-3\">\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 1</div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 2</div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 3</div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"week text-center\">Semana 4</div>\n    </div>\n  </div>\n</div>\n\n<section class=\"wrapper\">\n\n  <ion-card class=\"card-chart\">\n    <ion-card-header>\n      Enero\n    </ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas1 style=\"position: relative; height:20vh; width:40vw\"></canvas>\n    </ion-card-content>\n  </ion-card>  \n</section>");

/***/ }),

/***/ 98900:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/statistics/wod-goals/wod-goals.component.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-button [routerLink]=\"['/goals']\" routerDirection=\"back\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n    </ion-button>    \n  </ion-buttons>\n  <ion-title>\n    Objetivos por WOD\n  </ion-title>\n</ion-toolbar>\n\n\n\n<div class=\"card-body\">\n  <div class=\"month text-center\" >\n    <div class=\"\">Semana 1</div>\n    <div>Objetivo: Fuerza</div>\n  </div>\n  <div class=\"row mt-3 week-container\">\n    <div class=\"col-12 mt-3\">\n      <div class=\"week text-center\">\n        <h6>WOD 1</h6>\n        <p class=\"goal-text\">Objetivo: Fuerza</p>\n      </div>\n    </div>\n    <div class=\"col-12 mt-3\">     \n      <div class=\"week text-center\">\n        <h6>WOD 2</h6>\n        <p class=\"goal-text\">Objetivo: Hipertrofia Sarcoplasmica</p>\n        \n      </div>\n    </div>\n    <div class=\"col-12 mt-3\">\n      <div class=\"week text-center\">\n        <h6>WOD 3</h6>\n        <p class=\"goal-text\">Objetivo: Fuerza</p>\n        \n      </div>\n    </div>\n    <div class=\"col-12 mt-3\">\n      <div class=\"week text-center\">\n        <h6>WOD 4</h6>\n        <p class=\"goal-text\">Objetivo: HIIT Aeróbico</p>\n      </div>\n    </div>\n    <div class=\"col-12 mt-3\">\n      <div class=\"week text-center\">\n        <h6>WOD 5</h6>\n        <p class=\"goal-text\">Objetivo: Fuerza</p>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 73821:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/email-edit/email-edit.component.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Modificar email</corpo-header>\n<section class=\"wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"col-lg-6\">\n      <div class=\"form-panel\">\n        <form [formGroup]=\"modificationForm\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 form-group\">\n              <label class=\"col-sm-12 control-label\">Email actual:</label>\n              <div class=\"formValidators\">\n                <input type=\"text\" class=\"form-control\" readonly formControlName=\"email\">\n              </div>\n            </div>\n            <div class=\"col-lg-12 form-group\">\n              <label class=\"col-sm-12 control-label\">Nueva Dirección de Email:</label>\n              <div class=\"formValidators\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"newEmail\">\n                <p *ngIf=\"sendForm && f.newEmail.errors?.required\">*el campo es requerido</p>\n                <p *ngIf=\"sendForm && f.newEmail.errors?.email\">*ingresar email valido</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-12 form-group\">\n            <label class=\"col-sm-12 control-label\">Confirma tu nueva dirección de Email:</label>\n            <div class=\"formValidators\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"repeatNewEmail\">\n              <p *ngIf=\"sendForm && f.repeatNewEmail.errors?.mustMatch\">*los email no coinciden</p>\n            </div>\n          </div>\n          <div class=\"col-lg-12 form-group\">\n            <label class=\"col-sm-12 control-label\">Contraseña:</label>\n            <div class=\"formValidators\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"password\">\n              <p *ngIf=\"sendForm && f.password.errors?.required\">*el campo es requerido</p>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-lg-12\">\n        <button class=\"btn btn-secondary pull-left mt-2\" type=\"button\" [routerLink]=\"['/my-account']\">Cancelar</button>\n        <button class=\"btn btn-success pull-right mt-2\" type=\"submit\" (click)=\"submit()\">Guardar</button>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ 13146:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/medical-history/injury-history/injury-history.component.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Ficha de lesiones</corpo-header>\n<section class=\"wrapper\">\n  <div>\n    <div>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 form-group\">\n                <input class=\"mt-2\" type=\"radio\" id=\"upperLimbs\" name=\"limbs\" value=\"1\" checked\n                  (change)=\"checkedLimbs($event.target.value)\">\n                <label for=\"upperLimbs\" class=\"col-sm-9 control-label float-left labelFormStyle marginLabel\">Miembro\n                  superior:</label>\n                <div class=\"mt-2\">\n                  <select id=\"UpperLimb\" class=\"form-control\" (change)=\"selectLimb($event.target.value)\"\n                    [disabled]=\"!optionsLimbs\">\n                    <option value=\"\" disabled>Seleccionar...</option>\n                    <option *ngFor=\"let upperLimb of upperLimbs\" value=\"{{upperLimb}}\">{{upperLimb}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-lg-3 form-group\">\n                <input class=\"mt-2\" id=\"lowerLimbs\" type=\"radio\" name=\"limbs\" value=\"2\"\n                  (change)=\"checkedLimbs($event.target.value)\">\n                <label for=\"lowerLimbs\" class=\"col-sm-9 control-label labelFormStyle marginLabel\">Miembro\n                  inferior:</label>\n                <div class=\"mt-2\">\n                  <select id=\"LowerLimb\" class=\"form-control\" (change)=\"selectLimb($event.target.value)\"\n                    [disabled]=\"optionsLimbs\">\n                    <option value=\"\" disabled>Seleccionar...</option>\n                    <option *ngFor=\"let lowerLimb of lowerLimbs\" value=\"{{lowerLimb}}\">{{lowerLimb}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-lg-3 form-group\">\n                <label class=\"labelFormStyle mt-2\">Estudios:</label>\n                <a id=\"select\" onclick=\"document.getElementById('file-button').click();\"\n                  class=\"btn btn-secondary form-control btn-action\">\n                  <!--<i class=\"fas fa-upload\"></i>-->\n                  Seleccionar\n                </a>\n                <input type=\"file\" id=\"file-button\" (change)=\"onFileSelection($event)\" style=\"display: none;\"\n                  multiple />\n              </div>\n              <div class=\"col-lg-3 form-group\">\n                <button type=\"button\" class=\"btn btn-success form-control text-center btn-action-add\"\n                  (click)=\"addInjury()\">Agregar Lesión</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"injuries.length>0\" class=\"col-12 mt-2\">\n    <table class=\"table table-bordered table-condensed cf scrollme detail-table\">\n      <thead class=\"cf\">\n        <tr>\n          <th>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-md-6 col-xs-6 col-4\"><label class=\"fw-bold mt-2\">Miembro Lesionado:</label>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-xs-6 col-8\">\n                <div class=\"form-group col-lg-6 col-md-6 col-xs-6\">\n                  <select class=\"form-control mt-2\" data-style=\"btn-success\"\n                    (change)=\"selectInjury($event.target.value)\">\n                    <option value=\"\" disabled>Seleccionar...</option>\n                    <option value=\"all\">Todos</option>\n                    <option *ngFor=\"let injury of injuries; index as i\" value=\"{{i}}\">{{injury.name}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </th>\n          <th class=\"text-center\">\n            <p class=\"text-center\">Acción</p>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let file of injuryFiles; index as i\">\n          <td class=\"fw-bold\">\n            <a (click)=\"download(i)\" download=\"{{file.path}}\">\n              <p class=\"overflow-clip\">{{file.name}}&nbsp;<i class=\"fa fa-download download-icon\"></i></p>\n            </a>\n          </td>\n          <td class=\"td-title\">\n            <div class=\"row justify-content-center aling-items-center\">\n              <div class=\" col-12 col-lg-4 col-md-6 col-xs-8 text-center\">\n                <button class=\"btn btn-danger btn-xs btn-action-list\" (click)=\"deleteFile(file.id)\">\n                  <ion-icon name=\"trash\"></ion-icon>\n                </button>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"mt-3 col-lg-12\">\n    <button class=\"btn btn-secondary col-4 col-lg-2 pull-left \" type=\"submit\" (click)=\"return()\">Volver</button>\n    <button class=\"btn btn-success col-4 col-lg-2 pull-right \" type=\"submit\"\n      [routerLink]=\"['/member-list']\">Guardar</button>\n  </div>\n</section>");

/***/ }),

/***/ 22330:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/medical-history/medical-history-create/medical-history-create.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"\">\n    <app-medical-history-form [age]=\"age\"></app-medical-history-form>\n  <div class=\"container-fluid div-btn-create\">\n    <button class=\"btn btn-secondary col-3 col-lg-2 pull-left btn-create\" type=\"submit\" [routerLink]=\"['/member-list']\">Volver</button>\n    <button *ngIf=\"planType == 1\" class=\"btn btn-success col-3 col-lg-2 pull-right btn-create\" type=\"submit\" (click)=\"submit()\">Siguiente</button>\n    <button *ngIf=\"planType == 2\" class=\"btn btn-success col-3 col-lg-2 pull-right btn-create\" type=\"submit\" (click)=\"submit()\">Guardar</button>\n  </div>\n</section>\n");

/***/ }),

/***/ 28047:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/medical-history/medical-history-edit/medical-history-edit.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"wrapper\">\n  <app-medical-history-form [age]=\"age\"></app-medical-history-form>\n  <div class=\"row div-btn-create\">\n    <div class=\"container-fluid col-12\">\n      <button class=\"btn btn-secondary col-3 col-lg-2 pull-left btn-create\" type=\"submit\"\n        [routerLink]=\"['/my-account']\">Volver</button>\n      <button *ngIf=\"planType == 1\" class=\"btn btn-success pull-right btn-create\" type=\"submit\"\n        (click)=\"submit()\">Siguiente</button>\n      <button *ngIf=\"planType == 2\" class=\"btn btn-success pull-right btn-create\" type=\"submit\"\n        (click)=\"submit()\">Guardar</button>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ 9460:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/medical-history/medical-history-form/medical-history-form.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"wrapper\">\n  <header class=\"modal-header\">\n    <h3 class=\"mb text-center text-white\">Ficha de aptitud médica</h3>\n  </header>\n\n  <div class=\"row\">\n    <form [formGroup]=\"formCreate\">\n      <div class=\"col-12\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-4 col-md-4 pull-left mt-2 form-group\">\n            <label class=\"col-sm-12 control-label \">Edad:</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"age\">\n            </div>\n          </div>\n          <div class=\"col-12 col-lg-4 col-md-4 pull-left mt-2 form-group\">\n            <label class=\"col-sm-12 control-label \">Sexo:</label>\n            <select class=\"form-control\" formControlName=\"gender\" (change)=\"selectGender($event.target.value)\">\n              <option value=\"\" disabled>Seleccionar...</option>\n              <option value=\"man\">Hombre</option>\n              <option value=\"woman\">Mujer</option>\n            </select>\n            <p class=\"text-danger\" *ngIf=\"sendForm && f.gender.errors?.required\">* el campo es requerido</p>\n          </div>\n          <div class=\"col-12 col-lg-4 col-md-4 pull-right mt-2 form-group\">\n            <label class=\"col-sm-12 control-label \">Periodo:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"period\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12\">\n        <div class=\"row\">\n          <div class=\"col-12 col-lg-4 col-md-4 mt-2 form-group\">\n            <label class=\"col-sm-12 control-label \">Peso:</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"weight\">\n              <p class=\"text-danger\" *ngIf=\"sendForm && f.weight.errors?.required\">* el campo es requerido</p>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6 form-group box-radio-title\">\n          <label class=\"control-label \">Alergias:</label>\n        </div>\n        <div class=\"col-6 group-radio-label\">\n          <h1>Dynamic Sizes</h1>\n    <ion-toggle color=\"tertiary\" class=\"dynamic-small width-small height-small\"></ion-toggle>\n    <ion-toggle color=\"tertiary\" checked class=\"dynamic-small width-small height-small\"></ion-toggle>\n    <ion-toggle color=\"tertiary\" class=\"dynamic-large width-large height-large\"></ion-toggle>\n    <ion-toggle color=\"tertiary\" checked class=\"dynamic-large width-large height-large\"></ion-toggle>\n          <input id=\"chkSwitch\" type=\"checkbox\" data-toggle=\"switchbutton\" checked data-onstyle=\"dark\" \n            data-offstyle=\"light\" data-style=\"border\" data-width=\"70\" data-onlabel=\"si\" data-offlabel=\"no\"\n            (change)=\"enableInput($event.target.value, 'allergies')\" />\n\n        </div>\n        <div class=\"formValidators col-12\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"allergies\">\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6 form-group\">\n          <label class=\"control-label \">Cirugias:</label>\n        </div>\n        <div class=\"col-6 group-radio-label\">\n          <input type=\"radio\" class=\"radio-button\" value=\"yes\" formControlName=\"surgicalInterventionChecked\"\n            (change)=\"enableInput($event.target.value, 'surgicalIntervention')\">\n          <span>Si</span>\n          <input type=\"radio\" class=\"radio-button\" value=\"no\" formControlName=\"surgicalInterventionChecked\"\n            (change)=\"enableInput($event.target.value, 'surgicalIntervention')\">\n          <span>No</span>\n        </div>\n        <div class=\"formValidators col-12\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"surgicalIntervention\">\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6 control-label  form-group\">\n          <label class=\"control-label \">Enf. cardiaca:</label>\n        </div>\n        <div class=\"col-6 group-radio-label\">\n          <input type=\"radio\" class=\"radio-button\" value=\"yes\" formControlName=\"heartDiseaseChecked\"\n            (change)=\"enableInput($event.target.value, 'heartDisease')\">\n          <span>Si</span>\n          <input type=\"radio\" class=\"radio-button\" value=\"no\" formControlName=\"heartDiseaseChecked\"\n            (change)=\"enableInput($event.target.value, 'heartDisease')\">\n          <span>No</span>\n        </div>\n        <div class=\"formValidators col-12\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"heartDisease\">\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6 control-label form-group\">\n          <label class=\"control-label \">Enf. respiratoria:</label>\n        </div>\n        <div class=\"col-6 group-radio-label\">\n          <input type=\"radio\" class=\"radio-button\" value=\"yes\" formControlName=\"respiratoryDiseaseChecked\"\n            (change)=\"enableInput($event.target.value, 'respiratoryDisease')\">\n          <span>Si</span>\n          <input type=\"radio\" class=\"radio-button\" value=\"no\" formControlName=\"respiratoryDiseaseChecked\"\n            (change)=\"enableInput($event.target.value, 'respiratoryDisease')\">\n          <span>No</span>\n        </div>\n        <div class=\"formValidators col-12\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"respiratoryDisease\">\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6 control-label form-group\">\n          <label class=\"control-label \">Medicación hab.:</label>\n        </div>\n        <div class=\"col-6 group-radio-label\">\n          <input type=\"radio\" class=\"radio-button\" value=\"yes\" formControlName=\"habitualMedicationChecked\"\n            (change)=\"enableInput($event.target.value, 'habitualMedication')\">\n          <span>Si</span>\n          <input type=\"radio\" class=\"radio-button\" value=\"no\" formControlName=\"habitualMedicationChecked\"\n            (change)=\"enableInput($event.target.value, 'habitualMedication')\">\n          <span>No</span>\n        </div>\n        <div class=\"formValidators col-12\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"habitualMedication\">\n        </div>\n      </div>\n      <div class=\"col-12\">\n        <div class=\"row\">\n          <div class=\"col-12 pull-left mt-2  form-group\">\n            <div class=\"col-12 form-group formMargin\">\n              <label class=\"col-12 control-label \">Observaciones:</label>\n              <div class=\"formValidators\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"observations\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ 91842:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/member-create/member-create.component.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Crear cuenta</corpo-header>\n\n<app-member-form></app-member-form>\n\n<button class=\"btn btn-secondary col-3 col-lg-2 pull-left btn-create\" type=\"button\" (click)=\"return()\">Cancelar</button>\n<button class=\"btn btn-success col-3 col-lg-2 pull-right btn-create\" type=\"submit\" (click)=\"submit()\">Guardar</button>");

/***/ }),

/***/ 86710:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/member-edit/member-edit.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Editar datos personales</corpo-header>\n<section class=\"wrapper\">\n  <app-member-form></app-member-form>\n  <div class=\"div-btn-create\">\n    <button class=\"btn btn-secondary pull-left btn-create\" type=\"button\" [routerLink]=\"['/my-account']\">Cancelar</button>\n    <button class=\"btn btn-success pull-right btn-create\" type=\"submit\" (click)=\"submit()\">Guardar</button>\n  </div>\n</section>\n");

/***/ }),

/***/ 19971:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/member-form/member-form.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row box-content\">\n  <form [formGroup]=\"formCreate\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 form-group\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Apellido:</label>\n        <div class=\"formValidators\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && f.lastName.errors?.required\">*el campo es requerido</p>\n        </div>\n      </div>\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Nombre:</label>\n        <div class=\"formValidators\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && f.name.errors?.required\">*el campo es requerido</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Fecha de Nacimiento:</label>\n        <div class=\"formValidators\">\n          <input type=\"date\" class=\"form-control\" formControlName=\"birthDate\" [ngModel]=\"dt | date:'yyyy-MM-dd'\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && f.birthDate.errors?.required\">*el campo es requerido</p>\n        </div>\n      </div>\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Dirección:</label>\n        <div class=\"formValidators\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"address\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && f.address.errors?.required\">*el campo es requerido</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Obra Social:</label>\n        <div>\n          <input type=\"text\" class=\"form-control\" formControlName=\"socialSecurity\">\n        </div>\n      </div>\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Celular:</label>\n        <div class=\"formValidators\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && f.phone.errors?.required\">*el campo es requerido</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Número de Urgencia:</label>\n        <div class=\"formValidators\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"emergencyPhone\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && f.emergencyPhone.errors?.required\">*el campo es requerido</p>\n        </div>\n      </div>\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Contacto de Urgencia:</label>\n        <div class=\"formValidators\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"emergencyContact\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && f.emergencyContact.errors?.required\">*el campo es requerido</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Instagram:</label>\n        <div>\n          <input type=\"text\" class=\"form-control\" formControlName=\"instagram\">\n        </div>\n      </div>\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Facebook:</label>\n        <div>\n          <input type=\"text\" class=\"form-control\" formControlName=\"facebook\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Plan:</label>\n        <div class=\"formValidators\">\n          <select class=\"form-control\" formControlName=\"planId\" (change)=\"selectPlan($event.target.value)\">\n            <option value=\"\" disabled>\n              <p class=\"labelFormStyle\">Seleccionar...</p>\n            </option>\n            <option *ngFor=\"let plan of plans\" value={{plan.id}}>{{plan.name}}</option>\n          </select>\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && f.planId.errors?.required\">*el campo es requerido</p>\n        </div>\n      </div>\n    </div>\n  </form>\n  <form *ngIf=\"modeCreate\" [formGroup]=\"formAccount\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Email:</label>\n        <div class=\"formValidators\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && fAccount.email.errors?.required\">*el campo es requerido</p>\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && fAccount.email.errors?.email\">*ingresar email valido</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Contraseña:</label>\n        <div class=\"formValidators\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"password\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && fAccount.password.errors?.required\">*el campo es requerido</p>\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && fAccount.password.errors?.pattern\">*Debe contener una mayúscula, ser alfanúmerica y\n            tener entre 8 y 15 caracteres</p>\n        </div>\n      </div>\n      <div class=\"col-lg-6 form-group mt-2\">\n        <label class=\"col-sm-6 control-label labelFormStyle\">Repetir Contraseña:</label>\n        <div class=\"formValidators\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"repeatPassword\">\n          <p  class=\"text-danger\"  *ngIf=\"sendForm && fAccount.repeatPassword.errors?.mustMatch\">*las contraseñas no coinciden</p>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n\n<!-- col-lg-12-->");

/***/ }),

/***/ 19697:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/my-account/my-account.component.html ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Datos personales</corpo-header>\n<section class=\"wrapper\">\n  <ion-spinner *ngIf=\"requesting\"></ion-spinner>\n  <div class=\"row\"  *ngIf=\"user\">\n    <div class=\"col-lg-12\">\n      <div class=\"card-account\">\n        <div class=\"row card-body dataUserBox \">\n          <div class=\"col-lg-6 form-group\">\n            <label class=\"col-4 control-label label\">Apellido:</label>\n            <p class=\"col-8 pull-right\">{{user.lastName}}</p>\n          </div>\n          <div class=\"col-lg-6 form-group\">\n            <label class=\"col-4 control-label label\">Nombre:</label>\n            <p class=\"col-8 pull-right\">{{user.name}}</p>\n          </div>\n        </div>\n        <div class=\"row card-body dataUserBox\">\n          <div class=\"col-lg-6 form-group\">\n            <label class=\"col-4 control-label label\">Domicilio:</label>\n            <p class=\"col-8 pull-right\">{{user.address}}</p>\n          </div>\n          <div class=\"col-lg-6 form-group\">\n            <label class=\"col-4 control-label label\">Telefono:</label>\n            <p class=\"col-8 pull-right\">{{user.phone}}</p>\n          </div>\n        </div>\n        <div *ngIf=\"userType == 2\" class=\"row card-body  dataUserBox\">\n          <div class=\"col-lg-6 form-group\">\n            <label class=\"col-6 control-label label\">Cont. de emergencia:</label>\n            <p class=\"col-6 pull-right\">{{user.emergencyContact}}</p>\n          </div>\n          <div class=\"col-lg-6 form-group\">\n            <label class=\"col-6 control-label label\">Tel. de emergencia:</label>\n            <p class=\"col-6 pull-right\">{{user.emergencyPhone}}</p>\n          </div>\n        </div>\n        <div class=\"row card-body dataUserBox\">\n          <div class=\"col-lg-6 form-group\">\n            <label class=\"col-3 control-label label\">Email:</label>\n            <p class=\"col-9 pull-right\">{{user.email}}</p>\n          </div>\n        </div>\n        <div class=\"row card-body justify-content-center align-items-center\">\n          <div class=\"col-12 col-lg-4 form-group text-center mt-2\">\n            <button type=\"button\" class=\"btn btn-success w-100\" (click)=\"modifyPersonalInformation()\">Modificar\n              datos personales</button>\n          </div>\n          <div *ngIf=\"userType == 2\" class=\"col-12 col-lg-4 form-group text-center mt-2\">\n            <button type=\"button\" class=\"btn btn-success w-100\" (click)=\"modifyMedicalHistory()\">Modificar\n              historia médica</button>\n          </div>\n          <div class=\"col-12 col-lg-4 form-group text-center mt-2\">\n            <button type=\"button\" class=\"btn btn-success w-100\" (click)=\"modifyEmail()\">Modificar\n              email</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ 82411:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/my-debts/my-debts.component.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Mis Deudas</corpo-header>\n\n\n<section class=\"wrapper\">\n  <div class=\"row mt\">\n    <div class=\"col-md-12\">\n      <section id=\"no-more-tables\" *ngIf=\"balances.length > 0\">\n        <div class=\"row\">\n          <div class=\"d-inline-flex align-items-center total-container\">\n            <label class=\"form-label\" class=\"text-white label-total\">Total:</label>\n            <input type=\"text\" class=\"form-control\" [value]=total readonly>>\n          </div>\n        </div>\n\n        <table class=\"table table-bordered table-condensed cf user-table\">\n          <thead class=\"cf bg-success text-white\">\n            <tr>\n              <th class=\"numeric\">Fecha</th>\n              <th class=\"numeric\">Concepto</th>\n              <th class=\"numeric\">Detalle</th>\n              <th class=\"numeric\">Saldo</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"scrollme\" *ngFor=\"let balance of balances\">\n              <td data-title=\"Concepto\" class=\"row-title\"><span *ngIf=\"balance.transaction == 1\">Venta</span><span\n                  *ngIf=\"balance.transaction == 2\">Cuota</span></td>\n              <td data-title=\"Fecha\"><span>{{balance.date | date: 'dd/MM/yyyy h:mm:ss a'}}</span></td>\n              <td data-title=\"Detalle\">\n                <span>\n                  <button class=\"btn btn btn-success w-100 btn-action-list\" (click)=\"getTransaction(balance)\">ver\n                    detalle</button>\n                </span>\n              </td>\n              <td data-title=\"Saldo\"><span *ngIf=\"balance.balance>0\">{{balance.balance}}</span><span\n                  *ngIf=\"balance.balance<0\">{{balance.balance * -1}} (a favor)</span></td>\n            </tr>\n          </tbody>\n        </table>\n\n\n        \n            \n\n      </section>\n    </div>\n  </div>\n</section>\n<ion-spinner *ngIf=\"requesting\"></ion-spinner>\n<h5 *ngIf=\"!requesting && balances.length == 0\">No hay turnos disponibles.</h5>\n\n\n<ion-button id=\"trigger-button\" class=\"d-none\">Click to open modal</ion-button>\n<ion-modal trigger=\"trigger-button\">\n  <ng-template>\n\n    <ion-content>\n      <section id=\"no-more-tables\" *ngIf=\"displayFee\">\n        <div class=\"table-wrapper-scroll-y my-custom-scrollbar content-modal\">\n          <table class=\"table table-bordered table-condensed cf scrollme detail-table\">\n            <thead class=\"cf\">\n              <tr>\n                <th>Plan</th>\n              </tr>\n              <tr>\n                <th>Alta</th>\n              </tr>\n              <tr>\n                <th>Vencimiento</th>\n              </tr>\n              <tr>\n                <th>Creditos</th>\n              </tr>\n              <tr>\n                <th *ngIf=\"fee.promotion\">Promoción</th>\n              </tr>\n              <tr>\n                <th>Total</th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr *ngFor=\"let fee of feeDetail\" class=\"scrollme\">\n                <td class=\"td-title row-title\" data-title=\"Plan\">{{fee.member.plan.name}}</td>\n                <td class=\"td-title\" data-title=\"Alta\">{{fee.from | date: 'dd/MM/yyyy'}}</td>\n                <td class=\"td-title\" data-title=\"Vencimiento\">{{fee.to | date: 'dd/MM/yyyy'}}</td>\n                <td class=\"td-title\" data-title=\"Creditos\">{{fee.credits}}</td>\n                <td *ngIf=\"fee.promotion\" class=\"td-title\" data-title=\"Promoción\">{{fee.promotion}}</td>\n                <td class=\"td-title\" data-title=\"Total\">{{fee.total}}</td>\n              </tr>\n            </tbody>\n          </table>\n          \n        </div>\n      </section>\n\n\n      <section id=\"no-more-tables\" *ngIf=\"displaySale\">\n        <div class=\"table-wrapper-scroll-y my-custom-scrollbar content-modal\">\n        \n\n          <table class=\"table table-bordered table-condensed cf scrollme detail-table\">\n            <thead class=\"cf\">\n              <tr>\n                <th colspan=\"2\">Fecha: {{sale.date | date: 'dd/MM/yyyy h:mm:ss a'}}</th>\n                <th colspan=\"2\" *ngIf=\"status\">\n                  Estado: <span *ngIf=\"status == 1\">Vigente</span><span *ngIf=\"status == 2\">Cancelada</span>\n                </th>\n              </tr>\n              <tr>\n                <th>Descripcion</th>\n                <th>Cantidad</th>\n                <th>Precio</th>\n                <th>Total</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let detail of detailsSale\" class=\"scrollme\">\n                <td class=\"td-title row-title\" data-title=\"Descripcion\">{{detail.product.description}}</td>\n                <td class=\"td-title\" data-title=\"Cantidad\">{{detail.quantity}}</td>\n                <td class=\"td-title\" data-title=\"Precio\">{{detail.price}}</td>\n                <td class=\"td-title\" data-title=\"Total\">{{detail.quantity*detail.price}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </section>\n\n      <button id=\"trigger-button\" (click)=\"close()\" class=\"btn btn-success main-center w-100\">Volver</button>\n    </ion-content>\n\n  </ng-template>\n</ion-modal>");

/***/ }),

/***/ 81715:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/user-create/user-create.component.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Crear cuenta</corpo-header>\n<div class=\"conte\">\n\n  <ion-card scrollY=\"true\">\n    <ion-card-content fullscreen=\"true\" overflow-scroll=\"true\">\n      <div class=\"\">\n        <app-member-form *ngIf=\"step == 1\"></app-member-form>\n        <app-medical-history-create  *ngIf=\"step == 2\"></app-medical-history-create>\n        <button class=\"btn btn-secondary pull-left mt-2\" type=\"button\" [routerLink]=\"['/user-list']\">Cancelar</button>\n        <button class=\"btn btn-success pull-right mt-2\" type=\"submit\" (click)=\"submit()\">Siguiente</button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n</div>");

/***/ }),

/***/ 71986:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/user/user-form/user-form.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"row mt\">\n  <div class=\"col-lg-12\">\n    <div class=\"form-panel\">\n      <form class=\"form-horizontal style-form\" [formGroup]=\"formCreate\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 form-group mt-2\">\n            <label class=\"col-sm-6 control-label margLabelForm\">Apellido:</label>\n            <div class=\"margLeft formValidators\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n              <p class=\"text-danger\" *ngIf=\"sendForm && f.lastName.errors?.required\">*el campo es requerido.</p>\n            </div>\n          </div>\n          <div class=\"col-lg-6 form-group mt-3\">\n            <label class=\"col-sm-6 control-label margLabelForm\">Nombre:</label>\n            <div class=\"margLeft formValidators\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n              <p class=\"text-danger\" *ngIf=\"sendForm && f.name.errors?.required\">*el campo es requerido</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 form-group mt-3\">\n            <label class=\"col-sm-6 control-label margLabelForm\">Fecha de Nacimiento:</label>\n            <div class=\"margLeft formValidators\">\n              <input type=\"date\" class=\"form-control\" formControlName=\"birthDate\" [ngModel]=\"dt | date:'yyyy-MM-dd'\">\n              <p class=\"text-danger\" *ngIf=\"sendForm && f.birthDate.errors?.required\">*el campo es requerido</p>\n            </div>\n          </div>\n          <div class=\"col-lg-6 form-group mt-3\">\n            <label class=\"col-sm-6 control-label margLabelForm\">Dirección:</label>\n            <div class=\"margLeft formValidators\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"address\">\n              <p class=\"text-danger\" *ngIf=\"sendForm && f.address.errors?.required\">*el campo es requerido</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 form-group mt-3\">\n            <label class=\"col-sm-6 control-label margLabelForm\">Celular:</label>\n            <div class=\"margLeft formValidators\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\n              <p class=\"text-danger\" *ngIf=\"sendForm && f.phone.errors?.required\">*el campo es requerido</p>\n            </div>\n          </div>\n          <div class=\"col-lg-6 form-group mt-3\">\n            <label class=\"col-sm-6 control-label margLabelForm\">Tipo de usuario:</label>\n            <div class=\"margLeft formValidators\">\n              <select class=\"form-control\" formControlName=\"roleId\">\n                <option value=\"\" disabled>Seleccionar...</option>\n                <option *ngFor=\"let role of roles\" value={{role.id}}>{{role.name}}</option>\n                <option value=\"7\">Contador</option>\n              </select>\n              <p class=\"text-danger\" *ngIf=\"sendForm && f.roleId.errors?.required\">*el campo es requerido</p>\n            </div>\n          </div>\n        </div>\n      </form>\n      <form *ngIf=\"modeCreate\" [formGroup]=\"formAccount\">\n        <div class=\"row\">\n          <div class=\"col-lg-6 form-group mt-3\">\n            <label class=\"col-sm-6 control-label margLabelForm\">Email:</label>\n            <div class=\"margLeft formValidators\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n              <p class=\"text-danger\" *ngIf=\"sendForm && fAccount.email.errors?.required\">*el campo es requerido</p>\n              <p class=\"text-danger\" *ngIf=\"sendForm && fAccount.email.errors?.email\">*ingresar email valido</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-6 form-group mt-3\">\n            <label class=\"col-sm-6 control-label margLabelForm\">Contraseña:</label>\n            <div class=\"margLeft formValidators\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"password\">\n              <p class=\"text-danger\" *ngIf=\"sendForm && fAccount.password.errors?.required\">*el campo es requerido</p>\n              <p class=\"text-danger\" *ngIf=\"sendForm && fAccount.password.errors?.pattern\">*Debe contener una mayúscula, ser alfanúmerica y tener entre 8 y 15 caracteres</p>\n            </div>\n          </div>\n          <div class=\"col-lg-6 form-group mt-3\">\n            <label class=\"col-sm-6 control-label margLabelForm\">Repetir Contraseña:</label>\n            <div class=\"margLeft formValidators\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"repeatPassword\">\n              <p class=\"text-danger\" *ngIf=\"sendForm && fAccount.repeatPassword.errors?.mustMatch\">*las contraseñas no coinciden</p>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <!-- col-lg-12-->\n</div>\n");

/***/ }),

/***/ 58985:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/workout/periodization/periodization.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Periodización</corpo-header>\n\n<ion-spinner *ngIf=\"requesting\"></ion-spinner>\n\n\n<section class=\"wrapper\">\n\n    <div *ngIf=\"periodization\" class=\"wod-container wrapper\">\n        <div class=\"card mb-2\">\n            <div class=\"card-body\">\n                <label class=\"label-goal\">Objetivo Mensual: </label><label class=\"goal\">{{periodization.goal}}</label>\n            </div>\n        </div>\n        <div class=\"card mb-2\" *ngFor=\"let week of periodization.periodizationWeeks\">\n            <h6 class=\"week-number m-2\">Semana {{week.weekNumber}}</h6>\n            <div class=\"card-body\">\n                <label class=\"label-goal\">Objetivo: </label><label class=\"goal\">{{week.goal}}</label>\n                <div class=\"row\">\n                    <section id=\"no-more-tables\" class=\"tab-pane fade show active col-4\">\n                        <table class=\"table table-bordered table-condensed cf scrollme predominance\" id=\"week2\"\n                            week=\"week2\">\n                            <thead class=\"cf\">\n                                <tr>\n                                    <th>M</th>\n                                    <th>S</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td data-title=\"M\" day=\"monday\">{{(week.m != '0') ? week.m + '%' : '-'}}</td>\n                                    <td data-title=\"S\" day=\"monday\">{{(week.s != '0') ? week.s + '%' : '-'}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <!--<div class=\"col-12 chart\" [style.display]=\"chartweek2 ? 'block' : 'none'\">\n                        <canvas id=\"week2-chart\"></canvas>\n                    </div>\n                    -->\n                    </section>\n                    <section id=\"no-more-tables\" class=\"tab-pane fade show active col-8\">\n                        <table class=\"table table-bordered table-condensed cf scrollme periodization\" id=\"week1\"\n                            week=\"week1\">\n                            <thead class=\"cf\">\n                                <tr>\n                                    <th>Lun</th>\n                                    <th>Mar</th>\n                                    <th>Mie</th>\n                                    <th>Jue</th>\n                                    <th>Vie</th>\n                                    <th>Sab</th>\n                                    <th>Dom</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td data-title=\"Lun\" day=\"monday\" class=\"first-td\">\n                                        {{week.monday}}</td>\n                                    <td data-title=\"Mar\" day=\"tuesday\">{{week.tuesday}}</td>\n                                    <td data-title=\"Mie\" day=\"wednesday\">{{week.wednesday}}</td>\n                                    <td data-title=\"Jue\" day=\"thursday\">{{week.thursday}}</td>\n                                    <td data-title=\"Vie\" day=\"friday\">{{week.friday}}</td>\n                                    <td data-title=\"Sab\" day=\"saturday\">{{week.saturday}}</td>\n                                    <td data-title=\"Dom\" day=\"sunday\">{{week.sunday}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </section>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>\n<div class=\"row card-body justify-content-center align-items-center\">\n    <div class=\"col-12 col-lg-4 form-group text-center\">\n        <button type=\"button\" class=\"btn btn-secondary w-100\" [routerLink]=\"['/wod-week']\">Atrás</button>\n    </div>\n</div>");

/***/ }),

/***/ 91434:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/workout/rating/rating.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Calificar esfuerzo</corpo-header>\n<!--<ngb-rating [max]=\"5\" [(rate)]=\"starRating\" [readonly]=\"false\"></ngb-rating>-->\n<div class=\"wrapper\">\n    <div class=\"form-group\">\n        <input [(ngModel)]=\"rate\" class=\"form-control w-100 rate-value\">\n    </div>\n    <input type=\"range\" value=\"5\" class=\"w-100\" min=\"0\" max=\"10\" step=\"1\" [(ngModel)]=\"rate\">\n    <div class=\"div-btn-create\">\n        <button class=\"btn btn-success w-100\" type=\"button\" [routerLink]=\"['/effort']\">Aceptar</button>\n    </div>\n</div>\n<div class=\"wrapper\">\n    \n</div>\n<!--<mat-slider min=\"1\" max=\"10\" step=\"1\" value=\"5\"></mat-slider>-->");

/***/ }),

/***/ 66090:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/workout/reports/effort/effort.component.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>Esfuerzo percibido</corpo-header>\n\n<section class=\"wrapper\">\n\n  \n\n      <ion-card class=\"card-chart\">\n        <ion-card-header>\n          Semana 1\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #barCanvas1 style=\"position: relative; height:20vh; width:40vw\"></canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card class=\"card-chart\">\n        <ion-card-header>\n          Semana 2\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #barCanvas2 style=\"position: relative; height:20vh; width:40vw\"></canvas>\n        </ion-card-content>\n      </ion-card>\n\n\n\n      <ion-card class=\"card-chart\">\n        <ion-card-header>\n          Semana 3\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #barCanvas3 style=\"position: relative; height:20vh; width:40vw\"></canvas>\n        </ion-card-content>\n      </ion-card>\n\n\n      <ion-card class=\"card-chart\">\n        <ion-card-header>\n          Semana 4\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #barCanvas4 style=\"position: relative; height:20vh; width:40vw\"></canvas>\n        </ion-card-content>\n      </ion-card>\n\n  \n</section>");

/***/ }),

/***/ 96059:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/workout/wod-week/wod-week.component.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<corpo-header>WOD</corpo-header>\n\n\n<ion-spinner *ngIf=\"requesting\"></ion-spinner>\n\n<!--\n<ion-content *ngIf=\"!wod\">\n    <ion-calendar \n        [(ngModel)]=\"date\" \n        (change)=\"onChange($event)\" \n        [type]=\"type\" \n        [format]=\"'YYYY-MM-DD'\"\n        [options]=\"options\">\n    </ion-calendar>\n</ion-content>\n-->\n\n<section class=\"wrapper\"  *ngIf=\"!wod\">\n    <div class=\"card\">\n\n        <table class=\"table table-bordered table-condensed cf\">\n            <tbody>\n                <tr *ngFor=\"let day of days\" [class.active-day]=\"day == getActiveDay()\">\n                    <td data-title=\"{{day}}\" class=\"align-middle\">\n                        {{day}}\n                    </td>\n                    <td data-title=\"{{day}}\">\n                        <button class=\"btn btn-success w-100\" (click)=\"viewWod(day)\">ver</button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n       \n    </div>\n    \n</section>\n<div class=\"row card-body justify-content-center align-items-center\"  *ngIf=\"!wod\">\n    <div class=\"col-12 col-lg-4 form-group text-center\">\n        <button type=\"button\" class=\"btn btn-success w-100\" [routerLink]=\"['/periodization']\">Periodización</button>\n    </div>\n</div>\n\n\n\n\n<app-wod [wod]=\"wod\" (wodEventEmitter)=\"closeWod()\"></app-wod>");

/***/ }),

/***/ 39038:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/workout/wod/wod.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"wod\" class=\"wod-container wrapper\">\n  {{wod.name}}\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <label class=\"label-goal\">Objetivos </label>\n\n      <ul class=\"goal\" >\n        <li *ngFor=\"let goal of getGoals(wod.goal)\">{{goal}}</li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"card wod-group mt-2\" *ngFor=\"let group of wod.wodGroups; let i = index\" [attr.data-index]=\"i\">\n\n\n    <label class=\"group-detail\">\n      {{group.detail}}\n    </label>\n\n\n\n    <div class=\"\">\n      <table class=\"table table-bordered wod-table\">\n        <tbody>\n          <tr *ngFor=\"let exerciseItem of group.exercises; let ei = index\">\n\n            <td class=\"col-8\">\n              {{exerciseItem.units}} {{exerciseItem.exercise.name}} {{((exerciseItem.modality.name != \"Repeticiones\") ?\n              exerciseItem.modality.name : \"\")}}\n              \n            </td>\n            <td class=\"col-2 mode-value\" *ngIf=\"exerciseItem.value\">\n              {{getValue(exerciseItem)}}\n            </td>\n            <td class=\"col-2\">\n              <img src=\"../../../../assets/icon/youtube.ico\" (click)=\"openVideo(exerciseItem.exercise.video)\"\n              class=\"video-icon\">\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n\n  <button class=\"btn btn-secondary pull-left mt-2\" type=\"button\" (click)=\"goBack()\">Cancelar</button>\n  <button class=\"btn btn-success pull-right mt-2\" type=\"submit\" [routerLink]=\"['/workout-rating']\">Calificar</button>\n\n</div>");

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 32139,
	"./af.js": 32139,
	"./ar": 22600,
	"./ar-dz": 81001,
	"./ar-dz.js": 81001,
	"./ar-kw": 99842,
	"./ar-kw.js": 99842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 15452,
	"./ar-ma.js": 15452,
	"./ar-sa": 11802,
	"./ar-sa.js": 11802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 22600,
	"./az": 96375,
	"./az.js": 96375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 85236,
	"./bg.js": 85236,
	"./bm": 81704,
	"./bm.js": 81704,
	"./bn": 94506,
	"./bn-bd": 34466,
	"./bn-bd.js": 34466,
	"./bn.js": 94506,
	"./bo": 47891,
	"./bo.js": 47891,
	"./br": 93348,
	"./br.js": 93348,
	"./bs": 84848,
	"./bs.js": 84848,
	"./ca": 35928,
	"./ca.js": 35928,
	"./cs": 31839,
	"./cs.js": 31839,
	"./cv": 59151,
	"./cv.js": 59151,
	"./cy": 35761,
	"./cy.js": 35761,
	"./da": 56686,
	"./da.js": 56686,
	"./de": 85177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 54407,
	"./de-ch.js": 54407,
	"./de.js": 85177,
	"./dv": 79729,
	"./dv.js": 79729,
	"./el": 60430,
	"./el.js": 60430,
	"./en-au": 28430,
	"./en-au.js": 28430,
	"./en-ca": 61139,
	"./en-ca.js": 61139,
	"./en-gb": 56747,
	"./en-gb.js": 56747,
	"./en-ie": 79466,
	"./en-ie.js": 79466,
	"./en-il": 52121,
	"./en-il.js": 52121,
	"./en-in": 41167,
	"./en-in.js": 41167,
	"./en-nz": 62030,
	"./en-nz.js": 62030,
	"./en-sg": 43646,
	"./en-sg.js": 43646,
	"./eo": 73126,
	"./eo.js": 73126,
	"./es": 38819,
	"./es-do": 69293,
	"./es-do.js": 69293,
	"./es-mx": 65304,
	"./es-mx.js": 65304,
	"./es-us": 66068,
	"./es-us.js": 66068,
	"./es.js": 38819,
	"./et": 23291,
	"./et.js": 23291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 70043,
	"./fa.js": 70043,
	"./fi": 16138,
	"./fi.js": 16138,
	"./fil": 11466,
	"./fil.js": 11466,
	"./fo": 76803,
	"./fo.js": 76803,
	"./fr": 65523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 69001,
	"./fr-ch.js": 69001,
	"./fr.js": 65523,
	"./fy": 21116,
	"./fy.js": 21116,
	"./ga": 66151,
	"./ga.js": 66151,
	"./gd": 93094,
	"./gd.js": 93094,
	"./gl": 11279,
	"./gl.js": 11279,
	"./gom-deva": 64458,
	"./gom-deva.js": 64458,
	"./gom-latn": 66320,
	"./gom-latn.js": 66320,
	"./gu": 78658,
	"./gu.js": 78658,
	"./he": 52153,
	"./he.js": 52153,
	"./hi": 98732,
	"./hi.js": 98732,
	"./hr": 84960,
	"./hr.js": 84960,
	"./hu": 76339,
	"./hu.js": 76339,
	"./hy-am": 11862,
	"./hy-am.js": 11862,
	"./id": 71068,
	"./id.js": 71068,
	"./is": 61260,
	"./is.js": 61260,
	"./it": 1007,
	"./it-ch": 78063,
	"./it-ch.js": 78063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 92390,
	"./jv.js": 92390,
	"./ka": 35958,
	"./ka.js": 35958,
	"./kk": 67216,
	"./kk.js": 67216,
	"./km": 61061,
	"./km.js": 61061,
	"./kn": 24060,
	"./kn.js": 24060,
	"./ko": 55216,
	"./ko.js": 55216,
	"./ku": 50894,
	"./ku.js": 50894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 38381,
	"./lo.js": 38381,
	"./lt": 56118,
	"./lt.js": 56118,
	"./lv": 67889,
	"./lv.js": 67889,
	"./me": 94274,
	"./me.js": 94274,
	"./mi": 39226,
	"./mi.js": 39226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 27938,
	"./ml.js": 27938,
	"./mn": 35456,
	"./mn.js": 35456,
	"./mr": 94393,
	"./mr.js": 94393,
	"./ms": 93647,
	"./ms-my": 33049,
	"./ms-my.js": 33049,
	"./ms.js": 93647,
	"./mt": 26097,
	"./mt.js": 26097,
	"./my": 66277,
	"./my.js": 66277,
	"./nb": 67245,
	"./nb.js": 67245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 42557,
	"./nl-be": 20478,
	"./nl-be.js": 20478,
	"./nl.js": 42557,
	"./nn": 9046,
	"./nn.js": 9046,
	"./oc-lnc": 83131,
	"./oc-lnc.js": 83131,
	"./pa-in": 51731,
	"./pa-in.js": 51731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 41178,
	"./pt-br": 56558,
	"./pt-br.js": 56558,
	"./pt.js": 41178,
	"./ro": 84138,
	"./ro.js": 84138,
	"./ru": 73380,
	"./ru.js": 73380,
	"./sd": 42889,
	"./sd.js": 42889,
	"./se": 22774,
	"./se.js": 22774,
	"./si": 53776,
	"./si.js": 53776,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 93871,
	"./sl.js": 93871,
	"./sq": 44228,
	"./sq.js": 44228,
	"./sr": 40774,
	"./sr-cyrl": 61928,
	"./sr-cyrl.js": 61928,
	"./sr.js": 40774,
	"./ss": 83176,
	"./ss.js": 83176,
	"./sv": 52422,
	"./sv.js": 52422,
	"./sw": 52530,
	"./sw.js": 52530,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 18025,
	"./te.js": 18025,
	"./tet": 53934,
	"./tet.js": 53934,
	"./tg": 99958,
	"./tg.js": 99958,
	"./th": 84251,
	"./th.js": 84251,
	"./tk": 65494,
	"./tk.js": 65494,
	"./tl-ph": 38568,
	"./tl-ph.js": 38568,
	"./tlh": 73158,
	"./tlh.js": 73158,
	"./tr": 49574,
	"./tr.js": 49574,
	"./tzl": 64311,
	"./tzl.js": 64311,
	"./tzm": 99990,
	"./tzm-latn": 42380,
	"./tzm-latn.js": 42380,
	"./tzm.js": 99990,
	"./ug-cn": 52356,
	"./ug-cn.js": 52356,
	"./uk": 54934,
	"./uk.js": 54934,
	"./ur": 84515,
	"./ur.js": 84515,
	"./uz": 40058,
	"./uz-latn": 41875,
	"./uz-latn.js": 41875,
	"./uz.js": 40058,
	"./vi": 13325,
	"./vi.js": 13325,
	"./x-pseudo": 39208,
	"./x-pseudo.js": 39208,
	"./yo": 18742,
	"./yo.js": 18742,
	"./zh-cn": 42378,
	"./zh-cn.js": 42378,
	"./zh-hk": 21074,
	"./zh-hk.js": 21074,
	"./zh-mo": 74671,
	"./zh-mo.js": 74671,
	"./zh-tw": 20259,
	"./zh-tw.js": 20259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #86b686;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n  margin-left: 10px;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-menu-button ion-icon {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjODZiNjg2O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUtYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4iXX0= */";

/***/ }),

/***/ 51939:
/*!*************************************************************************!*\
  !*** ./src/app/components/corpo/corpoheader/corpoheader.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".ion-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  width: 100%;\n  height: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnBvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiY29ycG9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLXRvb2xiYXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIzcHg7XG59Il19 */";

/***/ }),

/***/ 85886:
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".box {\n  text-align: center;\n  color: white;\n}\n\n.square {\n  width: 40%;\n  margin: 1%;\n  margin-top: -150px;\n}\n\nimg {\n  height: 15rem;\n}\n\n.wrapper {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  justify-items: center;\n  /*background-image: url('../../../assets/img/back-box3.jpg');\n    background-repeat: no-repeat;\n    background-size:100% 100%;*/\n}\n\n.box button {\n  background-color: transparent;\n  color: white;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQTs7K0JBQUE7QUFHRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNxdWFyZSB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMSU7XG4gIG1hcmdpbi10b3A6IC0xNTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxNXJlbTtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2stYm94My5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7Ki9cbn1cblxuLmJveCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */";

/***/ }),

/***/ 67007:
/*!*************************************************************!*\
  !*** ./src/app/components/login/login/login.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".registration {\n  text-align: center;\n}\n\n.login-social-link {\n  text-align: center;\n}\n\n.form-login-heading {\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n.btn-sign-in {\n  margin-left: 60px;\n  margin-top: 15px;\n}\n\n.login-passw-modal {\n  margin-left: 14px;\n}\n\n.checkbox {\n  margin-top: 5px;\n}\n\n.login-container {\n  width: 300px;\n}\n\n.modal-title {\n  background-color: #40bf0b;\n}\n\nion-card.logo {\n  width: 70%;\n  background-color: #5e6d6d8f;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RyYXRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmxvZ2luLXNvY2lhbC1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5mb3JtLWxvZ2luLWhlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIFxuICAuYnRuLXNpZ24taW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgXG4gIC5sb2dpbi1wYXNzdy1tb2RhbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIH1cbiAgXG4gIC5jaGVja2JveCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIFxuICAubG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgXG4gIC5tb2RhbC10aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwYmYwYjtcbiAgfVxuXG4gIGlvbi1jYXJkLmxvZ297XG4gICAgd2lkdGg6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU2ZDZkOGY7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gICJdfQ== */";

/***/ }),

/***/ 4969:
/*!***********************************************************************!*\
  !*** ./src/app/components/modal/modal-page/modal-page.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 40686:
/*!************************************************************************!*\
  !*** ./src/app/components/report/attendance/attendance.component.scss ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "table {\n  color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtBQURGIiwiZmlsZSI6ImF0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxudGFibGV7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 82824:
/*!*******************************************************************************!*\
  !*** ./src/app/components/shift/my-reservation/my-reservation.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "table {\n  color: white;\n}\n\nh5 {\n  color: white;\n}\n\n.main-center {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.btn-action-list {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXJlc2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoibXktcmVzZXJ2YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmg1e1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW4tY2VudGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idG4tYWN0aW9uLWxpc3R7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";

/***/ }),

/***/ 62976:
/*!*************************************************************************!*\
  !*** ./src/app/components/shift/reservation/reservation.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 64492:
/*!***************************************************************************!*\
  !*** ./src/app/components/shift/shift-create/shift-create.component.scss ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-card {\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nion-list {\n  overflow: hidden;\n  overflow-y: auto;\n}\n\nion-list ::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaWZ0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0FBRUoiLCJmaWxlIjoic2hpZnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24tbGlzdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 77258:
/*!***********************************************************************!*\
  !*** ./src/app/components/shift/shift-list/shift-list.component.scss ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "table {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaWZ0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic2hpZnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";

/***/ }),

/***/ 8749:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/statistics/periodization-goals/periodization-goals.component.scss ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".week {\n  background-color: #008b24;\n  height: 100%;\n  border-radius: 4px;\n}\n\n.week-container {\n  display: flex;\n}\n\n.month {\n  background-color: #94e494;\n  border-radius: 4px;\n}\n\n.goal-text {\n  font-size: small;\n  color: #dbd2d2;\n  margin-bottom: 5px !important;\n}\n\na {\n  text-decoration: none;\n  display: inline-block;\n  padding: 8px 16px;\n}\n\n.previous {\n  background-color: #6a6868;\n  color: black;\n}\n\n.round {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmlvZGl6YXRpb24tZ29hbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGIiwiZmlsZSI6InBlcmlvZGl6YXRpb24tZ29hbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VlayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDhiMjQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ud2Vlay1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9udGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRlNDk0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5nb2FsLXRleHQge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogI2RiZDJkMjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLnByZXZpb3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhNjg2ODtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucm91bmQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 85905:
/*!************************************************************************************************!*\
  !*** ./src/app/components/statistics/periodization-report/periodization-report.component.scss ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".week {\n  background-color: #008b24;\n  border-radius: 4px;\n}\n\n.month {\n  background-color: #94e494;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmlvZGl6YXRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InBlcmlvZGl6YXRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlZWsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YjI0O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5tb250aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGU0OTQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuXG4iXX0= */";

/***/ }),

/***/ 5784:
/*!**************************************************************************!*\
  !*** ./src/app/components/statistics/wod-goals/wod-goals.component.scss ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".week {\n  background-color: #008b24;\n  height: 100%;\n  border-radius: 4px;\n}\n\n.week-container {\n  display: flex;\n}\n\n.month {\n  background-color: #94e494;\n  border-radius: 4px;\n}\n\n.goal-text {\n  font-size: small;\n  color: #dbd2d2;\n  margin-bottom: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvZC1nb2Fscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQUNKIiwiZmlsZSI6IndvZC1nb2Fscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWVrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YjI0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIC53ZWVrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLm1vbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRlNDk0O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLmdvYWwtdGV4dCB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjogI2RiZDJkMjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgfVxuICAiXX0= */";

/***/ }),

/***/ 47480:
/*!**********************************************************************!*\
  !*** ./src/app/components/user/email-edit/email-edit.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".form-panel label {\n  color: white;\n}\n\n.formValidators p {\n  color: #f53d3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoiZW1haWwtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXBhbmVsIGxhYmVse1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm1WYWxpZGF0b3JzIHB7XG4gICAgY29sb3I6IHJnYigyNDUsIDYxLCA2MSk7XG59Il19 */";

/***/ }),

/***/ 36923:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/user/medical-history/injury-history/injury-history.component.scss ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wrapper {\n  background-color: white;\n}\n\ntr.span-margin > td > span {\n  margin-left: 15px;\n}\n\ntd.text-ajust {\n  text-overflow: ellipsis;\n}\n\n.marginLabel {\n  margin-top: 2px;\n  margin-left: 4px;\n}\n\n#select {\n  text-decoration: none !important;\n  color: white !important;\n}\n\na {\n  text-decoration: underline !important;\n  color: #0d6efd !important;\n  cursor: pointer;\n}\n\n.download-icon {\n  margin-left: 6px;\n}\n\n.btn-action {\n  align-items: center;\n  margin-top: 2px;\n}\n\n.btn-action-add {\n  margin-top: 33px;\n}\n\n@media only screen and (max-width: 990px) {\n  .btn-action-add {\n    margin-top: 7px;\n  }\n}\n\n@media only screen and (max-width: 800px) {\n  #no-more-tables td {\n    padding-left: 30%;\n  }\n\n  .detail-table {\n    font-size: 13px;\n    border: 1px solid #808080;\n    margin-top: 2px;\n  }\n\n  .btn-action-add {\n    margin-top: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluanVyeS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtBQUNKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQ0FBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0U7RUFDRSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBQ0ksZ0JBQUE7QUFBTjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFO0lBQ0UsZUFBQTtFQUFKO0FBQ0Y7O0FBR0U7RUFDRTtJQUNFLGlCQUFBO0VBREo7O0VBSUU7SUFDRSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0VBREo7O0VBS0U7SUFDRSxlQUFBO0VBRko7QUFDRiIsImZpbGUiOiJpbmp1cnktaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxudHIuc3Bhbi1tYXJnaW4gPiB0ZCA+IHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG4gIFxuICB0ZC50ZXh0LWFqdXN0IHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBcbiAgXG4gIC5tYXJnaW5MYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIH1cbiAgXG4gICNzZWxlY3Qge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9IFxuICBcbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzBkNmVmZCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmRvd25sb2FkLWljb257XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICB9XG4gIFxuICAuYnRuLWFjdGlvbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cbiAgXG4gIC5idG4tYWN0aW9uLWFkZCB7XG4gICAgbWFyZ2luLXRvcDogMzNweDtcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuICAgIC5idG4tYWN0aW9uLWFkZCB7XG4gICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgI25vLW1vcmUtdGFibGVzIHRkIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMzAlO1xuICAgIH1cbiAgXG4gICAgLmRldGFpbC10YWJsZSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODA4MDgwO1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cbiAgXG4gIFxuICAgIC5idG4tYWN0aW9uLWFkZCB7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICB9XG4gICJdfQ== */";

/***/ }),

/***/ 55837:
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/user/medical-history/medical-history-create/medical-history-create.component.scss ***!
  \**************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpY2FsLWhpc3RvcnktY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3594:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/user/medical-history/medical-history-edit/medical-history-edit.component.scss ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".btn-create {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtaGlzdG9yeS1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksa0JBQUE7QUFESiIsImZpbGUiOiJtZWRpY2FsLWhpc3RvcnktZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ0bi1jcmVhdGUge1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICJdfQ== */";

/***/ }),

/***/ 95219:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/user/medical-history/medical-history-form/medical-history-form.component.scss ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".formBorder {\n  border: 1px solid #adb5bd;\n}\n\n.margLabelForm {\n  margin-top: 15px;\n}\n\n.formMargin {\n  margin-left: 1px;\n}\n\n.radio-button {\n  margin-right: 7px;\n  margin-left: 15px;\n}\n\n.group-radio-label {\n  padding: 10px;\n  text-align: right;\n}\n\ndiv.group-radio-label span {\n  color: white;\n}\n\ndiv.group-radio-label label {\n  color: white;\n}\n\ndiv.box-radio-title {\n  display: flex;\n  align-items: center;\n}\n\n.height-large {\n  height: 60px;\n  --border-radius: 4px;\n  --handle-border-radius: 4px;\n  --handle-width: 50%;\n}\n\n.handle-height-large {\n  height: 60px;\n  /*\n   * The max height of the handle is 100% of the track height - handle spacing\n   * so this will never show as being 150%\n   */\n  --handle-height: 150%;\n  --handle-width: 23px;\n  --handle-border-radius: 14px 4px 4px 14px;\n  --handle-transition: border-radius 120ms ease-in-out 80ms;\n}\n\n.handle-height-large.toggle-checked {\n  --handle-border-radius: 4px 14px 14px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYWwtaGlzdG9yeS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUNFLFlBQUE7RUFFQSxvQkFBQTtFQUNBLDJCQUFBO0VBRUEsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFFQTs7O0lBQUE7RUFJQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7RUFDQSx5REFBQTtBQUhGOztBQU1BO0VBQ0UseUNBQUE7QUFIRiIsImZpbGUiOiJtZWRpY2FsLWhpc3RvcnktZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtQm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FkYjViZDtcbn1cblxuLm1hcmdMYWJlbEZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZm9ybU1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG5cbi5yYWRpby1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5ncm91cC1yYWRpby1sYWJlbHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmRpdi5ncm91cC1yYWRpby1sYWJlbCBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5kaXYuZ3JvdXAtcmFkaW8tbGFiZWwgbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmRpdi5ib3gtcmFkaW8tdGl0bGV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLmhlaWdodC1sYXJnZSB7XG4gIGhlaWdodDogNjBweDtcblxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1oYW5kbGUtYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gIC0taGFuZGxlLXdpZHRoOiA1MCU7XG59XG5cbi5oYW5kbGUtaGVpZ2h0LWxhcmdlIHtcbiAgaGVpZ2h0OiA2MHB4O1xuXG4gIC8qXG4gICAqIFRoZSBtYXggaGVpZ2h0IG9mIHRoZSBoYW5kbGUgaXMgMTAwJSBvZiB0aGUgdHJhY2sgaGVpZ2h0IC0gaGFuZGxlIHNwYWNpbmdcbiAgICogc28gdGhpcyB3aWxsIG5ldmVyIHNob3cgYXMgYmVpbmcgMTUwJVxuICAgKi9cbiAgLS1oYW5kbGUtaGVpZ2h0OiAxNTAlO1xuICAtLWhhbmRsZS13aWR0aDogMjNweDtcbiAgLS1oYW5kbGUtYm9yZGVyLXJhZGl1czogMTRweCA0cHggNHB4IDE0cHg7XG4gIC0taGFuZGxlLXRyYW5zaXRpb246IGJvcmRlci1yYWRpdXMgMTIwbXMgZWFzZS1pbi1vdXQgODBtcztcbn1cblxuLmhhbmRsZS1oZWlnaHQtbGFyZ2UudG9nZ2xlLWNoZWNrZWQge1xuICAtLWhhbmRsZS1ib3JkZXItcmFkaXVzOiA0cHggMTRweCAxNHB4IDRweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 9406:
/*!****************************************************************************!*\
  !*** ./src/app/components/user/member-create/member-create.component.scss ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n/**\n * Card style modal needs additional padding on the\n * top of the header. We accomplish this by targeting\n * the first toolbar in the header.\n * Footer also needs this. We do not adjust the bottom\n * padding though because of the safe area.\n */\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal ion-footer ion-toolbar:first-of-type {\n  padding-top: 6px;\n}\n/**\n* Card style modal needs additional padding on the\n* bottom of the header. We accomplish this by targeting\n* the last toolbar in the header.\n*/\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type {\n  padding-bottom: 6px;\n}\n/**\n* Add padding on the left and right\n* of toolbars while accounting for\n* safe area values when in landscape.\n*/\nhtml.ios ion-modal ion-toolbar {\n  padding-right: calc(var(--ion-safe-area-right) + 8px);\n  padding-left: calc(var(--ion-safe-area-left) + 8px);\n}\n/**\n * Card style modal on iPadOS\n * should only have backdrop on first instance.\n */\n@media screen and (min-width: 768px) {\n  html.ios ion-modal.modal-card:first-of-type {\n    --backdrop-opacity: 0.18;\n  }\n}\n/**\n * Subsequent modals should not have a backdrop/box shadow\n * as it will cause the screen to appear to get progressively\n * darker. With Ionic 6, declarative modals made it\n * possible to have multiple non-presented modals in the DOM,\n * so we could no longer rely on ion-modal:first-of-type.\n * Here we disable the opacity/box-shadow for every modal\n * that comes after the first presented modal.\n *\n * Note: ion-modal:not(.overlay-hidden):first-of-type\n * does not match the first modal to not have\n * the .overlay-hidden class, it will match the\n * first modal in general only if it does not\n * have the .overlay-hidden class.\n * The :nth-child() pseudo-class has support\n * for selectors which would help us here. At the\n * time of writing it does not have great cross browser\n * support.\n *\n * Note 2: This should only apply to non-card and\n * non-sheet modals. Card and sheet modals have their\n * own criteria for displaying backdrops/box shadows.\n */\nion-modal.modal-default:not(.overlay-hidden) ~ ion-modal.modal-default {\n  --backdrop-opacity: 0;\n  --box-shadow: none;\n}\n/**\n * This works around a bug in WebKit where the\n * content will overflow outside of the bottom border\n * radius when re-painting. As long as a single\n * border radius value is set on .ion-page, this\n * issue does not happen. We set the top left radius\n * here because the top left corner will always have a\n * radius no matter the platform.\n * This behavior only applies to card modals.\n */\nhtml.ios ion-modal.modal-card .ion-page {\n  border-top-left-radius: var(--border-radius);\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:first-of-type {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:last-of-type {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-accordion-group > ion-accordion:last-of-type ion-item {\n  --border-width: 0px;\n}\nion-accordion.accordion-animated > [slot=header] .ion-accordion-toggle-icon {\n  transition: 300ms transform cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n@media (prefers-reduced-motion: reduce) {\n  ion-accordion .ion-accordion-toggle-icon {\n    /* stylelint-disable declaration-no-important */\n    transition: none !important;\n  }\n}\n/**\n * The > [slot=\"header\"] selector ensures that we do\n * not modify toggle icons for any nested accordions. The state\n * of one accordion should not affect any accordions inside\n * of a nested accordion group.\n */\nion-accordion.accordion-expanding > [slot=header] .ion-accordion-toggle-icon,\nion-accordion.accordion-expanded > [slot=header] .ion-accordion-toggle-icon {\n  transform: rotate(180deg);\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-previous ion-item[slot=header] {\n  --border-width: 0px;\n  --inner-border-width: 0px;\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanding:first-of-type,\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanded:first-of-type {\n  margin-top: 0;\n}\nion-input input::-webkit-date-and-time-value {\n  text-align: start;\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-feature-settings: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.ion-ce body {\n  display: block;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n.ion-align-items-center {\n  align-items: center !important;\n}\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\n.ion-page {\n  display: block !important;\n  background-color: #2e2d2d;\n  overflow-y: scroll;\n}\n.pull-right {\n  float: right;\n}\n.form-control {\n  margin-bottom: 7px;\n}\n:root {\n  /* These examples use the same color: sienna. */\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 160, 82, 45;\n  /* These examples use the same color: lightsteelblue. */\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 176, 196, 222;\n}\n.wrapper {\n  display: inline-block;\n  margin-top: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 15px;\n  padding-top: 0px;\n  width: 100%;\n}\n.btn-action-list {\n  width: 100%;\n}\n.div-btn-create {\n  padding: 0px;\n  margin-top: 15px !important;\n}\n.custom-alert .alert-wrapper {\n  background: #e5e5e5;\n  background-color: white;\n}\n.custom-alert .alert-head {\n  background-color: #e4e4e4;\n  color: white;\n}\n.custom-alert .alert-head h2 {\n  color: #868686;\n}\n.custom-alert .alert-wrapper .alert-message {\n  padding-top: 10px !important;\n}\n.custom-alert .alert-button {\n  color: #000;\n}\n.custom-alert {\n  --backdrop-opacity: 0.2;\n  --background: rgb(212, 62, 62);\n}\n.custom-alert-button {\n  color: white;\n}\nion-spinner {\n  color: #7fff00;\n  width: 100%;\n  margin: 10px;\n}\ndiv.monthview-container table {\n  background-color: #697a70 !important;\n  color: white;\n}\ndiv.days button.attended {\n  background-color: #06bb1d !important;\n}\ndiv.days button.attended p {\n  color: white !important;\n}\ndiv.form-group label {\n  color: #dadada;\n}\n.pull-rigth {\n  float: right;\n}\nion-card-content {\n  background-color: #2e2d2d;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dsb2JhbC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvY29yZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMuZ2xvYmFscy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5pb3MudmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5tZC52YXJzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9ub3JtYWxpemUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3N0cnVjdHVyZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdHlwb2dyYXBoeS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Rpc3BsYXkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9wYWRkaW5nLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxvYXQtZWxlbWVudHMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC1hbGlnbm1lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2ZsZXgtdXRpbHMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiLCJtZW1iZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7RUFBQTtBQVdBLDREQUFBO0FDSEE7RUFDRSw2RkFBQTtBQ1BGO0FEU0E7RUFDRSwwREFBQTtBQ05GO0FEU0E7RUFDRSwwQ0FBQTtBQ05GO0FEU0E7RUFDRSx1Q0FBQTtBQ05GO0FEU0E7RUFDRSxnQkFBQTtBQ05GO0FEZ0JBOzs7Ozs7RUFBQTtBQU9BOzs7RUFHRSxnQkFBQTtBQ2JGO0FEZ0JBOzs7O0NBQUE7QUFLQTs7RUFFRSxtQkFBQTtBQ2JGO0FEZ0JBOzs7O0NBQUE7QUFLQTtFQUNFLHFEQUFBO0VBQ0EsbURBQUE7QUNiRjtBRGdCQTs7O0VBQUE7QUFJQTtFQUNFO0lBQ0Usd0JBQUE7RUNiRjtBQUNGO0FEZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUF1QkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDZEY7QURpQkE7Ozs7Ozs7OztFQUFBO0FBVUE7RUFDRSw0Q0FBQTtBQ2RGO0FEdUNFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDMUJGO0FEOEJFO0VBVEEsZ0VBQUE7RUFDQSw2RUFBQTtFQUNBLDBFQUFBO0VBQ0EsMkZBQUE7RUFDQSx1RUFBQTtFQUNBLHFFQUFBO0FDakJGO0FEcUJFO0VBVEEsK0RBQUE7RUFDQSwyRUFBQTtFQUNBLHlFQUFBO0VBQ0EsMEZBQUE7RUFDQSxzRUFBQTtFQUNBLG9FQUFBO0FDUkY7QURZRTtFQVRBLDhEQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ0NGO0FER0U7RUFUQSw4REFBQTtFQUNBLDBFQUFBO0VBQ0Esd0VBQUE7RUFDQSxtRkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNVRjtBRE5FO0VBVEEsNkRBQUE7RUFDQSx5RUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDbUJGO0FEZkU7RUFUQSw0REFBQTtFQUNBLDBFQUFBO0VBQ0Esc0VBQUE7RUFDQSxpRkFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUM0QkY7QUR4QkU7RUFUQSw2REFBQTtFQUNBLDJFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUNxQ0Y7QURqQ0U7RUFUQSwyREFBQTtFQUNBLHNFQUFBO0VBQ0EscUVBQUE7RUFDQSxzRkFBQTtFQUNBLGtFQUFBO0VBQ0EsZ0VBQUE7QUM4Q0Y7QURqQ0E7RUVnTE0sT0YvS3VCO0VFZ0x2QixRRmhMaUI7RUV5TXJCLE1Gek1rQjtFRTBNbEIsU0YxTXdCO0VBRXhCLGFBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUcvRytCO0FGbUpqQztBRGpDQTtFQUNFLGtCQUFBO0FDb0NGO0FEakNBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRSx5REFBQTtFQUNBLHdCQUFBO0FDb0NGO0FEakNBO0VBQ0UsVUFBQTtBQ29DRjtBRGpDQTtFQUNFLGNBQUE7QUNvQ0Y7QUQ3QkE7RUFDRSw2QkFBQTtBQ2dDRjtBRDdCQTtFQUNFO0lBQ0UsaURBQUE7RUNnQ0Y7QUFDRjtBRDVCQTtFQUNFO0lBQ0Usa0RBQUE7SUFDQSx3REFBQTtJQUNBLG9EQUFBO0lBQ0Esc0RBQUE7RUM4QkY7QUFDRjtBRDNCQTtFQUNFO0lBQ0UsNkNBQUE7SUFDQSxtREFBQTtJQUNBLCtDQUFBO0lBQ0EsaURBQUE7RUM2QkY7QUFDRjtBRHRCQTs7RUFFRSxjQUFBO0FDd0JGO0FEaEJBO0VFMlJNLGlDQUFBO0FEdlFOO0FEaEJBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBSUEsb0JBQUE7QUNnQkY7QURiQTtFQUNFLDJDSXBQK0I7QUhvUWpDO0FEYkE7RUFDRSwwQ0lyUCtCO0FIcVFqQztBRFRBO0VBQ0UsNENLblE4QjtBSitRaEM7QURUQTtFQUNFLDRDS3ZROEI7QUptUmhDO0FEUkE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FDV0Y7QURUQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QUNZRjtBRFZBO0VBQ0UsbUJBQUE7QUNhRjtBRFZBO0VBQ0UsMkRBQUE7QUNhRjtBRFZBO0VBQ0U7SUFDRSwrQ0FBQTtJQUNBLDJCQUFBO0VDYUY7QUFDRjtBRFhBOzs7OztFQUFBO0FBTUE7O0VBRUUseUJBQUE7QUNhRjtBRFZBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ2FGO0FEVkE7O0VBRUUsYUFBQTtBQ2FGO0FEUEE7RUFDRSxpQkFBQTtBQ1VGO0FGL1RBLHdDQUFBO0FPUEE7Ozs7RUFJRSx3QkFBQTtBQ05GO0FEV0E7RUFDRSxhQUFBO0VBRUEsU0FBQTtBQ1RGO0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7QURzQkE7RUFDRSxlQUFBO0VBRUEsU0FBQTtBQ3BCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUVBLHVCQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsY0FBQTtBQzdCRjtBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjtBRDhDQTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7QURnREE7Ozs7RUFJRSxTQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUM5Q0Y7QURzREE7OztFQUdFLGVBQUE7RUFFQSwwQkFBQTtBQ3BERjtBRHdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLDBCQUFBO0FDckRGO0FEd0RBOztFQUVFLG9CQUFBO0FDckRGO0FEd0RBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsMEJBQUE7QUN0REY7QUR5REE7RUFDRSxlQUFBO0FDdERGO0FEMERBOzs7RUFHRSxlQUFBO0FDdkRGO0FEMkRBOztFQUVFLFVBQUE7RUFFQSxTQUFBO0FDekRGO0FEK0RBOztFQUVFLFVBQUE7RUFFQSxzQkFBQTtBQzdERjtBRG1FQTs7RUFFRSxZQUFBO0FDaEVGO0FEc0VBOztFQUVFLHdCQUFBO0FDbkVGO0FEMkVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ3hFRjtBRDJFQTs7RUFFRSxVQUFBO0FDeEVGO0FDeEpBO0VBQ0Usc0JBQUE7RUFFQSw2Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7QUNURjtBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSw4QkFBQTtVQUFBLHNCQUFBO0FDVkY7QURhQTtFQUNFLGFBQUE7QUNWRjtBRGFBO0VBQ0UsY0FBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFTnlDRSxrQ0FBQTtFQUNBLG1DQUFBO0VBb0tFLGNNNU1jO0VONk1kLGVNN01jO0VOaVBoQixhTWpQZ0I7RU5rUGhCLGdCTWxQZ0I7RU40TWQsZU0zTWU7RU40TWYsZ0JNNU1lO0VOZ1BqQixjTWhQaUI7RU5pUGpCLGlCTWpQaUI7RUFFakIsZUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsa0NBQUE7RUFFQSxnQkFBQTtFQUVBLDBCQUFBO0VBRUEsdUJBQUE7RUFFQSx5QkFBQTtFQUVBLHFCQUFBO0VBRUEsMkJBQUE7RUFFQSw4QkFBQTtVQUFBLHNCQUFBO0FDYkY7QUNsQkE7RUFDRSxtQ0FBQTtBQzlCRjtBRGlDQTtFQUNFLDZCQUFBO0VBQ0Esd0NBQUE7QUM5QkY7QURpQ0E7Ozs7OztFUitPRSxnQlF6T2dCO0VSME9oQixtQlExTzRCO0VBRTVCLGdCQXhDNkI7RUEwQzdCLGdCQXZDNkI7QUNRL0I7QURrQ0E7RVJrT0UsZ0JRak9nQjtFQUVoQixlQTFDNkI7QUNTL0I7QURvQ0E7RVI0TkUsZ0JRM05nQjtFQUVoQixlQTdDNkI7QUNVL0I7QURzQ0E7RUFDRSxlQTlDNkI7QUNVL0I7QUR1Q0E7RUFDRSxlQS9DNkI7QUNXL0I7QUR1Q0E7RUFDRSxlQWhENkI7QUNZL0I7QUR1Q0E7RUFDRSxlQWpENkI7QUNhL0I7QUR1Q0E7RUFDRSxjQUFBO0FDcENGO0FEdUNBOztFQUVFLGtCQUFBO0VBRUEsY0FBQTtFQUVBLGNBQUE7RUFFQSx3QkFBQTtBQ3ZDRjtBRDBDQTtFQUNFLFdBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxlQUFBO0FDdkNGO0FDdERBO0VBQ0Usd0JBQUE7QUNQRjtBRGlCSTtFQUNFLHdCQUFBO0FDZE47QURxQkk7RUFDRSx3QkFBQTtBQ2xCTjtBWHNISTtFVTdHQTtJQUNFLHdCQUFBO0VDTEo7QUFDRjtBWHlKSTtFVTlJQTtJQUNFLHdCQUFBO0VDUko7QUFDRjtBWDJHSTtFVTdHQTtJQUNFLHdCQUFBO0VDS0o7QUFDRjtBWCtJSTtFVTlJQTtJQUNFLHdCQUFBO0VDRUo7QUFDRjtBWGlHSTtFVTdHQTtJQUNFLHdCQUFBO0VDZUo7QUFDRjtBWHFJSTtFVTlJQTtJQUNFLHdCQUFBO0VDWUo7QUFDRjtBWHVGSTtFVTdHQTtJQUNFLHdCQUFBO0VDeUJKO0FBQ0Y7QVgySEk7RVU5SUE7SUFDRSx3QkFBQTtFQ3NCSjtBQUNGO0FkL0JBLGlEQUFBO0FlSkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFWjhORSxlWTVOZTtFWjZOZixnQlk3TmU7RVppUWpCLGNZalFpQjtFWmtRakIsaUJZbFFpQjtBQ2JuQjtBRGdCQTtFQUNFLHlDQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VaeU5FLHNDWTVPTTtFWjZPTix1Q1k3T007RVo2UVIscUNZN1FRO0VaOFFSLHdDWTlRUTtBQ1VWO0Fic09NO0VBQ0U7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBSUYsOENZMVBBO0laNFBBLDRDWTVQQTtFQ21CUjtBQUNGO0FESUE7RUFDRSx1Q0FBQTtFWm9QQSxxQ1k3UVE7QUN5QlY7QURLQTtFQUNFLHlDQUFBO0VaNk1FLHNDWTVPTTtBQzZCVjtBYm1OTTtFQUNFO0lBRUksbUJBQUE7SUFPRiw4Q1kxUEE7RUNtQ1I7QUFDRjtBREFBO0VBQ0UsdUNBQUE7RVp3TUUsdUNZN09NO0FDeUNWO0FidU1NO0VBQ0U7SUFLSSxvQkFBQTtJQU1GLDRDWTVQQTtFQytDUjtBQUNGO0FETkE7RUFDRSwwQ0FBQTtFWm1PQSx3Q1k5UVE7QUNxRFY7QURMQTtFQUNFLHVDQUFBO0VBQ0EsMENBQUE7RVoyTkEscUNZN1FRO0VaOFFSLHdDWTlRUTtBQzJEVjtBREpBO0VBQ0UseUNBQUE7RUFDQSx1Q0FBQTtFWm1MRSxzQ1k1T007RVo2T04sdUNZN09NO0FDaUVWO0FiK0tNO0VBQ0U7SUFFSSxtQkFBQTtJQUdBLG9CQUFBO0lBSUYsOENZMVBBO0laNFBBLDRDWTVQQTtFQzBFUjtBQUNGO0FEVEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RVprS0UsY1loS2M7RVppS2QsZVlqS2M7RVpxTWhCLGFZck1nQjtFWnNNaEIsZ0JZdE1nQjtBQ2NsQjtBRFhBO0VBQ0UsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RVo2SkUsb0NZM09LO0VaNE9MLHFDWTVPSztFWjRRUCxtQ1k1UU87RVo2UVAsc0NZN1FPO0FDZ0dUO0FiK0lNO0VBQ0U7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBSUYsNENZelBEO0laMlBDLDBDWTNQRDtFQ3lHUDtBQUNGO0FEdkJBO0VBQ0UscUNBQUE7RVp3TEEsbUNZNVFPO0FDK0dUO0FEdEJBO0VBQ0UsdUNBQUE7RVppSkUsb0NZM09LO0FDbUhUO0FiNEhNO0VBQ0U7SUFFSSxrQkFBQTtJQU9GLDRDWXpQRDtFQ3lIUDtBQUNGO0FEM0JBO0VBQ0UscUNBQUE7RVo0SUUscUNZNU9LO0FDK0hUO0FiZ0hNO0VBQ0U7SUFLSSxtQkFBQTtJQU1GLDBDWTNQRDtFQ3FJUDtBQUNGO0FEakNBO0VBQ0Usd0NBQUE7RVp1S0Esc0NZN1FPO0FDMklUO0FEaENBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFWitKQSxtQ1k1UU87RVo2UVAsc0NZN1FPO0FDaUpUO0FEL0JBO0VBQ0UsdUNBQUE7RUFDQSxxQ0FBQTtFWnVIRSxvQ1kzT0s7RVo0T0wscUNZNU9LO0FDdUpUO0Fid0ZNO0VBQ0U7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBSUYsNENZelBEO0laMlBDLDBDWTNQRDtFQ2dLUDtBQUNGO0FDOUpJO0VkbWFFLHNCQUFBO0FlL2FOO0FEZ0JJO0VkK1pFLHVCQUFBO0FlM2FOO0FEZ0JJO0VkNllFLHNCQUFBO0FlelpOO0FmNExXO0VBZ09MLHVCQUFBO0FlelpOO0FEYUk7RWRnWkUsdUJBQUE7QWV6Wk47QWZxTFc7RUF1T0wsc0JBQUE7QWV6Wk47QWY0R0k7RWNsSEE7SWRtYUUsc0JBQUE7RWV4Wko7O0VEUEU7SWQrWkUsdUJBQUE7RWVwWko7O0VEUEU7SWQ2WUUsc0JBQUE7RWVsWUo7RWZxS1M7SUFnT0wsdUJBQUE7RWVsWUo7O0VEVkU7SWRnWkUsdUJBQUE7RWVsWUo7RWY4SlM7SUF1T0wsc0JBQUE7RWVsWUo7QUFDRjtBZm9GSTtFY2xIQTtJZG1hRSxzQkFBQTtFZWpZSjs7RUQ5QkU7SWQrWkUsdUJBQUE7RWU3WEo7O0VEOUJFO0lkNllFLHNCQUFBO0VlM1dKO0VmOElTO0lBZ09MLHVCQUFBO0VlM1dKOztFRGpDRTtJZGdaRSx1QkFBQTtFZTNXSjtFZnVJUztJQXVPTCxzQkFBQTtFZTNXSjtBQUNGO0FmNkRJO0VjbEhBO0lkbWFFLHNCQUFBO0VlMVdKOztFRHJERTtJZCtaRSx1QkFBQTtFZXRXSjs7RURyREU7SWQ2WUUsc0JBQUE7RWVwVko7RWZ1SFM7SUFnT0wsdUJBQUE7RWVwVko7O0VEeERFO0lkZ1pFLHVCQUFBO0VlcFZKO0VmZ0hTO0lBdU9MLHNCQUFBO0VlcFZKO0FBQ0Y7QWZzQ0k7RWNsSEE7SWRtYUUsc0JBQUE7RWVuVko7O0VENUVFO0lkK1pFLHVCQUFBO0VlL1VKOztFRDVFRTtJZDZZRSxzQkFBQTtFZTdUSjtFZmdHUztJQWdPTCx1QkFBQTtFZTdUSjs7RUQvRUU7SWRnWkUsdUJBQUE7RWU3VEo7RWZ5RlM7SUF1T0wsc0JBQUE7RWU3VEo7QUFDRjtBQ25HSTtFQUNFLDZCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsNEJBQUE7QUNiTjtBRGdCSTtFQUNFLDBCQUFBO0FDYk47QURnQkk7RUFDRSwyQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsNEJBQUE7QUNiTjtBRGdCSTtFQUNFLDhCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FqQmtHSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw4QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw0QkFBQTtFQ29CSjs7RURqQkU7SUFDRSwwQkFBQTtFQ29CSjs7RURqQkU7SUFDRSwyQkFBQTtFQ29CSjs7RURqQkU7SUFDRSw0QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw4QkFBQTtFQ29CSjs7RURqQkU7SUFDRSw4QkFBQTtFQ29CSjtBQUNGO0FqQmdFSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ3FESjs7RURsREU7SUFDRSw4QkFBQTtFQ3FESjs7RURsREU7SUFDRSw0QkFBQTtFQ3FESjs7RURsREU7SUFDRSwwQkFBQTtFQ3FESjs7RURsREU7SUFDRSwyQkFBQTtFQ3FESjs7RURsREU7SUFDRSw0QkFBQTtFQ3FESjs7RURsREU7SUFDRSw4QkFBQTtFQ3FESjs7RURsREU7SUFDRSw4QkFBQTtFQ3FESjtBQUNGO0FqQitCSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwwQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSwyQkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw0QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjs7RURuRkU7SUFDRSw4QkFBQTtFQ3NGSjtBQUNGO0FqQkZJO0VnQmxIQTtJQUNFLDZCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDhCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDRCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDBCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDJCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDRCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDhCQUFBO0VDdUhKOztFRHBIRTtJQUNFLDhCQUFBO0VDdUhKO0FBQ0Y7QUNySkk7RUFDRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47QURnQkk7RUFDRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47QURnQkk7RUFDRSx5REFBQTtFQUNBLHFDQUFBO0FDYk47QW5CbUhJO0VrQmxIQTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNHSjs7RURBRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNHSjtBQUNGO0FuQmtHSTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUJKOztFRGhCRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQko7O0VEaEJFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21CSjtBQUNGO0FuQmtGSTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUNKOztFRGhDRTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtQ0o7O0VEaENFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21DSjtBQUNGO0FuQmtFSTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbURKOztFRGhERTtJQUNFLHlEQUFBO0lBQ0Esb0NBQUE7RUNtREo7O0VEaERFO0lBQ0UseURBQUE7SUFDQSxxQ0FBQTtFQ21ESjtBQUNGO0FDdEVBO0VBQ0UsaUNBQUE7QUNQRjtBRFVBO0VBQ0UsK0JBQUE7QUNQRjtBRFVBO0VBQ0UsNkJBQUE7QUNQRjtBRFVBO0VBQ0UsOEJBQUE7QUNQRjtBRFVBO0VBQ0UsK0JBQUE7QUNQRjtBRFVBO0VBQ0UsMkJBQUE7QUNQRjtBRGNBO0VBQ0UsMEJBQUE7QUNYRjtBRGNBO0VBQ0UsNEJBQUE7QUNYRjtBRGNBO0VBQ0Usa0NBQUE7QUNYRjtBRGtCQTtFQUNFLHNDQUFBO0FDZkY7QURrQkE7RUFDRSxrQ0FBQTtBQ2ZGO0FEa0JBO0VBQ0Usb0NBQUE7QUNmRjtBRGtCQTtFQUNFLHdDQUFBO0FDZkY7QURrQkE7RUFDRSx5Q0FBQTtBQ2ZGO0FEa0JBO0VBQ0Usd0NBQUE7QUNmRjtBRHNCQTtFQUNFLGtDQUFBO0FDbkJGO0FEc0JBO0VBQ0UsOEJBQUE7QUNuQkY7QURzQkE7RUFDRSxnQ0FBQTtBQ25CRjtBRHNCQTtFQUNFLCtCQUFBO0FDbkJGO0FEc0JBO0VBQ0UsZ0NBQUE7QUNuQkY7QXhCakRBO0VBQ0UseUJBQUE7RUFDQSx5QkFKaUI7RUFLakIsa0JBQUE7QXlCTEY7QXpCUUE7RUFDRSxZQUFBO0F5QkxGO0F6QlFBO0VBQ0Usa0JBQUE7QXlCTEY7QXpCUUE7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFFQSx1REFBQTtFQUNBLCtCQUFBO0VBQ0EseUNBQUE7QXlCTkY7QXpCU0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0F5Qk5GO0F6QlNBO0VBQ0UsV0FBQTtBeUJORjtBekJTQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtBeUJORjtBekJTQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QXlCTkY7QXpCU0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QXlCTkY7QXpCU0E7RUFDRSxjQUFBO0F5Qk5GO0F6QlNBO0VBQ0UsNEJBQUE7QXlCTkY7QXpCU0E7RUFDRSxXQUFBO0F5Qk5GO0F6QlNBO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtBeUJORjtBekJTQTtFQUNFLFlBQUE7QXlCTkY7QXpCU0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QXlCTkY7QXpCU0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QXlCTkY7QXpCU0E7RUFDRSxvQ0FBQTtBeUJORjtBekJTQTtFQUNFLHVCQUFBO0F5Qk5GO0F6QlVBO0VBQ0UsY0FBQTtBeUJQRjtBekJVQTtFQUNFLFlBQUE7QXlCUEY7QUF2SEE7RUFDRSx5QnpCd0JpQjtFeUJ2QmpCLFlBQUE7QUEwSEYiLCJmaWxlIjoibWVtYmVyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBcHAgR2xvYmFsIENTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSBnbG9iYWxseS4gVGhlc2Ugc3R5bGVzIGFyZSBmb3JcbiAqIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXMgZmlsZSBjYW4gYmVcbiAqIHVzZWQgYXMgYW4gZW50cnkgcG9pbnQgdG8gaW1wb3J0IG90aGVyIENTUy9TYXNzIGZpbGVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0IENTUy5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGdsb2JhbCBzdHlsZXNoZWV0cywgdmlzaXQgdGhlIGRvY3VtZW50YXRpb246XG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9nbG9iYWwtc3R5bGVzaGVldHNcbiAqL1xuXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzc1wiO1xuXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzXCI7XG5cbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuXG4kYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcblxuLmlvbi1wYWdlIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbjpyb290IHtcbiAgLyogVGhlc2UgZXhhbXBsZXMgdXNlIHRoZSBzYW1lIGNvbG9yOiBzaWVubmEuICovXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiAxNjAsIDgyLCA0NTtcblxuICAvKiBUaGVzZSBleGFtcGxlcyB1c2UgdGhlIHNhbWUgY29sb3I6IGxpZ2h0c3RlZWxibHVlLiAqL1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTc2LCAxOTYsIDIyMjtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLWFjdGlvbi1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXYtYnRuLWNyZWF0ZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWFsZXJ0IC5hbGVydC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tYWxlcnQgLmFsZXJ0LWhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tYWxlcnQgLmFsZXJ0LWhlYWQgaDIge1xuICBjb2xvcjogIzg2ODY4Njtcbn1cblxuLmN1c3RvbS1hbGVydCAuYWxlcnQtd3JhcHBlciAuYWxlcnQtbWVzc2FnZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tYWxlcnQgLmFsZXJ0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY3VzdG9tLWFsZXJ0IHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjI7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIxMiwgNjIsIDYyKTtcbn1cblxuLmN1c3RvbS1hbGVydC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1zcGlubmVyIHtcbiAgY29sb3I6ICM3ZmZmMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmRpdi5tb250aHZpZXctY29udGFpbmVyIHRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5N2E3MCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmRpdi5kYXlzIGJ1dHRvbi5hdHRlbmRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmJiMWQgIWltcG9ydGFudDtcbn1cblxuZGl2LmRheXMgYnV0dG9uLmF0dGVuZGVkIHAge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuXG5kaXYuZm9ybS1ncm91cCBsYWJlbHtcbiAgY29sb3I6ICNkYWRhZGE7XG59XG5cbi5wdWxsLXJpZ3Roe1xuICBmbG9hdDogcmlnaHQ7XG59IiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL2NvbXBvbmVudHMvbWVudS9tZW51Lmlvcy52YXJzXCI7XG5AaW1wb3J0IFwiLi4vY29tcG9uZW50cy9tZW51L21lbnUubWQudmFyc1wiO1xuXG4vLyBJb25pYyBGb250IEZhbWlseVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaHRtbC5pb3Mge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuaHRtbC5tZCB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5ib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIFRPRE86IEJsb2NrIHNjcm9sbGluZyBpbiBpb24tY29udGVudCwgYnJlYWtzIGluc2lkZSBpb24tbW9kYWxcbi8vIGJvZHkuYmFja2Ryb3Atbm8tc2Nyb2xsIC5pb24tcGFnZSA+IGlvbi1jb250ZW50IHtcbi8vICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vLyBNb2RhbCAtIENhcmQgU3R5bGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgbmVlZHMgYWRkaXRpb25hbCBwYWRkaW5nIG9uIHRoZVxuICogdG9wIG9mIHRoZSBoZWFkZXIuIFdlIGFjY29tcGxpc2ggdGhpcyBieSB0YXJnZXRpbmdcbiAqIHRoZSBmaXJzdCB0b29sYmFyIGluIHRoZSBoZWFkZXIuXG4gKiBGb290ZXIgYWxzbyBuZWVkcyB0aGlzLiBXZSBkbyBub3QgYWRqdXN0IHRoZSBib3R0b21cbiAqIHBhZGRpbmcgdGhvdWdoIGJlY2F1c2Ugb2YgdGhlIHNhZmUgYXJlYS5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLXNoZWV0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbCBpb24tZm9vdGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4vKipcbiogQ2FyZCBzdHlsZSBtb2RhbCBuZWVkcyBhZGRpdGlvbmFsIHBhZGRpbmcgb24gdGhlXG4qIGJvdHRvbSBvZiB0aGUgaGVhZGVyLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnkgdGFyZ2V0aW5nXG4qIHRoZSBsYXN0IHRvb2xiYXIgaW4gdGhlIGhlYWRlci5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1zaGVldCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi8qKlxuKiBBZGQgcGFkZGluZyBvbiB0aGUgbGVmdCBhbmQgcmlnaHRcbiogb2YgdG9vbGJhcnMgd2hpbGUgYWNjb3VudGluZyBmb3Jcbiogc2FmZSBhcmVhIHZhbHVlcyB3aGVuIGluIGxhbmRzY2FwZS5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgOHB4KTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyA4cHgpO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgb24gaVBhZE9TXG4gKiBzaG91bGQgb25seSBoYXZlIGJhY2tkcm9wIG9uIGZpcnN0IGluc3RhbmNlLlxuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBodG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMTg7XG4gIH1cbn1cblxuLyoqXG4gKiBTdWJzZXF1ZW50IG1vZGFscyBzaG91bGQgbm90IGhhdmUgYSBiYWNrZHJvcC9ib3ggc2hhZG93XG4gKiBhcyBpdCB3aWxsIGNhdXNlIHRoZSBzY3JlZW4gdG8gYXBwZWFyIHRvIGdldCBwcm9ncmVzc2l2ZWx5XG4gKiBkYXJrZXIuIFdpdGggSW9uaWMgNiwgZGVjbGFyYXRpdmUgbW9kYWxzIG1hZGUgaXRcbiAqIHBvc3NpYmxlIHRvIGhhdmUgbXVsdGlwbGUgbm9uLXByZXNlbnRlZCBtb2RhbHMgaW4gdGhlIERPTSxcbiAqIHNvIHdlIGNvdWxkIG5vIGxvbmdlciByZWx5IG9uIGlvbi1tb2RhbDpmaXJzdC1vZi10eXBlLlxuICogSGVyZSB3ZSBkaXNhYmxlIHRoZSBvcGFjaXR5L2JveC1zaGFkb3cgZm9yIGV2ZXJ5IG1vZGFsXG4gKiB0aGF0IGNvbWVzIGFmdGVyIHRoZSBmaXJzdCBwcmVzZW50ZWQgbW9kYWwuXG4gKlxuICogTm90ZTogaW9uLW1vZGFsOm5vdCgub3ZlcmxheS1oaWRkZW4pOmZpcnN0LW9mLXR5cGVcbiAqIGRvZXMgbm90IG1hdGNoIHRoZSBmaXJzdCBtb2RhbCB0byBub3QgaGF2ZVxuICogdGhlIC5vdmVybGF5LWhpZGRlbiBjbGFzcywgaXQgd2lsbCBtYXRjaCB0aGVcbiAqIGZpcnN0IG1vZGFsIGluIGdlbmVyYWwgb25seSBpZiBpdCBkb2VzIG5vdFxuICogaGF2ZSB0aGUgLm92ZXJsYXktaGlkZGVuIGNsYXNzLlxuICogVGhlIDpudGgtY2hpbGQoKSBwc2V1ZG8tY2xhc3MgaGFzIHN1cHBvcnRcbiAqIGZvciBzZWxlY3RvcnMgd2hpY2ggd291bGQgaGVscCB1cyBoZXJlLiBBdCB0aGVcbiAqIHRpbWUgb2Ygd3JpdGluZyBpdCBkb2VzIG5vdCBoYXZlIGdyZWF0IGNyb3NzIGJyb3dzZXJcbiAqIHN1cHBvcnQuXG4gKlxuICogTm90ZSAyOiBUaGlzIHNob3VsZCBvbmx5IGFwcGx5IHRvIG5vbi1jYXJkIGFuZFxuICogbm9uLXNoZWV0IG1vZGFscy4gQ2FyZCBhbmQgc2hlZXQgbW9kYWxzIGhhdmUgdGhlaXJcbiAqIG93biBjcml0ZXJpYSBmb3IgZGlzcGxheWluZyBiYWNrZHJvcHMvYm94IHNoYWRvd3MuXG4gKi9cbmlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0Om5vdCgub3ZlcmxheS1oaWRkZW4pIH4gaW9uLW1vZGFsLm1vZGFsLWRlZmF1bHQge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyoqXG4gKiBUaGlzIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBXZWJLaXQgd2hlcmUgdGhlXG4gKiBjb250ZW50IHdpbGwgb3ZlcmZsb3cgb3V0c2lkZSBvZiB0aGUgYm90dG9tIGJvcmRlclxuICogcmFkaXVzIHdoZW4gcmUtcGFpbnRpbmcuIEFzIGxvbmcgYXMgYSBzaW5nbGVcbiAqIGJvcmRlciByYWRpdXMgdmFsdWUgaXMgc2V0IG9uIC5pb24tcGFnZSwgdGhpc1xuICogaXNzdWUgZG9lcyBub3QgaGFwcGVuLiBXZSBzZXQgdGhlIHRvcCBsZWZ0IHJhZGl1c1xuICogaGVyZSBiZWNhdXNlIHRoZSB0b3AgbGVmdCBjb3JuZXIgd2lsbCBhbHdheXMgaGF2ZSBhXG4gKiByYWRpdXMgbm8gbWF0dGVyIHRoZSBwbGF0Zm9ybS5cbiAqIFRoaXMgYmVoYXZpb3Igb25seSBhcHBsaWVzIHRvIGNhcmQgbW9kYWxzLlxuICovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCAuaW9uLXBhZ2Uge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLy8gSW9uaWMgQ29sb3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR2VuZXJhdGVzIHRoZSBjb2xvciBjbGFzc2VzIGFuZCB2YXJpYWJsZXMgYmFzZWQgb24gdGhlXG4vLyBjb2xvcnMgbWFwXG5cbkBtaXhpbiBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSkge1xuICAkdmFsdWU6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xuXG4gICRiYXNlOiBtYXAtZ2V0KCR2YWx1ZSwgYmFzZSk7XG4gICRjb250cmFzdDogbWFwLWdldCgkdmFsdWUsIGNvbnRyYXN0KTtcbiAgJHNoYWRlOiBtYXAtZ2V0KCR2YWx1ZSwgc2hhZGUpO1xuICAkdGludDogbWFwLWdldCgkdmFsdWUsIHRpbnQpO1xuXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSwgI3skYmFzZX0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiLCAje2NvbG9yLXRvLXJnYi1saXN0KCRiYXNlKX0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QsICN7JGNvbnRyYXN0fSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiLCAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlLCAjeyRzaGFkZX0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50LCAjeyR0aW50fSkgIWltcG9ydGFudDtcbn1cblxuQGVhY2ggJGNvbG9yLW5hbWUsICR2YWx1ZSBpbiAkY29sb3JzIHtcbiAgLmlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSB7XG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUpO1xuICB9XG59XG5cblxuLy8gUGFnZSBDb250YWluZXIgU3RydWN0dXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLXBhZ2Uge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCAwLCAwLCAwKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAkei1pbmRleC1wYWdlLWNvbnRhaW5lcjtcbn1cblxuLnNwbGl0LXBhbmUtdmlzaWJsZSA+IC5pb24tcGFnZS5zcGxpdC1wYW5lLW1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1yb3V0ZSxcbmlvbi1yb3V0ZS1yZWRpcmVjdCxcbmlvbi1yb3V0ZXIsXG5pb24tc2VsZWN0LW9wdGlvbixcbmlvbi1uYXYtY29udHJvbGxlcixcbmlvbi1tZW51LWNvbnRyb2xsZXIsXG5pb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXIsXG5pb24tYWxlcnQtY29udHJvbGxlcixcbmlvbi1sb2FkaW5nLWNvbnRyb2xsZXIsXG5pb24tbW9kYWwtY29udHJvbGxlcixcbmlvbi1waWNrZXItY29udHJvbGxlcixcbmlvbi1wb3BvdmVyLWNvbnRyb2xsZXIsXG5pb24tdG9hc3QtY29udHJvbGxlcixcbi5pb24tcGFnZS1oaWRkZW4sXG5baGlkZGVuXSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXBhZ2UtaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNhbi1nby1iYWNrID4gaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vLyBJb25pYyBTYWZlIE1hcmdpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmh0bWwucGx0LWlvcy5wbHQtaHlicmlkLCBodG1sLnBsdC1pb3MucGx0LXB3YSB7XG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZyk7XG4gIH1cbn1cblxuLy8gVE9ETzogcmVtb3ZlIG9uY2UgU2FmYXJpIDExLjIgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZFxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuXG5cbi8vIEdsb2JhbCBDYXJkIFN0eWxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW9uLWNhcmQuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvcixcbmlvbi1jYXJkLWhlYWRlci5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cblxuLy8gTWVudSBTdHlsZXNcbi8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgbG9uZyB0ZXJtIHNvbHV0aW9uIGZvciB0aGlzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4ubWVudS1jb250ZW50IHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZTNkKDAsIDAsIDApKTtcbn1cblxuLm1lbnUtY29udGVudC1vcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblxuICAvLyB0aGUgY29udGFpbmluZyBlbGVtZW50IGl0c2VsZiBzaG91bGQgYmUgY2xpY2thYmxlIGJ1dFxuICAvLyBldmVyeXRoaW5nIGluc2lkZSBvZiBpdCBzaG91bGQgbm90IGNsaWNrYWJsZSB3aGVuIG1lbnUgaXMgb3BlblxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbDtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbC1ydGw7XG59XG5cbi5pb3MgLm1lbnUtY29udGVudC1wdXNoIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtaW9zLWJveC1zaGFkb3ctcHVzaDtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtbWQtYm94LXNoYWRvdztcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XG4gIGJveC1zaGFkb3c6ICRtZW51LW1kLWJveC1zaGFkb3c7XG59XG5cbi8vIEFjY29yZGlvbiBTdHlsZXNcbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbn1cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuaW9uLWFjY29yZGlvbi1ncm91cCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tYW5pbWF0ZWQgPiBbc2xvdD1cImhlYWRlclwiXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIHRyYW5zaXRpb246IDMwMG1zIHRyYW5zZm9ybSBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICBpb24tYWNjb3JkaW9uIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8qKlxuICogVGhlID4gW3Nsb3Q9XCJoZWFkZXJcIl0gc2VsZWN0b3IgZW5zdXJlcyB0aGF0IHdlIGRvXG4gKiBub3QgbW9kaWZ5IHRvZ2dsZSBpY29ucyBmb3IgYW55IG5lc3RlZCBhY2NvcmRpb25zLiBUaGUgc3RhdGVcbiAqIG9mIG9uZSBhY2NvcmRpb24gc2hvdWxkIG5vdCBhZmZlY3QgYW55IGFjY29yZGlvbnMgaW5zaWRlXG4gKiBvZiBhIG5lc3RlZCBhY2NvcmRpb24gZ3JvdXAuXG4gKi9cbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZyA+IFtzbG90PVwiaGVhZGVyXCJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uLFxuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQgPiBbc2xvdD1cImhlYWRlclwiXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLXByZXZpb3VzIGlvbi1pdGVtW3Nsb3Q9XCJoZWFkZXJcIl0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmc6Zmlyc3Qtb2YtdHlwZSxcbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4vLyBTYWZhcmkvaU9TIDE1IGNoYW5nZXMgdGhlIGFwcGVhcmFuY2Ugb2YgaW5wdXRbdHlwZT1cImRhdGVcIl0uXG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZnJvbSBJb25pYyA1L1NhZmFyaSAxNCBkZXNpZ25zLFxuLy8gd2Ugb3ZlcnJpZGUgdGhlIGFwcGVhcmFuY2Ugb25seSB3aGVuIHVzaW5nIHdpdGhpbiBhbiBpb24taW5wdXQuXG5pb24taW5wdXQgaW5wdXQ6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuIiwiaHRtbC5pb3Mge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLm1kIHtcbiAgLS1pb24tZGVmYXVsdC1mb250OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICAtLWlvbi1mb250LWZhbWlseTogdmFyKC0taW9uLWRlZmF1bHQtZm9udCk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmJvZHkuYmFja2Ryb3Atbm8tc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyoqXG4gKiBDYXJkIHN0eWxlIG1vZGFsIG5lZWRzIGFkZGl0aW9uYWwgcGFkZGluZyBvbiB0aGVcbiAqIHRvcCBvZiB0aGUgaGVhZGVyLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnkgdGFyZ2V0aW5nXG4gKiB0aGUgZmlyc3QgdG9vbGJhciBpbiB0aGUgaGVhZGVyLlxuICogRm9vdGVyIGFsc28gbmVlZHMgdGhpcy4gV2UgZG8gbm90IGFkanVzdCB0aGUgYm90dG9tXG4gKiBwYWRkaW5nIHRob3VnaCBiZWNhdXNlIG9mIHRoZSBzYWZlIGFyZWEuXG4gKi9cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1zaGVldCBpb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUsXG5odG1sLmlvcyBpb24tbW9kYWwgaW9uLWZvb3RlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLyoqXG4qIENhcmQgc3R5bGUgbW9kYWwgbmVlZHMgYWRkaXRpb25hbCBwYWRkaW5nIG9uIHRoZVxuKiBib3R0b20gb2YgdGhlIGhlYWRlci4gV2UgYWNjb21wbGlzaCB0aGlzIGJ5IHRhcmdldGluZ1xuKiB0aGUgbGFzdCB0b29sYmFyIGluIHRoZSBoZWFkZXIuXG4qL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUsXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtc2hlZXQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuXG4vKipcbiogQWRkIHBhZGRpbmcgb24gdGhlIGxlZnQgYW5kIHJpZ2h0XG4qIG9mIHRvb2xiYXJzIHdoaWxlIGFjY291bnRpbmcgZm9yXG4qIHNhZmUgYXJlYSB2YWx1ZXMgd2hlbiBpbiBsYW5kc2NhcGUuXG4qL1xuaHRtbC5pb3MgaW9uLW1vZGFsIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArIDhweCk7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgOHB4KTtcbn1cblxuLyoqXG4gKiBDYXJkIHN0eWxlIG1vZGFsIG9uIGlQYWRPU1xuICogc2hvdWxkIG9ubHkgaGF2ZSBiYWNrZHJvcCBvbiBmaXJzdCBpbnN0YW5jZS5cbiAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjE4O1xuICB9XG59XG4vKipcbiAqIFN1YnNlcXVlbnQgbW9kYWxzIHNob3VsZCBub3QgaGF2ZSBhIGJhY2tkcm9wL2JveCBzaGFkb3dcbiAqIGFzIGl0IHdpbGwgY2F1c2UgdGhlIHNjcmVlbiB0byBhcHBlYXIgdG8gZ2V0IHByb2dyZXNzaXZlbHlcbiAqIGRhcmtlci4gV2l0aCBJb25pYyA2LCBkZWNsYXJhdGl2ZSBtb2RhbHMgbWFkZSBpdFxuICogcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBub24tcHJlc2VudGVkIG1vZGFscyBpbiB0aGUgRE9NLFxuICogc28gd2UgY291bGQgbm8gbG9uZ2VyIHJlbHkgb24gaW9uLW1vZGFsOmZpcnN0LW9mLXR5cGUuXG4gKiBIZXJlIHdlIGRpc2FibGUgdGhlIG9wYWNpdHkvYm94LXNoYWRvdyBmb3IgZXZlcnkgbW9kYWxcbiAqIHRoYXQgY29tZXMgYWZ0ZXIgdGhlIGZpcnN0IHByZXNlbnRlZCBtb2RhbC5cbiAqXG4gKiBOb3RlOiBpb24tbW9kYWw6bm90KC5vdmVybGF5LWhpZGRlbik6Zmlyc3Qtb2YtdHlwZVxuICogZG9lcyBub3QgbWF0Y2ggdGhlIGZpcnN0IG1vZGFsIHRvIG5vdCBoYXZlXG4gKiB0aGUgLm92ZXJsYXktaGlkZGVuIGNsYXNzLCBpdCB3aWxsIG1hdGNoIHRoZVxuICogZmlyc3QgbW9kYWwgaW4gZ2VuZXJhbCBvbmx5IGlmIGl0IGRvZXMgbm90XG4gKiBoYXZlIHRoZSAub3ZlcmxheS1oaWRkZW4gY2xhc3MuXG4gKiBUaGUgOm50aC1jaGlsZCgpIHBzZXVkby1jbGFzcyBoYXMgc3VwcG9ydFxuICogZm9yIHNlbGVjdG9ycyB3aGljaCB3b3VsZCBoZWxwIHVzIGhlcmUuIEF0IHRoZVxuICogdGltZSBvZiB3cml0aW5nIGl0IGRvZXMgbm90IGhhdmUgZ3JlYXQgY3Jvc3MgYnJvd3NlclxuICogc3VwcG9ydC5cbiAqXG4gKiBOb3RlIDI6IFRoaXMgc2hvdWxkIG9ubHkgYXBwbHkgdG8gbm9uLWNhcmQgYW5kXG4gKiBub24tc2hlZXQgbW9kYWxzLiBDYXJkIGFuZCBzaGVldCBtb2RhbHMgaGF2ZSB0aGVpclxuICogb3duIGNyaXRlcmlhIGZvciBkaXNwbGF5aW5nIGJhY2tkcm9wcy9ib3ggc2hhZG93cy5cbiAqL1xuaW9uLW1vZGFsLm1vZGFsLWRlZmF1bHQ6bm90KC5vdmVybGF5LWhpZGRlbikgfiBpb24tbW9kYWwubW9kYWwtZGVmYXVsdCB7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4vKipcbiAqIFRoaXMgd29ya3MgYXJvdW5kIGEgYnVnIGluIFdlYktpdCB3aGVyZSB0aGVcbiAqIGNvbnRlbnQgd2lsbCBvdmVyZmxvdyBvdXRzaWRlIG9mIHRoZSBib3R0b20gYm9yZGVyXG4gKiByYWRpdXMgd2hlbiByZS1wYWludGluZy4gQXMgbG9uZyBhcyBhIHNpbmdsZVxuICogYm9yZGVyIHJhZGl1cyB2YWx1ZSBpcyBzZXQgb24gLmlvbi1wYWdlLCB0aGlzXG4gKiBpc3N1ZSBkb2VzIG5vdCBoYXBwZW4uIFdlIHNldCB0aGUgdG9wIGxlZnQgcmFkaXVzXG4gKiBoZXJlIGJlY2F1c2UgdGhlIHRvcCBsZWZ0IGNvcm5lciB3aWxsIGFsd2F5cyBoYXZlIGFcbiAqIHJhZGl1cyBubyBtYXR0ZXIgdGhlIHBsYXRmb3JtLlxuICogVGhpcyBiZWhhdmlvciBvbmx5IGFwcGxpZXMgdG8gY2FyZCBtb2RhbHMuXG4gKi9cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIC5pb24tcGFnZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uaW9uLWNvbG9yLXByaW1hcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itc2Vjb25kYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgIzNkYzJmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiLCA2MSwgMTk0LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSwgIzM2YWJlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjNTBjOGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXRlcnRpYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LCAjNTI2MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYiwgODIsIDk2LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSwgIzQ4NTRlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQsICM2MzcwZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itc3VjY2VzcyB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMmRkMzZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiLCA0NSwgMjExLCAxMTEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSwgIzI4YmE2MikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzQyZDc3ZCkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci13YXJuaW5nIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcsICNmZmM0MDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1yZ2IsIDI1NSwgMTk2LCA5KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGUsICNlMGFjMDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQsICNmZmNhMjIpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItZGFuZ2VyIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2ViNDQ1YSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiLCAyMzUsIDY4LCA5MCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlLCAjY2YzYzRmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQsICNlZDU3NmIpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbGlnaHQge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiLCAyNDQsIDI0NSwgMjQ4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLW1lZGl1bSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM5Mjk0OWMpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiwgMTQ2LCAxNDgsIDE1NikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlLCAjODA4Mjg5KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICM5ZDlmYTYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItZGFyayB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstcmdiLCAzNCwgMzYsIDQwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUsICMxZTIwMjMpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQsICMzODNhM2UpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZSB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAwO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlID4gLmlvbi1wYWdlLnNwbGl0LXBhbmUtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXJvdXRlLFxuaW9uLXJvdXRlLXJlZGlyZWN0LFxuaW9uLXJvdXRlcixcbmlvbi1zZWxlY3Qtb3B0aW9uLFxuaW9uLW5hdi1jb250cm9sbGVyLFxuaW9uLW1lbnUtY29udHJvbGxlcixcbmlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixcbmlvbi1hbGVydC1jb250cm9sbGVyLFxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcbmlvbi1tb2RhbC1jb250cm9sbGVyLFxuaW9uLXBpY2tlci1jb250cm9sbGVyLFxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcbmlvbi10b2FzdC1jb250cm9sbGVyLFxuLmlvbi1wYWdlLWhpZGRlbixcbltoaWRkZW5dIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZS1pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FuLWdvLWJhY2sgPiBpb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1pb3MucGx0LWh5YnJpZCwgaHRtbC5wbHQtaW9zLnBsdC1wd2Ege1xuICAtLWlvbi1zdGF0dXNiYXItcGFkZGluZzogMjBweDtcbn1cblxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogMjBweCkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGVudihzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuaW9uLWNhcmQuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvcixcbmlvbi1jYXJkLWhlYWRlci5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7XG59XG5cbi5tZW51LWNvbnRlbnQtb3BlbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogLThweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuW2Rpcj1ydGxdLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IDhweCAwIDQycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5tZCAubWVudS1jb250ZW50LXB1c2gge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0ID4gaW9uLWFjY29yZGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQgPiBpb24tYWNjb3JkaW9uOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tYW5pbWF0ZWQgPiBbc2xvdD1oZWFkZXJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuNSwgMSk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGlvbi1hY2NvcmRpb24gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqXG4gKiBUaGUgPiBbc2xvdD1cImhlYWRlclwiXSBzZWxlY3RvciBlbnN1cmVzIHRoYXQgd2UgZG9cbiAqIG5vdCBtb2RpZnkgdG9nZ2xlIGljb25zIGZvciBhbnkgbmVzdGVkIGFjY29yZGlvbnMuIFRoZSBzdGF0ZVxuICogb2Ygb25lIGFjY29yZGlvbiBzaG91bGQgbm90IGFmZmVjdCBhbnkgYWNjb3JkaW9ucyBpbnNpZGVcbiAqIG9mIGEgbmVzdGVkIGFjY29yZGlvbiBncm91cC5cbiAqL1xuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nID4gW3Nsb3Q9aGVhZGVyXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbixcbmlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGVkID4gW3Nsb3Q9aGVhZGVyXSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLXByZXZpb3VzIGlvbi1pdGVtW3Nsb3Q9aGVhZGVyXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZzpmaXJzdC1vZi10eXBlLFxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmlvbi1pbnB1dCBpbnB1dDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4vaW9uaWMuZGVwcmVjYXRpb25cIjtcblxuQG1peGluIGlucHV0LWNvdmVyKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcblxuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBjb250ZW50OiBcIlwiO1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xufVxuXG5cbi8vIEJyZWFrcG9pbnQgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vL1xuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxuLy9cbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG11bHRpLWRpcigpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLy8gJHJvb3Q6ICN7Jn07XG4gIC8vIEBhdC1yb290IFtkaXJdIHtcbiAgLy8gICAjeyRyb290fSB7XG4gIC8vICAgICBAY29udGVudDtcbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgJHJvb3Q6ICN7Jn07XG5cbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gIH0gQGVsc2Uge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIEBhdC1yb290IHtcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgJiB7XG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAjeyRwcm9wfS10b3A6ICR0b3A7XG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICBsZWZ0OiAkZW5kO1xuICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gIHRvcDogJHRvcDtcbiAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcbiAgJG90aGVyLWRpcjogbnVsbDtcblxuICBAaWYgJGRpciA9PSBsdHIge1xuICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgfSBAZWxzZSB7XG4gICAgJG90aGVyLWRpcjogbHRyO1xuICB9XG5cbiAgQGluY2x1ZGUgbHRyKCkge1xuICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgfVxuICBAaW5jbHVkZSBydGwoKSB7XG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xuICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAkZXh0cmE6IG51bGw7XG5cbiAgJHg6IG51bGw7XG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcblxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XG5cbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XG5cbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcblxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9XG59XG4iLCJcbi8vIEdsb2JhbCBVdGlsaXR5IEZ1bmN0aW9uc1xuQGltcG9ydCBcIi4vaW9uaWMuZnVuY3Rpb25zLnN0cmluZ1wiO1xuXG4vLyBHbG9iYWwgQ29sb3IgRnVuY3Rpb25zXG5AaW1wb3J0IFwiLi9pb25pYy5mdW5jdGlvbnMuY29sb3JcIjtcblxuLy8gR2xvYmFsIE1peGluc1xuQGltcG9ydCBcIi4vaW9uaWMubWl4aW5zXCI7XG5cbi8vIERlZmF1bHQgVGhlbWVcbkBpbXBvcnQgXCIuL2lvbmljLnRoZW1lLmRlZmF1bHRcIjtcblxuXG4vLyBEZWZhdWx0IEdlbmVyYWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAgICAgICB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgYXBwIGRpcmVjdGlvblxuJGFwcC1kaXJlY3Rpb246IG51bGwgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBmb250IHBhdGhcbiRmb250LXBhdGg6IFwiL2Rpc3QvZm9udHNcIiAhZGVmYXVsdDtcblxuLy8gSGFpcmxpbmVzIHdpZHRoXG4kaGFpcmxpbmVzLXdpZHRoOiAuNTVweCAhZGVmYXVsdDtcblxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xuJHNjcmVlbi1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuXG4vLyBaLUluZGV4XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR3JvdXBlZCBieSBlbGVtZW50cyB3aGljaCB3b3VsZCBiZSBzaWJsaW5nc1xuXG4kei1pbmRleC1tZW51LW92ZXJsYXk6ICAgICAgICAgICAxMDAwO1xuJHotaW5kZXgtb3ZlcmxheTogICAgICAgICAgICAgICAgMTAwMTtcbiR6LWluZGV4LWNsaWNrLWJsb2NrOiAgICAgICAgICAgIDk5OTk5O1xuXG4kei1pbmRleC1maXhlZC1jb250ZW50OiAgICAgICAgICA5OTk7XG4kei1pbmRleC1zY3JvbGwtY29udGVudDogICAgICAgICAxO1xuJHotaW5kZXgtcmVmcmVzaGVyOiAgICAgICAgICAgICAgLTE7XG5cbiR6LWluZGV4LXBhZ2UtY29udGFpbmVyOiAgICAgICAgIDA7XG4kei1pbmRleC10b29sYmFyOiAgICAgICAgICAgICAgICAxMDtcbiR6LWluZGV4LXRvb2xiYXItYmFja2dyb3VuZDogICAgIC0xO1xuJHotaW5kZXgtdG9vbGJhci1idXR0b25zOiAgICAgICAgOTk7XG5cbiR6LWluZGV4LWJhY2tkcm9wOiAgICAgICAgICAgICAgIDI7XG4kei1pbmRleC1vdmVybGF5LXdyYXBwZXI6ICAgICAgICAxMDtcblxuJHotaW5kZXgtaXRlbS1vcHRpb25zOiAgICAgICAgICAgMTtcbiR6LWluZGV4LWl0ZW0taW5wdXQ6ICAgICAgICAgICAgIDI7XG4kei1pbmRleC1pdGVtLWRpdmlkZXI6ICAgICAgICAgICAxMDA7XG5cbiR6LWluZGV4LXJlb3JkZXItc2VsZWN0ZWQ6ICAgICAgIDEwMDtcbiIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZXMvaW9uaWMuZ2xvYmFscy5pb3NcIjtcblxuLy8gaU9TIE1lbnVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vLyBAcHJvcCAtIEJhY2tncm91bmQgb2YgdGhlIG1lbnVcbiRtZW51LWlvcy1iYWNrZ3JvdW5kOiAgICAgICAgICAgICRiYWNrZ3JvdW5kLWNvbG9yICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IGNvbG9yIG9mIHRoZSBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1jb2xvcjogICAgICByZ2JhKDAsIDAsIDAsIC4wOCkgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93OiAgICAgICAgICAgIC04cHggMCA0MnB4ICRtZW51LWlvcy1ib3gtc2hhZG93LWNvbG9yICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBtZW51IGluIHJ0bCBtb2RlXG4kbWVudS1pb3MtYm94LXNoYWRvdy1ydGw6ICAgICAgICA4cHggMCA0MnB4ICRtZW51LWlvcy1ib3gtc2hhZG93LWNvbG9yICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSByZXZlYWwgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctcmV2ZWFsOiAgICAgJG1lbnUtaW9zLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIHJldmVhbCBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1yZXZlYWwtcnRsOiAkbWVudS1pb3MtYm94LXNoYWRvdy1ydGwgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIHB1c2ggbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3ctcHVzaDogICAgICAgbnVsbCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgb3ZlcmxheSBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1vdmVybGF5OiAgICBudWxsICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIi4uLy4uL3RoZW1lcy9pb25pYy5nbG9iYWxzLm1kXCI7XG5cbi8vIE1hdGVyaWFsIERlc2lnbiBNZW51XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLy8gQHByb3AgLSBCYWNrZ3JvdW5kIG9mIHRoZSBtZW51XG4kbWVudS1tZC1iYWNrZ3JvdW5kOiAgICAgICAgICAgICRiYWNrZ3JvdW5kLWNvbG9yICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBtZW51XG4kbWVudS1tZC1ib3gtc2hhZG93OiAgICAgICAgICAgIDRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpICFkZWZhdWx0O1xuIiwiLy8gISBub3JtYWxpemUuY3NzIHYzLjAuMiB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3NcblxuXG4vLyBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAxLiBOb3JtYWxpemUgdmVydGljYWwgYWxpZ25tZW50IG9mIGBwcm9ncmVzc2AgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8vIDFcbn1cblxuLy8gUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cbi8vIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuXG4gIGhlaWdodDogMDtcbn1cblxuXG4vLyBUZXh0LWxldmVsIHNlbWFudGljc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi8vIEVtYmVkZGVkIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbn1cblxuLy8gQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuLy8gR3JvdXBpbmcgY29udGVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gQWRkcmVzcyBtYXJnaW4gbm90IHByZXNlbnQgaW4gSUUgOC85IGFuZCBTYWZhcmkuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuXG4gIGJvcmRlci13aWR0aDogMDtcblxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLy8gQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLy8gQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5cbi8vIEZvcm1zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxuLy8gc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxuXG4vLyAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cbi8vIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXG4vLyAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbi8vXG5cbmxhYmVsLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIGhlaWdodDogYXV0bztcblxuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbmZvcm0sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0IHtcbiAgbWFyZ2luOiAwOyAvLyAzXG5cbiAgZm9udDogaW5oZXJpdDsgLy8gMlxuICBjb2xvcjogaW5oZXJpdDsgLy8gMVxufVxuXG4vLyAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxuLy8gICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXG4vLyAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXG4vLyAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxuLy8gICAgYGlucHV0YCBhbmQgb3RoZXJzLlxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCAvLyAxXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyOyAvLyAzXG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8vIDJcbn1cblxuLy8gcmVtb3ZlIDMwMG1zIGRlbGF5XG5hLFxuYSBkaXYsXG5hIHNwYW4sXG5hIGlvbi1pY29uLFxuYSBpb24tbGFiZWwsXG5idXR0b24sXG5idXR0b24gZGl2LFxuYnV0dG9uIHNwYW4sXG5idXR0b24gaW9uLWljb24sXG5idXR0b24gaW9uLWxhYmVsLFxuLmlvbi10YXBwYWJsZSxcblt0YXBwYWJsZV0sXG5bdGFwcGFibGVdIGRpdixcblt0YXBwYWJsZV0gc3Bhbixcblt0YXBwYWJsZV0gaW9uLWljb24sXG5bdGFwcGFibGVdIGlvbi1sYWJlbCxcbmlucHV0LFxudGV4dGFyZWEge1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuYSBpb24tbGFiZWwsXG5idXR0b24gaW9uLWxhYmVsIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtdmFyaWFudDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cblt0YXBwYWJsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8vIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXG5hW2Rpc2FibGVkXSxcbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLy8gUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbn1cblxuLy8gRmlyZWZveCdzIGltcGxlbWVudGF0aW9uIGRvZXNuJ3QgcmVzcGVjdCBib3gtc2l6aW5nLCBwYWRkaW5nLCBvciB3aWR0aC5cbi8vIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXG4vLyAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgcGFkZGluZzogMDsgLy8gMlxuXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8vIDFcbn1cblxuLy8gRml4IHRoZSBjdXJzb3Igc3R5bGUgZm9yIENocm9tZSdzIGluY3JlbWVudC9kZWNyZW1lbnQgYnV0dG9ucy4gRm9yIGNlcnRhaW5cbi8vIGBmb250LXNpemVgIHZhbHVlcyBvZiB0aGUgYGlucHV0YCwgaXQgY2F1c2VzIHRoZSBjdXJzb3Igc3R5bGUgb2YgdGhlXG4vLyBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLy8gUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXG4vLyBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXG4vLyBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuXG4vLyBUYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cblxuLy8gUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7XG59XG4iLCJhdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5sYWJlbCxcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbmZvcm0sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbmEsXG5hIGRpdixcbmEgc3BhbixcbmEgaW9uLWljb24sXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbixcbmJ1dHRvbiBkaXYsXG5idXR0b24gc3BhbixcbmJ1dHRvbiBpb24taWNvbixcbmJ1dHRvbiBpb24tbGFiZWwsXG4uaW9uLXRhcHBhYmxlLFxuW3RhcHBhYmxlXSxcblt0YXBwYWJsZV0gZGl2LFxuW3RhcHBhYmxlXSBzcGFuLFxuW3RhcHBhYmxlXSBpb24taWNvbixcblt0YXBwYWJsZV0gaW9uLWxhYmVsLFxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbiBpb24tbGFiZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cblt0YXBwYWJsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFbZGlzYWJsZWRdLFxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cblxuLy8gU3RydWN0dXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWRkcyBzdHJ1Y3R1cmFsIGNzcyB0byB0aGUgbmF0aXZlIGh0bWwgZWxlbWVudHNcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG59XG5cbmh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmh0bWw6bm90KC5oeWRyYXRlZCkgYm9keSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwuaW9uLWNlIGJvZHkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHRtbC5wbHQtcHdhIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIEBpbmNsdWRlIGZvbnQtc21vb3RoaW5nKCk7XG4gIEBpbmNsdWRlIG1hcmdpbigwKTtcbiAgQGluY2x1ZGUgcGFkZGluZygwKTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcblxuICAtbXMtY29udGVudC16b29taW5nOiBub25lO1xuXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XG5cbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbn1cbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbn1cblxuaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmh0bWw6bm90KC5oeWRyYXRlZCkgYm9keSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwuaW9uLWNlIGJvZHkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHRtbC5wbHQtcHdhIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLW1zLWNvbnRlbnQtem9vbWluZzogbm9uZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnVjdHVyZS5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLy8gQHByb3AgLSBGb250IHdlaWdodCBvZiBhbGwgaGVhZGluZ3NcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgICA1MDAgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIExpbmUgaGVpZ2h0IG9mIGFsbCBoZWFkaW5nc1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgIDEuMiAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgMVxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDI2cHggIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDJcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAyNHB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCAzXG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMjJweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgNFxuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDVcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAxOHB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCA2XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMTZweCAhZGVmYXVsdDtcblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpb24tY29sb3IocHJpbWFyeSwgYmFzZSk7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIEBpbmNsdWRlIG1hcmdpbigxNnB4LCBudWxsLCAxMHB4LCBudWxsKTtcblxuICBmb250LXdlaWdodDogJGhlYWRpbmdzLWZvbnQtd2VpZ2h0O1xuXG4gIGxpbmUtaGVpZ2h0OiAkaGVhZGluZ3MtbGluZS1oZWlnaHQ7XG59XG5cbmgxIHtcbiAgQGluY2x1ZGUgbWFyZ2luKDIwcHgsIG51bGwsIG51bGwsIG51bGwpO1xuXG4gIGZvbnQtc2l6ZTogJGgxLWZvbnQtc2l6ZTtcbn1cblxuaDIge1xuICBAaW5jbHVkZSBtYXJnaW4oMThweCwgbnVsbCwgbnVsbCwgbnVsbCk7XG5cbiAgZm9udC1zaXplOiAkaDItZm9udC1zaXplO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogJGgzLWZvbnQtc2l6ZTtcbn1cblxuaDQge1xuICBmb250LXNpemU6ICRoNC1mb250LXNpemU7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAkaDUtZm9udC1zaXplO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogJGg2LWZvbnQtc2l6ZTtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDc1JTtcbn1cblxuc3ViLFxuc3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGZvbnQtc2l6ZTogNzUlO1xuXG4gIGxpbmUtaGVpZ2h0OiAwO1xuXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtLjI1ZW07XG59XG4iLCJodG1sIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbmgxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuaDIge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDc1JTtcbn1cblxuc3ViLFxuc3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dHlwb2dyYXBoeS5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLm1peGluc1wiO1xuXG4vLyBEaXNwbGF5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTW9kaWZpZXMgZGlzcGxheSBvZiBhIHBhcnRpY3VsYXIgZWxlbWVudCBiYXNlZCBvbiB0aGUgZ2l2ZW4gY2xhc3Nlc1xuXG4uaW9uLWhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vIEFkZHMgaGlkZGVuIGNsYXNzZXNcbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgaW9uLWhpZGUte2JwfS11cGAgY2xhc3NlcyBmb3IgaGlkaW5nIHRoZSBlbGVtZW50IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLWhpZGUjeyRpbmZpeH0tdXAge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYGlvbi1oaWRlLXticH0tZG93bmAgY2xhc3NlcyBmb3IgaGlkaW5nIHRoZSBlbGVtZW50IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLWhpZGUjeyRpbmZpeH0tZG93biB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIuaW9uLWhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS11cCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1oaWRlLWRvd24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLWhpZGUtc20tdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5pb24taGlkZS1zbS1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLWhpZGUtbWQtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5pb24taGlkZS1tZC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWhpZGUtbGctdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5pb24taGlkZS1sZy1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi1oaWRlLXhsLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLXhsLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kaXNwbGF5LmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cblxuLy8gRWxlbWVudCBTcGFjZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgcGFkZGluZyBhbmQgbWFyZ2luIGF0dHJpYnV0ZXMgdG8gYmUgdXNlZCBvblxuLy8gYW55IGVsZW1lbnRcblxuJHBhZGRpbmc6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiRtYXJnaW46IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuXG4vLyBQYWRkaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLW5vLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG5cbiAgQGluY2x1ZGUgcGFkZGluZygwKTtcbn1cblxuLmlvbi1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWVuZDogI3skcGFkZGluZ307XG4gIC0tcGFkZGluZy10b3A6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIC0tcGFkZGluZy10b3A6ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcsIG51bGwsIG51bGwsIG51bGwpO1xufVxuXG4uaW9uLXBhZGRpbmctc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkcGFkZGluZywgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy1lbmQge1xuICAtLXBhZGRpbmctZW5kOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwobnVsbCwgJHBhZGRpbmcpO1xufVxuXG4uaW9uLXBhZGRpbmctYm90dG9tIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZyhudWxsLCBudWxsLCAkcGFkZGluZywgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy12ZXJ0aWNhbCB7XG4gIC0tcGFkZGluZy10b3A6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nLCBudWxsLCAkcGFkZGluZywgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy1ob3Jpem9udGFsIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLWVuZDogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRwYWRkaW5nKTtcbn1cblxuXG4vLyBNYXJnaW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tbm8tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IDA7XG4gIC0tbWFyZ2luLWVuZDogMDtcbiAgLS1tYXJnaW4tdG9wOiAwO1xuICAtLW1hcmdpbi1ib3R0b206IDA7XG5cbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xufVxuXG4uaW9uLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi1lbmQ6ICN7JG1hcmdpbn07XG4gIC0tbWFyZ2luLXRvcDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tYm90dG9tOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbigkbWFyZ2luKTtcbn1cblxuLmlvbi1tYXJnaW4tdG9wIHtcbiAgLS1tYXJnaW4tdG9wOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbigkbWFyZ2luLCBudWxsLCBudWxsLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4tc3RhcnQge1xuICAtLW1hcmdpbi1zdGFydDogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkbWFyZ2luLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4tZW5kIHtcbiAgLS1tYXJnaW4tZW5kOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKG51bGwsICRtYXJnaW4pO1xufVxuXG4uaW9uLW1hcmdpbi1ib3R0b20ge1xuICAtLW1hcmdpbi1ib3R0b206ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luKG51bGwsIG51bGwsICRtYXJnaW4sIG51bGwpO1xufVxuXG4uaW9uLW1hcmdpbi12ZXJ0aWNhbCB7XG4gIC0tbWFyZ2luLXRvcDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tYm90dG9tOiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbigkbWFyZ2luLCBudWxsLCAkbWFyZ2luLCBudWxsKTtcbn1cblxuLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi1lbmQ6ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJG1hcmdpbik7XG59IiwiLmlvbi1uby1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmlvbi1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmcge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy1zdGFydCB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZy1zdGFydCB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy1lbmQge1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZy1lbmQge1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctYm90dG9tIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLXZlcnRpY2FsIHtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW5vLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAwO1xuICAtLW1hcmdpbi1lbmQ6IDA7XG4gIC0tbWFyZ2luLXRvcDogMDtcbiAgLS1tYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW9uLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLXRvcCB7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4tc3RhcnQge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLWVuZCB7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1lbmQge1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1tYXJnaW4tYm90dG9tIHtcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi12ZXJ0aWNhbCB7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLWhvcml6b250YWwge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luLWhvcml6b250YWwge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1wYWRkaW5nLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cbi8vIEZsb2F0IEVsZW1lbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyBmbG9hdCBjbGFzc2VzIGJhc2VkIG9uIHNjcmVlbiBzaXplXG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgLmlvbi1mbG9hdC17YnB9LXtzaWRlfWAgY2xhc3NlcyBmb3IgZmxvYXRpbmcgdGhlIGVsZW1lbnQgYmFzZWRcbiAgICAvLyBvbiB0aGUgYnJlYWtwb2ludCBhbmQgc2lkZVxuICAgIC5pb24tZmxvYXQjeyRpbmZpeH0tbGVmdCB7XG4gICAgICBAaW5jbHVkZSBmbG9hdChsZWZ0LCAhaW1wb3J0YW50KTtcbiAgICB9XG5cbiAgICAuaW9uLWZsb2F0I3skaW5maXh9LXJpZ2h0IHtcbiAgICAgIEBpbmNsdWRlIGZsb2F0KHJpZ2h0LCAhaW1wb3J0YW50KTtcbiAgICB9XG5cbiAgICAuaW9uLWZsb2F0I3skaW5maXh9LXN0YXJ0IHtcbiAgICAgIEBpbmNsdWRlIGZsb2F0KHN0YXJ0LCAhaW1wb3J0YW50KTtcbiAgICB9XG5cbiAgICAuaW9uLWZsb2F0I3skaW5maXh9LWVuZCB7XG4gICAgICBAaW5jbHVkZSBmbG9hdChlbmQsICFpbXBvcnRhbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiLmlvbi1mbG9hdC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWZsb2F0LXN0YXJ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAuaW9uLWZsb2F0LXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zdGFydCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWZsb2F0LWVuZCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuW2Rpcj1ydGxdIC5pb24tZmxvYXQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1lbmQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi1mbG9hdC1zbS1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXNtLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXNtLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLWZsb2F0LW1kLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbWQtc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LW1kLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbWQtZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1tZC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LW1kLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tZmxvYXQtbGctbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1sZy1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1sZy1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tZmxvYXQteGwtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC14bC1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC14bC1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZsb2F0LWVsZW1lbnRzLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cbi8vIFRleHQgQWxpZ25tZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyB0ZXh0IGFsaWdubWVudCBhdHRyaWJ1dGVzIGJhc2VkIG9uIHNjcmVlbiBzaXplXG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJGluZml4OiBicmVha3BvaW50LWluZml4KCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKTtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgLmlvbi10ZXh0LXticH1gIGNsYXNzZXMgZm9yIGFsaWduaW5nIHRoZSB0ZXh0IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1qdXN0aWZ5IHtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tc3RhcnQge1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tZW5kIHtcbiAgICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1sZWZ0IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tbm93cmFwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0td3JhcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIuaW9uLXRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtc3RhcnQge1xuICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tdGV4dC1zbS1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLXRleHQtbWQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi10ZXh0LWxnLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLXRleHQteGwtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtYWxpZ25tZW50LmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cbi8vIFRleHQgVHJhbnNmb3JtYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIHRleHQgdHJhbnNmb3JtIGF0dHJpYnV0ZXMgYmFzZWQgb24gc2NyZWVuIHNpemVcblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGAuaW9uLXRleHQte2JwfWAgY2xhc3NlcyBmb3IgdHJhbnNmb3JtaW5nIHRoZSB0ZXh0IGJhc2VkXG4gICAgLy8gb24gdGhlIGJyZWFrcG9pbnRcbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tdXBwZXJjYXNlIHtcbiAgICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tbG93ZXJjYXNlIHtcbiAgICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaW9uLXRleHQjeyRpbmZpeH0tY2FwaXRhbGl6ZSB7XG4gICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiLmlvbi10ZXh0LXVwcGVyY2FzZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbG93ZXJjYXNlIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1jYXBpdGFsaXplIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi10ZXh0LXNtLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLXRleHQtbWQtdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tdGV4dC1sZy11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tdGV4dC14bC11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtdHJhbnNmb3JtYXRpb24uY3NzLm1hcCAqL1xuIiwiLy8gRmxleCBVdGlsaXRpZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIGZsZXggY2xhc3NlcyB0byBhbGlnbiBmbGV4IGNvbnRhaW5lcnNcbi8vIGFuZCBpdGVtc1xuXG4vLyBBbGlnbiBTZWxmXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLWFsaWduLXNlbGYtc3RhcnQge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1lbmQge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1zdHJldGNoIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYmFzZWxpbmUge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtYXV0byB7XG4gIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuXG4vLyBGbGV4IFdyYXBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24td3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLW5vd3JhcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24td3JhcC1yZXZlcnNlIHtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbn1cblxuXG4vLyBKdXN0aWZ5IENvbnRlbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xufVxuXG5cbi8vIEFsaWduIEl0ZW1zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cbiIsIi5pb24tYWxpZ24tc2VsZi1zdGFydCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLXN0cmV0Y2gge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1hdXRvIHtcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi1ub3dyYXAge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxleC11dGlscy5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vZ2xvYmFsLnNjc3NcIjtcblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */";

/***/ }),

/***/ 46155:
/*!************************************************************************!*\
  !*** ./src/app/components/user/member-edit/member-edit.component.scss ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1iZXItZWRpdC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 37500:
/*!************************************************************************!*\
  !*** ./src/app/components/user/member-form/member-form.component.scss ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n/**\n * Card style modal needs additional padding on the\n * top of the header. We accomplish this by targeting\n * the first toolbar in the header.\n * Footer also needs this. We do not adjust the bottom\n * padding though because of the safe area.\n */\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:first-of-type,\nhtml.ios ion-modal ion-footer ion-toolbar:first-of-type {\n  padding-top: 6px;\n}\n/**\n* Card style modal needs additional padding on the\n* bottom of the header. We accomplish this by targeting\n* the last toolbar in the header.\n*/\nhtml.ios ion-modal.modal-card ion-header ion-toolbar:last-of-type,\nhtml.ios ion-modal.modal-sheet ion-header ion-toolbar:last-of-type {\n  padding-bottom: 6px;\n}\n/**\n* Add padding on the left and right\n* of toolbars while accounting for\n* safe area values when in landscape.\n*/\nhtml.ios ion-modal ion-toolbar {\n  padding-right: calc(var(--ion-safe-area-right) + 8px);\n  padding-left: calc(var(--ion-safe-area-left) + 8px);\n}\n/**\n * Card style modal on iPadOS\n * should only have backdrop on first instance.\n */\n@media screen and (min-width: 768px) {\n  html.ios ion-modal.modal-card:first-of-type {\n    --backdrop-opacity: 0.18;\n  }\n}\n/**\n * Subsequent modals should not have a backdrop/box shadow\n * as it will cause the screen to appear to get progressively\n * darker. With Ionic 6, declarative modals made it\n * possible to have multiple non-presented modals in the DOM,\n * so we could no longer rely on ion-modal:first-of-type.\n * Here we disable the opacity/box-shadow for every modal\n * that comes after the first presented modal.\n *\n * Note: ion-modal:not(.overlay-hidden):first-of-type\n * does not match the first modal to not have\n * the .overlay-hidden class, it will match the\n * first modal in general only if it does not\n * have the .overlay-hidden class.\n * The :nth-child() pseudo-class has support\n * for selectors which would help us here. At the\n * time of writing it does not have great cross browser\n * support.\n *\n * Note 2: This should only apply to non-card and\n * non-sheet modals. Card and sheet modals have their\n * own criteria for displaying backdrops/box shadows.\n */\nion-modal.modal-default:not(.overlay-hidden) ~ ion-modal.modal-default {\n  --backdrop-opacity: 0;\n  --box-shadow: none;\n}\n/**\n * This works around a bug in WebKit where the\n * content will overflow outside of the bottom border\n * radius when re-painting. As long as a single\n * border radius value is set on .ion-page, this\n * issue does not happen. We set the top left radius\n * here because the top left corner will always have a\n * radius no matter the platform.\n * This behavior only applies to card modals.\n */\nhtml.ios ion-modal.modal-card .ion-page {\n  border-top-left-radius: var(--border-radius);\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:first-of-type {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\nion-accordion-group.accordion-group-expand-inset > ion-accordion:last-of-type {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\nion-accordion-group > ion-accordion:last-of-type ion-item {\n  --border-width: 0px;\n}\nion-accordion.accordion-animated > [slot=header] .ion-accordion-toggle-icon {\n  transition: 300ms transform cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n@media (prefers-reduced-motion: reduce) {\n  ion-accordion .ion-accordion-toggle-icon {\n    /* stylelint-disable declaration-no-important */\n    transition: none !important;\n  }\n}\n/**\n * The > [slot=\"header\"] selector ensures that we do\n * not modify toggle icons for any nested accordions. The state\n * of one accordion should not affect any accordions inside\n * of a nested accordion group.\n */\nion-accordion.accordion-expanding > [slot=header] .ion-accordion-toggle-icon,\nion-accordion.accordion-expanded > [slot=header] .ion-accordion-toggle-icon {\n  transform: rotate(180deg);\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-previous ion-item[slot=header] {\n  --border-width: 0px;\n  --inner-border-width: 0px;\n}\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanding:first-of-type,\nion-accordion-group.accordion-group-expand-inset.md > ion-accordion.accordion-expanded:first-of-type {\n  margin-top: 0;\n}\nion-input input::-webkit-date-and-time-value {\n  text-align: start;\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-feature-settings: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.ion-ce body {\n  display: block;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    padding-inline-start: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports (margin-inline-start: 0) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    margin-inline-start: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n.ion-align-items-center {\n  align-items: center !important;\n}\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\n.ion-page {\n  display: block !important;\n  background-color: #2e2d2d;\n  overflow-y: scroll;\n}\n.pull-right {\n  float: right;\n}\n.form-control {\n  margin-bottom: 7px;\n}\n:root {\n  /* These examples use the same color: sienna. */\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 160, 82, 45;\n  /* These examples use the same color: lightsteelblue. */\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 176, 196, 222;\n}\n.wrapper {\n  display: inline-block;\n  margin-top: 20px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 15px;\n  padding-top: 0px;\n  width: 100%;\n}\n.btn-action-list {\n  width: 100%;\n}\n.div-btn-create {\n  padding: 0px;\n  margin-top: 15px !important;\n}\n.custom-alert .alert-wrapper {\n  background: #e5e5e5;\n  background-color: white;\n}\n.custom-alert .alert-head {\n  background-color: #e4e4e4;\n  color: white;\n}\n.custom-alert .alert-head h2 {\n  color: #868686;\n}\n.custom-alert .alert-wrapper .alert-message {\n  padding-top: 10px !important;\n}\n.custom-alert .alert-button {\n  color: #000;\n}\n.custom-alert {\n  --backdrop-opacity: 0.2;\n  --background: rgb(212, 62, 62);\n}\n.custom-alert-button {\n  color: white;\n}\nion-spinner {\n  color: #7fff00;\n  width: 100%;\n  margin: 10px;\n}\ndiv.monthview-container table {\n  background-color: #697a70 !important;\n  color: white;\n}\ndiv.days button.attended {\n  background-color: #06bb1d !important;\n}\ndiv.days button.attended p {\n  color: white !important;\n}\ndiv.form-group label {\n  color: #dadada;\n}\n.pull-rigth {\n  float: right;\n}\n.box-content {\n  background-color: #2e2d2d;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dsb2JhbC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvY29yZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMuZ2xvYmFscy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5pb3MudmFycy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5tZC52YXJzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9ub3JtYWxpemUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3N0cnVjdHVyZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdHlwb2dyYXBoeS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Rpc3BsYXkuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9wYWRkaW5nLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxvYXQtZWxlbWVudHMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC1hbGlnbm1lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2ZsZXgtdXRpbHMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiLCJtZW1iZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0VBQUE7QUFXQSw0REFBQTtBQ0hBO0VBQ0UsNkZBQUE7QUNQRjtBRFNBO0VBQ0UsMERBQUE7QUNORjtBRFNBO0VBQ0UsMENBQUE7QUNORjtBRFNBO0VBQ0UsdUNBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7QUNORjtBRGdCQTs7Ozs7O0VBQUE7QUFPQTs7O0VBR0UsZ0JBQUE7QUNiRjtBRGdCQTs7OztDQUFBO0FBS0E7O0VBRUUsbUJBQUE7QUNiRjtBRGdCQTs7OztDQUFBO0FBS0E7RUFDRSxxREFBQTtFQUNBLG1EQUFBO0FDYkY7QURnQkE7OztFQUFBO0FBSUE7RUFDRTtJQUNFLHdCQUFBO0VDYkY7QUFDRjtBRGdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBdUJBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ2RGO0FEaUJBOzs7Ozs7Ozs7RUFBQTtBQVVBO0VBQ0UsNENBQUE7QUNkRjtBRHVDRTtFQVRBLDhEQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQzFCRjtBRDhCRTtFQVRBLGdFQUFBO0VBQ0EsNkVBQUE7RUFDQSwwRUFBQTtFQUNBLDJGQUFBO0VBQ0EsdUVBQUE7RUFDQSxxRUFBQTtBQ2pCRjtBRHFCRTtFQVRBLCtEQUFBO0VBQ0EsMkVBQUE7RUFDQSx5RUFBQTtFQUNBLDBGQUFBO0VBQ0Esc0VBQUE7RUFDQSxvRUFBQTtBQ1JGO0FEWUU7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNDRjtBREdFO0VBVEEsOERBQUE7RUFDQSwwRUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDVUY7QURORTtFQVRBLDZEQUFBO0VBQ0EseUVBQUE7RUFDQSx1RUFBQTtFQUNBLHdGQUFBO0VBQ0Esb0VBQUE7RUFDQSxrRUFBQTtBQ21CRjtBRGZFO0VBVEEsNERBQUE7RUFDQSwwRUFBQTtFQUNBLHNFQUFBO0VBQ0EsaUZBQUE7RUFDQSxtRUFBQTtFQUNBLGlFQUFBO0FDNEJGO0FEeEJFO0VBVEEsNkRBQUE7RUFDQSwyRUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDcUNGO0FEakNFO0VBVEEsMkRBQUE7RUFDQSxzRUFBQTtFQUNBLHFFQUFBO0VBQ0Esc0ZBQUE7RUFDQSxrRUFBQTtFQUNBLGdFQUFBO0FDOENGO0FEakNBO0VFZ0xNLE9GL0t1QjtFRWdMdkIsUUZoTGlCO0VFeU1yQixNRnpNa0I7RUUwTWxCLFNGMU13QjtFQUV4QixhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVHL0crQjtBRm1KakM7QURqQ0E7RUFDRSxrQkFBQTtBQ29DRjtBRGpDQTs7Ozs7Ozs7Ozs7Ozs7O0VBZUUseURBQUE7RUFDQSx3QkFBQTtBQ29DRjtBRGpDQTtFQUNFLFVBQUE7QUNvQ0Y7QURqQ0E7RUFDRSxjQUFBO0FDb0NGO0FEN0JBO0VBQ0UsNkJBQUE7QUNnQ0Y7QUQ3QkE7RUFDRTtJQUNFLGlEQUFBO0VDZ0NGO0FBQ0Y7QUQ1QkE7RUFDRTtJQUNFLGtEQUFBO0lBQ0Esd0RBQUE7SUFDQSxvREFBQTtJQUNBLHNEQUFBO0VDOEJGO0FBQ0Y7QUQzQkE7RUFDRTtJQUNFLDZDQUFBO0lBQ0EsbURBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDNkJGO0FBQ0Y7QUR0QkE7O0VBRUUsY0FBQTtBQ3dCRjtBRGhCQTtFRTJSTSxpQ0FBQTtBRHZRTjtBRGhCQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUlBLG9CQUFBO0FDZ0JGO0FEYkE7RUFDRSwyQ0lwUCtCO0FIb1FqQztBRGJBO0VBQ0UsMENJclArQjtBSHFRakM7QURUQTtFQUNFLDRDS25ROEI7QUorUWhDO0FEVEE7RUFDRSw0Q0t2UThCO0FKbVJoQztBRFJBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBQ1dGO0FEVEE7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FDWUY7QURWQTtFQUNFLG1CQUFBO0FDYUY7QURWQTtFQUNFLDJEQUFBO0FDYUY7QURWQTtFQUNFO0lBQ0UsK0NBQUE7SUFDQSwyQkFBQTtFQ2FGO0FBQ0Y7QURYQTs7Ozs7RUFBQTtBQU1BOztFQUVFLHlCQUFBO0FDYUY7QURWQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNhRjtBRFZBOztFQUVFLGFBQUE7QUNhRjtBRFBBO0VBQ0UsaUJBQUE7QUNVRjtBRi9UQSx3Q0FBQTtBT1BBOzs7O0VBSUUsd0JBQUE7QUNORjtBRFdBO0VBQ0UsYUFBQTtFQUVBLFNBQUE7QUNURjtBRGlCQTs7RUFFRSxpQkFBQTtBQ2RGO0FEc0JBO0VBQ0UsZUFBQTtFQUVBLFNBQUE7QUNwQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRDZCQTtFQUNFLGdCQUFBO0FDMUJGO0FENkJBO0VBQ0UsV0FBQTtFQUVBLGVBQUE7RUFFQSx1QkFBQTtBQzVCRjtBRGdDQTtFQUNFLGNBQUE7QUM3QkY7QURpQ0E7Ozs7RUFJRSxpQ0FBQTtFQUNBLGNBQUE7QUM5QkY7QUQ4Q0E7Ozs7RUFJRSxvQkFBQTtFQUNBLG1CQUFBO0FDM0NGO0FEOENBO0VBQ0UsY0FBQTtFQUVBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtBQzdDRjtBRGdEQTtFQUNFLGlCQUFBO0FDN0NGO0FEZ0RBOzs7O0VBSUUsU0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDOUNGO0FEc0RBOzs7RUFHRSxlQUFBO0VBRUEsMEJBQUE7QUNwREY7QUR3REE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRSwwQkFBQTtBQ3JERjtBRHdEQTs7RUFFRSxvQkFBQTtBQ3JERjtBRHdEQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUVBLDBCQUFBO0FDdERGO0FEeURBO0VBQ0UsZUFBQTtBQ3RERjtBRDBEQTs7O0VBR0UsZUFBQTtBQ3ZERjtBRDJEQTs7RUFFRSxVQUFBO0VBRUEsU0FBQTtBQ3pERjtBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7QURtRUE7O0VBRUUsWUFBQTtBQ2hFRjtBRHNFQTs7RUFFRSx3QkFBQTtBQ25FRjtBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7QUQyRUE7O0VBRUUsVUFBQTtBQ3hFRjtBQ3hKQTtFQUNFLHNCQUFBO0VBRUEsNkNBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0FDVEY7QURZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsOEJBQUE7VUFBQSxzQkFBQTtBQ1ZGO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNWRjtBRGFBO0VBQ0UsYUFBQTtBQ1ZGO0FEYUE7RU55Q0Usa0NBQUE7RUFDQSxtQ0FBQTtFQW9LRSxjTTVNYztFTjZNZCxlTTdNYztFTmlQaEIsYU1qUGdCO0VOa1BoQixnQk1sUGdCO0VONE1kLGVNM01lO0VONE1mLGdCTTVNZTtFTmdQakIsY01oUGlCO0VOaVBqQixpQk1qUGlCO0VBRWpCLGVBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGtDQUFBO0VBRUEsZ0JBQUE7RUFFQSwwQkFBQTtFQUVBLHVCQUFBO0VBRUEseUJBQUE7RUFFQSxxQkFBQTtFQUVBLDJCQUFBO0VBRUEsOEJBQUE7VUFBQSxzQkFBQTtBQ2JGO0FDbEJBO0VBQ0UsbUNBQUE7QUM5QkY7QURpQ0E7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0FDOUJGO0FEaUNBOzs7Ozs7RVIrT0UsZ0JRek9nQjtFUjBPaEIsbUJRMU80QjtFQUU1QixnQkF4QzZCO0VBMEM3QixnQkF2QzZCO0FDUS9CO0FEa0NBO0VSa09FLGdCUWpPZ0I7RUFFaEIsZUExQzZCO0FDUy9CO0FEb0NBO0VSNE5FLGdCUTNOZ0I7RUFFaEIsZUE3QzZCO0FDVS9CO0FEc0NBO0VBQ0UsZUE5QzZCO0FDVS9CO0FEdUNBO0VBQ0UsZUEvQzZCO0FDVy9CO0FEdUNBO0VBQ0UsZUFoRDZCO0FDWS9CO0FEdUNBO0VBQ0UsZUFqRDZCO0FDYS9CO0FEdUNBO0VBQ0UsY0FBQTtBQ3BDRjtBRHVDQTs7RUFFRSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBRUEsd0JBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxXQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3ZDRjtBQ3REQTtFQUNFLHdCQUFBO0FDUEY7QURpQkk7RUFDRSx3QkFBQTtBQ2ROO0FEcUJJO0VBQ0Usd0JBQUE7QUNsQk47QVhzSEk7RVU3R0E7SUFDRSx3QkFBQTtFQ0xKO0FBQ0Y7QVh5Skk7RVU5SUE7SUFDRSx3QkFBQTtFQ1JKO0FBQ0Y7QVgyR0k7RVU3R0E7SUFDRSx3QkFBQTtFQ0tKO0FBQ0Y7QVgrSUk7RVU5SUE7SUFDRSx3QkFBQTtFQ0VKO0FBQ0Y7QVhpR0k7RVU3R0E7SUFDRSx3QkFBQTtFQ2VKO0FBQ0Y7QVhxSUk7RVU5SUE7SUFDRSx3QkFBQTtFQ1lKO0FBQ0Y7QVh1Rkk7RVU3R0E7SUFDRSx3QkFBQTtFQ3lCSjtBQUNGO0FYMkhJO0VVOUlBO0lBQ0Usd0JBQUE7RUNzQko7QUFDRjtBZC9CQSxpREFBQTtBZUpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RVo4TkUsZVk1TmU7RVo2TmYsZ0JZN05lO0VaaVFqQixjWWpRaUI7RVprUWpCLGlCWWxRaUI7QUNibkI7QURnQkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFWnlORSxzQ1k1T007RVo2T04sdUNZN09NO0VaNlFSLHFDWTdRUTtFWjhRUix3Q1k5UVE7QUNVVjtBYnNPTTtFQUNFO0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUlGLDhDWTFQQTtJWjRQQSw0Q1k1UEE7RUNtQlI7QUFDRjtBRElBO0VBQ0UsdUNBQUE7RVpvUEEscUNZN1FRO0FDeUJWO0FES0E7RUFDRSx5Q0FBQTtFWjZNRSxzQ1k1T007QUM2QlY7QWJtTk07RUFDRTtJQUVJLG1CQUFBO0lBT0YsOENZMVBBO0VDbUNSO0FBQ0Y7QURBQTtFQUNFLHVDQUFBO0Vad01FLHVDWTdPTTtBQ3lDVjtBYnVNTTtFQUNFO0lBS0ksb0JBQUE7SUFNRiw0Q1k1UEE7RUMrQ1I7QUFDRjtBRE5BO0VBQ0UsMENBQUE7RVptT0Esd0NZOVFRO0FDcURWO0FETEE7RUFDRSx1Q0FBQTtFQUNBLDBDQUFBO0VaMk5BLHFDWTdRUTtFWjhRUix3Q1k5UVE7QUMyRFY7QURKQTtFQUNFLHlDQUFBO0VBQ0EsdUNBQUE7RVptTEUsc0NZNU9NO0VaNk9OLHVDWTdPTTtBQ2lFVjtBYitLTTtFQUNFO0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUlGLDhDWTFQQTtJWjRQQSw0Q1k1UEE7RUMwRVI7QUFDRjtBRFRBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0Vaa0tFLGNZaEtjO0VaaUtkLGVZaktjO0VacU1oQixhWXJNZ0I7RVpzTWhCLGdCWXRNZ0I7QUNjbEI7QURYQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VaNkpFLG9DWTNPSztFWjRPTCxxQ1k1T0s7RVo0UVAsbUNZNVFPO0VaNlFQLHNDWTdRTztBQ2dHVDtBYitJTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUlGLDRDWXpQRDtJWjJQQywwQ1kzUEQ7RUN5R1A7QUFDRjtBRHZCQTtFQUNFLHFDQUFBO0Vad0xBLG1DWTVRTztBQytHVDtBRHRCQTtFQUNFLHVDQUFBO0VaaUpFLG9DWTNPSztBQ21IVDtBYjRITTtFQUNFO0lBRUksa0JBQUE7SUFPRiw0Q1l6UEQ7RUN5SFA7QUFDRjtBRDNCQTtFQUNFLHFDQUFBO0VaNElFLHFDWTVPSztBQytIVDtBYmdITTtFQUNFO0lBS0ksbUJBQUE7SUFNRiwwQ1kzUEQ7RUNxSVA7QUFDRjtBRGpDQTtFQUNFLHdDQUFBO0VadUtBLHNDWTdRTztBQzJJVDtBRGhDQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RVorSkEsbUNZNVFPO0VaNlFQLHNDWTdRTztBQ2lKVDtBRC9CQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RVp1SEUsb0NZM09LO0VaNE9MLHFDWTVPSztBQ3VKVDtBYndGTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUlGLDRDWXpQRDtJWjJQQywwQ1kzUEQ7RUNnS1A7QUFDRjtBQzlKSTtFZG1hRSxzQkFBQTtBZS9hTjtBRGdCSTtFZCtaRSx1QkFBQTtBZTNhTjtBRGdCSTtFZDZZRSxzQkFBQTtBZXpaTjtBZjRMVztFQWdPTCx1QkFBQTtBZXpaTjtBRGFJO0VkZ1pFLHVCQUFBO0FlelpOO0FmcUxXO0VBdU9MLHNCQUFBO0FlelpOO0FmNEdJO0VjbEhBO0lkbWFFLHNCQUFBO0VleFpKOztFRFBFO0lkK1pFLHVCQUFBO0VlcFpKOztFRFBFO0lkNllFLHNCQUFBO0VlbFlKO0VmcUtTO0lBZ09MLHVCQUFBO0VlbFlKOztFRFZFO0lkZ1pFLHVCQUFBO0VlbFlKO0VmOEpTO0lBdU9MLHNCQUFBO0VlbFlKO0FBQ0Y7QWZvRkk7RWNsSEE7SWRtYUUsc0JBQUE7RWVqWUo7O0VEOUJFO0lkK1pFLHVCQUFBO0VlN1hKOztFRDlCRTtJZDZZRSxzQkFBQTtFZTNXSjtFZjhJUztJQWdPTCx1QkFBQTtFZTNXSjs7RURqQ0U7SWRnWkUsdUJBQUE7RWUzV0o7RWZ1SVM7SUF1T0wsc0JBQUE7RWUzV0o7QUFDRjtBZjZESTtFY2xIQTtJZG1hRSxzQkFBQTtFZTFXSjs7RURyREU7SWQrWkUsdUJBQUE7RWV0V0o7O0VEckRFO0lkNllFLHNCQUFBO0VlcFZKO0VmdUhTO0lBZ09MLHVCQUFBO0VlcFZKOztFRHhERTtJZGdaRSx1QkFBQTtFZXBWSjtFZmdIUztJQXVPTCxzQkFBQTtFZXBWSjtBQUNGO0Fmc0NJO0VjbEhBO0lkbWFFLHNCQUFBO0VlblZKOztFRDVFRTtJZCtaRSx1QkFBQTtFZS9VSjs7RUQ1RUU7SWQ2WUUsc0JBQUE7RWU3VEo7RWZnR1M7SUFnT0wsdUJBQUE7RWU3VEo7O0VEL0VFO0lkZ1pFLHVCQUFBO0VlN1RKO0VmeUZTO0lBdU9MLHNCQUFBO0VlN1RKO0FBQ0Y7QUNuR0k7RUFDRSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBRGdCSTtFQUNFLDRCQUFBO0FDYk47QURnQkk7RUFDRSwwQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsMkJBQUE7QUNiTjtBRGdCSTtFQUNFLDRCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBakJrR0k7RWdCbEhBO0lBQ0UsNkJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsNEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsMEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsMkJBQUE7RUNvQko7O0VEakJFO0lBQ0UsNEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7QUFDRjtBakJnRUk7RWdCbEhBO0lBQ0UsNkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7QUFDRjtBakIrQkk7RWdCbEhBO0lBQ0UsNkJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsNEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsMEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsMkJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsNEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7RUNzRko7QUFDRjtBakJGSTtFZ0JsSEE7SUFDRSw2QkFBQTtFQ3VISjs7RURwSEU7SUFDRSw4QkFBQTtFQ3VISjs7RURwSEU7SUFDRSw0QkFBQTtFQ3VISjs7RURwSEU7SUFDRSwwQkFBQTtFQ3VISjs7RURwSEU7SUFDRSwyQkFBQTtFQ3VISjs7RURwSEU7SUFDRSw0QkFBQTtFQ3VISjs7RURwSEU7SUFDRSw4QkFBQTtFQ3VISjs7RURwSEU7SUFDRSw4QkFBQTtFQ3VISjtBQUNGO0FDckpJO0VBQ0UseURBQUE7RUFDQSxvQ0FBQTtBQ2JOO0FEZ0JJO0VBQ0UseURBQUE7RUFDQSxvQ0FBQTtBQ2JOO0FEZ0JJO0VBQ0UseURBQUE7RUFDQSxxQ0FBQTtBQ2JOO0FuQm1ISTtFa0JsSEE7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDR0o7O0VEQUU7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDR0o7O0VEQUU7SUFDRSx5REFBQTtJQUNBLHFDQUFBO0VDR0o7QUFDRjtBbkJrR0k7RWtCbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21CSjs7RURoQkU7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUJKOztFRGhCRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNtQko7QUFDRjtBbkJrRkk7RWtCbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21DSjs7RURoQ0U7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbUNKOztFRGhDRTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNtQ0o7QUFDRjtBbkJrRUk7RWtCbEhBO0lBQ0UseURBQUE7SUFDQSxvQ0FBQTtFQ21ESjs7RURoREU7SUFDRSx5REFBQTtJQUNBLG9DQUFBO0VDbURKOztFRGhERTtJQUNFLHlEQUFBO0lBQ0EscUNBQUE7RUNtREo7QUFDRjtBQ3RFQTtFQUNFLGlDQUFBO0FDUEY7QURVQTtFQUNFLCtCQUFBO0FDUEY7QURVQTtFQUNFLDZCQUFBO0FDUEY7QURVQTtFQUNFLDhCQUFBO0FDUEY7QURVQTtFQUNFLCtCQUFBO0FDUEY7QURVQTtFQUNFLDJCQUFBO0FDUEY7QURjQTtFQUNFLDBCQUFBO0FDWEY7QURjQTtFQUNFLDRCQUFBO0FDWEY7QURjQTtFQUNFLGtDQUFBO0FDWEY7QURrQkE7RUFDRSxzQ0FBQTtBQ2ZGO0FEa0JBO0VBQ0Usa0NBQUE7QUNmRjtBRGtCQTtFQUNFLG9DQUFBO0FDZkY7QURrQkE7RUFDRSx3Q0FBQTtBQ2ZGO0FEa0JBO0VBQ0UseUNBQUE7QUNmRjtBRGtCQTtFQUNFLHdDQUFBO0FDZkY7QURzQkE7RUFDRSxrQ0FBQTtBQ25CRjtBRHNCQTtFQUNFLDhCQUFBO0FDbkJGO0FEc0JBO0VBQ0UsZ0NBQUE7QUNuQkY7QURzQkE7RUFDRSwrQkFBQTtBQ25CRjtBRHNCQTtFQUNFLGdDQUFBO0FDbkJGO0F4QmpEQTtFQUNFLHlCQUFBO0VBQ0EseUJBSmlCO0VBS2pCLGtCQUFBO0F5QkxGO0F6QlFBO0VBQ0UsWUFBQTtBeUJMRjtBekJRQTtFQUNFLGtCQUFBO0F5QkxGO0F6QlFBO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBRUEsdURBQUE7RUFDQSwrQkFBQTtFQUNBLHlDQUFBO0F5Qk5GO0F6QlNBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBeUJORjtBekJTQTtFQUNFLFdBQUE7QXlCTkY7QXpCU0E7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7QXlCTkY7QXpCU0E7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0F5Qk5GO0F6QlNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0F5Qk5GO0F6QlNBO0VBQ0UsY0FBQTtBeUJORjtBekJTQTtFQUNFLDRCQUFBO0F5Qk5GO0F6QlNBO0VBQ0UsV0FBQTtBeUJORjtBekJTQTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QXlCTkY7QXpCU0E7RUFDRSxZQUFBO0F5Qk5GO0F6QlNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0F5Qk5GO0F6QlNBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0F5Qk5GO0F6QlNBO0VBQ0Usb0NBQUE7QXlCTkY7QXpCU0E7RUFDRSx1QkFBQTtBeUJORjtBekJVQTtFQUNFLGNBQUE7QXlCUEY7QXpCVUE7RUFDRSxZQUFBO0F5QlBGO0FBdkhBO0VBQ0UseUJ6QndCaUI7RXlCdkJqQixZQUFBO0FBMEhGIiwiZmlsZSI6Im1lbWJlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFwcCBHbG9iYWwgQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdXQgc3R5bGUgcnVsZXMgaGVyZSB0aGF0IHlvdSB3YW50IHRvIGFwcGx5IGdsb2JhbGx5LiBUaGVzZSBzdHlsZXMgYXJlIGZvclxuICogdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpcyBmaWxlIGNhbiBiZVxuICogdXNlZCBhcyBhbiBlbnRyeSBwb2ludCB0byBpbXBvcnQgb3RoZXIgQ1NTL1Nhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlXG4gKiBvdXRwdXQgQ1NTLlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZ2xvYmFsIHN0eWxlc2hlZXRzLCB2aXNpdCB0aGUgZG9jdW1lbnRhdGlvbjpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dsb2JhbC1zdHlsZXNoZWV0c1xuICovXG5cbi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XG5cbi8qIEJhc2ljIENTUyBmb3IgYXBwcyBidWlsdCB3aXRoIElvbmljICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3NcIjtcblxuLyogT3B0aW9uYWwgQ1NTIHV0aWxzIHRoYXQgY2FuIGJlIGNvbW1lbnRlZCBvdXQgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbG9hdC1lbGVtZW50cy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzXCI7XG5cbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuXG4uaW9uLXBhZ2Uge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ucHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuOnJvb3Qge1xuICAvKiBUaGVzZSBleGFtcGxlcyB1c2UgdGhlIHNhbWUgY29sb3I6IHNpZW5uYS4gKi9cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDE2MCwgODIsIDQ1O1xuXG4gIC8qIFRoZXNlIGV4YW1wbGVzIHVzZSB0aGUgc2FtZSBjb2xvcjogbGlnaHRzdGVlbGJsdWUuICovXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxNzYsIDE5NiwgMjIyO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tYWN0aW9uLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi1idG4tY3JlYXRlIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tYWxlcnQgLmFsZXJ0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1hbGVydCAuYWxlcnQtaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1hbGVydCAuYWxlcnQtaGVhZCBoMiB7XG4gIGNvbG9yOiAjODY4Njg2O1xufVxuXG4uY3VzdG9tLWFsZXJ0IC5hbGVydC13cmFwcGVyIC5hbGVydC1tZXNzYWdlIHtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1hbGVydCAuYWxlcnQtYnV0dG9uIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jdXN0b20tYWxlcnQge1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMjtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjEyLCA2MiwgNjIpO1xufVxuXG4uY3VzdG9tLWFsZXJ0LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBjb2xvcjogIzdmZmYwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuZGl2Lm1vbnRodmlldy1jb250YWluZXIgdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk3YTcwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZGl2LmRheXMgYnV0dG9uLmF0dGVuZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YmIxZCAhaW1wb3J0YW50O1xufVxuXG5kaXYuZGF5cyBidXR0b24uYXR0ZW5kZWQgcCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5cbmRpdi5mb3JtLWdyb3VwIGxhYmVse1xuICBjb2xvcjogI2RhZGFkYTtcbn1cblxuLnB1bGwtcmlndGh7XG4gIGZsb2F0OiByaWdodDtcbn0iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLnNraXAtd2FybnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5nbG9iYWxzXCI7XG5AaW1wb3J0IFwiLi4vY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnNcIjtcbkBpbXBvcnQgXCIuLi9jb21wb25lbnRzL21lbnUvbWVudS5tZC52YXJzXCI7XG5cbi8vIElvbmljIEZvbnQgRmFtaWx5XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5odG1sLmlvcyB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5odG1sLm1kIHtcbiAgLS1pb24tZGVmYXVsdC1mb250OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICAtLWlvbi1mb250LWZhbWlseTogdmFyKC0taW9uLWRlZmF1bHQtZm9udCk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmJvZHkuYmFja2Ryb3Atbm8tc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy8gVE9ETzogQmxvY2sgc2Nyb2xsaW5nIGluIGlvbi1jb250ZW50LCBicmVha3MgaW5zaWRlIGlvbi1tb2RhbFxuLy8gYm9keS5iYWNrZHJvcC1uby1zY3JvbGwgLmlvbi1wYWdlID4gaW9uLWNvbnRlbnQge1xuLy8gICAtLW92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vIE1vZGFsIC0gQ2FyZCBTdHlsZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxuICogQ2FyZCBzdHlsZSBtb2RhbCBuZWVkcyBhZGRpdGlvbmFsIHBhZGRpbmcgb24gdGhlXG4gKiB0b3Agb2YgdGhlIGhlYWRlci4gV2UgYWNjb21wbGlzaCB0aGlzIGJ5IHRhcmdldGluZ1xuICogdGhlIGZpcnN0IHRvb2xiYXIgaW4gdGhlIGhlYWRlci5cbiAqIEZvb3RlciBhbHNvIG5lZWRzIHRoaXMuIFdlIGRvIG5vdCBhZGp1c3QgdGhlIGJvdHRvbVxuICogcGFkZGluZyB0aG91Z2ggYmVjYXVzZSBvZiB0aGUgc2FmZSBhcmVhLlxuICovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCBpb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUsXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtc2hlZXQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsIGlvbi1mb290ZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi8qKlxuKiBDYXJkIHN0eWxlIG1vZGFsIG5lZWRzIGFkZGl0aW9uYWwgcGFkZGluZyBvbiB0aGVcbiogYm90dG9tIG9mIHRoZSBoZWFkZXIuIFdlIGFjY29tcGxpc2ggdGhpcyBieSB0YXJnZXRpbmdcbiogdGhlIGxhc3QgdG9vbGJhciBpbiB0aGUgaGVhZGVyLlxuKi9cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLXNoZWV0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLyoqXG4qIEFkZCBwYWRkaW5nIG9uIHRoZSBsZWZ0IGFuZCByaWdodFxuKiBvZiB0b29sYmFycyB3aGlsZSBhY2NvdW50aW5nIGZvclxuKiBzYWZlIGFyZWEgdmFsdWVzIHdoZW4gaW4gbGFuZHNjYXBlLlxuKi9cbmh0bWwuaW9zIGlvbi1tb2RhbCBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyA4cHgpO1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArIDhweCk7XG59XG5cbi8qKlxuICogQ2FyZCBzdHlsZSBtb2RhbCBvbiBpUGFkT1NcbiAqIHNob3VsZCBvbmx5IGhhdmUgYmFja2Ryb3Agb24gZmlyc3QgaW5zdGFuY2UuXG4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkOmZpcnN0LW9mLXR5cGUge1xuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogMC4xODtcbiAgfVxufVxuXG4vKipcbiAqIFN1YnNlcXVlbnQgbW9kYWxzIHNob3VsZCBub3QgaGF2ZSBhIGJhY2tkcm9wL2JveCBzaGFkb3dcbiAqIGFzIGl0IHdpbGwgY2F1c2UgdGhlIHNjcmVlbiB0byBhcHBlYXIgdG8gZ2V0IHByb2dyZXNzaXZlbHlcbiAqIGRhcmtlci4gV2l0aCBJb25pYyA2LCBkZWNsYXJhdGl2ZSBtb2RhbHMgbWFkZSBpdFxuICogcG9zc2libGUgdG8gaGF2ZSBtdWx0aXBsZSBub24tcHJlc2VudGVkIG1vZGFscyBpbiB0aGUgRE9NLFxuICogc28gd2UgY291bGQgbm8gbG9uZ2VyIHJlbHkgb24gaW9uLW1vZGFsOmZpcnN0LW9mLXR5cGUuXG4gKiBIZXJlIHdlIGRpc2FibGUgdGhlIG9wYWNpdHkvYm94LXNoYWRvdyBmb3IgZXZlcnkgbW9kYWxcbiAqIHRoYXQgY29tZXMgYWZ0ZXIgdGhlIGZpcnN0IHByZXNlbnRlZCBtb2RhbC5cbiAqXG4gKiBOb3RlOiBpb24tbW9kYWw6bm90KC5vdmVybGF5LWhpZGRlbik6Zmlyc3Qtb2YtdHlwZVxuICogZG9lcyBub3QgbWF0Y2ggdGhlIGZpcnN0IG1vZGFsIHRvIG5vdCBoYXZlXG4gKiB0aGUgLm92ZXJsYXktaGlkZGVuIGNsYXNzLCBpdCB3aWxsIG1hdGNoIHRoZVxuICogZmlyc3QgbW9kYWwgaW4gZ2VuZXJhbCBvbmx5IGlmIGl0IGRvZXMgbm90XG4gKiBoYXZlIHRoZSAub3ZlcmxheS1oaWRkZW4gY2xhc3MuXG4gKiBUaGUgOm50aC1jaGlsZCgpIHBzZXVkby1jbGFzcyBoYXMgc3VwcG9ydFxuICogZm9yIHNlbGVjdG9ycyB3aGljaCB3b3VsZCBoZWxwIHVzIGhlcmUuIEF0IHRoZVxuICogdGltZSBvZiB3cml0aW5nIGl0IGRvZXMgbm90IGhhdmUgZ3JlYXQgY3Jvc3MgYnJvd3NlclxuICogc3VwcG9ydC5cbiAqXG4gKiBOb3RlIDI6IFRoaXMgc2hvdWxkIG9ubHkgYXBwbHkgdG8gbm9uLWNhcmQgYW5kXG4gKiBub24tc2hlZXQgbW9kYWxzLiBDYXJkIGFuZCBzaGVldCBtb2RhbHMgaGF2ZSB0aGVpclxuICogb3duIGNyaXRlcmlhIGZvciBkaXNwbGF5aW5nIGJhY2tkcm9wcy9ib3ggc2hhZG93cy5cbiAqL1xuaW9uLW1vZGFsLm1vZGFsLWRlZmF1bHQ6bm90KC5vdmVybGF5LWhpZGRlbikgfiBpb24tbW9kYWwubW9kYWwtZGVmYXVsdCB7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4vKipcbiAqIFRoaXMgd29ya3MgYXJvdW5kIGEgYnVnIGluIFdlYktpdCB3aGVyZSB0aGVcbiAqIGNvbnRlbnQgd2lsbCBvdmVyZmxvdyBvdXRzaWRlIG9mIHRoZSBib3R0b20gYm9yZGVyXG4gKiByYWRpdXMgd2hlbiByZS1wYWludGluZy4gQXMgbG9uZyBhcyBhIHNpbmdsZVxuICogYm9yZGVyIHJhZGl1cyB2YWx1ZSBpcyBzZXQgb24gLmlvbi1wYWdlLCB0aGlzXG4gKiBpc3N1ZSBkb2VzIG5vdCBoYXBwZW4uIFdlIHNldCB0aGUgdG9wIGxlZnQgcmFkaXVzXG4gKiBoZXJlIGJlY2F1c2UgdGhlIHRvcCBsZWZ0IGNvcm5lciB3aWxsIGFsd2F5cyBoYXZlIGFcbiAqIHJhZGl1cyBubyBtYXR0ZXIgdGhlIHBsYXRmb3JtLlxuICogVGhpcyBiZWhhdmlvciBvbmx5IGFwcGxpZXMgdG8gY2FyZCBtb2RhbHMuXG4gKi9cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIC5pb24tcGFnZSB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG4vLyBJb25pYyBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcbi8vIGNvbG9ycyBtYXBcblxuQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lKSB7XG4gICR2YWx1ZTogbWFwLWdldCgkY29sb3JzLCAkY29sb3ItbmFtZSk7XG5cbiAgJGJhc2U6IG1hcC1nZXQoJHZhbHVlLCBiYXNlKTtcbiAgJGNvbnRyYXN0OiBtYXAtZ2V0KCR2YWx1ZSwgY29udHJhc3QpO1xuICAkc2hhZGU6IG1hcC1nZXQoJHZhbHVlLCBzaGFkZSk7XG4gICR0aW50OiBtYXAtZ2V0KCR2YWx1ZSwgdGludCk7XG5cbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LCAjeyRiYXNlfSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2IsICN7Y29sb3ItdG8tcmdiLWxpc3QoJGJhc2UpfSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCwgI3skY29udHJhc3R9KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IsICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX0pICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUsICN7JHNoYWRlfSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXRpbnQsICN7JHRpbnR9KSAhaW1wb3J0YW50O1xufVxuXG5AZWFjaCAkY29sb3ItbmFtZSwgJHZhbHVlIGluICRjb2xvcnMge1xuICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcbiAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvcigkY29sb3ItbmFtZSk7XG4gIH1cbn1cblxuXG4vLyBQYWdlIENvbnRhaW5lciBTdHJ1Y3R1cmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tcGFnZSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6ICR6LWluZGV4LXBhZ2UtY29udGFpbmVyO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlID4gLmlvbi1wYWdlLnNwbGl0LXBhbmUtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXJvdXRlLFxuaW9uLXJvdXRlLXJlZGlyZWN0LFxuaW9uLXJvdXRlcixcbmlvbi1zZWxlY3Qtb3B0aW9uLFxuaW9uLW5hdi1jb250cm9sbGVyLFxuaW9uLW1lbnUtY29udHJvbGxlcixcbmlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixcbmlvbi1hbGVydC1jb250cm9sbGVyLFxuaW9uLWxvYWRpbmctY29udHJvbGxlcixcbmlvbi1tb2RhbC1jb250cm9sbGVyLFxuaW9uLXBpY2tlci1jb250cm9sbGVyLFxuaW9uLXBvcG92ZXItY29udHJvbGxlcixcbmlvbi10b2FzdC1jb250cm9sbGVyLFxuLmlvbi1wYWdlLWhpZGRlbixcbltoaWRkZW5dIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFnZS1pbnZpc2libGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2FuLWdvLWJhY2sgPiBpb24taGVhZGVyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8vIElvbmljIFNhZmUgTWFyZ2luc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaHRtbC5wbHQtaW9zLnBsdC1oeWJyaWQsIGh0bWwucGx0LWlvcy5wbHQtcHdhIHtcbiAgLS1pb24tc3RhdHVzYmFyLXBhZGRpbmc6IDIwcHg7XG59XG5cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IDIwcHgpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogdmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nKTtcbiAgfVxufVxuXG4vLyBUT0RPOiByZW1vdmUgb25jZSBTYWZhcmkgMTEuMiBpcyBubyBsb25nZXIgc3VwcG9ydGVkXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcbiAgfVxufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5cblxuLy8gR2xvYmFsIENhcmQgU3R5bGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pb24tY2FyZC5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yLFxuaW9uLWNhcmQtaGVhZGVyLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3Ige1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuXG4vLyBNZW51IFN0eWxlc1xuLy8gVE9ETzogRmluZCBhIGJldHRlciBsb25nIHRlcm0gc29sdXRpb24gZm9yIHRoaXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5tZW51LWNvbnRlbnQge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlM2QoMCwgMCwgMCkpO1xufVxuXG4ubWVudS1jb250ZW50LW9wZW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuXG4gIC8vIHRoZSBjb250YWluaW5nIGVsZW1lbnQgaXRzZWxmIHNob3VsZCBiZSBjbGlja2FibGUgYnV0XG4gIC8vIGV2ZXJ5dGhpbmcgaW5zaWRlIG9mIGl0IHNob3VsZCBub3QgY2xpY2thYmxlIHdoZW4gbWVudSBpcyBvcGVuXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtaW9zLWJveC1zaGFkb3ctcmV2ZWFsO1xufVxuXG5bZGlyPXJ0bF0uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtaW9zLWJveC1zaGFkb3ctcmV2ZWFsLXJ0bDtcbn1cblxuLmlvcyAubWVudS1jb250ZW50LXB1c2gge1xuICBib3gtc2hhZG93OiAkbWVudS1pb3MtYm94LXNoYWRvdy1wdXNoO1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiAkbWVudS1tZC1ib3gtc2hhZG93O1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1wdXNoIHtcbiAgYm94LXNoYWRvdzogJG1lbnUtbWQtYm94LXNoYWRvdztcbn1cblxuLy8gQWNjb3JkaW9uIFN0eWxlc1xuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0ID4gaW9uLWFjY29yZGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0ID4gaW9uLWFjY29yZGlvbjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG59XG5pb24tYWNjb3JkaW9uLWdyb3VwID4gaW9uLWFjY29yZGlvbjpsYXN0LW9mLXR5cGUgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1hbmltYXRlZCA+IFtzbG90PVwiaGVhZGVyXCJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNpdGlvbjogMzAwbXMgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuNSwgMSk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIGlvbi1hY2NvcmRpb24gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLyoqXG4gKiBUaGUgPiBbc2xvdD1cImhlYWRlclwiXSBzZWxlY3RvciBlbnN1cmVzIHRoYXQgd2UgZG9cbiAqIG5vdCBtb2RpZnkgdG9nZ2xlIGljb25zIGZvciBhbnkgbmVzdGVkIGFjY29yZGlvbnMuIFRoZSBzdGF0ZVxuICogb2Ygb25lIGFjY29yZGlvbiBzaG91bGQgbm90IGFmZmVjdCBhbnkgYWNjb3JkaW9ucyBpbnNpZGVcbiAqIG9mIGEgbmVzdGVkIGFjY29yZGlvbiBncm91cC5cbiAqL1xuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nID4gW3Nsb3Q9XCJoZWFkZXJcIl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24sXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCA+IFtzbG90PVwiaGVhZGVyXCJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tcHJldmlvdXMgaW9uLWl0ZW1bc2xvdD1cImhlYWRlclwiXSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldC5tZCA+IGlvbi1hY2NvcmRpb24uYWNjb3JkaW9uLWV4cGFuZGluZzpmaXJzdC1vZi10eXBlLFxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi8vIFNhZmFyaS9pT1MgMTUgY2hhbmdlcyB0aGUgYXBwZWFyYW5jZSBvZiBpbnB1dFt0eXBlPVwiZGF0ZVwiXS5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmcm9tIElvbmljIDUvU2FmYXJpIDE0IGRlc2lnbnMsXG4vLyB3ZSBvdmVycmlkZSB0aGUgYXBwZWFyYW5jZSBvbmx5IHdoZW4gdXNpbmcgd2l0aGluIGFuIGlvbi1pbnB1dC5cbmlvbi1pbnB1dCBpbnB1dDo6LXdlYmtpdC1kYXRlLWFuZC10aW1lLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4iLCJodG1sLmlvcyB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwubWQge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZGVmYXVsdC1mb250KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuYm9keS5iYWNrZHJvcC1uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgbmVlZHMgYWRkaXRpb25hbCBwYWRkaW5nIG9uIHRoZVxuICogdG9wIG9mIHRoZSBoZWFkZXIuIFdlIGFjY29tcGxpc2ggdGhpcyBieSB0YXJnZXRpbmdcbiAqIHRoZSBmaXJzdCB0b29sYmFyIGluIHRoZSBoZWFkZXIuXG4gKiBGb290ZXIgYWxzbyBuZWVkcyB0aGlzLiBXZSBkbyBub3QgYWRqdXN0IHRoZSBib3R0b21cbiAqIHBhZGRpbmcgdGhvdWdoIGJlY2F1c2Ugb2YgdGhlIHNhZmUgYXJlYS5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlLFxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLXNoZWV0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbCBpb24tZm9vdGVyIGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4vKipcbiogQ2FyZCBzdHlsZSBtb2RhbCBuZWVkcyBhZGRpdGlvbmFsIHBhZGRpbmcgb24gdGhlXG4qIGJvdHRvbSBvZiB0aGUgaGVhZGVyLiBXZSBhY2NvbXBsaXNoIHRoaXMgYnkgdGFyZ2V0aW5nXG4qIHRoZSBsYXN0IHRvb2xiYXIgaW4gdGhlIGhlYWRlci5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSxcbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1zaGVldCBpb24taGVhZGVyIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi8qKlxuKiBBZGQgcGFkZGluZyBvbiB0aGUgbGVmdCBhbmQgcmlnaHRcbiogb2YgdG9vbGJhcnMgd2hpbGUgYWNjb3VudGluZyBmb3Jcbiogc2FmZSBhcmVhIHZhbHVlcyB3aGVuIGluIGxhbmRzY2FwZS5cbiovXG5odG1sLmlvcyBpb24tbW9kYWwgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgOHB4KTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyA4cHgpO1xufVxuXG4vKipcbiAqIENhcmQgc3R5bGUgbW9kYWwgb24gaVBhZE9TXG4gKiBzaG91bGQgb25seSBoYXZlIGJhY2tkcm9wIG9uIGZpcnN0IGluc3RhbmNlLlxuICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBodG1sLmlvcyBpb24tbW9kYWwubW9kYWwtY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuMTg7XG4gIH1cbn1cbi8qKlxuICogU3Vic2VxdWVudCBtb2RhbHMgc2hvdWxkIG5vdCBoYXZlIGEgYmFja2Ryb3AvYm94IHNoYWRvd1xuICogYXMgaXQgd2lsbCBjYXVzZSB0aGUgc2NyZWVuIHRvIGFwcGVhciB0byBnZXQgcHJvZ3Jlc3NpdmVseVxuICogZGFya2VyLiBXaXRoIElvbmljIDYsIGRlY2xhcmF0aXZlIG1vZGFscyBtYWRlIGl0XG4gKiBwb3NzaWJsZSB0byBoYXZlIG11bHRpcGxlIG5vbi1wcmVzZW50ZWQgbW9kYWxzIGluIHRoZSBET00sXG4gKiBzbyB3ZSBjb3VsZCBubyBsb25nZXIgcmVseSBvbiBpb24tbW9kYWw6Zmlyc3Qtb2YtdHlwZS5cbiAqIEhlcmUgd2UgZGlzYWJsZSB0aGUgb3BhY2l0eS9ib3gtc2hhZG93IGZvciBldmVyeSBtb2RhbFxuICogdGhhdCBjb21lcyBhZnRlciB0aGUgZmlyc3QgcHJlc2VudGVkIG1vZGFsLlxuICpcbiAqIE5vdGU6IGlvbi1tb2RhbDpub3QoLm92ZXJsYXktaGlkZGVuKTpmaXJzdC1vZi10eXBlXG4gKiBkb2VzIG5vdCBtYXRjaCB0aGUgZmlyc3QgbW9kYWwgdG8gbm90IGhhdmVcbiAqIHRoZSAub3ZlcmxheS1oaWRkZW4gY2xhc3MsIGl0IHdpbGwgbWF0Y2ggdGhlXG4gKiBmaXJzdCBtb2RhbCBpbiBnZW5lcmFsIG9ubHkgaWYgaXQgZG9lcyBub3RcbiAqIGhhdmUgdGhlIC5vdmVybGF5LWhpZGRlbiBjbGFzcy5cbiAqIFRoZSA6bnRoLWNoaWxkKCkgcHNldWRvLWNsYXNzIGhhcyBzdXBwb3J0XG4gKiBmb3Igc2VsZWN0b3JzIHdoaWNoIHdvdWxkIGhlbHAgdXMgaGVyZS4gQXQgdGhlXG4gKiB0aW1lIG9mIHdyaXRpbmcgaXQgZG9lcyBub3QgaGF2ZSBncmVhdCBjcm9zcyBicm93c2VyXG4gKiBzdXBwb3J0LlxuICpcbiAqIE5vdGUgMjogVGhpcyBzaG91bGQgb25seSBhcHBseSB0byBub24tY2FyZCBhbmRcbiAqIG5vbi1zaGVldCBtb2RhbHMuIENhcmQgYW5kIHNoZWV0IG1vZGFscyBoYXZlIHRoZWlyXG4gKiBvd24gY3JpdGVyaWEgZm9yIGRpc3BsYXlpbmcgYmFja2Ryb3BzL2JveCBzaGFkb3dzLlxuICovXG5pb24tbW9kYWwubW9kYWwtZGVmYXVsdDpub3QoLm92ZXJsYXktaGlkZGVuKSB+IGlvbi1tb2RhbC5tb2RhbC1kZWZhdWx0IHtcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qKlxuICogVGhpcyB3b3JrcyBhcm91bmQgYSBidWcgaW4gV2ViS2l0IHdoZXJlIHRoZVxuICogY29udGVudCB3aWxsIG92ZXJmbG93IG91dHNpZGUgb2YgdGhlIGJvdHRvbSBib3JkZXJcbiAqIHJhZGl1cyB3aGVuIHJlLXBhaW50aW5nLiBBcyBsb25nIGFzIGEgc2luZ2xlXG4gKiBib3JkZXIgcmFkaXVzIHZhbHVlIGlzIHNldCBvbiAuaW9uLXBhZ2UsIHRoaXNcbiAqIGlzc3VlIGRvZXMgbm90IGhhcHBlbi4gV2Ugc2V0IHRoZSB0b3AgbGVmdCByYWRpdXNcbiAqIGhlcmUgYmVjYXVzZSB0aGUgdG9wIGxlZnQgY29ybmVyIHdpbGwgYWx3YXlzIGhhdmUgYVxuICogcmFkaXVzIG5vIG1hdHRlciB0aGUgcGxhdGZvcm0uXG4gKiBUaGlzIGJlaGF2aW9yIG9ubHkgYXBwbGllcyB0byBjYXJkIG1vZGFscy5cbiAqL1xuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgLmlvbi1wYWdlIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjM2RjMmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDYxLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlLCAjMzZhYmUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItdGVydGlhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM1MjYwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCA4MiwgOTYsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNDg1NGUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCwgIzYzNzBmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zdWNjZXNzIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQzNmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjNDJkNzdkKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXdhcm5pbmcge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZywgI2ZmYzQwOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LCAxOTYsIDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSwgI2UwYWMwOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmY2EyMikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYW5nZXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZWI0NDVhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDIzNSwgNjgsIDkwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUsICNjZjNjNGYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2VkNTc2YikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbWVkaXVtIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzkyOTQ5YykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNDYsIDE0OCwgMTU2KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4MDgyODkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgIzlkOWZhNikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYXJrIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LCAzNiwgNDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDA7XG59XG5cbi5zcGxpdC1wYW5lLXZpc2libGUgPiAuaW9uLXBhZ2Uuc3BsaXQtcGFuZS1tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tcm91dGUsXG5pb24tcm91dGUtcmVkaXJlY3QsXG5pb24tcm91dGVyLFxuaW9uLXNlbGVjdC1vcHRpb24sXG5pb24tbmF2LWNvbnRyb2xsZXIsXG5pb24tbWVudS1jb250cm9sbGVyLFxuaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLFxuaW9uLWFsZXJ0LWNvbnRyb2xsZXIsXG5pb24tbG9hZGluZy1jb250cm9sbGVyLFxuaW9uLW1vZGFsLWNvbnRyb2xsZXIsXG5pb24tcGlja2VyLWNvbnRyb2xsZXIsXG5pb24tcG9wb3Zlci1jb250cm9sbGVyLFxuaW9uLXRvYXN0LWNvbnRyb2xsZXIsXG4uaW9uLXBhZ2UtaGlkZGVuLFxuW2hpZGRlbl0ge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYW4tZ28tYmFjayA+IGlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwucGx0LWlvcy5wbHQtaHlicmlkLCBodG1sLnBsdC1pb3MucGx0LXB3YSB7XG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZyk7XG4gIH1cbn1cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5pb24tY2FyZC5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yLFxuaW9uLWNhcmQtaGVhZGVyLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3Ige1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1lbnUtY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgIDAsICAwKTtcbn1cblxuLm1lbnUtY29udGVudC1vcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5pb3MgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiAtOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG5bZGlyPXJ0bF0uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQgPiBpb24tYWNjb3JkaW9uOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAuYWNjb3JkaW9uLWdyb3VwLWV4cGFuZC1pbnNldCA+IGlvbi1hY2NvcmRpb246bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLWdyb3VwID4gaW9uLWFjY29yZGlvbjpsYXN0LW9mLXR5cGUgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1hbmltYXRlZCA+IFtzbG90PWhlYWRlcl0gLmlvbi1hY2NvcmRpb24tdG9nZ2xlLWljb24ge1xuICB0cmFuc2l0aW9uOiAzMDBtcyB0cmFuc2Zvcm0gY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC41LCAxKTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaW9uLWFjY29yZGlvbiAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4vKipcbiAqIFRoZSA+IFtzbG90PVwiaGVhZGVyXCJdIHNlbGVjdG9yIGVuc3VyZXMgdGhhdCB3ZSBkb1xuICogbm90IG1vZGlmeSB0b2dnbGUgaWNvbnMgZm9yIGFueSBuZXN0ZWQgYWNjb3JkaW9ucy4gVGhlIHN0YXRlXG4gKiBvZiBvbmUgYWNjb3JkaW9uIHNob3VsZCBub3QgYWZmZWN0IGFueSBhY2NvcmRpb25zIGluc2lkZVxuICogb2YgYSBuZXN0ZWQgYWNjb3JkaW9uIGdyb3VwLlxuICovXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcgPiBbc2xvdD1oZWFkZXJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uLFxuaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kZWQgPiBbc2xvdD1oZWFkZXJdIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tcHJldmlvdXMgaW9uLWl0ZW1bc2xvdD1oZWFkZXJdIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cC5hY2NvcmRpb24tZ3JvdXAtZXhwYW5kLWluc2V0Lm1kID4gaW9uLWFjY29yZGlvbi5hY2NvcmRpb24tZXhwYW5kaW5nOmZpcnN0LW9mLXR5cGUsXG5pb24tYWNjb3JkaW9uLWdyb3VwLmFjY29yZGlvbi1ncm91cC1leHBhbmQtaW5zZXQubWQgPiBpb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaW9uLWlucHV0IGlucHV0Ojotd2Via2l0LWRhdGUtYW5kLXRpbWUtdmFsdWUge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9Y29yZS5jc3MubWFwICovXG4iLCJAaW1wb3J0IFwiLi9pb25pYy5kZXByZWNhdGlvblwiO1xuXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuXG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGNvbnRlbnQ6IFwiXCI7XG5cbiAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xuICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcblxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICBAY29udGVudDtcblxuICAvLyAkcm9vdDogI3smfTtcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAvLyAgICN7JHJvb3R9IHtcbiAgLy8gICAgIEBjb250ZW50O1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG5AbWl4aW4gcnRsKCkge1xuICAkcm9vdDogI3smfTtcblxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsdHIoKSB7XG4gIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcblxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcblxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgfSBAZWxzZSB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgQGF0LXJvb3Qge1xuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xuICAgICAgICAmIHtcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICN7JHByb3B9LXRvcDogJHRvcDtcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICByaWdodDogJHN0YXJ0O1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgdG9wOiAkdG9wO1xuICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAkb3RoZXItZGlyOiBudWxsO1xuXG4gIEBpZiAkZGlyID09IGx0ciB7XG4gICAgJG90aGVyLWRpcjogcnRsO1xuICB9IEBlbHNlIHtcbiAgICAkb3RoZXItZGlyOiBsdHI7XG4gIH1cblxuICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgZGlyZWN0aW9uOiAkZGlyO1xuICB9XG4gIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gIH1cbn1cblxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICRleHRyYTogbnVsbDtcblxuICAkeDogbnVsbDtcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuLy8gR2xvYmFsIFV0aWxpdHkgRnVuY3Rpb25zXG5AaW1wb3J0IFwiLi9pb25pYy5mdW5jdGlvbnMuc3RyaW5nXCI7XG5cbi8vIEdsb2JhbCBDb2xvciBGdW5jdGlvbnNcbkBpbXBvcnQgXCIuL2lvbmljLmZ1bmN0aW9ucy5jb2xvclwiO1xuXG4vLyBHbG9iYWwgTWl4aW5zXG5AaW1wb3J0IFwiLi9pb25pYy5taXhpbnNcIjtcblxuLy8gRGVmYXVsdCBUaGVtZVxuQGltcG9ydCBcIi4vaW9uaWMudGhlbWUuZGVmYXVsdFwiO1xuXG5cbi8vIERlZmF1bHQgR2VuZXJhbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICAgICAgIHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBhcHAgZGlyZWN0aW9uXG4kYXBwLWRpcmVjdGlvbjogbnVsbCAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGZvbnQgcGF0aFxuJGZvbnQtcGF0aDogXCIvZGlzdC9mb250c1wiICFkZWZhdWx0O1xuXG4vLyBIYWlybGluZXMgd2lkdGhcbiRoYWlybGluZXMtd2lkdGg6IC41NXB4ICFkZWZhdWx0O1xuXG4vLyBUaGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vIFotSW5kZXhcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHcm91cGVkIGJ5IGVsZW1lbnRzIHdoaWNoIHdvdWxkIGJlIHNpYmxpbmdzXG5cbiR6LWluZGV4LW1lbnUtb3ZlcmxheTogICAgICAgICAgIDEwMDA7XG4kei1pbmRleC1vdmVybGF5OiAgICAgICAgICAgICAgICAxMDAxO1xuJHotaW5kZXgtY2xpY2stYmxvY2s6ICAgICAgICAgICAgOTk5OTk7XG5cbiR6LWluZGV4LWZpeGVkLWNvbnRlbnQ6ICAgICAgICAgIDk5OTtcbiR6LWluZGV4LXNjcm9sbC1jb250ZW50OiAgICAgICAgIDE7XG4kei1pbmRleC1yZWZyZXNoZXI6ICAgICAgICAgICAgICAtMTtcblxuJHotaW5kZXgtcGFnZS1jb250YWluZXI6ICAgICAgICAgMDtcbiR6LWluZGV4LXRvb2xiYXI6ICAgICAgICAgICAgICAgIDEwO1xuJHotaW5kZXgtdG9vbGJhci1iYWNrZ3JvdW5kOiAgICAgLTE7XG4kei1pbmRleC10b29sYmFyLWJ1dHRvbnM6ICAgICAgICA5OTtcblxuJHotaW5kZXgtYmFja2Ryb3A6ICAgICAgICAgICAgICAgMjtcbiR6LWluZGV4LW92ZXJsYXktd3JhcHBlcjogICAgICAgIDEwO1xuXG4kei1pbmRleC1pdGVtLW9wdGlvbnM6ICAgICAgICAgICAxO1xuJHotaW5kZXgtaXRlbS1pbnB1dDogICAgICAgICAgICAgMjtcbiR6LWluZGV4LWl0ZW0tZGl2aWRlcjogICAgICAgICAgIDEwMDtcblxuJHotaW5kZXgtcmVvcmRlci1zZWxlY3RlZDogICAgICAgMTAwO1xuIiwiQGltcG9ydCBcIi4uLy4uL3RoZW1lcy9pb25pYy5nbG9iYWxzLmlvc1wiO1xuXG4vLyBpT1MgTWVudVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8vIEBwcm9wIC0gQmFja2dyb3VuZCBvZiB0aGUgbWVudVxuJG1lbnUtaW9zLWJhY2tncm91bmQ6ICAgICAgICAgICAgJGJhY2tncm91bmQtY29sb3IgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgY29sb3Igb2YgdGhlIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LWNvbG9yOiAgICAgIHJnYmEoMCwgMCwgMCwgLjA4KSAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgbWVudVxuJG1lbnUtaW9zLWJveC1zaGFkb3c6ICAgICAgICAgICAgLThweCAwIDQycHggJG1lbnUtaW9zLWJveC1zaGFkb3ctY29sb3IgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIG1lbnUgaW4gcnRsIG1vZGVcbiRtZW51LWlvcy1ib3gtc2hhZG93LXJ0bDogICAgICAgIDhweCAwIDQycHggJG1lbnUtaW9zLWJveC1zaGFkb3ctY29sb3IgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIHJldmVhbCBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1yZXZlYWw6ICAgICAkbWVudS1pb3MtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgcmV2ZWFsIG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LXJldmVhbC1ydGw6ICRtZW51LWlvcy1ib3gtc2hhZG93LXJ0bCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gQm94IHNoYWRvdyBvZiB0aGUgcHVzaCBtZW51XG4kbWVudS1pb3MtYm94LXNoYWRvdy1wdXNoOiAgICAgICBudWxsICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBCb3ggc2hhZG93IG9mIHRoZSBvdmVybGF5IG1lbnVcbiRtZW51LWlvcy1ib3gtc2hhZG93LW92ZXJsYXk6ICAgIG51bGwgIWRlZmF1bHQ7XG4iLCJAaW1wb3J0IFwiLi4vLi4vdGhlbWVzL2lvbmljLmdsb2JhbHMubWRcIjtcblxuLy8gTWF0ZXJpYWwgRGVzaWduIE1lbnVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vLyBAcHJvcCAtIEJhY2tncm91bmQgb2YgdGhlIG1lbnVcbiRtZW51LW1kLWJhY2tncm91bmQ6ICAgICAgICAgICAgJGJhY2tncm91bmQtY29sb3IgIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEJveCBzaGFkb3cgb2YgdGhlIG1lbnVcbiRtZW51LW1kLWJveC1zaGFkb3c6ICAgICAgICAgICAgNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCkgIWRlZmF1bHQ7XG4iLCIvLyAhIG5vcm1hbGl6ZS5jc3MgdjMuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzc1xuXG5cbi8vIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIDEuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYHByb2dyZXNzYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbmF1ZGlvLFxuY2FudmFzLFxucHJvZ3Jlc3MsXG52aWRlbyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLy8gMVxufVxuXG4vLyBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxuLy8gUmVtb3ZlIGV4Y2VzcyBoZWlnaHQgaW4gaU9TIDUgZGV2aWNlcy5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgaGVpZ2h0OiAwO1xufVxuXG5cbi8vIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLy8gRW1iZWRkZWQgY29udGVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gUmVtb3ZlIGJvcmRlciB3aGVuIGluc2lkZSBgYWAgZWxlbWVudCBpbiBJRSA4LzkvMTAuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBDb3JyZWN0IG92ZXJmbG93IG5vdCBoaWRkZW4gaW4gSUUgOS8xMC8xMS5cbnN2Zzpub3QoOnJvb3QpIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4vLyBHcm91cGluZyBjb250ZW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG5cbiAgYm9yZGVyLXdpZHRoOiAwO1xuXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4vLyBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cbnByZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vLyBBZGRyZXNzIG9kZCBgZW1gLXVuaXQgZm9udCBzaXplIHJlbmRlcmluZyBpbiBhbGwgYnJvd3NlcnMuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cblxuLy8gRm9ybXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXG4vLyBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXG5cbi8vIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxuLy8gMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cbi8vIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxuLy9cblxubGFiZWwsXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgaGVpZ2h0OiBhdXRvO1xuXG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuZm9ybSxcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3Qge1xuICBtYXJnaW46IDA7IC8vIDNcblxuICBmb250OiBpbmhlcml0OyAvLyAyXG4gIGNvbG9yOiBpbmhlcml0OyAvLyAxXG59XG5cbi8vIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXG4vLyAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cbi8vIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cbi8vIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXG4vLyAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXG5odG1sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIC8vIDFcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7IC8vIDNcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLy8gMlxufVxuXG4vLyByZW1vdmUgMzAwbXMgZGVsYXlcbmEsXG5hIGRpdixcbmEgc3BhbixcbmEgaW9uLWljb24sXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbixcbmJ1dHRvbiBkaXYsXG5idXR0b24gc3BhbixcbmJ1dHRvbiBpb24taWNvbixcbmJ1dHRvbiBpb24tbGFiZWwsXG4uaW9uLXRhcHBhYmxlLFxuW3RhcHBhYmxlXSxcblt0YXBwYWJsZV0gZGl2LFxuW3RhcHBhYmxlXSBzcGFuLFxuW3RhcHBhYmxlXSBpb24taWNvbixcblt0YXBwYWJsZV0gaW9uLWxhYmVsLFxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbiBpb24tbGFiZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuW3RhcHBhYmxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy8gUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cbmFbZGlzYWJsZWRdLFxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxuLy8gMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cbi8vIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBwYWRkaW5nOiAwOyAvLyAyXG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLy8gMVxufVxuXG4vLyBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxuLy8gYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcbi8vIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cbi8vIFNhZmFyaSAoYnV0IG5vdCBDaHJvbWUpIGNsaXBzIHRoZSBjYW5jZWwgYnV0dG9uIHdoZW4gdGhlIHNlYXJjaCBpbnB1dCBoYXNcbi8vIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5cbi8vIFRhYmxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xuXG4vLyBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cbiIsImF1ZGlvLFxuY2FudmFzLFxucHJvZ3Jlc3MsXG52aWRlbyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbnByZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbmxhYmVsLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuZm9ybSxcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3Qge1xuICBtYXJnaW46IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9cmVzZXRdLFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuYSxcbmEgZGl2LFxuYSBzcGFuLFxuYSBpb24taWNvbixcbmEgaW9uLWxhYmVsLFxuYnV0dG9uLFxuYnV0dG9uIGRpdixcbmJ1dHRvbiBzcGFuLFxuYnV0dG9uIGlvbi1pY29uLFxuYnV0dG9uIGlvbi1sYWJlbCxcbi5pb24tdGFwcGFibGUsXG5bdGFwcGFibGVdLFxuW3RhcHBhYmxlXSBkaXYsXG5bdGFwcGFibGVdIHNwYW4sXG5bdGFwcGFibGVdIGlvbi1pY29uLFxuW3RhcHBhYmxlXSBpb24tbGFiZWwsXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbmEgaW9uLWxhYmVsLFxuYnV0dG9uIGlvbi1sYWJlbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuW3RhcHBhYmxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYVtkaXNhYmxlZF0sXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuXG4vLyBTdHJ1Y3R1cmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBZGRzIHN0cnVjdHVyYWwgY3NzIHRvIHRoZSBuYXRpdmUgaHRtbCBlbGVtZW50c1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbn1cblxuaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuaHRtbDpub3QoLmh5ZHJhdGVkKSBib2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbC5pb24tY2UgYm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1wd2Ege1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgQGluY2x1ZGUgZm9udC1zbW9vdGhpbmcoKTtcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xuICBAaW5jbHVkZSBwYWRkaW5nKDApO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcblxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG5cbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuXG4gIC1tcy1jb250ZW50LXpvb21pbmc6IG5vbmU7XG5cbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteTogbm9uZTtcblxuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuaHRtbDpub3QoLmh5ZHJhdGVkKSBib2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbC5pb24tY2UgYm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sLnBsdC1wd2Ege1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAtbXMtY29udGVudC16b29taW5nOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteTogbm9uZTtcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3RydWN0dXJlLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cbi8vIFR5cG9ncmFwaHlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vLyBAcHJvcCAtIEZvbnQgd2VpZ2h0IG9mIGFsbCBoZWFkaW5nc1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgIDUwMCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gTGluZSBoZWlnaHQgb2YgYWxsIGhlYWRpbmdzXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAgMS4yICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCAxXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMjZweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgMlxuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDI0cHggIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDNcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICAyMnB4ICFkZWZhdWx0O1xuXG4vLy8gQHByb3AgLSBGb250IHNpemUgb2YgaGVhZGluZyBsZXZlbCA0XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuLy8vIEBwcm9wIC0gRm9udCBzaXplIG9mIGhlYWRpbmcgbGV2ZWwgNVxuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgIDE4cHggIWRlZmF1bHQ7XG5cbi8vLyBAcHJvcCAtIEZvbnQgc2l6ZSBvZiBoZWFkaW5nIGxldmVsIDZcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAxNnB4ICFkZWZhdWx0O1xuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG59XG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlKTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgQGluY2x1ZGUgbWFyZ2luKDE2cHgsIG51bGwsIDEwcHgsIG51bGwpO1xuXG4gIGZvbnQtd2VpZ2h0OiAkaGVhZGluZ3MtZm9udC13ZWlnaHQ7XG5cbiAgbGluZS1oZWlnaHQ6ICRoZWFkaW5ncy1saW5lLWhlaWdodDtcbn1cblxuaDEge1xuICBAaW5jbHVkZSBtYXJnaW4oMjBweCwgbnVsbCwgbnVsbCwgbnVsbCk7XG5cbiAgZm9udC1zaXplOiAkaDEtZm9udC1zaXplO1xufVxuXG5oMiB7XG4gIEBpbmNsdWRlIG1hcmdpbigxOHB4LCBudWxsLCBudWxsLCBudWxsKTtcblxuICBmb250LXNpemU6ICRoMi1mb250LXNpemU7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAkaDMtZm9udC1zaXplO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogJGg0LWZvbnQtc2l6ZTtcbn1cblxuaDUge1xuICBmb250LXNpemU6ICRoNS1mb250LXNpemU7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAkaDYtZm9udC1zaXplO1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xufVxuXG5zdWIsXG5zdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZm9udC1zaXplOiA3NSU7XG5cbiAgbGluZS1oZWlnaHQ6IDA7XG5cbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuICB0b3A6IC0uNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0uMjVlbTtcbn1cbiIsImh0bWwge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5oMiB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmgzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xufVxuXG5zdWIsXG5zdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10eXBvZ3JhcGh5LmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuc2tpcC13YXJucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vdGhlbWVzL2lvbmljLmdsb2JhbHNcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMubWl4aW5zXCI7XG5cbi8vIERpc3BsYXlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNb2RpZmllcyBkaXNwbGF5IG9mIGEgcGFydGljdWxhciBlbGVtZW50IGJhc2VkIG9uIHRoZSBnaXZlbiBjbGFzc2VzXG5cbi5pb24taGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLy8gQWRkcyBoaWRkZW4gY2xhc3Nlc1xuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGBpb24taGlkZS17YnB9LXVwYCBjbGFzc2VzIGZvciBoaWRpbmcgdGhlIGVsZW1lbnQgYmFzZWRcbiAgICAvLyBvbiB0aGUgYnJlYWtwb2ludFxuICAgIC5pb24taGlkZSN7JGluZml4fS11cCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicmVha3BvaW50LCAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICAgLy8gUHJvdmlkZSBgaW9uLWhpZGUte2JwfS1kb3duYCBjbGFzc2VzIGZvciBoaWRpbmcgdGhlIGVsZW1lbnQgYmFzZWRcbiAgICAvLyBvbiB0aGUgYnJlYWtwb2ludFxuICAgIC5pb24taGlkZSN7JGluZml4fS1kb3duIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIi5pb24taGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1oaWRlLXVwIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWhpZGUtZG93biB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24taGlkZS1zbS11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLXNtLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24taGlkZS1tZC11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLW1kLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24taGlkZS1sZy11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmlvbi1oaWRlLWxnLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLWhpZGUteGwtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaW9uLWhpZGUteGwtZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3BsYXkuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuXG4vLyBFbGVtZW50IFNwYWNlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ3JlYXRlcyBwYWRkaW5nIGFuZCBtYXJnaW4gYXR0cmlidXRlcyB0byBiZSB1c2VkIG9uXG4vLyBhbnkgZWxlbWVudFxuXG4kcGFkZGluZzogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuJG1hcmdpbjogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG5cbi8vIFBhZGRpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tbm8tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcblxuICBAaW5jbHVkZSBwYWRkaW5nKDApO1xufVxuXG4uaW9uLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctZW5kOiAjeyRwYWRkaW5nfTtcbiAgLS1wYWRkaW5nLXRvcDogI3skcGFkZGluZ307XG4gIC0tcGFkZGluZy1ib3R0b206ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xufVxuXG4uaW9uLXBhZGRpbmctdG9wIHtcbiAgLS1wYWRkaW5nLXRvcDogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZygkcGFkZGluZywgbnVsbCwgbnVsbCwgbnVsbCk7XG59XG5cbi5pb24tcGFkZGluZy1zdGFydCB7XG4gIC0tcGFkZGluZy1zdGFydDogI3skcGFkZGluZ307XG5cbiAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRwYWRkaW5nLCBudWxsKTtcbn1cblxuLmlvbi1wYWRkaW5nLWVuZCB7XG4gIC0tcGFkZGluZy1lbmQ6ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbChudWxsLCAkcGFkZGluZyk7XG59XG5cbi5pb24tcGFkZGluZy1ib3R0b20ge1xuICAtLXBhZGRpbmctYm90dG9tOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nKG51bGwsIG51bGwsICRwYWRkaW5nLCBudWxsKTtcbn1cblxuLmlvbi1wYWRkaW5nLXZlcnRpY2FsIHtcbiAgLS1wYWRkaW5nLXRvcDogI3skcGFkZGluZ307XG4gIC0tcGFkZGluZy1ib3R0b206ICN7JHBhZGRpbmd9O1xuXG4gIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcsIG51bGwsICRwYWRkaW5nLCBudWxsKTtcbn1cblxuLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAtLXBhZGRpbmctc3RhcnQ6ICN7JHBhZGRpbmd9O1xuICAtLXBhZGRpbmctZW5kOiAjeyRwYWRkaW5nfTtcblxuICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHBhZGRpbmcpO1xufVxuXG5cbi8vIE1hcmdpblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1uby1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogMDtcbiAgLS1tYXJnaW4tZW5kOiAwO1xuICAtLW1hcmdpbi10b3A6IDA7XG4gIC0tbWFyZ2luLWJvdHRvbTogMDtcblxuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG59XG5cbi5pb24tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6ICN7JG1hcmdpbn07XG4gIC0tbWFyZ2luLWVuZDogI3skbWFyZ2lufTtcbiAgLS1tYXJnaW4tdG9wOiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi1ib3R0b206ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luKCRtYXJnaW4pO1xufVxuXG4uaW9uLW1hcmdpbi10b3Age1xuICAtLW1hcmdpbi10b3A6ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luKCRtYXJnaW4sIG51bGwsIG51bGwsIG51bGwpO1xufVxuXG4uaW9uLW1hcmdpbi1zdGFydCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAjeyRtYXJnaW59O1xuXG4gIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRtYXJnaW4sIG51bGwpO1xufVxuXG4uaW9uLW1hcmdpbi1lbmQge1xuICAtLW1hcmdpbi1lbmQ6ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwobnVsbCwgJG1hcmdpbik7XG59XG5cbi5pb24tbWFyZ2luLWJvdHRvbSB7XG4gIC0tbWFyZ2luLWJvdHRvbTogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4obnVsbCwgbnVsbCwgJG1hcmdpbiwgbnVsbCk7XG59XG5cbi5pb24tbWFyZ2luLXZlcnRpY2FsIHtcbiAgLS1tYXJnaW4tdG9wOiAjeyRtYXJnaW59O1xuICAtLW1hcmdpbi1ib3R0b206ICN7JG1hcmdpbn07XG5cbiAgQGluY2x1ZGUgbWFyZ2luKCRtYXJnaW4sIG51bGwsICRtYXJnaW4sIG51bGwpO1xufVxuXG4uaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgLS1tYXJnaW4tc3RhcnQ6ICN7JG1hcmdpbn07XG4gIC0tbWFyZ2luLWVuZDogI3skbWFyZ2lufTtcblxuICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkbWFyZ2luKTtcbn0iLCIuaW9uLW5vLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaW9uLXBhZGRpbmcge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctdG9wIHtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLXN0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLXN0YXJ0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLWVuZCB7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLWVuZCB7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy1ib3R0b20ge1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctdmVydGljYWwge1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy1ob3Jpem9udGFsIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZy1ob3Jpem9udGFsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbm8tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IDA7XG4gIC0tbWFyZ2luLWVuZDogMDtcbiAgLS1tYXJnaW4tdG9wOiAwO1xuICAtLW1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pb24tbWFyZ2luIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1tYXJnaW4tdG9wIHtcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi1zdGFydCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4tc3RhcnQge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1tYXJnaW4tZW5kIHtcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luLWVuZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi1ib3R0b20ge1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLXZlcnRpY2FsIHtcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4taG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXBhZGRpbmcuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gRmxvYXQgRWxlbWVudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIGZsb2F0IGNsYXNzZXMgYmFzZWQgb24gc2NyZWVuIHNpemVcblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGAuaW9uLWZsb2F0LXticH0te3NpZGV9YCBjbGFzc2VzIGZvciBmbG9hdGluZyB0aGUgZWxlbWVudCBiYXNlZFxuICAgIC8vIG9uIHRoZSBicmVha3BvaW50IGFuZCBzaWRlXG4gICAgLmlvbi1mbG9hdCN7JGluZml4fS1sZWZ0IHtcbiAgICAgIEBpbmNsdWRlIGZsb2F0KGxlZnQsICFpbXBvcnRhbnQpO1xuICAgIH1cblxuICAgIC5pb24tZmxvYXQjeyRpbmZpeH0tcmlnaHQge1xuICAgICAgQGluY2x1ZGUgZmxvYXQocmlnaHQsICFpbXBvcnRhbnQpO1xuICAgIH1cblxuICAgIC5pb24tZmxvYXQjeyRpbmZpeH0tc3RhcnQge1xuICAgICAgQGluY2x1ZGUgZmxvYXQoc3RhcnQsICFpbXBvcnRhbnQpO1xuICAgIH1cblxuICAgIC5pb24tZmxvYXQjeyRpbmZpeH0tZW5kIHtcbiAgICAgIEBpbmNsdWRlIGZsb2F0KGVuZCwgIWltcG9ydGFudCk7XG4gICAgfVxuICB9XG59XG4iLCIuaW9uLWZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtc3RhcnQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuW2Rpcj1ydGxdIC5pb24tZmxvYXQtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXN0YXJ0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtZW5kIHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWVuZCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLWZsb2F0LXNtLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXNtLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXNtLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXNtLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tZmxvYXQtbWQtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbWQtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1tZC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbWQtZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi1mbG9hdC1sZy1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1sZy1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi1mbG9hdC14bC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC14bC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC14bC1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC14bC1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxvYXQtZWxlbWVudHMuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gVGV4dCBBbGlnbm1lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGVzIHRleHQgYWxpZ25tZW50IGF0dHJpYnV0ZXMgYmFzZWQgb24gc2NyZWVuIHNpemVcblxuQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkaW5maXg6IGJyZWFrcG9pbnQtaW5maXgoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpO1xuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgICAvLyBQcm92aWRlIGAuaW9uLXRleHQte2JwfWAgY2xhc3NlcyBmb3IgYWxpZ25pbmcgdGhlIHRleHQgYmFzZWRcbiAgICAvLyBvbiB0aGUgYnJlYWtwb2ludFxuICAgIC5pb24tdGV4dCN7JGluZml4fS1jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWp1c3RpZnkge1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1zdGFydCB7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1lbmQge1xuICAgICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlvbi10ZXh0I3skaW5maXh9LWxlZnQge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1yaWdodCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1ub3dyYXAge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS13cmFwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbiIsIi5pb24tdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1zdGFydCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1ub3dyYXAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC13cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi10ZXh0LXNtLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tdGV4dC1tZC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLXRleHQtbGctY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tdGV4dC14bC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC1hbGlnbm1lbnQuY3NzLm1hcCAqL1xuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5za2lwLXdhcm5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi90aGVtZXMvaW9uaWMuZ2xvYmFsc1wiO1xuQGltcG9ydCBcIi4uL3RoZW1lcy9pb25pYy5taXhpbnNcIjtcblxuLy8gVGV4dCBUcmFuc2Zvcm1hdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgdGV4dCB0cmFuc2Zvcm0gYXR0cmlidXRlcyBiYXNlZCBvbiBzY3JlZW4gc2l6ZVxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRpbmZpeDogYnJlYWtwb2ludC1pbmZpeCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cyk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJHNjcmVlbi1icmVha3BvaW50cykge1xuICAgIC8vIFByb3ZpZGUgYC5pb24tdGV4dC17YnB9YCBjbGFzc2VzIGZvciB0cmFuc2Zvcm1pbmcgdGhlIHRleHQgYmFzZWRcbiAgICAvLyBvbiB0aGUgYnJlYWtwb2ludFxuICAgIC5pb24tdGV4dCN7JGluZml4fS11cHBlcmNhc2Uge1xuICAgICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1sb3dlcmNhc2Uge1xuICAgICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pb24tdGV4dCN7JGluZml4fS1jYXBpdGFsaXplIHtcbiAgICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIuaW9uLXRleHQtdXBwZXJjYXNlIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1sb3dlcmNhc2Uge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWNhcGl0YWxpemUge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLXRleHQtc20tdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tdGV4dC1tZC11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi10ZXh0LWxnLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi10ZXh0LXhsLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MubWFwICovXG4iLCIvLyBGbGV4IFV0aWxpdGllc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENyZWF0ZXMgZmxleCBjbGFzc2VzIHRvIGFsaWduIGZsZXggY29udGFpbmVyc1xuLy8gYW5kIGl0ZW1zXG5cbi8vIEFsaWduIFNlbGZcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tYWxpZ24tc2VsZi1zdGFydCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLXN0cmV0Y2gge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1hdXRvIHtcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xufVxuXG5cbi8vIEZsZXggV3JhcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi13cmFwLXJldmVyc2Uge1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50O1xufVxuXG5cbi8vIEp1c3RpZnkgQ29udGVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWV2ZW5seSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gQWxpZ24gSXRlbXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi5pb24tYWxpZ24taXRlbXMtc3RhcnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1zdHJldGNoIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuIiwiLmlvbi1hbGlnbi1zZWxmLXN0YXJ0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtZW5kIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtc3RyZXRjaCB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWJhc2VsaW5lIHtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWF1dG8ge1xuICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5pb24td3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLW5vd3JhcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24td3JhcC1yZXZlcnNlIHtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWV2ZW5seSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RhcnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1zdHJldGNoIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1mbGV4LXV0aWxzLmNzcy5tYXAgKi9cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9nbG9iYWwuc2Nzc1wiO1xuXG4uYm94LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */";

/***/ }),

/***/ 25076:
/*!**********************************************************************!*\
  !*** ./src/app/components/user/my-account/my-account.component.scss ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".label {\n  text-align: left;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.dataUserBox {\n  padding: 0px;\n  padding-left: 1rem;\n}\n\n.card-account {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRhdGFVc2VyQm94IHtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5jYXJkLWFjY291bnR7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 93090:
/*!******************************************************************!*\
  !*** ./src/app/components/user/my-debts/my-debts.component.scss ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "table {\n  color: white;\n}\n\n.row-title {\n  background-color: #414a42;\n}\n\n.content-modal {\n  margin: 10px;\n}\n\n.main-center {\n  margin-left: 10px;\n  margin-right: 10px;\n  width: 95% !important;\n}\n\n.main-center .button-native {\n  background-color: #198754 !important;\n  border: none;\n  box-shadow: none;\n}\n\n.label-total {\n  margin-right: 10px;\n}\n\n.total-container {\n  padding-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWRlYnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6Im15LWRlYnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5yb3ctdGl0bGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDE0YTQyO1xufVxuXG4uY29udGVudC1tb2RhbHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5tYWluLWNlbnRlcntcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jZW50ZXIgLmJ1dHRvbi1uYXRpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5ODc1NCAhaW1wb3J0YW50OyAgICBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmxhYmVsLXRvdGFse1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvdGFsLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59Il19 */";

/***/ }),

/***/ 30122:
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-create/user-create.component.scss ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-card {\n  background-color: #2e2d2d;\n  color: #fff;\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nion-list {\n  overflow: hidden;\n  overflow-y: auto;\n}\n\nion-list ::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDRixXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFBRTtFQUNFLGFBQUE7QUFFSiIsImZpbGUiOiJ1c2VyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICBjb2xvcjogI2ZmZjtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLWxpc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 7655:
/*!********************************************************************!*\
  !*** ./src/app/components/user/user-form/user-form.component.scss ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".formMargin {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0FBQUoiLCJmaWxlIjoidXNlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9ybU1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuICB9Il19 */";

/***/ }),

/***/ 39223:
/*!*******************************************************************************!*\
  !*** ./src/app/components/workout/periodization/periodization.component.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".label-goal {\n  color: #888888;\n}\n\n.goal {\n  color: #000000;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmlvZGl6YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJwZXJpb2RpemF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsLWdvYWwge1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLmdvYWwge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cblxuLndlZWstbnVtYmVye1xuXG59Il19 */";

/***/ }),

/***/ 53324:
/*!*****************************************************************!*\
  !*** ./src/app/components/workout/rating/rating.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "input[type=range] {\n  margin: auto;\n  -webkit-appearance: none;\n  position: relative;\n  overflow: hidden;\n  height: 60px;\n  width: 200px;\n  cursor: pointer;\n  border-radius: 0.25rem;\n}\n\n::-webkit-slider-runnable-track {\n  background: #ddd;\n}\n\n/*\n * 1. Set to 0 width and remove border for a slider without a thumb\n */\n\n::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 30px;\n  /* 1 */\n  height: 60px;\n  background: #fff;\n  box-shadow: -100vw 0 0 100vw #459420;\n  border: 2px solid #999;\n  /* 1 */\n}\n\n::-moz-range-track {\n  height: 60px;\n  background: #ddd;\n}\n\n::-moz-range-thumb {\n  background: #fff;\n  height: 60px;\n  width: 20px;\n  border: 3px solid #999;\n  border-radius: 0.25rem;\n  box-shadow: -100vw 0 0 100vw #459420;\n  box-sizing: border-box;\n}\n\n::-ms-fill-lower {\n  background: #459420;\n}\n\n::-ms-thumb {\n  background: #fff;\n  border: 2px solid #999;\n  height: 60px;\n  width: 20px;\n  box-sizing: border-box;\n}\n\n::-ms-ticks-after {\n  display: none;\n}\n\n::-ms-ticks-before {\n  display: none;\n}\n\n::-ms-track {\n  background: #ddd;\n  color: transparent;\n  height: 60px;\n  border: none;\n}\n\n::-ms-tooltip {\n  display: none;\n}\n\n.rate-value {\n  margin-bottom: 20px;\n  font-size: 25px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTs7RUFBQTs7QUFHQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUFhLE1BQUE7RUFDYixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQXdCLE1BQUE7QUFHMUI7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQUdGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0YiLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcbiAgbWFyZ2luOiBhdXRvO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuXG46Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuLypcbiAqIDEuIFNldCB0byAwIHdpZHRoIGFuZCByZW1vdmUgYm9yZGVyIGZvciBhIHNsaWRlciB3aXRob3V0IGEgdGh1bWJcbiAqL1xuOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDMwcHg7IC8qIDEgKi9cbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAtMTAwdncgMCAwIDEwMHZ3IHJnYig2OSwgMTQ4LCAzMik7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7IC8qIDEgKi9cbn1cblxuOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG46Oi1tb3otcmFuZ2UtdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIGJveC1zaGFkb3c6IC0xMDB2dyAwIDAgMTAwdncgcmdiKDY5LCAxNDgsIDMyKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOjotbXMtZmlsbC1sb3dlciB7XG4gIGJhY2tncm91bmQ6IHJnYig2OSwgMTQ4LCAzMik7XG59XG5cbjo6LW1zLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzk5OTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOjotbXMtdGlja3MtYWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46Oi1tcy10aWNrcy1iZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46Oi1tcy10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbjo6LW1zLXRvb2x0aXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmF0ZS12YWx1ZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";

/***/ }),

/***/ 32462:
/*!*************************************************************************!*\
  !*** ./src/app/components/workout/reports/effort/effort.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-card.card-chart {\n  background-color: #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVmZm9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoiZWZmb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQuY2FyZC1jaGFydHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufSJdfQ== */";

/***/ }),

/***/ 16451:
/*!*********************************************************************!*\
  !*** ./src/app/components/workout/wod-week/wod-week.component.scss ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-card {\n  color: white;\n}\n\nion-spinner {\n  margin-bottom: 10px;\n}\n\n.label-date {\n  padding: 10px;\n}\n\n.active-day {\n  color: #25562e;\n  background-color: #cbcdcb;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvZC13ZWVrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoid29kLXdlZWsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFiZWwtZGF0ZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hY3RpdmUtZGF5IHtcbiAgY29sb3I6ICMyNTU2MmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmNkY2I7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */";

/***/ }),

/***/ 14822:
/*!***********************************************************!*\
  !*** ./src/app/components/workout/wod/wod.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".wod-container {\n  color: white;\n}\n\n.wod-group {\n  margin-bottom: 10px;\n  padding: 5px;\n  background-color: #f2f2f7;\n}\n\n.wod-table {\n  margin-bottom: 0px;\n  border-color: #999494;\n  background-color: #dddddd;\n}\n\n.group-detail {\n  display: block;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: black;\n  margin-bottom: 15px;\n}\n\n.video-icon {\n  float: right;\n  color: #e10c0c;\n  width: 20px;\n}\n\n.label-goal {\n  color: #888888;\n}\n\n.goal {\n  color: #000000;\n  margin-left: 10px;\n}\n\ntd.mode-value {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6IndvZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b2QtY29udGFpbmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ud29kLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY3O1xufVxuXG4ud29kLXRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBib3JkZXItY29sb3I6ICM5OTk0OTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5ncm91cC1kZXRhaWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi52aWRlby1pY29ue1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZTEwYzBjO1xuICB3aWR0aDogMjBweDtcbn1cblxuLmxhYmVsLWdvYWwge1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLmdvYWwge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbnRkLm1vZGUtdmFsdWV7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuIl19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map