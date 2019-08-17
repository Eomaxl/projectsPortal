import { Component, OnInit } from '@angular/core';
import { ElementAst } from '@angular/compiler';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 Designation: string;
 Username: string;
 NoOfTeamMembers: number;
 TotalCostOfAllProjects: number;
 PendingTasks: number;
 UpComingProjects: number;
 ProjectCost: number;

 CurrentExpenditure: number;
 AvaiableFunds: number;

 Clients: string[];
 Projects: string[];
 Years: number[] = [];
 TeamMemberSummary = [];
 TeamMembers = [];

constructor(private dashboardService: DashboardService)
{

}

  ngOnInit() {
    //Initializing the properties
    this.Designation = "Team Leader";
    this.Username = "John Smith ";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects =240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvaiableFunds = 52536;

    this.Clients = ["ABC Infotech Ltd.","DEF Software Solutions","GHI Industries"];
    this.Projects = ["Project A","Project B","Project C","Project D"];
    

    for( var i=2019; i >=2010; i--)
    {
      this.Years.push(i);
    }
    this.TeamMemberSummary = this.dashboardService.getTeamMembersSummary();


    this.TeamMembers=[
      {
        Region:"East",Members:[
          {ID: 1,Name:"Ford", Status:"Available"},
          {ID: 2,Name:"Miler",Status:"Available"},
          {ID: 3,Name:"Jones",Status:"Busy"},
          {ID: 4,Name:"James",Status:"Busy"}
        ]
      },
      {
        Region:"West",Members:[
          {ID: 1,Name:"Rogers", Status:"Available"},
          {ID: 2,Name:"Bucky",Status:"Available"},
          {ID: 3,Name:"Steve",Status:"Busy"},
          {ID: 4,Name:"Tony",Status:"Busy"}
        ]
      },

    ]
  }
  onProjectChange($event)
  {
    if($event.target.innerHTML == "Project A")
    {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvaiableFunds = 52436;
    }
    else if($event.target.innerHTML == "Project B")
    {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvaiableFunds = 52436;
    }
    else if($event.target.innerHTML == "Project C")
    {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvaiableFunds = 52436;
    
    }
    
    
  }
}
