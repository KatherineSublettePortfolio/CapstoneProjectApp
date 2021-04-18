import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide-home.component.html',
  styleUrls: ['./guide-home.component.css']
})
export class GuideHomeComponent implements OnInit {
  isHome = true;
  isOldJob = false;
  isMessages = false;
  isProfile = false;
  homeText: string;
  homeDisplay: string;
  oldJobsHeader: string;
  oldJobsText: string;
  constructor() { }

  ngOnInit(): void {
    //this.homeText = "Guests looking for a guide.";
    this.homeDisplay = "jobs";
    this.oldJobsHeader = "Old Jobs";
    this.oldJobsText = "No previous jobs to show";
  }

  toggleHome(): void{
    this.isHome = true;
    this.isOldJob = false;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleOldJob(): void{
    this.isHome = false;
    this.isOldJob = true;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleMessages(): void{
    this.isHome = false;
    this.isOldJob = false;
    this.isMessages = true;
    this.isProfile = false;
  }

  toggleProfile(): void{
    this.isHome = false;
    this.isOldJob = false;
    this.isMessages = false;
    this.isProfile = true;
  }
}