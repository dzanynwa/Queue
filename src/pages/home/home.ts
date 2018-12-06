import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song';
import 'rxjs/add/operator/map';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  songList: Observable<Song[]>;
  songListRef: AngularFirestoreCollection<Song>;
  countSongs = 0;
  songCounter = 0;
  key = 'sessionKey';
  value = 'sessioned'; 
  hide = false; 
  

  constructor(public navCtrl: NavController, private db: AngularFirestore, public navParams: NavParams, private cookieService: CookieService) {
    this.songListRef = this.db.collection<Song>('Songs2'); 
    this.songList = this.songListRef.snapshotChanges()
        .map(actions => {
          this.countSongs = actions.length;
          return actions.map(action => ({$key: action.payload.doc.id, ...action.payload.doc.data()}))
        });
    cookieService.set(this.key, this.value, 0.00138889);    
  }


  addSong(ime: string, izvodjac : string, pjesma: string, key: string) {
      const createdAt = new Date();
      this.db.collection("Songs").add({ pjesma, createdAt, ime, izvodjac });
      this.db.collection("Songs2").doc(key).delete();
      this.hide = true; 
      this.cookieService.set(this.key, this.value, 0.00138889); 
  }
  addSong2(ime: string, izvodjac : string, pjesma: string, key: string){
    const cookieExists: boolean = this.cookieService.check('sessionKey');
    if(cookieExists){
      alert("Try again");
    }
    else{
      const createdAt = new Date();
      this.db.collection("Songs").add({ pjesma, createdAt, ime, izvodjac });
      this.db.collection("Songs2").doc(key).delete();
      this.cookieService.set(this.key, this.value, 0.00138889); 
    }
  }

  ionViewDidLoad() {
  console.log('ionViewDidLoad GostPage');
  }

}
