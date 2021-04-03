import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailsService } from './../../services/emails.service';

@Component({
  selector: 'app-email-subscription',
  templateUrl: './email-subscription.component.html',
  styleUrls: ['./email-subscription.component.scss']
})
export class EmailSubscriptionComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public submitted: boolean = false;

  public success: boolean = false;

  public error: boolean = false;

  public errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private emailsService: EmailsService,
  ) { }

  ngOnInit(): void {}

  private submitEmail(): void {
    this.emailsService.sub({ email: this.fields.email.value })
      .subscribe(response => {
        if(response.result === 'error') {
          this.errorHandler(response.msg.replace(/<[^>]*>(?<content>[^<]*)<\/.>/ig, ''));
        }else{
          this.success = true;
          this.submitted = false;
        }
      }, error => {
        this.errorHandler(error);
			});
  }

  private errorHandler(error: string): void {
    this.error = true;
    this.errorMessage = error;
  }

  public submitHandler(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    this.submitEmail();
  }

  public reset(): void {
    this.error = false;
    this.success = false;
    this.submitted = false;
  }

  public changeInputHandler():void {
    this.submitted = false;
  }

  public get fields(): any { return this.form.controls; }
}
