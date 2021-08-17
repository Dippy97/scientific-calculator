let screen = document.getElementById("view");
let c=0;
let m=0;

buttons = document.querySelectorAll("button");

console.log("button", buttons);
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "C") {
      screenValue = "";
      screen.value = "";
    } else if (buttonText == "^"){
        screenValue = Math.pow(screenValue , screenValue);
        screen.value = screenValue;
    } else if (buttonText == "D"){
       screen.value = screen.value.substring(0,screen.value.length - 1);

    } else if (buttonText == "%"){
        screen.value = screen.value / 100;

    } else if (buttonText == "sin"){
        screen.value = Math.sin(screen.value);

    }else if (buttonText == "cos"){
        screen.value = Math.cos(screen.value);

    }else if (buttonText == "tan"){
        screen.value = Math.tan(screen.value);

    }else if (buttonText == "log"){
        screen.value = Math.log10(screen.value);

    }else if (buttonText == "FtoM"){
        screen.value = screen.value / 3.2808;

    }else if (buttonText == "1/2√"){
        screen.value = Math.SQRT1_2(screen.value) ;

    }else if (buttonText == "√"){
        screen.value = Math.sqrt(screen.value);

    }else if (buttonText == "π"){
        screen.value = Math.PI * screen.value;

    }else if (buttonText == "RAD"){
        screen.value = screen.value * (Math.PI / 180);

    }else if (buttonText == "e"){
        screen.value = Math.exp(screen.value);

    }else if (buttonText == "in"){
        screen.value = Math.log(screen.value);

    }else if (buttonText == "log2"){
        screen.value = Math.log2(screen.value);

    }else if (buttonText == "log2e"){
        screen.value = Math.LOG2E(screen.value);

    }else if (buttonText == "abs"){
        screen.value = Math.abs(screen.value);

    }else if (buttonText == "sign"){
        screen.value = Math.sign(screen.value);

    }else if (buttonText == "sign"){
        screen.value = Math.sign(screen.value);

    }else if (buttonText == "sign"){
        screen.value = Math.sign(screen.value);

    }else if (buttonText == "!"){
        let number = 1;
        if (screen.value === 0) {
          screen.value = '1';
        } else if (screen.value < 0) {
          screen.value = NaN;
        } else {
          let number = 1;
          for (let i = screen.value; i > 0; i--) {
            number *= i;
          }
          screen.value = number;
        }

    }else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
