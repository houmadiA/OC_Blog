import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oc-blog-project';
  postConent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra convallis augue, sed commodo arcu ornare quis.';
  posts = [
    {
      title: 'Mon premier post',
      content: this.postConent,
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: this.postConent,
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: this.postConent,
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
