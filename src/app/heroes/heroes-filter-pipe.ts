import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from './heroe';

@Pipe({
  name: 'heroesFilter',
  standalone: false,
})
export class HeroesFilterPipe implements PipeTransform {
  transform(value: IHeroe[], args: string): IHeroe[] {
    const filter: string = args ? args.toLocaleLowerCase() : '';
    return filter ? value.filter((heroe: IHeroe) => heroe.nombre.toLocaleLowerCase().indexOf(filter) !== -1): value;
  }
}