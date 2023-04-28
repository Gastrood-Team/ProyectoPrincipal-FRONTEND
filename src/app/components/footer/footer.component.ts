import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contents!:any;

  constructor(private ContentService: ContentService) { }

  ngOnInit(): void {
    this.ContentService.getContent().subscribe((contents:any) => {
      this.contents = contents;
    })
  }

}
