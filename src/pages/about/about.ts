import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Song } from '../../models/song';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    songList : Observable<Song[]>
    loadedSongList: Observable<Song[]>;
    songListRef: AngularFirestoreCollection<Song>;

    constructor(public navCtrl: NavController, private db: AngularFirestore, public navParams: NavParams) {
      this.songListRef = this.db.collection<Song>('Songs', ref => ref.orderBy('createdAt'));
      this.songList = this.songListRef.valueChanges();
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad GostPage');
    }
  }


