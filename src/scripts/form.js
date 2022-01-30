document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  emailjs
    .send(
      import.meta.env.PUBLIC_EMAIL_JS_KEY,
      import.meta.env.PUBLIC_EMAIL_JS_TEMPLATE,
      {
        from_name: document.querySelector("#name").value,
        from_email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      }
    )
    .then(
      function () {
        console.log("SUCCESS!");
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";
        document.querySelector("#status").style.opacity = 1;
        document.querySelector("#status").setAttribute("aria-hidden", "false");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
});
