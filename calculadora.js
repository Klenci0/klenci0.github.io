 * ==============================================================
 * LÓGICA DA CALCULADORA EM JAVASCRIPT MODERNO (ES6+)
 * ==============================================================
 */

class Calculator {
  constructor(previousOperandElement, currentOperandElement, historyElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.historyElement = historyElement;
    this.clear();
  }

  // Limpa todos os dados da memória
  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.readyToReset = false;
  }

  // Apaga o último dígito inserido
  delete() {
    if (this.readyToReset) {
      this.clear();
      return;
    }
    if (this.currentOperand === '0') return;

    if (this.currentOperand.length === 1 || (this.currentOperand.length === 2 && this.currentOperand.startsWith('-'))) {
      this.currentOperand = '0';
    } else {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
  }

  // Adiciona um número ou ponto decimal
  appendNumber(number) {
    if (this.readyToReset) {
      this.currentOperand = '';
      this.readyToReset = false;
    }

    // Evita múltiplos pontos decimais
    if (number === '.' && this.currentOperand.includes('.')) return;

    // Se estiver em '0' e digitar um número diferente de '.', substitui o zero
    if (this.currentOperand === '0' && number !== '.') {
      this.currentOperand = number.toString();
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }

  // Inverte o sinal positivo/negativo (±)
  toggleSign() {
    if (this.currentOperand === '0') return;
    if (this.currentOperand.startsWith('-')) {
      this.currentOperand = this.currentOperand.slice(1);
    } else {
      this.currentOperand = '-' + this.currentOperand;
    }
  }

  // Elevação ao quadrado (x²)
  square() {
    const current = parseFloat(this.currentOperand);
    if (isNaN(current)) return;

    const result = Math.pow(current, 2);
    this.recordHistory(`${current}² = ${this.formatDisplayNumber(result)}`);
    this.currentOperand = result.toString();
    this.readyToReset = true;
  }

  // Raiz quadrada (√)
  sqrt() {
    const current = parseFloat(this.currentOperand);
    if (isNaN(current)) return;

    if (current < 0) {
      this.currentOperand = 'Erro: raiz negativa';
      this.readyToReset = true;
      return;
    }

    const result = Math.sqrt(current);
    this.recordHistory(`√${current} = ${this.formatDisplayNumber(result)}`);
    this.currentOperand = result.toString();
    this.readyToReset = true;
  }

  // Porcentagem (%)
  percent() {
    const current = parseFloat(this.currentOperand);
    if (isNaN(current)) return;

    if (this.previousOperand !== '' && this.operation) {
      const prev = parseFloat(this.previousOperand);
      // Se houver uma operação em andamento, calcula a porcentagem em relação ao número anterior
      const result = (prev * current) / 100;
      this.currentOperand = result.toString();
    } else {
      // Caso contrário, divide por 100
      this.currentOperand = (current / 100).toString();
    }
  }

  // Escolhe uma operação binária (+, −, ×, ÷)
  chooseOperation(operation) {
    if (this.currentOperand === '') return;

    if (this.previousOperand !== '') {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  // Realiza o cálculo matemático
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '−':
      case '-':
        computation = prev - current;
        break;
      case '×':
      case '*':
        computation = prev * current;
        break;
      case '÷':
      case '/':
        if (current === 0) {
          this.currentOperand = 'Erro: div por zero';
          this.previousOperand = '';
          this.operation = undefined;
          this.readyToReset = true;
          return;
        }
        computation = prev / current;
        break;
      default:
        return;
    }

    // Registra no histórico visual
    this.recordHistory(`${this.formatDisplayNumber(prev)} ${this.operation} ${this.formatDisplayNumber(current)} = ${this.formatDisplayNumber(computation)}`);

    // Trata dízimas ou arredondamentos de ponto flutuante do JavaScript (ex: 0.1 + 0.2)
    computation = Math.round(computation * 10000000000) / 10000000000;

    this.currentOperand = computation.toString();
    this.operation = undefined;
    this.previousOperand = '';
    this.readyToReset = true;
  }

  // Registra no rodapé de histórico
  recordHistory(text) {
    if (this.historyElement) {
      this.historyElement.textContent = text;
    }
  }

  // Formata números para o padrão com separadores
  formatDisplayNumber(number) {
    if (typeof number === 'string' && (number.startsWith('Erro') || isNaN(number))) {
      return number;
    }

    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];

    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '0';
    } else {
      integerDisplay = integerDigits.toLocaleString('pt-BR');
    }

    if (decimalDigits != null) {
      return `${integerDisplay},${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  // Atualiza os elementos visuais na tela
  updateDisplay() {
    if (this.currentOperand.startsWith('Erro')) {
      this.currentOperandElement.textContent = this.currentOperand;
    } else {
      this.currentOperandElement.textContent = this.formatDisplayNumber(this.currentOperand);
    }

    if (this.operation != null) {
      this.previousOperandElement.textContent = `${this.formatDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandElement.textContent = '';
    }
  }
}

// ==============================================================
// INICIALIZAÇÃO E EVENTOS
// ==============================================================

document.addEventListener('DOMContentLoaded', () => {
  const previousOperandElement = document.getElementById('previous-operand');
  const currentOperandElement = document.getElementById('current-operand');
  const historyElement = document.getElementById('history-content');
  const btnTheme = document.getElementById('btn-theme');
  const btnClearHistory = document.getElementById('btn-clear-history');

  const calculator = new Calculator(previousOperandElement, currentOperandElement, historyElement);

  // Escuta cliques nos botões numéricos
  document.querySelectorAll('[data-number]').forEach((button) => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.dataset.number);
      calculator.updateDisplay();
    });
  });

  // Escuta cliques nos operadores básicos
  document.querySelectorAll('.btn-operator').forEach((button) => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.textContent.trim());
      calculator.updateDisplay();
    });
  });

  // Escuta ações especiais
  document.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;

      switch (action) {
        case 'clear':
          calculator.clear();
          break;
        case 'delete':
          calculator.delete();
          break;
        case 'equals':
          calculator.compute();
          break;
        case 'square':
          calculator.square();
          break;
        case 'sqrt':
          calculator.sqrt();
          break;
        case 'percent':
          calculator.percent();
          break;
        case 'toggle-sign':
          calculator.toggleSign();
          break;
      }

      calculator.updateDisplay();
    });
  });

  // Limpar histórico
  if (btnClearHistory) {
    btnClearHistory.addEventListener('click', () => {
      calculator.recordHistory('Nenhuma conta recente realizada.');
    });
  }

  // Alternar Modo Escuro / Claro
  if (btnTheme) {
    // Carrega preferência anterior do localStorage
    if (localStorage.getItem('calc_theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }

    btnTheme.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('calc_theme', isDark ? 'dark' : 'light');
    });
  }

  // Suporte a Teclado Físico
  window.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
      calculator.appendNumber(e.key);
      calculator.updateDisplay();
    } else if (e.key === '+' || e.key === '-') {
      calculator.chooseOperation(e.key === '-' ? '−' : '+');
      calculator.updateDisplay();
    } else if (e.key === '*' || e.key.toLowerCase() === 'x') {
      calculator.chooseOperation('×');
      calculator.updateDisplay();
    } else if (e.key === '/') {
      e.preventDefault();
      calculator.chooseOperation('÷');
      calculator.updateDisplay();
    } else if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      calculator.compute();
      calculator.updateDisplay();
    } else if (e.key === 'Backspace') {
      calculator.delete();
      calculator.updateDisplay();
    } else if (e.key === 'Escape') {
      calculator.clear();
      calculator.updateDisplay();
    } else if (e.key === '%') {
      calculator.percent();
      calculator.updateDisplay();
    }
  });
});
