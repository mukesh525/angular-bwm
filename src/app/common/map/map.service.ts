import {Injectable} from '@angular/core';
import {Observable} from "rxjs"
import{CamelizePipe} from 'ngx-pipes'
import 'rxjs/add/observable/of';

@Injectable()
export class MapService {

    private geoCoder;
    private locatioCache:any ={    }

    constructor(private camelizePipe :CamelizePipe){}
    
    private cameLize(value:string):string{
        return this.camelizePipe.transform(value)
    }

    private cacheLocation(location:string,coordinates:any){
       this.locatioCache[this.cameLize(location)] = coordinates;
     }

     private isLocationCached(location:string):boolean {
          return this.locatioCache[this.cameLize(location)]
     }


     private getGeocodeLocation(location:string):Observable<any>{
        if(!this.geoCoder) {this.geoCoder = new (<any>window).google.maps.Geocoder();}
        return new Observable((observer)=>{
            this.geoCoder.geocode({address:location},(result,status)=>{
                if(status === 'OK'){
                    const geometry =result[0].geometry.location
                    const coordinates = {lat:geometry.lat(),lng:geometry.lng()}
                    this.cacheLocation(location,coordinates)
                    observer.next(coordinates);
                }
                else{
                    observer.error('Location coiuld not be geocoded')
                }
             })
        });

     }

    public geocodeLocation(location:string):Observable<any>{
        if(this.isLocationCached(location)){
                  Observable.of(this.locatioCache(this.cameLize(location)))
            } 
             else {
                    return this.getGeocodeLocation(location)
             }
      

    }

}