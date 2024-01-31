<template>
  <div class="page">
    <Header class="Header" />
    <div class="user-profile">
    <!-- Display user name from session storage if available -->
    <p v-if="user.loggedInUser" :class="{ 'welcome-text': true, 'username-text': true }">
      WELCOME , <span class="username">{{ displayUsername }}</span>
    </p>
    <p v-else>Loading...</p>
  </div>
    <div class="full">
      <div class="grid-container">
        <div class="grid-item">
          <svg  @click="goToRoute('/patientEnquiry')"
          width="50" 
          height="50" 
          viewBox="0 0 26 25" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" >
          
          <ellipse 
          cx="12.7432" 
          cy="12.5" 
          rx="12.7432" 
          ry="12.5" 
          fill="#8DB600" />

  />
          
          <path
          d="M15.2632 13.5C14.6053 13.5 14.0461 13.2812 13.5855 12.8438C13.125 12.4062 12.8947 11.875 12.8947 11.25C12.8947 10.625 13.125 10.0938 13.5855 9.65625C14.0461 9.21875 14.6053 9 15.2632 9C15.9211 9 16.4803 9.21875 16.9408 9.65625C17.4013 10.0938 17.6316 10.625 17.6316 11.25C17.6316 11.875 17.4013 12.4062 16.9408 12.8438C16.4803 13.2812 15.9211 13.5 15.2632 13.5ZM10.5263 18V16.575C10.5263 16.3125 10.5921 16.0625 10.7237 15.825C10.8553 15.5875 11.0395 15.4 11.2763 15.2625C11.8684 14.925 12.4968 14.672 13.1616 14.5035C13.8263 14.335 14.5268 14.2505 15.2632 14.25C16 14.25 16.7008 14.3345 17.3655 14.5035C18.0303 14.6725 18.6584 14.9255 19.25 15.2625C19.4868 15.4 19.6711 15.5875 19.8026 15.825C19.9342 16.0625 20 16.3125 20 16.575V18H10.5263ZM5 13.5V12H11.3158V13.5H5ZM5 7.5V6H14.4737V7.5H5ZM11.3947 10.5H5V9H12.1053C11.9211 9.2125 11.7732 9.44375 11.6616 9.69375C11.55 9.94375 11.4611 10.2125 11.3947 10.5Z"
          fill="#FFFBFB" />
          </svg>

          <!-- <div class="arrow">
          <span>&rarr;</span>
        </div> -->
          <div class="content">
            <p style="font-weight: bold;">Patient Enquiry</p>
          <p>Click here to check out the profit, loss analysis chart for your clinic.</p>
          <button class="enquiry-button" @click='goToRoute("/enquiryReport")'>
            REPORT<span class="exclamation-mark">!</span>
          </button> 
          </div>
        </div>

        <div class="grid-item" >
          <svg 
          width="50" 
          height="50" 
          viewBox="0 0 25 25" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
            
          <circle 
          cx="12.5" 
          cy="12.5" 
          r="12.5" 
          fill="#8DB600" 
          @click="goToRoute()"/>
            <path
              d="M11.9231 5C11.2308 5 10.7692 5.43077 10.7692 6.07692V10.3846H6.15385C5.46154 10.3846 5 10.8154 5 11.4615V12.5385C5 13.1846 5.46154 13.6154 6.15385 13.6154H10.7692V17.9231C10.7692 18.5692 11.2308 19 11.9231 19H13.0769C13.7692 19 14.2308 18.5692 14.2308 17.9231V13.6154H18.8462C19.5385 13.6154 20 13.1846 20 12.5385V11.4615C20 10.8154 19.5385 10.3846 18.8462 10.3846H14.2308V6.07692C14.2308 5.43077 13.7692 5 13.0769 5H11.9231Z"
              fill="white" />
          </svg>

          <div class="content">
          <p style="font-weight: bold;">Patient Tracking</p>
          <p>Click here to check out the profit, loss analysis chart for your clinic.</p>
          <button class="enquiry-button" @click='goToRoute("")'>
            REPORT<span class="exclamation-mark">!</span>
          </button> 
        </div>
      </div>

        <div class="grid-item" >
          <svg 
          width="50" 
          height="50" 
          viewBox="0 0 90 91" 
          xmlns="http://www.w3.org/2000/svg" 
          @click="goToRoute()">
            <ellipse cx="45" cy="45.5" rx="45" ry="45.5" fill="#8DB600" />
            <path
              d="M49.7491 21.1681C49.1462 21.3921 48.6047 21.7974 48.288 22.2667C47.7771 23.0026 47.7771 22.9706 47.7771 32.2713C47.7771 37.871 47.818 41.1134 47.8793 41.3694C48.0734 42.0947 48.6047 42.756 49.3097 43.14L49.9534 43.4813L59.006 43.4599L68.0587 43.4279L68.4674 43.1933C68.9782 42.9053 69.4482 42.3933 69.7547 41.7747L70 41.2948V32.282V23.2693L69.7547 22.7466C69.4482 22.096 68.9169 21.5414 68.3243 21.2534C67.8543 21.0294 67.7828 21.0294 59.0673 21.0081C50.8321 20.9867 50.2497 20.9974 49.7491 21.1681Z"
              fill="#FBF3F3" />
            <path
              d="M22.0497 21.776C21.0382 22.1067 20.2821 23.0026 20.088 24.1012C20.0164 24.4852 19.9858 27.7063 20.0062 33.2633L20.0369 41.828L20.323 42.436C20.4864 42.7773 20.793 43.2146 21.028 43.4173C21.8453 44.1532 21.406 44.1212 31.2147 44.1212H40.063L40.5739 43.8652C41.1767 43.5773 41.6671 43.0973 41.9839 42.4787L42.2086 42.0414L42.2393 33.0926C42.27 23.1306 42.2904 23.5679 41.5854 22.6933C41.381 22.448 40.9826 22.1173 40.6863 21.9573L40.1652 21.6694L31.3271 21.648C24.1034 21.6267 22.4073 21.6587 22.0497 21.776Z"
              fill="#FBF3F3" />
            <path
              d="M22.8466 48.5903C21.9986 48.8676 21.406 49.3795 20.9973 50.2008L20.7521 50.6808V59.7469V68.8129L21.0279 69.3569C21.1812 69.6662 21.4979 70.0822 21.7432 70.2955C22.5503 71.0208 22.2336 70.9995 31.8891 70.9995C41.8306 70.9995 41.1971 71.0528 42.1269 70.0929C43.026 69.1436 42.9852 69.6982 42.9545 59.5229L42.9239 50.6808L42.648 50.1368C42.4947 49.8275 42.178 49.4115 41.9328 49.1982C41.1256 48.4729 41.4423 48.4943 31.7971 48.5049C27.0153 48.5049 22.9897 48.5476 22.8466 48.5903Z"
              fill="#FBF3F3" />
            <path
              d="M58.5054 52.1954C58.5054 52.2487 58.4952 53.6673 58.4748 55.3738L58.4544 58.467L55.4198 58.499L52.375 58.5203V59.4802V60.4402L55.4198 60.4615L58.4544 60.4935L58.4748 63.6399L58.4952 66.7864H59.3944H60.2935L60.3241 63.6079L60.3446 60.4402H63.3587H66.3729V59.4802V58.5203H63.3587H60.3446V55.3205V52.1207H59.425C58.9244 52.1207 58.5054 52.1527 58.5054 52.1954Z"
              fill="#FBF3F3" />
          </svg>
          <div class="content">
          <p style="font-weight: bold;">Doctor Dashboard</p>
          <p>Click here to check out the doctors and their patients.</p>
          <button class="enquiry-button" @click='goToRoute("")'>
            REPORT<span class="exclamation-mark">!</span>
          </button> 
        </div>
      </div>

        <div class="grid-item" >
          <svg 
          width="50" 
          height="50" 
          viewBox="0 0 25 25" 
          fill="none" xmlns="http://www.w3.org/2000/svg"
          @click="goToRoute()">
            <circle cx="12.5" cy="12.5" r="12.5" fill="#8DB600" />
            <path
              d="M15.2139 6.03613C15.2139 5.46389 15.8567 5 16.6497 5H18.5641C19.3572 5 20 5.46389 20 6.03613V16.3974C20 16.9697 19.3572 17.4336 18.5641 17.4336H16.6497C15.8567 17.4336 15.2139 16.9697 15.2139 16.3974V6.03613Z"
              fill="white" />
            <path
              d="M10.1069 10.1807C10.1069 9.60841 10.7498 9.14453 11.5428 9.14453H13.4572C14.2502 9.14453 14.893 9.60841 14.893 10.1807V16.3974C14.893 16.9697 14.2502 17.4336 13.4572 17.4336H11.5428C10.7498 17.4336 10.1069 16.9697 10.1069 16.3974V10.1807Z"
              fill="white" />
            <path
              d="M6.43583 13.289C5.64285 13.289 5 13.7529 5 14.3252V16.3974C5 16.9697 5.64285 17.4336 6.43583 17.4336H8.35028C9.14329 17.4336 9.78611 16.9697 9.78611 16.3974V14.3252C9.78611 13.7529 9.14329 13.289 8.35028 13.289H6.43583Z"
              fill="white" />
          </svg>
          <div class="content">
          <p style="font-weight: bold;">Profile Analysis</p>
          <p>Click here to check your patient's health and rating.</p>
          <button class="enquiry-button" @click='goToRoute()'>
            REPORT<span class="exclamation-mark">!</span>
          </button>
        </div>
      </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user:{
        clientname:'',
        name:"",
        objectId:'',
        role:'',
        domain:'',
        subdomain:'',
        loggedInUser:{},   
    }
    }
  },
  computed: {
    displayUsername() {
      return this.user.loggedInUser.name || "Loading...";
    },
  },
  mounted() {
  // Check if the loggedInUser key is present in session storage
  const storedUser = sessionStorage.getItem("loggedInUser");

  if (storedUser) {
    // Parse the source JSON string
    const sourceData = JSON.parse(JSON.parse(storedUser).source);
    
    // Access the 'username' property and set it in the component data
    this.user.loggedInUser = {
      clientname:sourceData.clientname,
      name: sourceData.username,
      role:sourceData.role,
      objectId:sourceData._id.$oid,
      domain:sourceData.domain,
      subdomain:sourceData.subdomain,
    };

    console.log("Logged-in user data:", this.user.loggedInUser);
  } else {
    console.log("No user data found in session storage.");
  }
},

  layouts: 'default',
  
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    },
    generateReport(){
      this.$route.push(route);
    }
  }
};
</script>
<style scoped>
@import '@/styles/home.css';
  
</style>


