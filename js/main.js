async function sendData(formElement) {
  const action = "https://api.staticforms.xyz/submit"
  const formData = new FormData(formElement);
  try {
    const response = await fetch(action, {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData(event.target);
  });
});