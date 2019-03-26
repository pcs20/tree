import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, Event, NavigationError, NavigationEnd, NavigationStart, NavigationCancel } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import $ from "jquery";
import { delay } from 'q';

interface entrada {
  name;
  first;
  children;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('nav') nav: ElementRef;
  alma;
  alm: boolean = false;
  hilda = [{
    id: 0,
    pai: 'AAA'
  },
  {
    id: 1,
    pai: 'BBB'
  },
  {
    id: 2,
    pai: 'CCC'
  }]


  public list = [
    {
      title: 'AAA',
      children: [{
        title: 'AAABBB',
        children: []
      }]
    },
    {
      title: 'BBB',
      children: [{
        title: 'BBBCCC',
        children: [{
          title: 'BBBCCCDDD',
          children: []
        }]
      }]
    },
    {
      title: 'CCC',
      children: []
    }
  ];


  ydata = [
    {
      nivel: 2,
      name: 'XXX'
    },
    {
      nivel: 3,
      name: 'XXXZZZ'
    },
    {
      nivel: 4,
      name: 'XXXZZZTTT'
    }
  ]

  data: Array<any> = [
    {
      name: 'AAA',
      first: 0,
      children: [
        {
          name: 'AAABBB',
          children: [
            {
              name: 'AAABBBCCC',
              children: [
                {
                  name: 'AAABBBCCCDDD'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'BBB',
      children: [
        {
          name: 'BBBCCC',
          children: [
            {
              name: 'BBBCCCDDD'
            }]
        }
      ]
    },
    {
      name: 'CCC',
      children: []
    }
  ]

  temp;
  first;
  alma1: boolean = true;
  ent = (v, x: HTMLElement) => {
    if (v == 0) {
      if (this.alma1) {
        this.alma1 = false;
        this.nomade(x);
      }
      return true;
    }
  };
  ngOnInit(): void {

    /**
    {
      nivel: 2,
      name: 'XXX'
    },
    {
      nivel: 3,
      name: 'XXXZZZ'
    },
    {
      nivel: 4,
      name: 'XXXZZZTTT'
    }
     */
    let tempo = undefined;
    let ytempo = new Array();
    let control = undefined;
    for (let i = 0; i < this.ydata.length; i++) {
      if (this.ydata[i]['nivel'] == 2) {
        ytempo = [{
          name: this.ydata[i]['name'],
          nivel: 2,
          children: []
        }]
      } else {
        control = this.ydata[i]['nivel'];
        ytempo.forEach((e, i)=>{
          console.log(e)
          console.log(i)
        })
        ytempo[0].children.push({name: this.ydata[i]['name'], nivel: this.ydata[i]['nivel']})
      }
    }
    console.log(ytempo)
    this.data.push(ytempo[0])
    console.log(this.data)


    $(function () {
      $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
      // $('li.parent_li').find(' > ul > li').hide('fast')
      $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li').attr('title', 'filho')
        if (children.is(":visible")) {
          children.hide('fast');
          $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-plus-square').removeClass('fa-minus-square');
        } else {
          children.show('fast');
          $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus-square').removeClass('fa-plus-square');
        }
        e.stopPropagation();
      });
    });
  }
  title = 'dialog';
  loading: boolean = true;
  constructor(private router: Router,
    private spinner: NgxSpinnerService) {
    this.router.events.subscribe((RouterEvent: Event) => {
      if (RouterEvent instanceof NavigationStart) {
        console.log('carregando');
        this.loading = true;
      }
      if (
        RouterEvent instanceof NavigationEnd ||
        RouterEvent instanceof NavigationError ||
        RouterEvent instanceof NavigationCancel) {
        console.log('terminou');
        this.loading = false;
      }
    })
  }

  trackTree(index, v) {
    console.log(index, " - ", v)
    return v ? v.id : undefined;
  }

  nomade(v: HTMLElement) {
    //console.log(v.textContent) // recebe o conteúdo de dentro da ramificação
    // document.querySelector(v).style.borderColor = 'green';
    let compare = (temp) => {
      if (temp != v) {
        this.temp.style.borderColor = '#999'
        this.temp.style.color = 'initial'
        this.temp = v;
        return;
      }
    }
    this.temp == undefined ? this.temp = v : compare(this.temp);
    v.style.borderColor = 'green'
    v.style.color = 'green'
  }

  clica() {
    console.log(this.alma[0].onclick);
  }

  teste() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}
