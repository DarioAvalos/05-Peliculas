import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): unknown {
    
    if ( !img ){
      return './assets/no-image-banner.img';
    }

    const imgUrl = `${ URL }/${ size}${ img }`;
      // console.log('URL', imgUrl);

    return imgUrl;
  }

}
