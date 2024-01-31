<template>
  <div>
    <Header />
    <div class="register-container">
      <div class="register-form">
        <h2 class="text-center">ADD USER</h2>
        <form @submit.prevent="submitUserForm">
          <!-- for client name -->
          <div class="form-group">
            <input type="text" placeholder="Client Name" v-model="initialClientName" readonly required />
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
                  <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
                </i>
              </span>
              <span class="error-message" :class="{ 'error-visible': passwordError }">{{ passwordError }}</span>
            </div>
          </div>
          <!-- Role -->
          <div class="form-group">
            <select id="role" v-model="role" required class="role-dropdown" disabled>
              <!-- Set the default role -->
              <option value="user">User</option>
            </select>
            <span class="error-message" :class="{ 'error-visible': roleError }">{{ roleError }}</span>
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
    <Footer />
  </div>
</template>

<script>
import { roleOptions } from '@/properties/roleOptions.js';
import {createUser} from '~/api/api.js';

export default {
  data() {
    return {
      initialClientName: '', // Store the initial client name
      emailid: '',
      username: '',
      password: '',
      role: 'user', // Set the default role
      showPassword: false,
      emailidError: '',
      usernameError: '',
      passwordError: '',
      roleError: '',
      clientnameError: '',  // Adding clientnameError
      domainError: '',      // Adding domainError
      subdomainError: '',   // Adding subdomainError
      alertMessage: '',
      successMessage: '',
      roleOptions: roleOptions,
      user: {
        loggedInUser: {
          clientname: '',
        },
      },
    };
  },
  mounted() {
    const storedUser = sessionStorage.getItem('loggedInUser');
    if (storedUser) {
      // Parse the source JSON string
      const sourceData = JSON.parse(JSON.parse(storedUser).source);

      // Access the 'clientname' property and set it in the component data
      this.initialClientName = sourceData.clientname;
      this.user.loggedInUser.clientname = sourceData.clientname;
      console.log(this.user.loggedInUser.clientname);

      // Check if 'objectId' property is available before assigning
      if (sourceData._id && sourceData._id.$oid) {
        this.user.loggedInUser.objectId = sourceData._id.$oid;
        console.log(this.user.loggedInUser.objectId);
      }
    }
  },
  computed: {
    clientName() {
      return this.initialClientName || 'Loading...';
    },
    roleClass() {
      const selectedRole = this.roleOptions.find(option => option.value === this.role);
      return selectedRole ? selectedRole.color : '';
    },
    eyeIconClass() {
      return this.showPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
    },
  },
  methods: {
    async submitUserForm() {
      this.emailidError = '';
      this.clientnameError = '';
      this.usernameError = '';
      this.passwordError = '';
      this.roleError = '';
      this.domainError = '';
      this.subdomainError = '';
      this.alertMessage = '';

      try {
        const adminId = this.user.loggedInUser.objectId;
        const response = await createUser({
          emailid: this.emailid,
          clientname: this.initialClientName,
          username: this.username,
          password: this.password,
          role: this.role,
          domain: 'healthcare',
          subdomain: 'clinic',
          adminId: adminId,
        });

        if (response.success) {
          this.successMessage = 'User registered successfully!';
          this.emailid = '';
          this.username = '';
          this.password = '';
          this.role = 'user';
        } else {
          this.alertMessage = 'An error occurred. Please try again.';
        }
      } catch (error) {
        console.error('An error occurred while creating a user', error.message);
        this.alertMessage = 'An error occurred. Please try again.';
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
@import '@/styles/adduser.css'
</style>
