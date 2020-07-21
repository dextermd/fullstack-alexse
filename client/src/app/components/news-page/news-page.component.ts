import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../admin/shared/interfaces';
import {PostsService} from '../../shared/posts.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {


  constructor() {}


  ngOnInit(): void {
  }

}
