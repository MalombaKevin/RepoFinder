// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { Profiles } from '../profiles';

// @Injectable({
//   providedIn: 'root'
// })
// export class RepoUserService {
//   profile!:Profiles

//   constructor(private http:HttpClient) { }

//   findProfile(username:string){
//     const promise = new Promise<void>((resolve,reject)=>{
//            this.http.get<Profiles>(`${environment.base_url}/${username}`,{
//              headers:{
//                Authorization: `token ${environment.access_token} `
//              }
//            }).subscribe({
//              next:(result:any)=>{
//                this.profile= result;
//                console.log(result)
//                resolve(result)

//              }, error:(error:any)=>{
//                alert("Sorry, Repofinder can't find user")
//                reject(error);
               

//              }, complete:()=>{
//                console.log('Completed')

//              }
//            })
//     })
//     return promise
//   } 
// }
