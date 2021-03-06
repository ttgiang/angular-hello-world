import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app.error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

import Post from '../../app/model/posts';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe((posts) => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe(
      (newPost: Post) => {
        post['id'] = newPost.id;
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInputError) {
          alert('createPost: A 400 error occurred.');
          console.log(error);
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post: any) {
    this.service.update(post).subscribe((udpatedPost) => {
      console.log(udpatedPost);
    });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);

      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.');
        console.log(error);
      } else {
        throw error;
      }
    });
  }
}
