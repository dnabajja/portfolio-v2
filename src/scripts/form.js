document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelector("#sendBtn").disabled = true;
  try {
    await emailjs.send(
      import.meta.env.PUBLIC_EMAIL_JS_KEY,
      import.meta.env.PUBLIC_EMAIL_JS_TEMPLATE,
      {
        from_name: document.querySelector("#name").value,
        from_email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      }
    );
    console.log("sent");
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
    document.querySelector("#status").style.opacity = 1;
    document.querySelector("#status").setAttribute("aria-hidden", "false");
  } catch (error) {
    console.log("FAILED...", error);
  }

  document.querySelector("#sendBtn").disabled = false;
});
