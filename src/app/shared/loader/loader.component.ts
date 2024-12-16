import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loader',
  standalone: true,
  imports: [],
  templateUrl: `./loader.component.html`,
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent { }
