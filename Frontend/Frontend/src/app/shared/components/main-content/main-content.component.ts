import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  userCount: number | undefined;

  constructor(
    private service: AuthenticateService
  ){}

  ngOnInit(): void {
    this.loadUserCount();
  }

  private loadUserCount(): void {
    this.service.getUserCount().subscribe(
      (count: number) => {
        this.userCount = count;
      },
      (error) => {
        console.error('Error fetching user count', error);
      }
    );
  }
}
