import { Component, OnInit } from '@angular/core';
import { Profiles } from '../profiles';
import { Repo } from '../repos';
import { RepoUserService } from '../services/repo-user.service';


@Component({
  selector: 'app-repository-finder',
  templateUrl: './repository-finder.component.html',
  styleUrls: ['./repository-finder.component.css']
})
export class RepositoryFinderComponent implements OnInit {

  allRepos!: Repo[]
  constructor(private repoService: RepoUserService) { }




  ngOnInit(): void {



  }
  searchRepos(repoName: string) {

    this.repoService.getAnyRepo(repoName).then(
      () => {
        this.allRepos = this.repoService.anyRepo
      },
      ()=>{
        alert(
          "Repo not found"
        )
     }


   )


}

}
