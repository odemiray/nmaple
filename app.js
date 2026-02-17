(function () {
  "use strict";

  var commandDisplay = document.getElementById("command-display");
  var copyBtn = document.getElementById("copy-btn");
  var resetBtn = document.getElementById("reset-btn");
  var targetInput = document.getElementById("target-input");
  var toast = document.getElementById("copy-toast");

  var checkboxes = document.querySelectorAll('input[type="checkbox"][data-flag]');
  var radioGroups = document.querySelectorAll('input[type="radio"][name]');
  var textInputs = document.querySelectorAll('input[type="text"][data-flag-prefix]');

  function buildCommand() {
    var parts = ["nmap"];

    // Collect radio button selections (scan type, timing)
    var radioNames = [];
    radioGroups.forEach(function (radio) {
      if (radioNames.indexOf(radio.name) === -1) {
        radioNames.push(radio.name);
      }
    });

    radioNames.forEach(function (name) {
      var selected = document.querySelector(
        'input[type="radio"][name="' + name + '"]:checked'
      );
      if (selected) {
        parts.push(selected.value);
      }
    });

    // Collect checkbox selections
    checkboxes.forEach(function (cb) {
      if (cb.checked) {
        parts.push(cb.getAttribute("data-flag"));
      }
    });

    // Collect text inputs with values
    textInputs.forEach(function (input) {
      var val = input.value.trim();
      if (val) {
        parts.push(input.getAttribute("data-flag-prefix") + val);
      }
    });

    // Add target at the end
    var target = targetInput.value.trim();
    if (target) {
      parts.push(target);
    }

    commandDisplay.value = parts.join(" ");
  }

  // Attach listeners to all interactive elements
  checkboxes.forEach(function (cb) {
    cb.addEventListener("change", buildCommand);
  });

  radioGroups.forEach(function (radio) {
    radio.addEventListener("change", buildCommand);
  });

  textInputs.forEach(function (input) {
    input.addEventListener("input", buildCommand);
  });

  targetInput.addEventListener("input", buildCommand);

  // Copy to clipboard
  copyBtn.addEventListener("click", function () {
    var cmd = commandDisplay.value;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(cmd).then(showToast);
    } else {
      // Fallback for older browsers
      commandDisplay.select();
      document.execCommand("copy");
      showToast();
    }
  });

  function showToast() {
    toast.classList.remove("hidden");
    setTimeout(function () {
      toast.classList.add("hidden");
    }, 1500);
  }

  // Reset all
  resetBtn.addEventListener("click", function () {
    checkboxes.forEach(function (cb) {
      cb.checked = false;
    });

    radioGroups.forEach(function (radio) {
      radio.checked = false;
    });

    textInputs.forEach(function (input) {
      input.value = "";
    });

    targetInput.value = "";
    buildCommand();
  });

  // Initial render
  buildCommand();
})();
