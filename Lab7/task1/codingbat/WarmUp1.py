#1
def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False

#2
def sum_double(a, b):
  sum = a + b
  if a == b:
    sum = sum * 2
  return sum

#3
def diff21(n):
  if n <= 21:
    return 21 - n
  else:
    return (n - 21) * 2

#4
def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))

#5
def makes10(a, b):
  return (a == 10 or b == 10 or a+b == 10)

#6
def near_hundred(n):
  return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

#7
def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))

#8
def not_string(str):
    if len(str) >= 3 and str[:3] == "not":
        return str
    return "not " + str

#9
def missing_char(str, n):
    front = str[:n]
    back = str[n+1:]
    return front + back