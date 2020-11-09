import { Component, OnInit } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-pp',
  templateUrl: './pp.component.html',
  styleUrls: ['./pp.component.css']
})
export class PpComponent implements OnInit {
  _dataList: any = [];
  _isInclient = false
  _lineUserProfile: any;

  constructor() {

    this._dataList = [
      { name: 'ภูเก็ต', subtitle: 'ศูนย์บริการ โชว์รูม Mazda', address: '10 22 หมู่ 1 Thepkrasatree Rd, Si Sunthon, Thalang District, Phuket 83110', latitude: 8.0035585, longitude: 98.3457476, pic: 'assets/images/mazdashowroom.png' },
      { name: 'ศรีนครินทร์', subtitle: 'ศูนย์บริการ โชว์รูม Chevloret', address: '28/29- 34 So.No.Bang Na Alley, Nong Bon, Prawet, Bangkok 10250', latitude: 13.674814, longitude: 100.6455, pic: 'assets/images/chevroletshowroom.png' },
      { name: 'บางแสน', subtitle: 'ศูนย์บริการ โชว์รูม Mitsubishi', address: '88, Sukhumvit Rd, Huai Kapi, Chon Buri District, Chon Buri 20130', latitude: 13.2940076, longitude: 100.9448244, pic: 'assets/images/mitsushowroom.png' }
    ]

  }

  async ngOnInit() {
    await this.initLineLiff()

    if (liff.isInClient())
      this._isInclient = true

    // if (!liff.isLoggedIn()) {
    //   await liff.login();
    // }

    // this._lineUserProfile = await liff.getProfile();
  }

  initLineLiff() {
    liff
      .init({
        liffId: "1655216709-vwXodbaD" // Use own liffId
      })
      .then(() => {
      })
      .catch((err) => {
        // Error happens during initialization
        console.log(err.code, err.message);
      });
  }

  closeLiff() {
    liff.closeWindow();
  }

  async openMap(item) {
    //console.log(item)
    try {
      // await this.apphelper.ApiPost('https://icarservice-demo-line-bot.herokuapp.com/api/line/sendlocation', {
      //   "sender": this._lineUserProfile.userId,
      //   "title": item.subtitle,
      //   "address": item.address,
      //   "latitude": item.latitude,
      //   "longitude": item.longitude
      // })

      setTimeout(() => {
        liff.closeWindow();
      }, 100);

    } catch (err) {
      //this.apphelper.ShowSnack(err.message)

      setTimeout(() => {
        liff.closeWindow();
      }, 100);

    }
  }

}
