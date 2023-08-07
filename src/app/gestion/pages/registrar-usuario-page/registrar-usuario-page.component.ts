import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { GestionValidator } from '../../validators';
import { CustomValidator } from 'src/app/shared/validators';
import { DOMUtils, ReactiveFormsUtils } from 'src/app/shared/utils';
import { Router } from '@angular/router';
import { IRegistrar } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario-page',
  templateUrl: './registrar-usuario-page.component.html',
  styleUrls: ['./registrar-usuario-page.component.scss']
})
export class RegistrarUsuarioPageComponent implements OnInit {
  FCNames = EFormControlNames;
  Routes = AppRoutes;

  /**Form actual */
  currentFormTemplate: TemplateRef<any>;

  /**Angular Templates */
  @ViewChild('datosPersonales') datosPersonalesFormTemplate: TemplateRef<any>;
  @ViewChild('rol') rolFormTemplate: TemplateRef<any>;
  @ViewChild('credenciales') credencialesFormTemplate: TemplateRef<any>;

  /**FORM GROUP DATOS PERSONALES */
  datosPersonalesForm: FormGroup = this._fb.group(GestionValidator.RegistrarDatosPersonales, {
    validator: CustomValidator.SelectValueValidator(
      this.FCNames.SEXO,
      'sexoSelected',
      'Elija el sexo',
    ),
  });
  /**FORM GROUP SELECCIÓN ROL */
  seleccionRolForm: FormGroup = this._fb.group(GestionValidator.ElegirRol, {
    validator: CustomValidator.SelectValueValidator(
      this.FCNames.ROL,
      'rolUnselected',
      'Elija el tipo de rol'
    )
  });
  /**FORM GROUP CREDENCIALES SISTEMA */
  credencialesForm: FormGroup = this._fb.group(GestionValidator.RegistrarCredencialesUsuarioSistema);

  formStep: number = 1;
  isFirstFormStep: boolean = true;
  isLastFormStep: boolean = false;
  public readonly firstFormStep = 1;
  public readonly lastFormStep = 3;

  toNextForm: boolean = false;
  toPrevForm: boolean = false;

  /**Clase dinámica de Animate.css para pasar entre forms*/
  formAnimationClass: string = "animate__fadeInRight";

  constructor(
    private readonly _titleService: Title,
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    
    private readonly _authService: AuthService,
  ) {
    this._titleService.setTitle('Registrar Usuario');
  }

  ngOnInit(): void {
    setTimeout(() => {
      DOMUtils.scrollToBottom();
      
      this._determineForm();
    }, 100);
  }

  someInvalidFormGroup(): boolean {
    return this.datosPersonalesForm.invalid || this.seleccionRolForm.invalid || this.credencialesForm.invalid;
  }

  onSubmit($event: Event): void {
    $event.preventDefault();

    const seleccionRol = ReactiveFormsUtils.getControlsAndTheirValues(this.seleccionRolForm);

    const data: IRegistrar = {
      persona: ReactiveFormsUtils.getControlsAndTheirValues(this.datosPersonalesForm),
      credenciales: ReactiveFormsUtils.getControlsAndTheirValues(this.credencialesForm),
      rol: {
        nombre: seleccionRol.rol,
        password: null
      }
    }

    this._authService.registrar(data).subscribe((response) => {
      Swal.fire('Correcto', response.msg, 'success');
      this._router.navigateByUrl(AppRoutes.UsuariosRoutePaths.index);
    });
  }

  next() {
    if (this.formStep >= this.lastFormStep) return;

    this.toNextForm = true;
    this.toPrevForm = false;
    
    this.formAnimationClass = "animate__fadeInRight";
    this.formStep++;
    this._determineForm();
  }

  prev() {
    if (this.formStep <= this.firstFormStep) return;

    this.toPrevForm = true;
    this.toNextForm = false;

    this.formAnimationClass = "animate__fadeInLeft";
    this.formStep--;
    this._determineForm();
  }

  private _determineForm(): void {
    switch (this.formStep) {
      case 1:
        this.currentFormTemplate = this.datosPersonalesFormTemplate;
        break;
      case 2:
        this.currentFormTemplate = this.rolFormTemplate;
        break;
      case 3:
        this.currentFormTemplate = this.credencialesFormTemplate;
        break;
      default: 
        break;
    }

    this._updateFormStepButtonsState();
  }

  private _updateFormStepButtonsState(): void {
    /**Activar o deshabilitar botones */
    if (this.formStep > this.firstFormStep && this.formStep < this.lastFormStep) {
      this.isFirstFormStep = false;
      this.isLastFormStep = false;
    }

    if (this.formStep === this.firstFormStep) {
      this.isFirstFormStep = true;
      this.isLastFormStep = false;
    }
    if (this.formStep === this.lastFormStep) {
      this.isLastFormStep = true;
      this.isFirstFormStep = false;
    }
  }
}
