import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomAlertService } from '../../../../services/custom-alert.service';
import { MemberService } from '../../../../services/member.service';
import { MedicalHistoryFormComponent } from '../medical-history-form/medical-history-form.component';

@Component({
  selector: 'app-medical-history-edit',
  templateUrl: './medical-history-edit.component.html',
  styleUrls: ['./medical-history-edit.component.scss']
})
export class MedicalHistoryEditComponent implements OnInit {
  id: number;
  medicalHistoryId: number;
  age: number;
  planType: number;
  @ViewChild(MedicalHistoryFormComponent, { static: true }) formMedicalHistory: MedicalHistoryFormComponent;
  constructor(private router: Router, private route: ActivatedRoute, private customAlertService: CustomAlertService, private memberService: MemberService) {
    this.route.queryParams.subscribe(
      params => { this.id = parseInt(params['id']) }
    )
  }

  ngOnInit() {
    this.memberService.getById(this.id).subscribe(
      result => {
        console.log(result);
        this.planType = result.planType;
        console.log(this.planType);
      },
      error => console.error(error)
    );
    this.memberService.getAge(this.id).subscribe(
      result => {
        this.age = result.result.age;
        console.log(this.age)
      },
      error => console.error(error)
    );
    this.formMedicalHistory.getMedicalHistoryUpdate(this.id);
  }

  submit() {
    var newMedicalHistory = this.formMedicalHistory.createMedicalHistory();
    this.memberService.updateMedicalHistory(this.formMedicalHistory.medicalHistory.id, newMedicalHistory).subscribe(
      result => {
        if (this.planType == 2) {
          this.router.navigate(['/member-list']);
        } else {
          this.router.navigate(['/injury-history'], { queryParams: { medicalHistoryId: this.formMedicalHistory.medicalHistory.id, id: this.id } });
        }
      },
      error => {
        console.error(error);
        if (error.status === 400) {
          this.customAlertService.displayAlert("Gestión de Socios", error.error.errores);
        }
        if (error.status === 500) {
          this.customAlertService.displayAlert("Gestión de Socios", ["No se pudo guardar la historia médica."]);
        }
      });

  }

}
