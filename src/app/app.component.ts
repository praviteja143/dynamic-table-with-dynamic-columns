import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as angular from 'angular';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { NgFormBuilder } from './ng-form-builder';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'dynamic';
  public mytextarea:any;
  public data:any;
  Users: any[];
  displayedColumns: string[] =[];
  dataSource: MatTableDataSource<any>;
  key:any[];
  res: string;
 
  addnew(){ 
    console.log(this.mytextarea);
    this.data=JSON.parse(this.mytextarea);
    var myData = Object.keys(this.data).map(key => {
      return this.data[key];
  })
    console.log(myData);
    for(let item in myData){ this.Users.push(myData[item]);}
    for(var i =0;i<this.Users.length;i++){
    this.key=Object.keys(this.Users[i]);}
    console.log(this.key);
    this.displayedColumns=this.key;
  }
  constructor(private sanitizer:DomSanitizer){}
  formbuilder = new NgFormBuilder();
  resultHtml : SafeHtml;
  showOutput = false;
  formbuild(){
    console.log(this.mytextarea);
    this.data = JSON.parse(this.mytextarea);
    console.log(this.data);
    this.res = JSON.stringify(this.data);
    console.log(this.res);
    let result = this.formbuilder.getTemplateForm(this.res);
    this.resultHtml = this.sanitizer.bypassSecurityTrustHtml(result);
    this.showOutput = true;
    
  }
  ngOnInit(){
    let _this=this;
    this.Users = [];   
    this.dataSource = new MatTableDataSource(this.Users);
  }
 
}
