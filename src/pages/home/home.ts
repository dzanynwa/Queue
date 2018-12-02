import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  songList: Observable<Song[]>;
  songListRef: AngularFirestoreCollection<Song>;
  

  constructor(public navCtrl: NavController, private db: AngularFirestore, public navParams: NavParams) {
    this.songListRef = this.db.collection('Songs'); 
    this.songList = this.songListRef.valueChanges();  
  }


  addSong(ime: string, izvodjac : string, pjesma: string) {
    const createdAt = new Date();
    this.db.collection("Songs2").add({ pjesma, createdAt, ime, izvodjac });
    
    
  }

  deleteSong(song: Song){
    
  }

  ionViewDidLoad() {
  console.log('ionViewDidLoad GostPage');
  }

}
