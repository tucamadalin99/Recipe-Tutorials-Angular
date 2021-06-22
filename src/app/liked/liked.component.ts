import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LikedComponent implements OnInit {
  @Input('like-toggle') isLiked;
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
