import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private ActivatedRoute:ActivatedRoute){ }

  ngOnInit() :void {
    this.ActivatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'])
    )

    this.ActivatedRoute.queryParams.subscribe(
      res => console.log(res)
      )
  }
}
