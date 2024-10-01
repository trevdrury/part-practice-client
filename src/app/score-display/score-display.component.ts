import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Vex } from 'vexflow';

@Component({
  selector: 'app-score-display',
  standalone: true,
  imports: [],
  templateUrl: './score-display.component.html',
  styleUrl: './score-display.component.css'
})
export class ScoreDisplayComponent implements AfterViewInit {

  @ViewChild('scoreContainer') scoreContainer: ElementRef;

  sampleMusicXML = `
      <score-partwise>
      <part-list>
          <score-part id="P1">
              <part-name>Music</part-name>
          </score-part>
      </part-list>
      <part id="P1">
          <measure number="1">
              <attributes>
                  <divisions>4</divisions>
                  <time>
                      <beats>4</beats>
                      <beat-type>4</beat-type>
                  </time>
              </attributes>
              <note>
                  <pitch>
                      <step>C</step>
                      <octave>4</octave>
                  </pitch>
                  <duration>4</duration>
                  <type>whole</type>
              </note>
          </measure>
      </part>
    </score-partwise>`;

  ngAfterViewInit(): void {
    this.renderScore();
  }

  renderScore() {
    const VF = Vex.Flow;
    const renderer = new VF.Renderer(this.scoreContainer.nativeElement, VF.Renderer.Backends.SVG);

    renderer.resize(500, 200);
    const context = renderer.getContext();
    context.setFont("Arial", 30, "").setBackgroundFillStyle("#eed");

    const stave = new VF.Stave(10, 40, 400);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();

    const notes = [
      new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "w"})
    ];

    const voice = new VF.Voice({num_beats: 4, beat_value: 4});
    voice.addTickables(notes);

    new VF.Formatter().joinVoices([voice]).format([voice], 500);

    voice.draw(context, stave);
  }

}
