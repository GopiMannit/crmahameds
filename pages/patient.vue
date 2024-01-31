<template>
    <div class="page-conatiner">
      <div class="form-container">
        <Header class="Header" />
        <div class="full">
          <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
          <div class="top">
            <label for="formInput">Mobile Number</label>
            <div class="search-container">
  
              <input type="telephone" id="phonenumber" name="search" placeholder="Search..." v-model="data.phonenumber"
                class="custom-input" pattern="[0-9]*" required />
  
              <div class="search-icon" @click="searchIconClicked">
                <svg width="15" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  
                  <path
                    d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z"
                    stroke="#BAACAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  
                  <path d="M10.0002 9.99995L7.8252 7.82495" stroke="#BAACAC" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div v-if="searchError" class="error-message">{{ searchError }}</div>
          </div>
          <div class="additional-info">
            <div class="single-line">
              <label for="name">Name</label>
              <div class="input-name">
                <input type="text" id="name" class="custom-input" v-model="data.name" />
              </div>
  
              <label for="age">Age</label>
              <div class="input-age">
                <select id="age" class="custom-input" v-model="data.age">
                  <option value="">Age</option>
                  <option v-for="i in 100" :key="i" :value="i">{{ i }}</option>
                </select>
              </div>
              <div class="gender-label" id="gender">
                <label for="gender" style="width:15%;">Gender</label>
              </div>
              <div class="radio-options">
                <input type="radio" id="male" name="gender" value="male" v-model="data.gender">
                <label for="male" style="width: 100%; margin-right: 5px; ">Male</label>
  
                <input type="radio" id="female" name="gender" value="female" v-model="data.gender">
                <label for="female" style="width: 48%; margin-right: 5px; ">Female</label>
              </div>
            </div>
            <div class="spacer"></div>
  
            <div class="location">
              <div class="single-line-1">
                <label for="location">Location</label>
                <input type="text" id="location" class="custom-input" v-model="data.location" />
  
                <label for="Compliant">Compliant</label>
                <select id="Compliant" v-model="data.paintype" class="custom-input" style="margin-right:15px;">
                  <option disabled value="">Please select one</option>
                  <option v-for="painType in painTypes" :key="painType" :value="painType">{{ painType }}</option>
                </select>
              </div>
            </div>
            <div class="spacer"></div>
  
            <div class="remarks">
              <label for="remarks">Remarks</label>
              <textarea id="remarks" rows="4" class="custom-input" v-model="data.remarks"></textarea>
            </div>
          </div>
  
          <div v-if="showAdditionalInfo" class="additional-info">
            <div class="single-line">
              <label for="name">Name</label>
              <div class="input-name">
                <input type="text" id="name" class="custom-input" v-model="data.name_0" />
              </div>
  
              <label for="age">Age</label>
              <div class="input-age">
                <select id="age" class="custom-input" v-model="data.age_0">
                  <option value="">Age</option>
                  <option v-for="i in 100" :key="i" :value="i">{{ i }}</option>
                </select>
              </div>
              <div class="gender-label" id="gender">
                <label for="gender" style="width:15%;">Gender</label>
              </div>
              <div class="radio-options">
                <input type="radio" id="male" name="gender" value="male" v-model="data.gender">
                <label for="male" style="width: 100%; margin-right: 5px; ">Male</label>
  
                <input type="radio" id="female" name="gender" value="female" v-model="data.gender">
                <label for="female" style="width: 48%; margin-right: 5px; ">Female</label>
              </div>
            </div>
            <div class="spacer"></div>
  
            <div class="location">
              <div class="single-line-1">
                <label for="location">Location</label>
                <input type="text" id="location" class="custom-input" v-model="data.location" />
  
                <label for="Compliant">Compliant</label>
                <select id="Compliant" v-model="data.paintype" class="custom-input" style="margin-right:15px;">
                  <option disabled value="">Please select one</option>
                  <option v-for="painType in painTypes" :key="painType" :value="painType">{{ painType }}</option>
                </select>
              </div>
            </div>
            <div class="spacer"></div>
  
            <div class="remarks">
              <label for="remarks">Remarks</label>
              <textarea id="remarks" rows="4" class="custom-input" v-model="data.remarks"></textarea>
            </div>
            <!-- Add more fields as needed -->
          </div>
  
          <div class="add-button-container">
            <div class="add-icon" @click="toggleAdditionalInfo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 11H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
  
          <div class="turnup-scale">
            <label for="turnupscale">Turn Up scale</label>
            <select id="turnupscale" class="custom-input" v-model="data.turnupscale">
              <option value="">scale</option>
              <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
            </select>
          </div>
          <div class="spacer"></div>
  
          <div class="patient">
  
            <div class="doctor-selection">
              <label for="doctorSelection">Doctor Selection</label>
              <div class="radio-options">
                <input type="radio" id="dutyDoctor" name="doctorSelection" value="dutyDoctor"
                  v-model="data.doctorSelection">
                <label for="dutyDoctor" style="width: 48%; margin-right: 2px;">Duty Doctor</label>
  
                <input type="radio" id="chiefDoctor" name="doctorSelection" value="chiefDoctor"
                  v-model="data.doctorSelection">
                <label for="chiefDoctor" style="width: 48%; margin-right: 2px;">Chief Doctor</label>
              </div>
            </div>
            <div class="spacer"></div>
  
            <div class="query">
              <label for="query">Query</label>
  
              <!-- Container for Finance, Distance, Treatment, and Remarks -->
              <div class="finance-distance-treatment-remarks">
                <div class="finance">
                  <label for="financeOption">Finance</label>
                  <input type="checkbox" id="financeCheckbox" name="financeCheckbox" v-model="data.financeCheckbox" @change="updateFinance">
                  <select id="financeOption" class="custom-input" v-model="data.finance" :disabled="!data.financeCheckbox">
                    <option value="">scale</option>
                    <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                  </select>
                </div>
  
                <div class="distance">
                  <label for="distanceOption">Distance</label>
                  <input type="checkbox" id="distanceCheckbox" name="distanceCheckbox" v-model="data.distanceCheckbox" @change="updateDistance">
                  <select id="distanceOption" class="custom-input" v-model="data.distance" :disabled="!data.distanceCheckbox">
                    <option value="">scale</option>
                    <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                  </select>
                </div>
  
                <div class="treatment">
                  <label for="treatmentOption">Treatment</label>
                  <input type="checkbox" id="treatmentCheckbox" name="treatmentCheckbox" v-model="data.treatmentCheckbox" @change="updateTreatment">
                  <select id="treatmentOption" class="custom-input" v-model="data.treatment" :disabled="!data.treatmentCheckbox">
                    <option value="">scale</option>
                    <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="spacer"></div>
  
            <div class="remarks-1">
              <label for="remarks-1">Remarks</label>
              <div class="remarks-1">
                <textarea id="remarks-1" rows="4" class="custom-input" v-model="data.remarksDoc"></textarea>
              </div>
            </div>
  
  
            <div class="spacer"></div>
            <div class="dates">
              <div class="expected-date">
                <label for="expectedDate">Expected Date</label>
                <input type="date" id="expectedDate" v-model="data.expectedDate" @input="validateDate('expectedDate')"
                  class="custom-input" :min="getMinDate()" />
                  <div v-if="dateWarnings.expectedDate" class="warning-message">{{ dateWarnings.expectedDate }}</div>
              </div>
              <div class="expected-date">
                <label for="followUpDate">Follow-up Date</label>
                <input type="date" id="followUpDate" v-model="data.followUpDate" @input="validateDate('followUpDate')"
                  class="custom-input" :min="getMinDate()" />
                  <div v-if="dateWarnings.followUpDate" class="warning-message">{{ dateWarnings.followUpDate }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="submit-container">
        <button type="button" @click="submitForm">Submit</button>
      </div>
    </div>
  </template>
  
  
  <script>
  import '~/components/Header.vue'
  import formData from '@/properties/formData.js';
  import { data } from '@/properties/data.js';
  import { fetchDataByPhoneNumber, saveFormData } from '@/api/api.js';
  
  export default {
    data() {
      return {
        searchQuery: '',
        showscales:false,
        financeCheckbox: false,
        distanceCheckbox: false,
        treatmentCheckbox: false,
        ...formData,
        data: { ...data },
        searchError: '',
        searchMessage: '',
        showAdditionalInfo: false,
        // currentDate:this.getMinDate(),
        dateWarnings:{
          expectedDate:'',
          followUpDate:'',
        }
      };
    },
    methods: {
  
      // validateDate(datatype){
      //   const currentDate =new Date().toISOString().split('T')[0];
      //   const selectedDate =this.data[datatype];
  
      //   if(selectedDate &&selectedDate < currentDate){
      //     this.dateWarnings[dataType]='Please select a date in the future.';
  
      //   }else{
      //   this.dateWarnings[dataType]='';  
      //   }
      // },
      validateDate(datatype) {
    const currentDate = new Date().toISOString().split('T')[0];
    const selectedDate = this.data[datatype];
  
    if (selectedDate && selectedDate < currentDate) {
      this.dateWarnings[datatype] = 'Please select a date in the future.';
    } else {
      this.dateWarnings[datatype] = '';
    }
  },
  
  
      updateFinance(){
        if (this.data.financeCheckbox){
  
        }else{
  
        }
      },
      updateDistance(){
        if(this.data.distanceCheckbox){
  
        }else{
  
        }
      },
      updateTreatment(){
        if(this.data.treatmentCheckbox){
  
        }else{
  
        }
      },
      toggleAdditionalInfo() {
        this.showAdditionalInfo = !this.showAdditionalInfo;
      },
      getMinDate() {
       return new Date().toISOString().split('T')[0];
      },
      async searchIconClicked() {
        if (!/^\d+$/.test(this.data.phonenumber)) {
          this.searchError = 'Please enter only numbers for search.';
          return;
        }
  
        try {
          const phoneNumber = this.data.phonenumber;
          const response = await fetchDataByPhoneNumber(phoneNumber);
  
          if (response && response.source && response.source.length > 0) {
            const dataFromSource = response.source[0];
            this.formData = typeof dataFromSource === 'string' ? JSON.parse(dataFromSource) : dataFromSource;
  
            // Update the form fields with the fetched data
            this.data = {
              ...this.data,
              phonenumber: this.formData.phonenumber || '',
              name: this.formData.name || '',
              age: this.formData.age || '',
              gender: this.formData.gender || '',
              location: this.formData.location || '',
              paintype: this.formData.paintype || '',
              remarks: this.formData.remarks || '',
              turnupscale: this.formData.turnupscale || '',
              doctorSelection: this.formData.doctorSelection || '',
              finance: this.formData.finance || '',
              distance: this.formData.distance || '',
              treatment: this.formData.treatment || '',
              remarksDoc: this.formData.remarksDoc || '',
              expectedDate: this.formData.expectedDate || '',
              followUpDate: this.formData.followUpDate || '',
            };
  
            this.searchError = ''; // Clear any previous search errors
            console.log('Fetched data:', this.formData);
  
            // Show a success message to the user
            this.showMessageToUser('Successfully Searched');
          } else {
            this.searchError = 'No data available for the provided phone number.';
            // Reset form fields if no data is found
            this.data = { ...initialFormData }; // assuming initialFormData is your initial form data
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          this.searchError = 'An error occurred while fetching data.';
        }
      },
  
      // Helper function to show a message to the user
      showMessageToUser(message) {
        // Implement your logic to display the message to the user
        console.log(message);
        // For example, you might set a property in your component to show a notification or update the UI
        // this.showMessage = message;
      },
      async submitForm() {
        try {
  
          this.data={...data};
          this.showscales=false;
  
          console.log('Data before sending:', this.data); // Log the data before sending
  
          const response = await saveFormData(this.data); // Using the API function
          console.log('Data saved:', response);
  
          this.successMessage = 'Form submitted successfully!';
          setTimeout(() => {
            this.successMessage = '';
            this.data = { ...data };
          }, 2000);
  
          this.showAdditionalInfo = false;
  
  
          // Reset formData to its initial state
          this.data = { ...data };
          console.log('Reset data:', this.data);
        } catch (error) {
          console.error('Error creating new entry:', error);
          // Handle errors as needed
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import '@/styles/patientEnquiry.css';
  </style>