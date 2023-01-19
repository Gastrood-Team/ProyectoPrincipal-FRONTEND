import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sites:any;

  constructor(public ContentService: ContentService) { }

  ngOnInit(): void {
    this.ContentService.getContent().subscribe((contents:any)=>{
        this.sites = contents.navbar;
      }
    );
  }

}
