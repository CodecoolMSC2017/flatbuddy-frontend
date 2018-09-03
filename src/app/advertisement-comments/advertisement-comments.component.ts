import { Component, OnInit } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';
import { Adcomment } from '../adcomment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advertisement-comments',
  templateUrl: './advertisement-comments.component.html',
  styleUrls: ['./advertisement-comments.component.css']
})
export class AdvertisementCommentsComponent implements OnInit {

  comments: Adcomment[] = [];
  adId: number;

  constructor(private adService: RentadserviceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {this.adId = params.id
      });
   }

  ngOnInit() {
    this.adService.getComments(this.adId).subscribe(comments=> this.comments = comments);
  }

}
