import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GF';
  currentImage: string = 'GF-GIF.gif';
  noButtonText: string = 'No';
  yesButtonScale: number = 1.0;
  DidntAcceptYet:boolean = true
  overlayState: string = 'visible';
  NoCount:any = 0


  // ngOnInit() {
  //   setTimeout(() => {
  //     this.overlayState = 'hidden';
  //   }, 2000);
  // }

  onYesClick() {
    this.DidntAcceptYet = false
  }

  onNoClick() {
    this.NoCount ++;
    this.currentImage = 'assets/image2.jpg';
    this.noButtonText = 'Are you sure?';

    this.yesButtonScale += 0.3;
    const yesButton = document.getElementById('yes-button');
    if (yesButton) {
      yesButton.style.transform = `scale(${this.yesButtonScale})`;
    }
  }
}
