import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle('My Portfolio');

    meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    meta.addTag({ name: 'description', content: 'Bassam Saedy\'s Portfolio' }, true);
    meta.addTag({ name: 'autor', content: 'Bassam Saedy' }, true);
  }
}