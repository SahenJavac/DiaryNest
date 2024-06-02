import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
import { HeaderComponent } from "./header/header.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DiaryComponent, HeaderComponent]
})
export class AppComponent {
  title = 'my-diary';

  public testMethod(){
    console.log("Testing this shit")
  }


}
