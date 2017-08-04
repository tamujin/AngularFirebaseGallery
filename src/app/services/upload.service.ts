import { AngularFireAuthModule } from 'angularfire2/auth';
import { Upload } from './../models/upload.model';
import { GalleryImage } from './../models/galleryImage.model';
import { AngularFireModule } from 'angularfire2';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  private basePath = '/uploads';
  private uploads: FirebaseListObservable<GalleryImage[]>;

  constructor(private ngFire: AngularFireAuthModule, private db: AngularFireDatabase) { }

  uploadFile (upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    // three ovservers
    // 1. state changed
    (snapshot) => {
      // upload in progress
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      console.log('Progress: ' + upload.url);

    },
    // 2. error observer

    (error) => {
      console.log(error);
    },
    // 3 success observer
    (): any => {
      upload.url =  uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      this.saveFileData(upload);
    }
    );
  }
  saveFileData (upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
    console.log('File Saved! ' + upload.url);
  }
}
