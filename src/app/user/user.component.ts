import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserInfo } from 'src/userInfo';
import { UserServicesService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  ELEMENT_DATA: UserInfo[] = [];
  displayedColumns: string[] = ['id', 'name','username','city', 'pincode','companyname'];
  dataSource = new MatTableDataSource<UserInfo>(this.ELEMENT_DATA);

  constructor(private service : UserServicesService) { }

  ngOnInit(): void {
    this.getAllData()
  }

  public getAllData(){
    let response = this.service.userInfo();
    response.subscribe( result => this.dataSource.data =  result as UserInfo[])
  }

}
