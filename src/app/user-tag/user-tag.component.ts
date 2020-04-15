import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.scss']
})
export class UserTagComponent implements OnInit {
  @Input() avatar: string;
  @Input() status: boolean;
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
