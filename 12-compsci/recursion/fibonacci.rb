# 1, 1, 2, 3, 5, 8, 13, 21, ...

def fibonacci_iterative(n)
  a = 1
  b = 1

  while (n > 1)
    a, b = b, a + b # Sorry about this
    n -= 1
  end

  a # Will be the nth Fibonacci number
end

1.upto(20) do |i|
  puts fibonacci_iterative( i )
end
