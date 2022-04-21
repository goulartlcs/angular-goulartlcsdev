import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  active: Boolean = false;
  menuClicked: String = 'Início';

  constructor() { }

  ngOnInit(): void {
  }

  handlerMenuClicked(evt: any) {
    this.menuClicked = evt.target.innerHTML;
  }

}
