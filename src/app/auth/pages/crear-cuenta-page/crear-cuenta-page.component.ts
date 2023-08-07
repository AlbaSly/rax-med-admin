import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GestionValidator } from 'src/app/gestion/validators';
import { EFormControlNames } from 'src/app/shared/constants/form-control-names';
import { AppRoutes } from 'src/app/shared/constants/routes';
import { IRegistrar, IRejectResponse } from 'src/app/shared/interfaces';
import { DOMUtils, ReactiveFormsUtils } from 'src/app/shared/utils';
import { CustomValidator } from 'src/app/shared/validators';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta-page',
  templateUrl: './crear-cuenta-page.component.html',
  styleUrls: ['./crear-cuenta-page.component.scss']
})
export class CrearCuentaPageComponent implements OnInit{

  FCNames = EFormControlNames;
  AppRoutes = AppRoutes;

  /**Form en el momento */
  currentFormTemplate: TemplateRef<any>;

  /**Templates */
  @ViewChild('datosPersonales') datosPersonalesFormTemplate: TemplateRef<any>;
  @ViewChild('credenciales') credencialesFormTemplate: TemplateRef<any>;

  /**Form Group y Validator (datos personales)*/
  datosPersonalesForm: FormGroup = this._fb.group(GestionValidator.RegistrarDatosPersonales, {
    validator: CustomValidator.SelectValueValidator(
      this.FCNames.SEXO,
      'sexoSelected',
      'Elija el sexo'
    ),
  });
  /**Form Group y Validator (datos personales)*/
  credencialesForm: FormGroup = this._fb.group(GestionValidator.RegistrarCredencialesUsuarioSistema);

  formStep: number = 1;
  isFirstFormStep: boolean = true;
  isLastFormStep: boolean = false;
  public readonly firstFormStep = 1;
  public readonly lastFormStep = 2;

  toNextForm: boolean = false;
  toPrevForm: boolean = false;

  /**Clase dinámica de Animate.css para pasar entre forms*/
  formAnimationClass: string = "animate__fadeInRight";


  /**CONSTRUCTOR */
  constructor(
    private readonly _titleService: Title,
    private readonly _fb: FormBuilder,
    private readonly _router: Router,

    private readonly _authService: AuthService,
  ) {
    this._titleService.setTitle('Crear Cuenta (Admin)');
  }

  ngOnInit(): void {
    setTimeout(() => {
      DOMUtils.scrollToBottom();

      this._determineForm();
    }, 100);
  }

  onSubmit($event: Event): void {
    $event.preventDefault();

    Swal.fire({
      title: 'Ingrese la clave para crear cuentas de administrador',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Autorizar',
      showLoaderOnConfirm: true,
      preConfirm: (password) => {

        const data: IRegistrar = {
          persona: ReactiveFormsUtils.getControlsAndTheirValues(this.datosPersonalesForm),
          credenciales: ReactiveFormsUtils.getControlsAndTheirValues(this.credencialesForm),
          rol: {
            nombre: 'ADMINISTRADOR',
            password: password
          }
        }
        /**LLAMADA AL SERVICIO */
        this._authService.registrar(data).subscribe((response) => {
          Swal.fire('Correcto', response.msg, 'success');
          this._router.navigateByUrl(this.AppRoutes.AuthRoutePaths.login);
          return response;
        }, (error) => {
          return error;
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {});
  }

  someInvalidFormGroup(): boolean {
    return this.datosPersonalesForm.invalid || this.credencialesForm.invalid;
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
    switch(this.formStep) {
      case 1:
        this.currentFormTemplate = this.datosPersonalesFormTemplate;
        break;
      case 2:
        this.currentFormTemplate = this.credencialesFormTemplate;
        break;
      default:
        break;
    }

    this._updateFormStepButtonsState();
  }

  private _updateFormStepButtonsState(): void {
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
