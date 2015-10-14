def countdown(num)

  while num >= 0
    puts num
    num -= 1
    sleep 1
  end

  puts "Blastoff!"

end

# countdown(10)

def countdown_recursive(num)
  if (num >= 0)
    puts "#{ num } via recursion"
    countdown_recursive(num - 1)
  else
    puts "Blastoff!"
  end
end

countdown_recursive(10)
