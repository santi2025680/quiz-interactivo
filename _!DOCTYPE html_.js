<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Interactivo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .quiz-container {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }
        .option {
            display: block;
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
            cursor: pointer;
            border: 2px solid transparent;
        }
        .option:hover {
            background-color: #ddd;
        }
        .correct {
            background-color: #4CAF50 !important;
            color: white;
        }
        .incorrect {
            background-color: #F44336 !important;
            color: white;
        }
        #nextBtn {
            margin-top: 10px;
            padding: 10px 20px;
            border: none;
            background-color: #008CBA;
            color: white;
            font-size: 16px;
            cursor: pointer;
            display: none;
            border-radius: 5px;
        }
        #result {
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="quiz-container animate__animated animate__fadeIn">
        <h2 id="question"></h2>
        <div id="options"></div>
        <button id="nextBtn" onclick="nextQuestion()">Siguiente</button>
        <p id="result"></p>
    </div>
    
    <script>
        const questions = [
            { q: "¿Cuál es la capital de Francia?", options: ["Madrid", "París", "Berlín", "Lisboa"], answer: 1 },
            { q: "¿Cuánto es 7 x 8?", options: ["54", "56", "49", "63"], answer: 1 },
            { q: "¿Quién escribió 'Don Quijote de la Mancha'?", options: ["Cervantes", "Lorca", "Borges", "Neruda"], answer: 0 },
            { q: "¿Cuál es el planeta más grande del sistema solar?", options: ["Marte", "Tierra", "Júpiter", "Venus"], answer: 2 },
            { q: "¿En qué año llegó Colón a América?", options: ["1492", "1600", "1550", "1701"], answer: 0 },
            { q: "¿Cuál es el metal más abundante en la corteza terrestre?", options: ["Hierro", "Aluminio", "Cobre", "Plata"], answer: 1 },
            { q: "¿Quién pintó la Mona Lisa?", options: ["Picasso", "Da Vinci", "Van Gogh", "Rembrandt"], answer: 1 },
            { q: "¿Cuántos lados tiene un hexágono?", options: ["5", "6", "7", "8"], answer: 1 },
            { q: "¿Cuál es el océano más grande del mundo?", options: ["Atlántico", "Índico", "Pacífico", "Ártico"], answer: 2 },
            { q: "¿Qué gas necesitamos para respirar?", options: ["Dióxido de carbono", "Oxígeno", "Hidrógeno", "Nitrógeno"], answer: 1 },
            { q: "¿Quién desarrolló la teoría de la relatividad?", options: ["Einstein", "Newton", "Galileo", "Tesla"], answer: 0 },
            { q: "¿Qué animal es conocido por su gran memoria?", options: ["Perro", "Elefante", "Delfín", "Gato"], answer: 1 },
            { q: "¿En qué continente se encuentra Egipto?", options: ["Asia", "África", "Europa", "América"], answer: 1 },
            { q: "¿Cuántos colores tiene el arcoíris?", options: ["5", "6", "7", "8"], answer: 2 },
            { q: "¿Qué planeta es conocido como el planeta rojo?", options: ["Venus", "Saturno", "Marte", "Urano"], answer: 2 },
            { q: "¿Quién descubrió la penicilina?", options: ["Pasteur", "Fleming", "Darwin", "Mendel"], answer: 1 },
            { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", options: ["206", "215", "180", "220"], answer: 0 },
            { q: "¿Cuál es el símbolo químico del oro?", options: ["Ag", "Au", "Pb", "Fe"], answer: 1 },
            { q: "¿Qué instrumento mide los terremotos?", options: ["Barómetro", "Sismógrafo", "Anemómetro", "Higrómetro"], answer: 1 },
            { q: "¿Cuánto dura un año en la Tierra?", options: ["365 días", "400 días", "500 días", "300 días"], answer: 0 }
        ];
        
        let currentQuestion = 0;
        let score = 0;
        
        function loadQuestion() {
            document.getElementById("question").innerText = questions[currentQuestion].q;
            const optionsDiv = document.getElementById("options");
            optionsDiv.innerHTML = "";
            questions[currentQuestion].options.forEach((option, index) => {
                const button = document.createElement("button");
                button.innerText = option;
                button.classList.add("option");
                button.onclick = () => checkAnswer(button, index);
                optionsDiv.appendChild(button);
            });
            document.getElementById("nextBtn").style.display = "none";
        }
        
        function checkAnswer(button, index) {
            const correct = questions[currentQuestion].answer;
            button.classList.add(index === correct ? "correct" : "incorrect");
            if (index === correct) score++;
            document.querySelectorAll(".option").forEach(btn => btn.onclick = null);
            document.getElementById("nextBtn").style.display = "block";
        }
        
        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                document.getElementById("result").innerText = `Puntaje final: ${score} de 20`;
            }
        }
        
        loadQuestion();
    </script>
</body>
</html>
