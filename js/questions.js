const QUESTION_SETS = {
  "Quantum Basics": [
    {
      question: "What does a qubit represent in quantum computing?",
      options: ["A state in classical bits", "A quantum state that can be in superposition", "A binary digit only", "A memory address"],
      answer: "A quantum state that can be in superposition"
    },
    {
      question: "Which phenomenon allows qubits to be linked so that the state of one affects the other?",
      options: ["Decoherence", "Superposition", "Entanglement", "Interference"],
      answer: "Entanglement"
    },
    {
      question: "In the Bloch sphere representation, what do the poles represent?",
      options: ["Classical states 0 and 1", "Maximum energy states", "Mixed states", "Photon polarization"],
      answer: "Classical states 0 and 1"
    },
    {
      question: "What does superposition mean in quantum mechanics?",
      options: ["A particle has no position", "A system can exist in multiple states at once", "Energy levels collapse instantly", "All particles are entangled"],
      answer: "A system can exist in multiple states at once"
    },
    {
      question: "Which quantum gate creates an equal superposition of |0⟩ and |1⟩?",
      options: ["Pauli-X gate", "Hadamard gate", "CNOT gate", "Phase gate"],
      answer: "Hadamard gate"
    },
    {
      question: "What is the main challenge in maintaining quantum coherence?",
      options: ["Fast computation", "Decoherence from environmental noise", "Too many qubits", "Insufficient algorithms"],
      answer: "Decoherence from environmental noise"
    }
  ],

  "Algorithms" : [
  {
    question: "Which quantum algorithm is known for factoring large integers efficiently?",
    options: ["Grover's algorithm", "Deutsch–Jozsa algorithm", "Shor's algorithm", "Variational quantum eigensolver"],
    answer: "Shor's algorithm"
  },
  {
    question: "Grover's algorithm provides a speedup for what type of problems?",
    options: ["Unstructured search problems", "Sorting", "Matrix multiplication", "Simulating molecules"],
    answer: "Unstructured search problems"
  },
  {
    question: "What is the quantum complexity of Grover's search algorithm for N items?",
    options: ["O(N)", "O(N^2)", "O(√N)", "O(log N)"],
    answer: "O(√N)"
  },
  {
    question: "Which algorithm can determine whether a function is constant or balanced in a single query?",
    options: ["Deutsch–Jozsa algorithm", "Shor's algorithm", "HHL algorithm", "Simon’s algorithm"],
    answer: "Deutsch–Jozsa algorithm"
  },
  {
    question: "Which quantum algorithm estimates the phase of an eigenvalue of a unitary operator?",
    options: ["Quantum Phase Estimation", "Grover's algorithm", "Shor's algorithm", "Variational algorithm"],
    answer: "Quantum Phase Estimation"
  },
  {
    question: "Which quantum algorithm is a key subroutine in Shor's algorithm?",
    options: ["Quantum Phase Estimation", "Grover's algorithm", "Simon’s algorithm", "Deutsch–Jozsa algorithm"],
    answer: "Quantum Phase Estimation"
  }
]

};
