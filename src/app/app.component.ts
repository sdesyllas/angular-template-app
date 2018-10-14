import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible = true;
  clickLogs = [];

  onToggleParagraph() {
    this.visible = !this.visible;
    this.clickLogs.push(this.clickLogs.length);
  }

  getColor(clickLog) {
    return clickLog >= 5 ? "blue" : "transparent";
  }
}
