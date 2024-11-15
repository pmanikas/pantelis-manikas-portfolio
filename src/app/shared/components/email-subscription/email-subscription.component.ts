import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { EmailsService } from 'src/app/core/services/emails.service';

@Component({
  selector: 'app-email-subscription',
  templateUrl: './email-subscription.component.html',
  styleUrls: ['./email-subscription.component.scss']
})
export class EmailSubscriptionComponent {

  public form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public submitted: boolean = false;
  public success: boolean = false;
  public error: boolean = false;
  public errorMessage: string = '';
  public isSending: boolean = false;
  public faSpinner: any = faSpinner;

  constructor(
    private formBuilder: FormBuilder,
    private emailsService: EmailsService,
  ) { }

  private submitEmail(): void {
    this.isSending = true;
    this.emailsService.sub({ email: this.fields.email.value })
      .subscribe(response => {
        this.isSending = false;
        if(response.result === 'error') {
          this.errorHandler(response.msg.replace(/<[^>]*>(?<content>[^<]*)<\/.>/ig, ''));
        }else{
          this.success = true;
          this.submitted = false;
        }
      }, error => {
        this.errorHandler(error);
        this.isSending = false;
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
