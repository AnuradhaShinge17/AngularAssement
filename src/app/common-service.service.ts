import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  baseurl = "https://6480b0ddf061e6ec4d49b76d.mockapi.io/"

  constructor(private httpClient:HttpClient) { }

  get(path:string)
  {
    //return this.httpClient.get(this.baseurl + path)
    return axios.get(this.baseurl + path);
    //return
  }
  post(path:string,data:any)
  {
    //return this.httpClient.post(this.baseurl + path,data)
    return axios.post(this.baseurl + path, data);
  }
  delete (path:string)
  {
    //return this.httpClient.delete(this.baseurl + path);
    return axios.delete(this.baseurl + path);
  }
  put(path:string,data:any)
  {
    //return this.httpClient.put(this.baseurl + path,data);
    return axios.put(this.baseurl + path, data);
  }
}
