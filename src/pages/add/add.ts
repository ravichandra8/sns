import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostService} from './postservice';
import { DatePickerProvider } from 'ionic2-date-picker';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
    providers:[PostService]
})
export class AddPage implements OnInit{
  data:any;
 ZonesData:any[];
 name:string;
 datestr:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _postService: PostService, public modalCtrl: ModalController,
    private datePickerProvider: DatePickerProvider) {
  }
  ngOnInit(){
      this._postService.getPostResponse().subscribe(posts => {
         console.log("noinit");
         console.log(posts);
         this.data = posts;
      this.ZonesData=this.data.Pslist;

       });

    }
display()
{
  console.log('data'+this.name);
}
cal()
{
  const dateSelected =
       this.datePickerProvider.showCalendar(this.modalCtrl);

     dateSelected.subscribe(date =>
       {
       this.datestr=date+"";
      });
}


}
