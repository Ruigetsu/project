#Мананков Дмитрий 

#(o) ch(x)=1+(x^2)/2!+(x^4)/4!+(x^6)/6!+...

#формула x^(2*i))/((2*i)*(2*i-1)

import math

#Ввод 
x=float(input('Введите x= '))

n=int(input('Введите n= '))
while n<=0:
    n=int(input('Ошибка. Введите положительное n= '))

eps=float(input('Введите eps: '))
while (eps<=0) or (eps>=1):
   eps=float(input('Ошибка. Введите eps: ')) 

#Точное значение  
res = math.cosh(x)
 
#Значение суммы n элементов 
x2=x*x
y=1
sumn=y
for i in range (1,n+1):
   y=y*x2/((2*i)*(2*i-1))
   sumn=sumn+y

#Значение с точностью eps
y=1
num=0
sume=0
while abs(y)>=eps:
    sume=sume+y
    num=num+1
    y=y*x2/((2*num)*(2*num-1))   

#Вывод
print('Значение суммы =', sumn,'c ', n,'слагаемых')
print('Значение суммы =', sume,'с ', num,'слагаемых при точности', eps)
print('Точное значение гиперболического косинуса =', res)
input() 