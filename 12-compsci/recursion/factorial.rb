def factorial_iterative(n)
  product = 1

  n.downto(1) do |i|
    product *= i
  end

  product
end

puts factorial_iterative(7) # => 5040

def factorial(n)
  if n <= 1
    1 # Base case
  else
    n * factorial(n - 1)
  end
end

puts factorial(500000000) # => 5040
