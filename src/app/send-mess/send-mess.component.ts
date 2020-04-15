import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IMess} from '../imess';
import {MessService} from '../mess.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-mess',
  templateUrl: './send-mess.component.html',
  styleUrls: ['./send-mess.component.scss']
})
export class SendMessComponent implements OnInit {
  @Input() idUser: number;
  sendForm: FormGroup;
  input =  new FormControl();
  constructor(
    private fb: FormBuilder,
    private messService: MessService,
    private router: Router
  ) { }
  ngOnInit(
    sendForm = this.fb.group({
      message: new FormControl()
    })
  ) {
  }
  send() {
    const newMess: Partial<IMess> = {
      idUser: this.idUser,
      content: this.input.value,
      time: new Date()
    };
    console.log(newMess);
    this.messService.sendMess(newMess).subscribe();
    this.input.reset();
  }
}
