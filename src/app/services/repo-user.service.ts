import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profiles } from '../profiles';
import { Repo } from '../repos';

@Injectable({
  providedIn: 'root'
})
export class RepoUserService {
  profile!:Profiles;
  anyRepo!: Repo[];

  constructor(private http:HttpClient) { }

  findProfile(username:string){
    const promise = new Promise<void>((resolve,reject)=>{
           this.http.get<Profiles>(`${environment.base_url}/${username}`,{
             headers:{
               Authorization: `token ${environment.access_token} `
             }
           }).subscribe({
             next:(result:any)=>{
               this.profile= result;
               console.log(result)
               resolve(result)

             }, error:(error:any)=>{
               alert("Sorry, Repofinder can't find user")
               reject(error);
               

             }, complete:()=>{
               console.log('Completed')

             }
           })
    })
    return promise
  } 
  findGuthubRepo(name: string) {
    console.log(`${environment.base_repo_url}${name}`)
    const promise = new Promise<void>((resolve, reject) => {
      this.http
      
        .get<Repo[]>(`${environment.base_repo_url}${name}`, {
          headers: {
            Authorization: `token ${environment.access_token}`,
          },
        })
        .subscribe({
          next: (res:any) => {
            this.anyRepo = res.items
            console.log("result---- in service",res)
            resolve();
          },
          error: (error) => {
            console.log(error);
            reject();
          },
          complete: () => {

            console.log('complete')
          },
        });
    });

    return promise;
  }
}

