import { ImageService } from './../services/image.service';
import { GalleryImage } from './../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

    private imageUrl  = '';

  constructor(private imageService: ImageService ,
  private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.getImageUrl(this.route.snapshot.params['id']);
  }
  getImageUrl(key: string) {
    this.imageService.getImageUrl(key)
    .then(image => this.imageUrl = image.url);
    //.then(image => console.log(image));
  }

}
