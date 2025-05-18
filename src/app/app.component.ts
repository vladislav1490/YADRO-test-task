import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterLink,
    NzLayoutModule,
    NzMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yadro-app';
}
