import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    TranslateModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
})
export class SharedModule { }
