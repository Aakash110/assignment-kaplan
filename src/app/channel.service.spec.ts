import { TestBed } from '@angular/core/testing';

import { ChannelService } from './channel.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { sampleGetAllChannel } from './mock.data';

describe('ChannelService', () => {
  let service: ChannelService,
  httpTestingController: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ChannelService],
  }));

  httpTestingController = TestBed.get(HttpTestingController);
  service = TestBed.get(ChannelService);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all channel', () => {
    service.getChannelData().subscribe(channels => {
      console.log(channels);
      expect(channels).toBeTruthy('No channels returned');

      expect(channels.length).toBe(12, 'incorrect number of channels');

    });
    const req = httpTestingController.expectOne('/assets/data/channel.json');

    expect(req.request.method).toEqual('GET');

    req.flush(sampleGetAllChannel);
  });
});
