def bubble_sort(input)
  last = input.length - 1

  until last <= 0
    last.times do |i|
      if input[i] > input[i + 1]
        input[i], input[i + 1] = input[i + 1], input[i] # Parallel assignment
      end
    end

    last -= 1
  end

  input
end