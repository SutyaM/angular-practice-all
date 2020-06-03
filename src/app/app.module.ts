import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http';
import { GreenHighlightDirective } from './green-highlight.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { DogsComponent } from './dogs/dogs.component';
import { DogService } from './dog.service';

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path:'pokemons', component:PokemonsComponent},
  {path:'dogs', component:DogsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PokemonsComponent,
    GreenHighlightDirective,
    DogsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    DogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
