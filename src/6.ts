import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  public data: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://example.com/data').subscribe((response) => {
      this.data = response;
    });
  }
}
