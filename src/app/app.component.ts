import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oc-blog-project';
  postConent1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra convallis augue, sed commodo arcu ornare quis.';
  postConent2 = 'Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin.';
  postConent3 = 'Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl.';

  posts = [
    {
      title: 'Mon premier post',
      content: this.postConent1,
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: this.postConent2,
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: this.postConent3,
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
