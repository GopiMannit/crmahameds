import axios from 'axios';

const baseUrl = 'http://localhost:8080/mannit'; //Replace the CommonService Backend url

const basEUrl = 'http://localhost:8081/api';  //Replace the ChatBot Backend url


//In register-mannit user or admin are going to register
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const data = await response.json();
      return { success: false, data };
    }
  } catch (error) {
    console.error('An error occurred while registering', error.message);
    return { success: false, error: 'An error occurred. Please try again.' };
  }
}

//In Login page user or admin can login with the proper credentials
export async function loginUser(username, password, objectId) {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        objectId,
      }),
    });

    if (response.ok) {
      return { success: true, data: await response.json() };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.error };
    }
  } catch (error) {
    console.error('An error occurred while logging in', error.message);
    return { success: false, error: 'Network error' };
  }
}
//In Patient Enquiry page user can able to fetch and see the data using the mobile number 
export async function fetchDataByPhoneNumber(domain , subdomain, objectId, phoneNumber) {
  try {
    const url = `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&userId=${objectId}&f=phonenumber_S eq ${phoneNumber}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
//In Patient Enquiry page user can able to create the new data 
export async function saveFormData(data, domain, subdomain, objectId) {
  try {
    const url =` ${baseUrl}/eCreate?domain=${domain}&subdomain=${subdomain}&userId=${objectId}`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

//In Patient Enquiry page user can able to update the existing data 
export async function updateFormData(updatedData, userDomain, userSubDomain, userId, resourceId) {
  try {
    const url = `${baseUrl}/eUpdate?domain=${userDomain}&subdomain=${userSubDomain}&userId=${userId}&resourceId=${resourceId}`;
    const response = await axios.put(url, updatedData);
    return { success: true, data: response.data };
  } catch (error) {
    throw error;
  }
}

//In Change Password page user can able to update their password
export const updatePassword = async (username, oldPassword, newPassword) => {
  const apiEndpoint = `${baseUrl}/resetpwd`;

  const requestBody = {
    username: username,
    password: oldPassword,
    new_password: newPassword,
  };

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      return { success: true, data: await response.json() };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData };
    }
  } catch (error) {
    console.error('An error occurred while updating password', error.message);
    return { success: false, error: 'An error occurred. Please try again.' };
  }
}

//In Chat bot report page user can able to see the data from the another api from whatsApp ChatBot
export async function getReportsByDate(date) {
  try {
    const response = await axios.get(`${basEUrl}/getbydate?date=${date}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

//In Add User page admin can able to create the new user it is only for admin use
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const data = await response.json();
      return { success: false, data };
    }
  } catch (error) {
    console.error('An error occurred while creating a user', error.message);
    return { success: false, error: 'An error occurred. Please try again.' };
  }
};

//In EnquiryReport using this we can able to fetch the data without the filter
export async function fetchDataWithoutFilter(objectId, domain, subdomain, formattedDate) {
  try {
    const response = await fetch(`http://localhost:8080/mannit/eSearch?domain=${domain}&subdomain=${subdomain}&userId=${objectId}&f=createDated_D eq ${formattedDate}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData.source.map(item => JSON.parse(item));
  } catch (error) {
    console.error('Error fetching data without filter:', error);
    throw error;
  }
}

//In EnquiryReport using this we can able to fetch the data with the filter
export const fetchDataWithFilter = async (domain, subdomain, objectId, filterKey, filterValue, formattedDate) => {
  try {
    let url;
    // Construct API URL for finance, treatment, and distance filters
    if (['finance', 'treatment', 'distance'].includes(filterKey)) {
      url = `${baseUrl}/eSearch?domain=healthcare&subdomain=clinic&userId=${objectId}&f=${filterKey}_L eq ${parseInt(filterValue, 10)} and createDated_D eq ${formattedDate}`;
    } else {
      // Construct default API URL for other filters
      url = `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&userId=${objectId}&f=${filterKey}_S eq ${filterValue} and createDated_D eq ${formattedDate}`;
    }

    console.log(url);

    const response = await axios.get(url);

    // Assuming your API returns a response with data property
    return response.data;
  } catch (error) {
    console.error('Error fetching data with filter:', error);
    throw error;
  }
};