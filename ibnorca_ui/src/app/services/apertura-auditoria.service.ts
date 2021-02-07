import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class AperturaAuditoriaService {

  constructor(private databaseService: DatabaseService, private httpClient: HttpClient) { }
}
