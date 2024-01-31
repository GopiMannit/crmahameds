<template>
  <div class="register-container">
    <div class="register-form">
      <img src="~/assets/login_logo.png" alt="register Image" class="register-image" />
      <form @submit.prevent="submitForm">
        <!-- for client name -->
        <div class="form-group">
          <input type="text" placeholder="Client Name" v-model="clientname" required />
          <span class="error-message" :class="{ 'error-visible': clientnameError }">{{ clientnameError }}</span>
        </div>
        <!-- for email id -->
        <div class="form-group">
          <input type="text" placeholder="Email Id" v-model="emailid" required />
          <span class="error-message" :class="{ 'error-visible': emailidError }">{{ emailidError }}</span>
        </div>
        <!-- for username -->
        <div class="form-group">
          <input type="text" placeholder="Username" v-model="username" required />
          <span class="error-message" :class="{ 'error-visible': usernameError }">{{ usernameError }}</span>
        </div>
        <!-- for password -->
        <div class="form-group">
          <div class="password-field">
            <input :type="showPassword ? 'text' : 'password'" placeholder="Password" v-model="password" required
              id="password" />
            <span class="eye-toggle" @click="togglePasswordVisibility">
              <i :class="eyeIconClass">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
              </i>
            </span>
            <span class="error-message" :class="{ 'error-visible': passwordError }">{{ passwordError }}</span>
          </div>
        </div>
        <!-- Role -->
        <div class="form-group">
          <select id="role" v-model="role" required class="role-dropdown" >
            <option disabled value="" selected hidden>Role</option>
            <option v-for="option in roleOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          <span class="error-message" :class="{ 'error-visible': roleError }">{{ roleError }}</span>
        </div>


        <!-- for domain -->
        <div class="form-group">
          <input type="text" placeholder="Domain" v-model="domain" required />
          <span class="error-message" :class="{ 'error-visible': domainError }">{{ domainError }}</span>
        </div>
        <!-- for subdomain -->
        <div class="form-group">
          <input type="text" placeholder="SubDomain" v-model="subdomain" required />
          <span class="error-message" :class="{ 'error-visible': subdomainError }">{{ subdomainError }}</span>
        </div>
        <!-- create button -->
        <div class="form-group text-center">
          <button type="submit">Create</button>
        </div>

        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>

        <div class="error-container" v-if="alertMessage || passwordError">
          <span class="danger-sign">&#9888;</span>
          <span class="alert-message">{{ alertMessage || passwordError }}</span>
        </div>
        <!-- forgot password -->

      </form>
    </div>
  </div>
</template>

<script>
import { roleOptions } from '@/properties/roleOptions.js';
export default {
  data() {
    return {
      clientname: '',
      emailid: '',
      username: '',
      password: '',
      role: '',
      domain: '',
      subdomain: '',
      showPassword: false,
      clientnameError: '',
      emailidError: '',
      usernameError: '',
      passwordError: '',
      roleError: '',
      domainError: '',
      subdomainError: '',
      alertMessage: '',
      successMessage: '',
      roleOptions: roleOptions,
    };
  },
  computed: {
    roleClass() {
      // Assuming you have a property named 'color' in each role object
      const selectedRole = this.roleOptions.find(option => option.value === this.role);
      return selectedRole ? selectedRole.color : '';
    },
    eyeIconClass() {
      return this.showPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    },
  },
  methods: {
    async submitForm() {
      this.emailidError = '';
      this.clientnameError = '';
      this.usernameError = '';
      this.passwordError = '';
      this.roleError = '',
      this.domainError = '';
      this.subdomainError = '';
      this.alertMessage = '';
      try {
        const response = await fetch('http://localhost:8080/mannit/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            emailid: this.emailid,
            clientname: this.clientname,
            username: this.username,
            password: this.password,
            role: this.role,
            domain: this.domain,
            subdomain: this.subdomain,
          }),
        });

        if (response.ok) {
          this.successMessage = 'Registered successfully!';
          setTimeout(() => {
            this.$router.push('/login');
          }, 1000);

          console.log('Registration successful');
          console.log('Client Name:', this.clientname);
          console.log('emailid:', this.emailid);
          console.log('Username:', this.username);
          console.log('Password:', this.password);
          console.log('Password:', this.role);
          console.log('domain:', this.domain);
          console.log('subdomain:', this.subdomain);
        } else {
          // Handle specific error cases based on response status or structure
          const data = await response.json();

          // Check for errors related to each field
          this.clientnameError = data.clientname || '';
          this.emailidError = data.emailid || '';
          this.usernameError = data.username || '';
          this.passwordError = data.password || '';
          this.roleError = data.role || '';
          this.domainError = data.domain || '';
          this.subdomainError = data.subdomain || '';

          // Check for a general error message
          if (response.status !== 400) {
            this.alertMessage = data.errorMsg || 'An error occurred. Please try again.';
          } else {
            // Reset the general alert message if there is no non-validation error
            this.alertMessage = '';
          }
        }
      } catch (error) {
        console.error('An error occurred while registering', error.message);
        this.alertMessage = 'An error occurred. Please try again.';
        // Handle network or other errors
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
@import '@/styles/register.css';
</style>
