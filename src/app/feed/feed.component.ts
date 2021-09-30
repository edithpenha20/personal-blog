import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost!: Post[];
  post: Post = new Post;
  nome!: string;

  constructor(private postService: PostService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts() {
    this.postService.getPosts().subscribe((data: any) => {
      this.listPost = data;
    })
  }

  cadastrarMensagem() {
    this.postService.postMensagem(this.post).subscribe((data: any) => {
      this.post = data
      location.assign('/feed')
    })
  }

}
