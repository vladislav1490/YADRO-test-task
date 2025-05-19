import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [
    CommonModule,
    NzCardModule,
    NzSpinModule,
    NzButtonModule,
    NzIconModule,
    RouterLink
  ],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user?: User;
  loading = true;

  readonly #route = inject(ActivatedRoute);
  readonly #userService = inject(UserService);

  ngOnInit(): void {
    const id = Number(this.#route.snapshot.paramMap.get('id'));
    this.#userService.getUser(id).subscribe({
      next: (user) => {
        this.user = user;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
