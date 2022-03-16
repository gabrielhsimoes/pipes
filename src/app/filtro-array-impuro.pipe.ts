import { Pipe } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false //Se é puro ou não
})

export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

}
