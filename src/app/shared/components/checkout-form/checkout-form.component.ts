
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var Razorpay: any;

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  ngOnInit() {
    this.loadRazorpay();
  }

  loadRazorpay() {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
  }

  initiatePayment() {
    if (this.checkoutForm.valid) {
      const options = {
        key: 'YOUR_RAZORPAY_KEY', // Replace with your actual key
        amount: 100 * 100, // Amount in paise
        currency: 'INR',
        name: 'SBMA Ayurveda',
        description: 'Product Purchase',
        handler: (response: any) => {
          console.log('Payment successful', response);
          // Handle successful payment
        },
        prefill: {
          name: this.checkoutForm.get('fullName')?.value,
          email: this.checkoutForm.get('email')?.value,
          contact: this.checkoutForm.get('phone')?.value
        },
        theme: {
          color: '#2E7D32'
        }
      };

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    }
  }
}
