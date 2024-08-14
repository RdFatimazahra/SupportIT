import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technicien } from 'src/app/interfaces/Technicien';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-list-tech',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.scss']
})
export class TechListComponent implements OnInit {

  techniciens: Technicien[] = [];
  dataSource: any;

  constructor(
    private authenticationService: AuthenticateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllTechniciens();
  }

  loadAllTechniciens(): void {
    this.authenticationService.getAllTechniciens().subscribe(
      (techniciens) => {
        this.techniciens = techniciens;
        this.dataSource = this.techniciens; // Assuming you're using dataSource for displaying technicians in a table
      },
      (error) => {
        console.error("Error occurred while fetching technicians", error);
      }
    );
  }
}
