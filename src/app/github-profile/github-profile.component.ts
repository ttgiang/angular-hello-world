import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
}
