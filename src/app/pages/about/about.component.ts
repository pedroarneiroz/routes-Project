import { Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(
    private ActivatedRoute:ActivatedRoute,
    private router:Router
    ){ }

  ngOnInit() :void {
    this.ActivatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'])
    )

    this.ActivatedRoute.queryParams.subscribe(
      res => console.log(res)
      )

      setInterval( ()=> {
        this.router.navigate(['404']); //redireciona sem refazer o load da página
        //this.router.navigateByUrl('404'); //redireciona e faz o reload da página
      }, 5000)

  }
}













