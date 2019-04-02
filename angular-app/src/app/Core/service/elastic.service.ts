import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
 
@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {
 
  private client: Client;
 
  constructor() {
    if (!this.client) {
      this.connect();
    }
  }
 
  private connect() {
    this.client = new Client({
      host: 'http://elastic:$HangryFrankman2@hub-elastic.eastus.cloudapp.azure.com:9200',
      log: 'trace'
    });
  }
 
  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello grokonez!'
    });
  }
 
  addToIndex(value): any {
    return this.client.create(value);
  }
}