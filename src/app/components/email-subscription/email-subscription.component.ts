import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {}

  private submitEmail(): void {
    this.form.reset();
    this.submitted = false;
    this.success = true;
    this.error = false;
  }

  public submitHandler(): void {
    this.submitted = true;
    this.error = true;
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

  public get fields() { return this.form.controls; }
}
