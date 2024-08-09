import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {

  serCount: number | undefined;

  constructor(
    private service: AuthenticateService
  ){}

  ngOnInit(): void {
    this.loadUserCount();
  }

  private loadUserCount(): void {
    this.service.getUserCount().subscribe(
      (count: number) => {
        this.serCount = count;
      },
      (error) => {
        console.error('Error fetching user count', error);
      }
    );
  }
}
