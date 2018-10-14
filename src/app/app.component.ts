import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible = true;
  clickLogs = [];
  increment = 0;

  onToggleParagraph() {
    this.visible = !this.visible;
    this.increment++;
    this.clickLogs.push(this.increment);
  }

  getColor() {
    return this.increment >= 5 ? "blue" : "transparent";
  }
}
