import {Component, OnInit, ElementRef} from '@angular/core';
declare var $: any;
@Component({
  selector: 'form',
  styleUrls: ['./form.component.sass'],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  constructor(private _elRef: ElementRef){};
  ngOnInit() {
    $(".datepicker").datepicker();
    $(".profile-drop").click(function () {
      $(".profile-menu").slideToggle("slow");
    });

    $(".mobile-drop").click(function () {
      $(".mobile-menu").slideToggle("slow");
    });
  }
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost:10050/upload'
  };
  sizeLimit = 2000000;

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }
}
