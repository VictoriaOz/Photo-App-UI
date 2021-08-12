import { Injectable } from '@angular/core';
import { CameraPhoto, CameraResultType, Plugins } from '@capacitor/core';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  public async addPhotoLowRes() {
    return await Camera.getPhoto({
      quality: 50,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      height: 25
    });
  }

  public async addPhotoHighRes() {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri, 
      height: 100
    });
  }
}
