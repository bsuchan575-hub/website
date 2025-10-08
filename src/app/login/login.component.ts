import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean = false;
  loginError: string = '';
  showSuccess: boolean = false;
  currentProvider: string = '';
  showOAuthPopup: boolean = false;
  oauthProvider: string = '';
  oauthStep: number = 1; // 1: connecting, 2: authenticating, 3: redirecting

  // Mock user database
  private users = [
    { email: 'user@example.com', password: 'password123', username: 'MovieLover' },
    { email: 'admin@movieverse.com', password: 'admin123', username: 'Admin' },
    { email: 'test@test.com', password: 'test123', username: 'TestUser' }
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onLogin() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginError = '';
      this.showSuccess = false;
      this.currentProvider = 'email';

      const { email, password } = this.loginForm.value;

      // Simulate authentication
      setTimeout(() => {
        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
          // Successful login
          this.handleSuccessfulLogin(user, 'email');
        } else {
          // Failed login
          this.loginError = 'Invalid email or password. Please try again.';
          this.isLoading = false;
        }
      }, 1500);
    } else {
      this.markFormGroupTouched();
    }
  }

  onGoogleLogin() {
    this.oauthProvider = 'google';
    this.showOAuthPopup = true;
    this.oauthStep = 1;
    
    // Step 1: Connecting to Google
    setTimeout(() => {
      this.oauthStep = 2; // Authenticating
      
      // Step 2: Authenticating (after 1.5 seconds)
      setTimeout(() => {
        this.oauthStep = 3; // Redirecting
        
        // Step 3: Redirect (after 1 second)
        setTimeout(() => {
          // Mock Google OAuth response
          const mockGoogleUser = {
            username: 'Google User',
            email: 'suchanb317@gmail.com',
            isLoggedIn: true,
            provider: 'google',
            picture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
          };

          this.handleSuccessfulLogin(mockGoogleUser, 'google');
          this.showOAuthPopup = false;
        }, 1000);
      }, 1500);
    }, 1000);
  }

  onFacebookLogin() {
    this.oauthProvider = 'facebook';
    this.showOAuthPopup = true;
    this.oauthStep = 1;
    
    // Step 1: Connecting to Facebook
    setTimeout(() => {
      this.oauthStep = 2; // Authenticating
      
      // Step 2: Authenticating (after 1.5 seconds)
      setTimeout(() => {
        this.oauthStep = 3; // Redirecting
        
        // Step 3: Redirect (after 1 second)
        setTimeout(() => {
          // Mock Facebook OAuth response
          const mockFacebookUser = {
            username: 'Facebook User',
            email: 'suchanb317@gmail.com',
            isLoggedIn: true,
            provider: 'facebook',
            picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
          };

          this.handleSuccessfulLogin(mockFacebookUser, 'facebook');
          this.showOAuthPopup = false;
        }, 1000);
      }, 1500);
    }, 1000);
  }

  private handleSuccessfulLogin(user: any, provider: string) {
    this.showSuccess = true;
    this.currentProvider = provider;
    
    // Store user in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Send email notification in background
    if (provider === 'email') {
      this.emailService.sendLoginNotification(user.email, user.username).subscribe();
    } else if (provider === 'google') {
      this.emailService.sendGoogleLoginNotification(user.email, user.username).subscribe();
    } else if (provider === 'facebook') {
      this.emailService.sendFacebookLoginNotification(user.email, user.username).subscribe();
    }

    // Navigate to home after short delay
    setTimeout(() => {
      this.router.navigate(['/']).then(success => {
        if (success) {
          console.log('Navigation successful');
        } else {
          console.log('Navigation failed');
          // Fallback: reload the page
          window.location.href = '/';
        }
      });
    }, 1000);
  }

  closeOAuthPopup() {
    this.showOAuthPopup = false;
    this.isLoading = false;
    this.oauthStep = 1;
  }

  onSignup() {
    this.loginError = 'Signup functionality coming soon! Stay tuned.';
  }

  onForgotPassword() {
    this.loginError = 'Password reset feature will be available soon!';
  }

  private markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  // Demo credentials for testing
  fillDemoCredentials() {
    this.loginForm.patchValue({
      email: 'user@example.com',
      password: 'password123'
    });
  }
}