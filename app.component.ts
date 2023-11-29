import { Component } from '@angular/core';
import { Video } from './model/video';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';// ... other imports

  
  
    videoList: Video[] = [
      {
        title: '[Debugging] Expression has changed after it was checked',
        link: 'https://www.youtube.com/watch?v=O47uUnJjbJc'
      },
      {
        title: '[Debugging] The pipe {name} could not be found',
        link: 'https://www.youtube.com/watch?v=maI2u6Sxk9M'
      }
    ];
  }


