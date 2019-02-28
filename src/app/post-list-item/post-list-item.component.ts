import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.post.loveIts++;
    console.log( this.post.loveIts );
  }

  onDontLoveIt() {
    this.post.loveIts--;
    console.log( this.post.loveIts );
  }

  isLoved() {
    if (this.post.loveIts > 0) {
      return true;
    } else if (this.post.loveIts > 0) {
      return false;
    }
  }

}
