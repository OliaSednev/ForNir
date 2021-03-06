import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {Http} from '@angular/http';


@Injectable()
export class BoxService extends DataService {

  constructor(http: Http) {
    super( '/assets/boxes-data.json', http);
  }

}
