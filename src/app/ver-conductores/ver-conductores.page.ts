import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-ver-conductores',
  templateUrl: './ver-conductores.page.html',
  styleUrls: ['./ver-conductores.page.scss'],
})
export class VerConductoresPage implements OnInit{

  conductores: any[] = [];
  correoUsuario = localStorage.getItem('credentials') || '';

  constructor(private http: HttpClient) { }

  async enviarCorreo(destinatarioConductor: string, destinatarioUsuario: string) {
    console.log(destinatarioConductor);
    console.log(destinatarioUsuario);
    const asunto = 'Confirmar Reserva';

    // Construye el cuerpo del mensaje con saltos de línea
    const cuerpo = `Correo de confirmación reserva viaje.`;

    // Genera el enlace 'mailto' con el destinatario específico
    const mailtoLink = `mailto:${destinatarioConductor},${destinatarioUsuario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    // Abre el cliente de correo predeterminado del usuario
    window.location.href = mailtoLink;
  }
  ngOnInit() {
    // Realizar la solicitud HTTP para obtener la lista de conductores
    this.http.get<any[]>('https://2drgm3bg-8000.brs.devtunnels.ms/api/conductores').subscribe(
      conductores => {
        this.conductores = conductores;
      },
      error => {
        console.error('Error al obtener la lista de conductores', error);
      }
    );
  }
}
