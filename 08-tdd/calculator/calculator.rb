class Calculator
  def initialize
    @input = []
  end

  def <<(n)
    @input.push n.to_i
  end

  def add
    result = @input.inject { |sum, x| sum + x } # Returns the sum of the input array
    puts result
    result
  end

end
