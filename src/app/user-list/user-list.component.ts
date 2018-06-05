import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Index } from '@firebase/database/dist/src/core/snap/indexes/Index';


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
  created;
  updated;
  
  constructor(
    private modalService: NgbModal,  
    private userService: UserService,

    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    //get Data
    var single = this.userService.getData();
    single.snapshotChanges().subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        var all = element.payload.toJSON();
        all["$key"] = element.key; 
        this.userList.push(all as User);
      })
    });

    //Edit data
    
    
  }

  onUpdate(usr : User){
    console.log('updating')
    this.userService.selectedUser = usr;
  }
  

  //Fetch Single User
  userDetails(usr: User){
    this.userService.selectedUser = usr;
    this.firstname = usr.firstname;
    this.lastname = usr.lastname;
    this.rating = usr.rating;
    this.category = usr.category;
    this.subcategory = usr.subcategory;
    this.amount = usr.amount;
    this.created = usr.created;
    console.log(this.subcategory[0])
  
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