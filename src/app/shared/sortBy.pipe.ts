import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortBy implements PipeTransform {
  transform(array: any[], filterFrom: any[]): any {
     console.log(array);
      console.log(filterFrom);

    return array.filter(item => filterFrom.some(f => f.value === item.value))
                .sort((a, b) => {
                  const fromValues = filterFrom.map(f => f.value);
                  return fromValues.indexOf(a.value) <
                         fromValues.indexOf(b.value) ? -1 : 1;
                });

  }
}
