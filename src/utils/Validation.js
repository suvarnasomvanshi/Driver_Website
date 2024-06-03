export const validateData = (
    formData,
    setFieldError,
    phone_number
    
) => {
    if (formData.name === "") {
        //set error for name on useState
        setFieldError((prevData) => ({
            ...prevData,
            name: "Please enter your name",
        }));
        return;
    } else if (formData.name.match(/^[a-z A-Z]*$/) === null) {
        setFieldError((prevData) => ({
            ...prevData,
            name: "Please enter valid name",
        }));

        return;
    } else {
        setFieldError((prevData) => ({
            ...prevData,
            name: "",
        }));
    }

    if (formData.email === "") {
        setFieldError((prevData) => ({
            ...prevData,
            email: "Please enter your email",
        }));
        return;
    } else if (
        formData.email.match( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) == null
    ) {
        setFieldError((prevData) => ({
            ...prevData,
            email: "Please enter valid email ID",
        }));
        return;
    } else {
        setFieldError((prevData) => ({
            ...prevData,
            email: "",
        }));
    }
    if (formData.address === "") {
        setFieldError((prevData) => ({
            ...prevData,
            address: "Please enter your address",
        }));
        return;
    } else if (formData.address.match(/^[a-zA-Z0-9 ]*$/) == null) {
        setFieldError((prevData) => ({
            ...prevData,
            address: "Please enter valid address",
        }));
        return;
    } else {
        setFieldError((prevData) => ({
            ...prevData,
            address: "",
        }));
    }

    if (formData.state === "") {
        setFieldError((prevData) => ({
            ...prevData,
            state: "Please enter your state",
        }));
        return;
    } else if (formData.state.match(/^[a-zA-Z ]*$/) == null) {
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

    if (formData.postal_code === "") {
        setFieldError((prevData) => ({
            ...prevData,
            postal_code: "Please enter your postal code",
        }));
        return;
    } else if (formData.postal_code.match(/^[0-9]*$/) == null) {
        setFieldError((prevData) => ({
            ...prevData,
            postal_code: "Please enter valid postal code",
        }));
        return;
    } else {
        setFieldError((prevData) => ({
            ...prevData,
            postal_code: "",
        }));
    }

    if (phone_number === "") {
        setFieldError((prevData) => ({
            ...prevData,
            phone_number: "Please enter your phone number",
        }));
        return;
    } else if (phone_number.match(/^[0-9]*$/) == null) {
        setFieldError((prevData) => ({
            ...prevData,
            phone_number: "Please enter valid phone number",
        }));
        return;
    } else if (phone_number.length < 10) {
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
}