import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicate'
})
export class RemoveDuplicatePipe implements PipeTransform {

  channelDate = [];

  transform(value: any, args?: any): any {
    if(this.channelDate.length > 0) {
      this.channelDate.forEach(element => {
        if(element == value) {
          return value = '';
        } else {
          return value;
        }
      })
    }
    this.channelDate.push(value);
    return value;
  }

}
