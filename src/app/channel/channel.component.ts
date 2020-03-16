import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channel.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  title = 'assignment-kaplan';
  channels;
  
  constructor(private channelService: ChannelService) { }

  ngOnInit() {
     this.loadChannelData();
  }

  loadChannelData() {
    this.channelService.getChannelData().subscribe(data => {
      this.channels = data;
      console.log(this.channels);
     });
  }

  get sortData() {
    return this.channels ? this.channels.sort((a, b) => {
      return <any>new Date(a.time) - <any>new Date(b.time);
    }) : [];
  }

}
