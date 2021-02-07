import { DatabaseService } from './database.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TomaDecisionService {

  constructor(private databaseService: DatabaseService, private httpClient: HttpClient) { }
}
