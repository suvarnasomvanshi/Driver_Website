export const validatePartnerData = (
    formData,
    setFieldError,
) => {
    console.log(formData)
    // First Name
    try {
        if (formData.first_name === "") {
            setFieldError((prevData) => ({
                ...prevData,
                first_name: "Please enter your first name",
            }));
            return;
        } else if (formData.first_name.match(/^[a-zA-Z]*$/) === null) {
            setFieldError((prevData) => ({
                ...prevData,
                first_name: "Please enter valid first name",
            }));
            return;
        } else {
            setFieldError((prevData) => ({
                ...prevData,
                first_name: "",
            }));
        }

        // Last Name
        if (formData.last_name === "") {
            setFieldError((prevData) => ({
                ...prevData,
                last_name: "Please enter your last name",
            }));
            return;
        } else if (formData.last_name.match(/^[a-zA-Z]*$/) === null) {
            setFieldError((prevData) => ({
                ...prevData,
                last_name: "Please enter valid last name",
            }));
            return;
        } else {
            setFieldError((prevData) => ({
                ...prevData,
                last_name: "",
            }));
        }

        // Description
        // Assuming it's optional, so no validation required

        // Business Email
        if (formData.business_email === "") {
            setFieldError((prevData) => ({
                ...prevData,
                business_email: "Please enter your business email",
            }));
            return;
        } else if (
            formData.business_email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) === null
        ) {
            setFieldError((prevData) => ({
                ...prevData,
                business_email: "Please enter valid business email ID",
            }));
            return;
        } else {
            setFieldError((prevData) => ({
                ...prevData,
                business_email: "",
            }));
        }

        // Business Phone Number
        if (formData.business_phone_number === "") {
            setFieldError((prevData) => ({
                ...prevData,
                business_phone_number: "Please enter your business phone number",
            }));
            return;
        } else if (formData.business_phone_number.match(/^[0-9]*$/) === null || formData.business_phone_number.length !== 10) {
            setFieldError((prevData) => ({
                ...prevData,
                business_phone_number: "Please enter valid business phone number",
            }));
            return;
        } else {
            setFieldError((prevData) => ({
                ...prevData,
                business_phone_number: "",
            }));
        }

        // Phone Number
        if (formData.phone_number === "") {
            setFieldError((prevData) => ({
                ...prevData,
                phone_number: "Please enter your phone number",
            }));
            return;
        } else if (formData.phone_number.match(/^[0-9]*$/) === null || formData.phone_number.length !== 10) {
            setFieldError((prevData) => ({
                ...prevData,
                phone_number: "Please enter valid phone number",
            }));
            return;
        } else {
            setFieldError((prevData) => ({
                ...prevData,
                phone_number: "",
            }));
        }

        // Alternative Phone Number
        // Assuming it's optional, so no validation required

        if (formData.company_name === "") {
            setFieldError((prevData) => ({
                ...prevData,
                company_name: "Please enter your Company Name",
            }));
            return;
        } else if (formData.company_name.match(/^[a-zA-Z0-9]*$/) === null) {
            setFieldError((prevData) => ({
                ...prevData,
                company_name: "Please enter valid Company Name",
            }));
            return;
        } else {
            setFieldError((prevData) => ({
                ...prevData,
                company_name: "",
            }));
        }

        // Address
        // Assuming it's optional, so no validation required

        // City
        if (formData.city === "") {
            setFieldError((prevData) => ({
                ...prevData,
                city: "Please enter your city",
            }));
            return;
        } else if (formData.city.match(/^[a-zA-Z ]*$/) === null) {
            setFieldError((prevData) => ({
                ...prevData,
                city: "Please enter valid city",
            }));
            return;
        } else {
            setFieldError((prevData) => ({
                ...prevData,
                city: "",
            }));
        }

        // State
        if (formData.state === "") {
            setFieldError((prevData) => ({
                ...prevData,
                state: "Please enter your state",
            }));
            return;
        } else if (formData.state.match(/^[a-zA-Z ]*$/) === null) {
            setFieldError((prevData) => ({
                ...prevData,
                state: "Please enter valid state",
            }));
            return;
        } else {
            setFieldError((prevData) => ({
                ...prevData,
                state: "",
            }));
        }

        // Country
        // Assuming it's optional, so no validation required

        // Zipcode
        if (formData.zipcode === "") {
            setFieldError((prevData) => ({
                ...prevData,
                zipcode: "Please enter your zipcode",
            }));
            return;
        } else if (formData.zipcode.match(/^[0-9]*$/) === null || formData.zipcode.length !== 6) {
            setFieldError((prevData) => ({
                ...prevData,
                zipcode: "Please enter valid zipcode",
            }));
            return;
        } else {
            setFieldError((prevData) => ({
                ...prevData,
                zipcode: "",
            }));
        }

        if (formData.message === "") {
            setFieldError((prevData) => ({
                ...prevData,
                message: "Please enter your message",
            }));
            return;
        }else {
            setFieldError((prevData) => ({
                ...prevData,
                message: "",
            }));
        }

        if (formData.address === "") {
            setFieldError((prevData) => ({
                ...prevData,
                address: "Please enter your address",
            }));
            return;
        }else {
            setFieldError((prevData) => ({
                ...prevData,
                address: "",
            }));
        }
    } catch (error) {
        console.log("Unexpected Error",error)
    }

    // Additional checks for other fields...

    // Phone number validation (similar to the existing one)
}