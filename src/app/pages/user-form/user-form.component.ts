import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService, User } from '../../services/user.service';

import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      website: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.userId = Number(id);
      this.userService.getUser(this.userId).subscribe(user => {
        this.form.patchValue(user);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const value = this.form.value;

    const request = this.isEdit
      ? this.userService.updateUser(this.userId, value)
      : this.userService.createUser(value);

    request.subscribe({
      next: () => {
        this.message.success(this.isEdit ? 'Пользователь обновлён' : 'Пользователь создан');
        this.router.navigate(['/users']);
      },
      error: () => {
        this.message.error('Ошибка при сохранении');
      }
    });
  }
}
