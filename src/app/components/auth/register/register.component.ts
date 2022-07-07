import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registro } from 'src/app/interfaces/interfaces';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  registro: Registro;
  constructor(private service: ServiceService,
              private formBuilder: FormBuilder) { 
                this.buildForm();
              }
  public buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      docIdentidad: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      compania: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
  registrar() {
    this.registro = {
      nombre: this.form.value.nombre,
      email: this.form.value.email,
      clave: this.form.value.password,
      doctoIdent: this.form.value.docIdentidad.toString(),
      apellido: this.form.value.apellido,
      cia: this.form.value.compania
    }
   this.service.registrar(this.registro)
  }

}

/*
RESPUESTA BIEN{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwOTYyMzUzODAiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoie1wiQ29tcGFuaWFcIjpcIjEwXCIsXCJGZWNoYUV4cGlyYVwiOm51bGwsXCJHcnVwb1wiOm51bGwsXCJOb21icmVcIjpcIkNhcmxvcyBEb3ZhbGVzXCIsXCJVc3VhcmlvXCI6XCIxMDk2MjM1MzgwXCIsXCJQYXNzd29yZFwiOlwiLkdhbHZpczk1MjJcIixcIklkZW50aWZpY2FjaW9uXCI6XCIxMDk2MjM1MzgwXCIsXCJSb2xcIjowLFwiRW1haWxcIjpcImNhcmxvc2RvdmFsZXNAZ21haWwuY29tXCIsXCJJZFRlcmNlcm9cIjpudWxsLFwiTVdlYlBcIjpudWxsLFwiQ2lhVXNyXCI6XCIxMFwiLFwiSW5kTml2ZWxTR1VcIjpudWxsfSIsIm5iZiI6MTY1NzIxNDU4OSwiZXhwIjoxNjU3MjE1Nzg5LCJpYXQiOjE2NTcyMTQ1ODl9.s9YP9k25nWpX5EEPGX-lag_ITAF1SXinypyL4ICj8bs","usuario":{"apellido":"Dovales","nombre":"Carlos","sexo":null,"fecha":"2022-07-07T12:23:02.0365754-05:00","f_NACE":null,"doctO_IDENT":"1096235380","clasE_DOCTO":null,"expedidO_EN":null,"ciudad":null,"barrio":null,"esT_CIVIL":null,"nrO_HIJOS":null,"direccion":null,"telefono":null,"libreta":null,"distrito":null,"clase":null,"cargo":null,"salario":null,"empleado":null,"dpto":null,"ccosto":null,"seccion":null,"area":null,"nivel":null,"sucursal":null,"ubicacion":null,"grupo":null,"subgrupo":null,"nacionalidad":null,"division":null,"subdivision":null,"proyecto":null,"grupO_RH":null,"niveL_EDU":null,"usuario":"carlosdovales@gmail.com","clave":"CXFA54V3TKK","e_MAIL":"carlosdovales@gmail.com","p_CARGO":null,"celular":null,"cdgcia":null,"telE_OFC":null,"extension":null,"diR_OFC":null,"puedE_VIAJAR":null,"puedE_TRASLADAR":null,"anoS_EXPERIENCIA":null,"tipO_COTIZANTE":null,"ciudaD_TRABAJA":null,"idprofesion":null,"ciudaD_N":null,"ciudaD_NACI":null,"perfiL_PRO":null,"apto":null,"completo":null,"contratado":null,"vetado":null,"observacion":null,"telefono2":null,"CabFlia":null,"ContactoEmerg":null,"EmailContEmerg":null,"EtelContEmerg":null,"MnjIdioma":null,"idioma":null,"TrabajaAntEmpr":null,"localidad":null,"EstSocioeconominco":null,"PerTrabEmp":null,"NOMBRE_PER_TRAB_EMP":null,"ApellidoPerTrabEmp":null,"DoctoPerTrabEmp":null,"NombreReferencia":null,"ApellidoReferencia":null,"DoctoReferencia":null,"AntBarrio":null,"PerReferencia":null,"TrabajaAct":null,"UltEmpr":null,"UltCargo":null,"UltCargoJefe":null,"UltCargoJefeTel":null,"Fretiro":null,"MotRetiro":null,"FuenteRec":null,"MesesExperiencia":null,"Clasificacion":null}}

RESPUESTA A CAMPO REPETIDO

Documento de identidad
{"StatusCode":400,"Message":"Error(es) de validación:  Ya se encuentra una hoja de vida con el documento proporcionado."}

Correo:
{"StatusCode":400,"Message":"Error(es) de validación:  Email ya se encuentra registrado."}

*/