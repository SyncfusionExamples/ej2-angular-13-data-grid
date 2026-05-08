
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    standalone:true,
    imports:[GridModule],
    template: `<ejs-grid [dataSource]='data'> </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data!: object[];
    title = 'angular'

    ngOnInit(): void {
        this.data = data;
    }
}


