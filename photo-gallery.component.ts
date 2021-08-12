import { Component, Input, OnInit } from '@angular/core';
import { CameraPhoto, CameraResultType, Plugins } from '@capacitor/core';
import { CameraService } from '../camera.service';
import { AppImage } from './Models/AppImage';

//const { Camera } = Plugins;

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})

export class PhotoGalleryComponent implements OnInit {
  @Input() title: string = 'Photo Gallery'
  images: AppImage[] = [];
  constructor(private cameraService: CameraService) { }

  ngOnInit() {
    this.populateTestData();
    console.log(this.images);
  }

  private populateTestData() {
    this.images.push(
      { imagePath: 'assets/PinkRose.jpg', imageTitle: 'Sample Pink Rose', imageDate: new Date() },
      { imagePath: 'assets/telephone.jpg', imageTitle: 'Sample Pink Telephone', imageDate: new Date() },
      { imagePath: 'assets/typewriter.jpg', imageTitle: 'Sample Pink Typewriter', imageDate: new Date() }
    );
  }

  public hasImage(image: AppImage) {
    if (image.imagePath.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  public async addPhoto() {
    this.cameraService.addPhotoHighRes().then(image => {
      console.log(image);
      this.addToImageArray(image);
    })
  }


  private addToImageArray(image: CameraPhoto) {
    this.images.push({
      imageDate: new Date(),
      imagePath: image.webPath,
      imageTitle: ''
    });
    console.log(this.images);
  }
}
