import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
})
export class AlertComponent implements OnInit, OnDestroy {

  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective | undefined;

  private observableMessage: any;

  constructor(
    private alertService: AlertService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.toastrService.overlayContainer = this.toastContainer;

    this.observableMessage = this.alertService
      .getMessage()
      .subscribe((message) => {
        if (typeof message !== 'undefined') {
          switch (message.type) {
            case 'info':
              this.toastrService.info(message.text);
              break;
            case 'success':
              this.toastrService.success(message.text);
              break;
            case 'warning':
              this.toastrService.warning(message.text);
              break;
            case 'error':
              this.toastrService.error(message.text);
              break;
            default:
              break;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.observableMessage.unsubscribe();
  }
}
