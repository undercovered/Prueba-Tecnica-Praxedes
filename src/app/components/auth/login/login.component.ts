import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/interfaces';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  credenciales: Login;
  constructor(private service: ServiceService,
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.buildForm();
    }
    public buildForm() {
      this.form = this.formBuilder.group({
        password: ['', [Validators.required]],
        companyId: [''],
        username: ['', [Validators.required, Validators.email]],
        desdeMs: [''],
      });
    }


  ngOnInit(): void {
  }
  Login(){ 
    this.credenciales = {
      password: this.form.value.password,
      companyId: "10",
      username: this.form.value.username,
      desdeMs: true
    }
    console.log(this.credenciales);
    this.service.logear(this.credenciales);
  }

}

/*{"usuario":{"apellido":"Dovales","nombre":"Carlos","sexo":null,"fecha":"2022-07-07T12:23:02.037","f_NACE":null,"doctO_IDENT":"1096235380","clasE_DOCTO":null,"expedidO_EN":null,"ciudad":null,"barrio":null,"esT_CIVIL":null,"nrO_HIJOS":null,"direccion":null,"telefono":null,"libreta":null,"distrito":null,"clase":null,"cargo":null,"salario":null,"empleado":null,"dpto":null,"ccosto":null,"seccion":null,"area":null,"nivel":null,"sucursal":null,"ubicacion":null,"grupo":null,"subgrupo":null,"nacionalidad":null,"division":null,"subdivision":null,"proyecto":null,"grupO_RH":null,"niveL_EDU":null,"usuario":"carlosdovales@gmail.com","clave":"","e_MAIL":"carlosdovales@gmail.com","p_CARGO":null,"celular":null,"cdgcia":null,"telE_OFC":null,"extension":null,"diR_OFC":null,"puedE_VIAJAR":null,"puedE_TRASLADAR":null,"anoS_EXPERIENCIA":null,"tipO_COTIZANTE":null,"ciudaD_TRABAJA":null,"idprofesion":null,"ciudaD_N":null,"ciudaD_NACI":null,"perfiL_PRO":null,"apto":null,"completo":null,"contratado":null,"vetado":null,"observacion":null,"telefonO2":null},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImNhcmxvc2RvdmFsZXNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IntcIkNvbXBhbmlhXCI6XCIxMFwiLFwiRmVjaGFFeHBpcmFcIjpudWxsLFwiR3J1cG9cIjpudWxsLFwiTm9tYnJlXCI6XCJDYXJsb3MgRG92YWxlc1wiLFwiVXN1YXJpb1wiOlwiY2FybG9zZG92YWxlc0BnbWFpbC5jb21cIixcIlBhc3N3b3JkXCI6XCIuR2FsdmlzOTUyMlwiLFwiSWRlbnRpZmljYWNpb25cIjpcIjEwOTYyMzUzODBcIixcIlJvbFwiOjAsXCJFbWFpbFwiOlwiY2FybG9zZG92YWxlc0BnbWFpbC5jb21cIixcIklkVGVyY2Vyb1wiOm51bGwsXCJNV2ViUFwiOm51bGwsXCJDaWFVc3JcIjpcIjEwXCIsXCJJbmROaXZlbFNHVVwiOm51bGx9IiwibmJmIjoxNjU3MjE2Njc1LCJleHAiOjE2NTcyMzgyNzUsImlhdCI6MTY1NzIxNjY3NX0.gGLyVrHJGS98-h43YrE4INhhKs9ntlwIsVpyg1OibdQ"}
*/
