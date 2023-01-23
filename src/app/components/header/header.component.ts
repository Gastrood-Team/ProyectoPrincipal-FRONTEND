import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header:any;
  display:boolean = false;

  constructor(private ContentService: ContentService) { }

  showMenu(){
    this.display = !this.display
  }

  ngOnInit(): void {
    this.ContentService.getContent().subscribe((contents:any)=>{
        this.header = contents.header;
      }
    );
  }

}
