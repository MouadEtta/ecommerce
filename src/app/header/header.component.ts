import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    showSearchDialog: boolean = false;
    items!: MenuItem[] ;
    value!: string ;
   

  toggleSearch() {

  }
    ngOnInit() {
        this.items = [
            {
                label: 'category',
                icon: 'pi pi-tags',
                items: [
                    {
                        label:'t-shirt'
                    },
                    {
                        label:'shorts'
                    },
                    {
                        label:'complete kits',
                    },
                    {
                        label:'shoes',
                    },
                    {
                        label:'bombers',
                    },
                    {
                        label:'accessories',
                    },
                    {
                        label:'objects',
                    },
                ]
            },
           
            {
                separator: true
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
        console.log(this.items);
    }
}
