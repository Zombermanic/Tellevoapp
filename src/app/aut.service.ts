import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class  AUTService {
  private users = [
    { username: 'tomas@duocuc.cl', password: '1234' },
    { username: 'val.rodriguezs@duocuc.cl', password: '1234' }
  ];

  isAuthenticated = false;

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    
    if (user) {
     
      this.isAuthenticated = true;
      return true;
    } else {
      
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {

    this.isAuthenticated = false;
  }
}
