// Function to create a job using the form
const createJobFormHandler = async (event) => {
    event.preventDefault();

    // get values
    const jobTitle = document.querySelector("#job-title").value.trim();
    const jobCompany = document.querySelector("#")
    const description = document.querySelector("#job-desc").value.trim();
    const salary = document.querySelector("#job-salary").value.trim();

    if (jobTitle && description && salary) {
        // create post request 
        const response = await fetch("api/users/profile", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json"}
        });
    }
}

const createReviewFormHandler = async (event) => {
    // get values

}