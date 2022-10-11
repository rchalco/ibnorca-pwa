// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false
};

export const HEADERS_SERVICE =  new HttpHeaders({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
  Accept: '*/*',
  'content-type': 'application/json',
});

export const HEADERS_FILE =  new HttpHeaders({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
  Accept: '*/*',
});

//export const URL_GLOBAL = 'http://localhost:8001/api/';
export const URL_GLOBAL = 'http://formacion.ibnorca.org:8880/api/';
//export const URL_GLOBAL = 'http://localhost/api/';
export const URL_APERTURA = URL_GLOBAL + 'AperturaAuditoria/';
export const URL_ELABORACION = URL_GLOBAL + 'ElaboracionAuditoria/';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
