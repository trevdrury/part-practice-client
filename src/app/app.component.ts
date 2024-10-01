import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScoreDisplayComponent } from './score-display/score-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScoreDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'choral-practice-frontend';
}
