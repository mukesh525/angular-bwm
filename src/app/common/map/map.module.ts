import { MapComponent} from './map.component';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';
import { CamelizePipe } from 'ngx-pipes';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports:[
    MapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDW9tFSqG2mA0ym2NluRBVGZ6tPr8xbwRM'
      })
  ],
  providers: [MapService,CamelizePipe],
  bootstrap: []
})
export class MapModule { }
