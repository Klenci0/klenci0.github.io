import math

def somar(a, b): return a + b
def subtrair(a, b): return a - b
def multiplicar(a, b): return a * b
def dividir(a, b): return "Erro: não é possível dividir por zero!" if b == 0 else a / b
def porcentagem(valor, taxa): return (valor * taxa) / 100
def ao_quadrado(a): return a ** 2
def raiz_quadrada(a): return "Erro: não existe raiz real de negativo!" if a < 0 else math.sqrt(a)

def calculadora():
    print("=" * 45 + "\n      CALCULADORA COMPLETA EM PYTHON\n" + "=" * 45)
    while True:
        print("\n1: Soma | 2: Subtração | 3: Multiplicação | 4: Divisão")
        print("5: Porcentagem (%) | 6: Quadrado (x²) | 7: Raiz (√) | 0: Sair")
        opcao = input("\nEscolha (0-7): ").strip()
        if opcao == "0": break
        if opcao not in ["1","2","3","4","5","6","7"]: continue

        if opcao in ["6", "7"]:
            num = float(input("Digite o número: "))
            res = ao_quadrado(num) if opcao == "6" else raiz_quadrada(num)
            print(f"Resultado: {res}")
        else:
            n1 = float(input("1º valor (ou base): "))
            n2 = float(input("2º valor (ou taxa %): "))
            if opcao == "1": res = somar(n1, n2)
            elif opcao == "2": res = subtrair(n1, n2)
            elif opcao == "3": res = multiplicar(n1, n2)
            elif opcao == "4": res = dividir(n1, n2)
            elif opcao == "5": res = porcentagem(n1, n2)
            print(f"Resultado: {res}")

if __name__ == "__main__":
    calculadora()
