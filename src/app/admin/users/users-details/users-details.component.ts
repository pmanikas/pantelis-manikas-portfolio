import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { UploadImagesService } from 'src/app/core/services/upload-images.service';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})

export class UsersDetailsComponent implements OnInit {

  public user: User = new User();
  public submitted: boolean = false;
  public loading: boolean = false;
  public errorMessage: string = '';
  private id: string = "";
  public isLoading: boolean = false;

  constructor(
    private usersService: UsersService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private uploadImagesService: UploadImagesService,
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.id = id;
    if(id === 'new') return;
    this.getById(id);
  }

  public submitHandler(): void {
    if(this.id === 'new') this.addUser(this.user)
    else this.editUser(this.user)
  }

  private getById(id: string):void {
    this.usersService.getById(id).subscribe((user: User) => {
      this.user = user;
    })
  }

  private addUser(user: User): void {
    this.isLoading = true;
    this.usersService.add(user).subscribe((_res: any) => {
      this.alertService.success('User has been Added');
      this.router.navigate(['/users/list']);
      this.isLoading = false;
    });
  }

  private editUser(user: User): void {
    this.isLoading = true;
    this.usersService.edit(user).subscribe((user: any) => {
      this.user = user;
      this.alertService.success('User has been Edited');
      this.isLoading = false;
    });
  }

  public imageLoaded(data: FormData): void {
    this.uploadImage(data);
  }

  private uploadImage(data: FormData): void {
    this.isLoading = true;
    this.uploadImagesService.upload(data)
      .subscribe((data: any) => {
        this.isLoading = false;
        this.user.image = data.location;
      });
  }

  // private errorHandler(error: string): void {
  //   this.error = true;
  //   this.errorMessage = error;
  // }

}
