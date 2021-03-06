import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Guide } from 'src/app/models/guide.model';
import { Job } from 'src/app/models/job.model';
import { User } from 'src/app/models/user.model';
import { GuideService } from 'src/app/services/guide.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-previous-page',
  templateUrl: './previous-page.component.html',
  styleUrls: ['./previous-page.component.css']
})
export class PreviousPageComponent implements OnInit {
  private jwtUser: User = JSON.parse(sessionStorage.getItem("user"));
  private user: User;
  private guide: Guide;
  private jobs: Job[] = [];
  private displayedColumns: string[] = ['name', 'resort', 'guest', 'date'];
  constructor( private jobService: JobService, private guideService: GuideService, private toastr: ToastrService) { 
    this.user = JSON.parse(this.jwtUser.user);
    this.guideService.getGuideByUserId(this.user.id).subscribe(
      (guide: Guide) => {
        this.guide = guide[0];
      }
    );
  }

  ngOnInit(): void {  
    this.user = JSON.parse(this.jwtUser.user);
    this.guideService.getGuideByUserId(this.user.id).subscribe(
      (guide: Guide) => {
        this.guide = guide[0];
        this.refreshJobs();
      }
    );
  }

  refreshJobs(): void {
    let filter = "?guideId=" + this.guide.id.toString() + "&completed=true";
    this.jobService.getJobs(filter).subscribe(
      (jobs: Job[]) => {
        this.jobs = jobs
      }
    );
  }

}
