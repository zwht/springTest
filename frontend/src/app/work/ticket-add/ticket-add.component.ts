import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../common/restService/TicketService';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {UserService} from '../../user/service/UserService';
import {GxService} from '../../common/restService/GxService';
import {DoorService} from '../../common/restService/DoorService';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.less'],
  providers: [TicketService, UserService, GxService, DoorService]
})
export class TicketAddComponent implements OnInit {

  userListObj = {3: []};
  ticket = {
    id: 'string',
    name: 'string',
    dealersId: 'string',
    brandId: 1,
    odd: 'string',
    address: 'string',
    startTime: '2017-12-29T07:01:54.699Z',
    endTime: '2017-12-29T07:01:54.699Z',
    createTime: '2017-12-29T07:01:54.699Z',
    overTime: '2017-12-29T07:01:54.699Z',
    processIds: 'string',
    corporationId: 'string',
    state: 0,
    number: 0
  };
  gxList = [];
  doorList = [];
  emptyDoor = {
    doorId: 0,
    coverWidth: 100,
    coverHeight: 180,
    coverDepth: 70,
    width: 100,
    height: 180,
    sum: 1,
    lbWidth: 100,
    lbHeight: 180,
    lbSum: 2,
    dbWidth: 100,
    dbHeight: 180,
    dbSum: 1,
    lineSum: 1,
    lineLength: 2200,

  };
  productList = [JSON.parse(JSON.stringify(this.emptyDoor))];
  brandList = [
    {
      name: '川峰门业',
      id: 1
    },
    {
      name: '御驰门业',
      id: 2
    }
  ];

  constructor(private ticketService: TicketService,
              private gxService: GxService,
              private doorService: DoorService,
              private router: Router,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.ticket.id = params['id'];
      if (this.ticket.id) {
        this.getById();
      }

    });
    this.getUserList();
    this.getDoorList();

  }

  // 复制添加
  copyAdd(item) {
    this.productList.push(JSON.parse(JSON.stringify(item)));
  }

  getById() {
    (this.ticketService as any).getById(this.ticket.id)
      .then(response => {
        const rep = (response as any);
        if (rep.code === 200) {
          this.ticket = rep.data;
        } else {
        }
      });
  }

  getUserList() {
    (this.userService as any).list({
      pageNum: 1,
      pageSize: 10
    }, {})
      .then(response => {
        const rep = (response as any);
        if (rep.code === 200) {
          response.data.data.forEach(item => {
            if (item.roles === '3') {
              this.userListObj['3'].push(item);
            } else if (item.roles === '2') {
              if (!this.userListObj[item.type]) {
                this.userListObj[item.type] = [item];
              } else {
                this.userListObj[item.type].push(item);
              }
            }
          });
          this.getGxList();
        } else {
          console.log(response);
        }
      });
  }

  save() {
    if (this.ticket.id) {
      (this.ticketService as any).update(this.ticket)
        .then(response => {
          const rep = (response as any);
          if (rep.code === 200) {
            this.router.navigate(['/admin/product/ticket']);
          } else {
            console.log(response);
          }
        });
    } else {
      (this.ticketService as any).add(this.ticket)
        .then(response => {
          const rep = (response as any);
          if (rep.code === 200) {
            this.router.navigate(['/admin/work/ticket']);
          } else {
            console.log(response);
          }
        });
    }

  }

  getDoorList() {
    (this.doorService as any).list({
      pageNum: 1,
      pageSize: 10
    }, {})
      .then(response => {
        const rep = (response as any);
        if (rep.code === 200) {
          this.doorList = response.data.data;
        } else {
          console.log(response);
        }
      });
  }

  getGxList() {
    (this.gxService as any).list({
      pageNum: 1,
      pageSize: 50
    }, {})
      .then(response => {
        const rep = (response as any);
        if (rep.code === 200) {
          response.data.data.forEach(item => {
            if (this.userListObj[item.name]) {
              item.userId = this.userListObj[item.name][0].id;
            }
          });
          this.gxList = response.data.data;
        } else {
          console.log(response);
        }
      });
  }

  // 添加购买产品
  addDoor() {
    this.productList.push(this.emptyDoor);
  }

  // 删除购买产品
  delDoor(i) {
    this.productList.splice(i, 1);
  }

}