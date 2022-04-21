import { Component, OnInit } from '@angular/core';
import { Profiles } from '../profiles';
import { RepoUserService } from '../services/repo-user.service';
// import { Profiles } from '../profiles'

@Component({
  selector: 'app-profiles-finder',
  templateUrl: './profiles-finder.component.html',
  styleUrls: ['./profiles-finder.component.css']
})
export class ProfilesFinderComponent implements OnInit {
githubUser!:Profiles;
  constructor( private repoService:RepoUserService) { }


  ngOnInit(): void {
    this.findProfile("MalombaKevin")
  }
  findProfile(userGithub:string){

    this.repoService.findProfile(userGithub).then(()=>{
     this.githubUser=this.repoService.profile;
    })
  }

}

