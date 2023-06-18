import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frame-info',
  templateUrl: './frame-info.component.html',
  styleUrls: ['./frame-info.component.css']
})
export class FrameInfoComponent {

  @Input() textInformation?: string;

}
