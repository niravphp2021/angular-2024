import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  serverElements = [
    {
      type: 'server',
      name: 'Testing Component',
      content: 'is Working',
    },
  ];

  serverData: { serverName: string; serverContent: string };
  bluePrintData: { bluePrintName: string; bluePrintContent: string };

  onServerAdded(serverData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(bluePrintData) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.bluePrintName,
      content: bluePrintData.bluePrintContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed';
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
