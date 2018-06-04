import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {

  userList : User[];
  closeResult: string;

  $key: any;
  firstname;
  lastname;
  rating;
  category;
  subcategory;
  amount;
  
  constructor(private modalService: NgbModal,  private userService: UserService) {}

  ngOnInit() {
    var single = this.userService.getData();
    single.snapshotChanges().subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        var all = element.payload.toJSON();
        all["$key"] = element.key; 
        this.userList.push(all as User);
      })
    });
  }

  userDetails(usr: User){
    this.userService.selectedUser = usr;
    this.firstname = usr.firstname;
    this.lastname = usr.lastname;
    this.rating = usr.rating;
    this.category = usr.category;
    this.subcategory = usr.subcategory;
    this.amount = usr.amount;
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}