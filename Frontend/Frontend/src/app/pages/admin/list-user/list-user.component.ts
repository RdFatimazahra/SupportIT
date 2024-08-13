import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/interfaces/users';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: users[] = [];
  dataSource: any;

  constructor(
    private authenticationService : AuthenticateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers(): void {
    this.authenticationService.getAllUser().subscribe(
      (users) => {
        this.users = users;
        this.dataSource = this.users; // Assuming you're using dataSource for displaying users in a table
      },
      (error) => {
        console.error("Error occurred while fetching users", error);
      }
    );
  }
}
