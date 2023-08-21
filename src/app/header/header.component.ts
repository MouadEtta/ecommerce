import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { SlideMenu } from 'primeng/slidemenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    showSearchDialog: boolean = false;
    @ViewChild('menu') menu!: SlideMenu;
    items!: MenuItem[];
    value!: string ;
    
    constructor(public router: Router){};

  toggleSearch() {

  }
    ngOnInit() {
        this.items = [
            {
                label: 'category',
                items: [
                    {
                        label:'jersey',
                        command: () => {
                            this.handleMenuItemClick('jersey');}
                    },
                    {
                        label:'shorts',
                        command: () => {
                            this.handleMenuItemClick('shorts');}
                    },
                    {
                        label:'complete kits',
                        command: () => {
                            this.handleMenuItemClick('complete kits');}
                    },
                    {
                        label:'shoes',
                        command: () => {
                            this.handleMenuItemClick('shoes');}
                    },
                    {
                        label:'bombers',
                        command: () => {
                            this.handleMenuItemClick('bombers');}
                    },
                    {
                        label:'accessories',
                        command: () => {
                            this.handleMenuItemClick('accessories');}
                    },
                    {
                        label:'objects',
                        command: () => {
                            this.handleMenuItemClick('objects');}
                    },
                ]
            },
            {
                label: 'Sales',
                
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

 
    handleMenuItemClick(event: any) {
        console.log("sono qui")
       this.router.navigate(['ProductPage'],{state:event})
    }
    
}
