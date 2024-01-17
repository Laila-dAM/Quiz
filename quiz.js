const questions = [
    {
        question: "Processors (CPU): Which computer component is responsible for executing instructions, performing calculations and coordinating system operations?",
        options: ["RAM memory", "Hard Drive", "Control Unit", "Video Card"],
        answer: "Control Unit"
      },
      {
        question: "RAM Memory: What is the main function of RAM in a computer?",
        options: ["Permanently store user data", "Store the operating system", "Provide temporary storage for data in use", "Control communication with peripherals"],
        answer: "Provide temporary storage for data in use"
      },
      {
        question: "Motherboard: What is the Motherboard in a computer?",
        options: ["Central Processing Unit", "Component responsible for communication between all devices", "Input device", "Operating System"],
        answer: "Component responsible for communication between all devices"
      },
      {
        question: "Data Storage: What is the main difference between RAM Memory and a Hard Drive?",
        options: ["RAM is volatile, while Hard Disk is non-volatile", "Both are types of permanent storage", "RAM is slower than Hard Disk", "The Hard Disk is used only for the operating system"],
        answer: "RAM is volatile, while Hard Disk is non-volatile"
      },
      {
        question: "Video Card: What is a Video Card for in a computer?",
        options: ["Temporary data storage", "Graphic processing and image display", "Control of communication between devices", "Execution of complex mathematical operations"],
        answer: "Graphic processing and image display"
      },
      {
        question: "Power Supply: What is the Power Supply in a computer?",
        options: ["Control Unit", "GPU", "Component responsible for power supply", "Operating System"],
        answer: "Component responsible for power supply"
      },
      {
        question: "Input Devices: Which of the following is considered an input device?",
        options: ["the printer", "Sound Card", "Keyboard", "Monitor"],
        answer: "Keyboard"
      },
      {
        question: "Output Devices: A Monitor is classified as which type of device?",
        options: ["Input device", "Output device", "Storage device", "Processing device"],
        answer: "Output device"
      },
      {
        question: "BIOS/UEFI: What does the acronym BIOS or UEFI represent on a computer?",
        options: ["Graphical User Interface", "Operating System", "Firmware responsible for system initialization", "External Storage Unit"],
        answer: "Firmware responsible for system initialization"
      },
      {
        question: "Buses (Slots): What are expansion slots on a Motherboard?",
        options: ["USB connectors", "Expansion Boards", "RAM memory", "Power Supply"],
        answer: "Expansion Cards"
      },
      {
        question: "Operating System: What is the main function of an Operating System?",
        options: ["Store data permanently", "Manage system resources and provide an interface for the user", "Perform complex mathematical calculations", "Control communication with peripherals"],
        answer: "Manage system resources and provide an interface for the user"
      },
      {
        question: "Cooler: What is the function of the cooler in a computer?",
        options: ["Store temporary data", "Cool the processor", "Amplify the sound", "Control the brightness of the monitor"],
        answer: "Cool the processor"
      },
      {
        question: "Network Card: What allows a Network Card to connect a computer to a network?",
        options: ["Data transfer to a hard drive", "Central processor control", "Connection to USB devices", "Communication with other devices on a network"],
        answer: "Communication with other devices on a network"
      },
      {
        question: "USB Ports: What is the main function of USB ports on a computer?",
        options: ["Connect the video card", "Connect the motherboard", "Allow connection of external devices", "Store data permanently"],
        answer: "Allow the connection of external devices"
      },
      {
        question: "Binary System: How is data represented in the binary system?",
        options: ["Base 8", "Base 10", "Base 16", "Base 2"],
        answer: "Base 2"
      }
    ];
let cq = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const resultImagemElement = document.getElementById("result-image");

function sq() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";
    for(let i=0; i<question.options.length; i++){
        const option = document.createElement("div");
        option.classList.add("option");
        option.textContent = question.options[i];
        option.addEventListener("click", selectOption);
        optionsElement.appendChild(option);
    }

}

function selectOption(event) {
    const selectOption = event.target.textContent;
    const question = questions[currentQuestion];

    if(selectOption === question.answer) {
        score++;
    }

    optionsElement.querySelectorAll(".option").forEach(option => {option.removeEventListener("click", selectOption);});

    nextButton.disabled = false;
}

function showResult() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
}