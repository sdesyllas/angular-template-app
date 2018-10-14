import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  userNotEmpty = false;

  onUpdateUserName(event: Event) {
    if (this.username != '') {
      this.userNotEmpty = true;
    }
    else {
      this.userNotEmpty = false;
    }
  }

  onClearUserName() {
    this.username = '';
    this.userNotEmpty = false;
  }
}
