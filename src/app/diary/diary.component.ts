import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css'
})
export class DiaryComponent {
  toggleButtonValue = 23
  testFunction() {

    console.log(this.toggleButtonValue)
  }


  ngOnInit(){
    this.testFunction()
  }

}
