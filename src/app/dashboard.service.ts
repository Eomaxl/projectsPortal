import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    getTeamMembersSummary(): any[]
    {
      var TeamMembersSummary =[
      { Region:"East",  TeamMembersCount:20 , TemporarilyUnavailableMembers:4},
      { Region:"West",  TeamMembersCount:15 , TemporarilyUnavailableMembers:2},
      { Region:"North",  TeamMembersCount:17 , TemporarilyUnavailableMembers:6},
      { Region:"South",  TeamMembersCount:23 , TemporarilyUnavailableMembers:3},

      ];
      return TeamMembersSummary;
    }
}
