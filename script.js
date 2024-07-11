const questions = [
    {
        question: "¿Qué método elimina el último elemento de un array y lo devuelve?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: "pop()"
    },
    {
        question: "¿Qué método se utiliza para añadir elementos al final de un array y devolver la nueva longitud del array?",
        options: ["shift()", "unshift()", "push()", "pop()"],
        answer: "push()"
    },
    {
        question: "¿Qué método elimina el primer elemento de un array y lo retorna?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: "shift()"
    },
    {
        question: "¿Qué método añade elementos al inicio de un array y devuelve la nueva longitud del array?",
        options: ["push()", "pop()", "unshift()", "shift()"],
        answer: "unshift()"
    },
    {
        question: "¿Qué método une dos o más arrays y devuelve un nuevo array?",
        options: ["push()", "pop()", "concat()", "shift()"],
        answer: "concat()"
    },
    {
        question: "¿Qué método ejecuta una función en cada elemento del array?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "forEach()"
    },
    {
        question: "¿Qué método crea un nuevo array con los resultados de la función aplicada a cada elemento?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "map()"
    },
    {
        question: "¿Qué método crea un nuevo array con los elementos que cumplen la condición dada?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "filter()"
    },
    {
        question: "¿Qué método aplica una función a un acumulador y a cada valor del array para reducirlo a un único valor?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "reduce()"
    },
    {
        question: "¿Qué método devuelve el primer elemento que cumple la función de prueba proporcionada?",
        options: ["findIndex()", "includes()", "indexOf()", "find()"],
        answer: "find()"
    },
    {
        question: "¿Qué método devuelve el índice del primer elemento que cumple la función de prueba proporcionada?",
        options: ["find()", "includes()", "findIndex()", "indexOf()"],
        answer: "findIndex()"
    },
    {
        question: "¿Qué método determina si un array incluye un elemento específico?",
        options: ["find()", "includes()", "findIndex()", "indexOf()"],
        answer: "includes()"
    },
    {
        question: "¿Qué método devuelve el primer índice de un elemento en el array?",
        options: ["find()", "includes()", "findIndex()", "indexOf()"],
        answer: "indexOf()"
    },
    {
        question: "¿Qué método une todos los elementos de un array en una cadena?",
        options: ["slice()", "splice()", "join()", "sort()"],
        answer: "join()"
    },
    {
        question: "¿Qué método devuelve una copia de una parte del array?",
        options: ["slice()", "splice()", "join()", "sort()"],
        answer: "slice()"
    },
    {
        question: "¿Qué método cambia el contenido del array eliminando y/o agregando elementos?",
        options: ["slice()", "splice()", "join()", "sort()"],
        answer: "splice()"
    },
    {
        question: "¿Qué método ordena los elementos del array?",
        options: ["slice()", "splice()", "join()", "sort()"],
        answer: "sort()"
    },
    {
        question: "¿Qué método devuelve el carácter en el índice especificado de una cadena?",
        options: ["includes()", "indexOf()", "slice()", "charAt()"],
        answer: "charAt()"
    },
    {
        question: "¿Qué método determina si una cadena contiene otra cadena?",
        options: ["includes()", "indexOf()", "slice()", "charAt()"],
        answer: "includes()"
    },
    {
        question: "¿Qué método devuelve el índice de la primera ocurrencia de un valor en una cadena?",
        options: ["includes()", "indexOf()", "slice()", "charAt()"],
        answer: "indexOf()"
    },
    {
        question: "¿Qué método extrae una sección de una cadena y devuelve una nueva cadena?",
        options: ["slice()", "split()", "substring()", "replace()"],
        answer: "slice()"
    },
    {
        question: "¿Qué método divide una cadena en un array de subcadenas?",
        options: ["slice()", "split()", "substring()", "replace()"],
        answer: "split()"
    },
    {
        question: "¿Qué método devuelve una parte de la cadena entre los índices start y end?",
        options: ["slice()", "split()", "substring()", "replace()"],
        answer: "substring()"
    },
    {
        question: "¿Qué método convierte toda la cadena a minúsculas?",
        options: ["toLowerCase()", "toUpperCase()", "trim()", "replace()"],
        answer: "toLowerCase()"
    },
    {
        question: "¿Qué método convierte toda la cadena a mayúsculas?",
        options: ["toLowerCase()", "toUpperCase()", "trim()", "replace()"],
        answer: "toUpperCase()"
    },
    {
        question: "¿Qué método elimina los espacios en blanco de ambos extremos de la cadena?",
        options: ["toLowerCase()", "toUpperCase()", "trim()", "replace()"],
        answer: "trim()"
    },
    {
        question: "¿Qué método reemplaza una parte de la cadena por otra cadena?",
        options: ["toLowerCase()", "toUpperCase()", "trim()", "replace()"],
        answer: "replace()"
    },
    {
        question: "¿Qué es un objeto en JavaScript?",
        options: ["Una colección de métodos", "Una colección de propiedades y métodos", "Una colección de arrays", "Una función con atributos"],
        answer: "Una colección de propiedades y métodos"
    },
    {
        question: "¿Qué palabra clave se usa para crear una instancia de un objeto en JavaScript?",
        options: ["new", "create", "instance", "object"],
        answer: "new"
    },
    {
        question: "¿Cuál de los siguientes no es un pilar de la programación orientada a objetos?",
        options: ["Encapsulamiento", "Herencia", "Polimorfismo", "Asignación"],
        answer: "Asignación"
    },
    {
        question: "¿Qué es el encapsulamiento en la POO?",
        options: ["La capacidad de un objeto para heredar de otro objeto", "La agrupación de datos y métodos que operan sobre esos datos", "La capacidad de un objeto para tomar muchas formas", "La creación de una nueva clase a partir de una clase existente"],
        answer: "La agrupación de datos y métodos que operan sobre esos datos"
    },
    {
        question: "¿Qué es la herencia en la POO?",
        options: ["La agrupación de datos y métodos", "La capacidad de una clase de derivar propiedades y métodos de otra clase", "La capacidad de un objeto para tomar muchas formas", "La separación de datos y métodos"],
        answer: "La capacidad de una clase de derivar propiedades y métodos de otra clase"
    },
    {
        question: "¿Qué es el polimorfismo en la POO?",
        options: ["La capacidad de una clase de derivar propiedades y métodos de otra clase", "La agrupación de datos y métodos", "La capacidad de un objeto para tomar muchas formas", "La separación de datos y métodos"],
        answer: "La capacidad de un objeto para tomar muchas formas"
    },
    {
        question: "¿Qué palabra clave se usa para definir una clase en JavaScript?",
        options: ["class", "new", "object", "instance"],
        answer: "class"
    },
    {
        question: "¿Cómo se define un método dentro de una clase en JavaScript?",
        options: ["function metodo() {}", "metodo() function {}", "metodo() {}", "methodo() {}"],
        answer: "metodo() {}"
    },
    {
        question: "¿Qué es un constructor en una clase de JavaScript?",
        options: ["Un método que se llama manualmente", "Un método especial para inicializar un objeto creado a partir de la clase", "Un método para destruir un objeto", "Un método que hereda de otro objeto"],
        answer: "Un método especial para inicializar un objeto creado a partir de la clase"
    },
    {
        question: "¿Cómo se llama a un método de una clase en una instancia de esa clase?",
        options: ["class.metodo()", "instancia.metodo()", "metodo.instancia()", "metodo.class()"],
        answer: "instancia.metodo()"
    },
    {
        question: "¿Qué palabra clave se usa para heredar propiedades y métodos de otra clase en JavaScript?",
        options: ["extends", "inherits", "inheritsFrom", "extends"],
        answer: "extends"
    },
    {
        question: "¿Qué es una propiedad de una clase en JavaScript?",
        options: ["Una función dentro de la clase", "Una variable dentro de la clase", "Una constante dentro de la clase", "Un método dentro de la clase"],
        answer: "Una variable dentro de la clase"
    },
    {
        question: "¿Qué método se usa para comprobar si un array incluye un determinado elemento?",
        options: ["contains()", "includes()", "has()", "containsElement()"],
        answer: "includes()"
    },
    {
        question: "¿Qué significa el principio de responsabilidad única (SRP) en SOLID?",
        options: [
            "Una clase debe tener más de una responsabilidad",
            "Una clase debe ser abierta para modificación",
            "Una clase debe tener una única responsabilidad",
            "Una clase debe ser cerrada para extensión"
        ],
        answer: "Una clase debe tener una única responsabilidad"
    },
    {
        question: "¿Qué significa el principio abierto/cerrado (OCP) en SOLID?",
        options: [
            "Una clase debe ser abierta para modificación y cerrada para extensión",
            "Una clase debe ser abierta para extensión y cerrada para modificación",
            "Una clase debe ser abierta para herencia",
            "Una clase debe ser cerrada para herencia"
        ],
        answer: "Una clase debe ser abierta para extensión y cerrada para modificación"
    },
    {
        question: "¿Qué significa el principio de sustitución de Liskov (LSP) en SOLID?",
        options: [
            "Los objetos de una clase deben ser reemplazables por objetos de una subclase",
            "Una clase debe tener una única responsabilidad",
            "Una clase debe ser abierta para modificación",
            "Los objetos de una clase deben ser cerrados para extensión"
        ],
        answer: "Los objetos de una clase deben ser reemplazables por objetos de una subclase"
    },
    {
        question: "¿Qué significa el principio de segregación de interfaces (ISP) en SOLID?",
        options: [
            "Una clase debe implementar todas las interfaces disponibles",
            "Una clase debe ser cerrada para modificación",
            "Una clase debe tener una única responsabilidad",
            "Una clase no debe ser forzada a implementar interfaces que no usa"
        ],
        answer: "Una clase no debe ser forzada a implementar interfaces que no usa"
    },
    {
        question: "¿Qué significa el principio de inversión de dependencias (DIP) en SOLID?",
        options: [
            "Los módulos de alto nivel no deben depender de módulos de bajo nivel",
            "Los módulos de bajo nivel no deben depender de módulos de alto nivel",
            "Las dependencias deben ser en tiempo de ejecución",
            "Las dependencias deben ser estáticas"
        ],
        answer: "Los módulos de alto nivel no deben depender de módulos de bajo nivel"
    },
    {
        question: "¿Qué es la encapsulación en POO?",
        options: [
            "La capacidad de un objeto de tomar muchas formas",
            "La ocultación de los detalles internos de una clase",
            "La capacidad de una clase de heredar métodos de otra clase",
            "La organización del código en módulos"
        ],
        answer: "La ocultación de los detalles internos de una clase"
    },
    {
        question: "¿Qué es la herencia en POO?",
        options: [
            "La capacidad de un objeto de tomar muchas formas",
            "La ocultación de los detalles internos de una clase",
            "La capacidad de una clase de heredar métodos y propiedades de otra clase",
            "La organización del código en módulos"
        ],
        answer: "La capacidad de una clase de heredar métodos y propiedades de otra clase"
    },
    {
        question: "¿Qué es el polimorfismo en POO?",
        options: [
            "La capacidad de una clase de heredar métodos y propiedades de otra clase",
            "La ocultación de los detalles internos de una clase",
            "La capacidad de un objeto de tomar muchas formas",
            "La organización del código en módulos"
        ],
        answer: "La capacidad de un objeto de tomar muchas formas"
    },
    {
        question: "¿Qué es una clase en POO?",
        options: [
            "Una instancia de un objeto",
            "Un blueprint o plantilla para crear objetos",
            "Un tipo de dato primitivo",
            "Un método para organizar el código"
        ],
        answer: "Un blueprint o plantilla para crear objetos"
    },
    {
        question: "¿Qué es un objeto en POO?",
        options: [
            "Un blueprint o plantilla para crear clases",
            "Una instancia de una clase",
            "Un tipo de dato primitivo",
            "Un método para organizar el código"
        ],
        answer: "Una instancia de una clase"
    }

];


let currentQuestionIndex = 0;
let correctAnswers = 0;
let skippedQuestions = [];
let availableQuestions = [...questions];

const questionElement = document.getElementById('question');
const optionsElements = document.querySelectorAll('.option');
const scoreElement = document.getElementById('score');

function loadQuestion(index) {
    if (availableQuestions.length === 0) {
        questionElement.textContent = "No hay más preguntas disponibles.";
        optionsElements.forEach(button => button.style.display = 'none');
        return;
    }

    const question = availableQuestions[index];
    questionElement.textContent = question.question;
    const shuffledOptions = shuffleArray([...question.options]);
    optionsElements.forEach((button, i) => {
        button.textContent = `${String.fromCharCode(65 + i)}) ${shuffledOptions[i]}`;
        button.classList.remove('correct', 'incorrect', 'disabled');
        button.style.display = 'inline-block';
        button.onclick = () => checkAnswer(button, question.answer);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(button, correctAnswer) {
    const selectedAnswer = button.textContent.slice(3); // Remove "A) ", "B) ", etc.
    if (selectedAnswer === correctAnswer) {
        button.classList.add('correct');
        correctAnswers++;
    } else {
        button.classList.add('incorrect');
        optionsElements.forEach(btn => {
            if (btn.textContent.slice(3) === correctAnswer) {
                btn.classList.add('correct');
            }
        });
        correctAnswers = 0; // Reset the counter on wrong answer
    }
    scoreElement.textContent = `Preguntas acertadas: ${correctAnswers}`;
}

document.getElementById('random-question').onclick = () => {
    currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    loadQuestion(currentQuestionIndex);
};

document.getElementById('reset-counter').onclick = () => {
    correctAnswers = 0;
    scoreElement.textContent = `Preguntas acertadas: 0`;
};

document.getElementById('skip-question').onclick = () => {
    skippedQuestions.push(availableQuestions[currentQuestionIndex]);
    availableQuestions.splice(currentQuestionIndex, 1);
    currentQuestionIndex = (currentQuestionIndex + 1) % availableQuestions.length;
    loadQuestion(currentQuestionIndex);
};

document.getElementById('fifty-fifty').onclick = () => {
    const correctAnswer = availableQuestions[currentQuestionIndex].answer;
    let incorrectOptions = Array.from(optionsElements).filter(btn => btn.textContent.slice(3) !== correctAnswer);
    incorrectOptions = shuffleArray(incorrectOptions).slice(0, 2);
    incorrectOptions.forEach(btn => btn.classList.add('disabled'));
};

document.getElementById('remove-question').onclick = () => {
    availableQuestions.splice(currentQuestionIndex, 1);
    currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    loadQuestion(currentQuestionIndex);
};

document.getElementById('reintegrate-skipped').onclick = () => {
    availableQuestions = availableQuestions.concat(skippedQuestions);
    skippedQuestions = [];
    currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    loadQuestion(currentQuestionIndex);
};

loadQuestion(currentQuestionIndex);

let timerInterval;
let timeLeft = 30;
const timerElement = document.getElementById('timer');

document.getElementById('start-timer').onclick = () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = timeLeft;
        } else {
            clearInterval(timerInterval);
            alert("¡Tiempo terminado!");
        }
    }, 1000);
};

document.getElementById('pause-timer').onclick = () => {
    clearInterval(timerInterval);
};

document.getElementById('reset-timer').onclick = () => {
    clearInterval(timerInterval);
    timeLeft = 30;
    timerElement.textContent = timeLeft;
};
