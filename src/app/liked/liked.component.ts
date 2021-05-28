import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LikedComponent implements OnInit {
  @Input() isLiked;
  @Output() updateLiked: EventEmitter<void> =
    new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {

  }

  onClick(): void {
    this.updateLiked.emit();
  }

}
