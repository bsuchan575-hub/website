import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  private adminEmail = 'suchanb317@gmail.com';

  constructor(private http: HttpClient) {}

  // Mock email sending function for regular login
  sendLoginNotification(email: string, username: string): Observable<{success: boolean, message: string}> {
    console.log(`Sending login notification to: ${this.adminEmail}`);
    console.log(`User: ${username} logged in from email: ${email}`);
    
    // Simulate successful email send
    return of({
      success: true,
      message: `Login notification sent to ${this.adminEmail} for user ${username}`
    }).pipe(delay(1500));
  }

  // Mock email sending function for Google login
  sendGoogleLoginNotification(userEmail: string, username: string): Observable<{success: boolean, message: string}> {
    console.log(`Sending Google login notification to: ${this.adminEmail}`);
    console.log(`Google User: ${username} logged in with email: ${userEmail}`);
    
    // Simulate successful email send
    return of({
      success: true,
      message: `Google login notification sent to ${this.adminEmail} for user ${username} (${userEmail})`
    }).pipe(delay(1500));
  }

  // Mock email sending function for Facebook login
  sendFacebookLoginNotification(userEmail: string, username: string): Observable<{success: boolean, message: string}> {
    console.log(`Sending Facebook login notification to: ${this.adminEmail}`);
    console.log(`Facebook User: ${username} logged in with email: ${userEmail}`);
    
    // Simulate successful email send
    return of({
      success: true,
      message: `Facebook login notification sent to ${this.adminEmail} for user ${username} (${userEmail})`
    }).pipe(delay(1500));
  }
}