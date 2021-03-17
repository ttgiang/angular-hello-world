import { ActivatedRoute } from '@angular/router';
import { FollowerService } from './../services/follower.service';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import Follower from '../../app/model/followers';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.less'],
})
export class FollowersComponent implements OnInit {
  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: FollowerService
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe((params) => {});
    // let id = this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe((params) => {});
    // let page = this.route.snapshot.queryParamMap.get('page');

    // with this, we combine multiple observable from the above into one
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          let id = combined[0].get('id');
          let page = combined[1].get('page');
          return this.service.getAll();
        })
      )
      .subscribe((followers) => (this.followers = followers));
  }
}
