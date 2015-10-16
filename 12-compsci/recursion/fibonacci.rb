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

puts '-' * 80

def fibonacci_recursive(n)
  if n == 0
    0
  elsif n == 1
    1
  else
    fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
  end
end

def fibonacci_recursive_fast(n, a=1, b=1)
  if n <= 1
    a
  else
    fibonacci_recursive_fast(n - 1, b, a + b) # Eligible for TCO
  end
end


1.upto(20) do |i|
  puts fibonacci_recursive( i )
end

puts fibonacci_iterative(500_000)
puts '-' * 80
puts fibonacci_recursive_fast(500_000)












