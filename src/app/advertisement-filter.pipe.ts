import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advertisementFilter'
})
export class AdvertisementFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
      return value
    }else{
      args = args.toUpperCase();
    }
    /*return value.filter(items => {
      var city = items.city.toUpperCase();
      return city.includes(args) == true;
    })*/
    return value.filter(item => 
      Object.keys(item).some(k => item[k] != null && 
      item[k].toString().toUpperCase()
      .includes(args.toUpperCase()))
      );
  }

}
