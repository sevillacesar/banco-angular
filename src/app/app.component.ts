import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Consulta Cliente (001384529):</h1>
    <pre>{{ apiData | json }}</pre>
    <h1>Consulta Empleado (008283819):</h1>
    <pre>{{ apiDataEmpleado | json }}</pre>
  </div>
`,
})
export class AppComponent implements OnInit {
  apiData: any;
  apiDataEmpleado: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const apiUrl = 'http://localhost:8080/cliente/001384529';

    this.http.get(apiUrl).subscribe(
      (data) => {
        this.apiData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    const apiUrlEmpleado = 'http://localhost:8080/empleado/008283819';
    this.http.get(apiUrlEmpleado).subscribe(
      (data) => {
        this.apiDataEmpleado = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
