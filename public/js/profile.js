// Function to create a job using the form
const createJobFormHandler = async (event) => {
    event.preventDefault();

    // get values
    const job_title = document.querySelector("#job-title").value.trim();
    const job_company = document.querySelector("#job-company")
    const description = document.querySelector("#job-desc").value.trim();
    const salary = document.querySelector("#job-salary").value.trim();

    if (job_title && description && salary && job_company) {
        // create post request 
        const response = await fetch("api/users/profile", {
            method: "POST",
            body: JSON.stringify({ job_company, job_title, description,salary}),
            headers: { "Content-Type": "application/json"}
        });
    }
}

const createReviewFormHandler = async (event) => {
    // get values

}

document.querySelector('#job-submit').addEventListener('click', createJobFormHandler)