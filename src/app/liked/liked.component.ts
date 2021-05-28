import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss', '../banner/banner.component.scss']
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
