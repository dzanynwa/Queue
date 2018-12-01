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
    this.songListRef = this.db.collection('ArgCigPL'); 
    this.songList = this.songListRef.valueChanges();  
  }


  addSong(ime: string, izvodjac : string, pjesma: string, i, song : Song[]) {
    const createdAt = new Date();
    this.db.collection("Songs2").add({ pjesma, createdAt, ime, izvodjac });
    song[i].ikona = '../assets/imgs/visited.png';
    console.log(i);
  }

  ionViewDidLoad() {
  console.log('ionViewDidLoad GostPage');
  }

}
