var startConfetti = function(targetId) {
    var target = document.getElementById(targetId);
    var text = target.querySelector(".button-text");
    text.textContent = "Start deploy";
    text.classList.add("hidden");
  
    var icon = target.querySelector("i");
    icon.classList = "fa-solid fa-spinner animate-spin";
  
    var button = target.querySelector(".button");
    button.classList.add("loading");
  
    var confettiContainer = document.getElementById(
      "confetti-container-" + targetId
    );
  
    // Rest of the confetti animation code...
  };
  