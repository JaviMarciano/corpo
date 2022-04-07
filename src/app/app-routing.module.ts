import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { ModalPageComponent } from './components/modal/modal-page/modal-page.component';
import { AttendanceComponent } from './components/report/attendance/attendance.component';
import { MyReservationComponent } from './components/shift/my-reservation/my-reservation.component';
import { ReservationComponent } from './components/shift/reservation/reservation.component';
import { PeriodizationGoalsComponent } from './components/statistics/periodization-goals/periodization-goals.component';
import { PeriodizationReportComponent } from './components/statistics/periodization-report/periodization-report.component';
import { WodGoalsComponent } from './components/statistics/wod-goals/wod-goals.component';
import { EmailEditComponent } from './components/user/email-edit/email-edit.component';
import { InjuryHistoryComponent } from './components/user/medical-history/injury-history/injury-history.component';
import { MedicalHistoryCreateComponent } from './components/user/medical-history/medical-history-create/medical-history-create.component';
import { MedicalHistoryEditComponent } from './components/user/medical-history/medical-history-edit/medical-history-edit.component';
import { MemberCreateComponent } from './components/user/member-create/member-create.component';
import { MemberEditComponent } from './components/user/member-edit/member-edit.component';
import { MyAccountComponent } from './components/user/my-account/my-account.component';
import { MyDebtsComponent } from './components/user/my-debts/my-debts.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { PeriodizationComponent } from './components/workout/periodization/periodization.component';
import { RatingComponent } from './components/workout/rating/rating.component';
import { EffortComponent } from './components/workout/reports/effort/effort.component';
import { WodWeekComponent } from './components/workout/wod-week/wod-week.component';
import { WodComponent } from './components/workout/wod/wod.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'user-create',
    component: UserCreateComponent
  },
  {
    path: 'member-create',
    component: MemberCreateComponent
  },
  {
    path: 'historia-medica-crear',
    component: MedicalHistoryCreateComponent
  },  
  {
    path: 'shift',
    component: MyReservationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'workout-rating',
    component: RatingComponent
  },  
  {
    path: 'my-account',
    component: MyAccountComponent
  },  
  {
    path: 'my-debts',
    component: MyDebtsComponent
  },  
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'member-edit',
    component: MemberEditComponent
  },  
  {
    path: 'medical-history-edit',
    component: MedicalHistoryEditComponent
  },  
  {
    path: 'modal',
    component: ModalPageComponent
  },  
  {
    path: 'email-edit',
    component: EmailEditComponent
  },  
  {
    path: 'injury-history',
    component: InjuryHistoryComponent
  },  
  {
    path: 'attendance',
    component: AttendanceComponent
  },   
  {
    path: 'wod',
    component: WodComponent
  },  
  {
    path: 'wod-week',
    component: WodWeekComponent
  },  
  {
    path: 'effort',
    component: EffortComponent
  }, 
  {
    path: 'periodization-report',
    component: PeriodizationReportComponent
  },
  {
    path: 'goals',
    component: PeriodizationGoalsComponent
  },
  {
    path: 'periodization',
    component: PeriodizationComponent
  }, 
  {
    path: 'wod-goals',
    component: WodGoalsComponent
  }, 
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
