import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClienteService } from './cliente/shared/cliente.service';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private clienteService: ClienteService,private authService: AuthService) {}

  ngOnInit(): void {
    this.clienteService.CargaInicial(); 
    this.authService.login();
  }
}
