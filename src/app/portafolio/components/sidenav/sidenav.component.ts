import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfUrl = './assets/CV/CV - Jordy Sarmiento.pdf';
    const pdfName = 'CV - Jordy Sarmiento';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
