# ==============================================================
# Calculadora em Python: 4 Operações Básicas + Porcentagem,
# Elevação ao Quadrado e Raiz Quadrada
# ==============================================================

import math

# 1. FUNÇÕES MATEMÁTICAS

def somar(a, b):
    return a + b

def subtrair(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "Erro: não é possível dividir por zero!"
    return a / b

def porcentagem(valor, taxa):
    return (valor * taxa) / 100

def ao_quadrado(a):
    return a ** 2

def raiz_quadrada(a):
    if a < 0:
        return "Erro: não existe raiz quadrada real de número negativo!"
    return math.isqrt(int(a)) if a.is_integer() and math.isqrt(int(a)) ** 2 == int(a) else math.sqrt(a)


# 2. PROGRAMA PRINCIPAL
def calculadora():
    print("=" * 45)
    print("      BEM-VINDO À CALCULADORA COMPLETA       ")
    print("=" * 45)

    while True:
        print("\nEscolha a operação desejada:")
        print("1 - Soma (+)")
        print("2 - Subtração (-)")
        print("3 - Multiplicação (*)")
        print("4 - Divisão (/)")
        print("5 - Porcentagem (%)")
        print("6 - Elevação ao Quadrado (x²)")
        print("7 - Raiz Quadrada (√)")
        print("0 - Sair")

        opcao = input("\nDigite a opção desejada (0 a 7): ").strip()

        if opcao == "0":
            print("\nObrigado por usar a calculadora. Bons estudos!")
            break

        if opcao not in ["1", "2", "3", "4", "5", "6", "7"]:
            print("Opção inválida! Por favor, escolha um número de 0 a 7.")
            continue

        # Operações unárias (precisam de apenas 1 número)
        if opcao in ["6", "7"]:
            try:
                num = float(input("Digite o número: "))
            except ValueError:
                print("Erro: digite um número válido!")
                continue

            if opcao == "6":
                resultado = ao_quadrado(num)
                print(f"\nResultado: {num}² = {resultado}")

            elif opcao == "7":
                resultado = raiz_quadrada(num)
                if isinstance(resultado, str):
                    print(f"\n{resultado}")
                else:
                    print(f"\nResultado: √{num} = {resultado}")

        # Operações binárias (precisam de 2 números)
        else:
            try:
                if opcao == "5":
                    num1 = float(input("Digite o valor base (ex: 200): "))
                    num2 = float(input("Digite a porcentagem desejada (ex: 15 para 15%): "))
                else:
                    num1 = float(input("Digite o primeiro número: "))
                    num2 = float(input("Digite o segundo número: "))
            except ValueError:
                print("Erro: digite apenas números válidos!")
                continue

            if opcao == "1":
                resultado = somar(num1, num2)
                print(f"\nResultado: {num1} + {num2} = {resultado}")

            elif opcao == "2":
                resultado = subtrair(num1, num2)
                print(f"\nResultado: {num1} - {num2} = {resultado}")

            elif opcao == "3":
                resultado = multiplicar(num1, num2)
                print(f"\nResultado: {num1} × {num2} = {resultado}")

            elif opcao == "4":
                resultado = dividir(num1, num2)
                print(f"\nResultado: {num1} ÷ {num2} = {resultado}")

            elif opcao == "5":
                resultado = porcentagem(num1, num2)
                print(f"\nResultado: {num2}% de {num1} = {resultado}")


if __name__ == "__main__":
    calculadora()
