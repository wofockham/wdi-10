# Guess the number

# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).

def prompt(message)
  print message
  gets.chomp # Implicit return
end

max = prompt("Enter the maximum possible value to be guessed: ").to_i

mystery_number = Random.rand 0..max

guess = prompt("Guess a number between 0 and #{ max }: ").to_i
guess = gets.to_i

until guess == mystery_number
  if guess > mystery_number
    puts "Wrong, guess lower!"
  else
    puts "Wrong, guess higher!"
  end

  guess =  prompt("Please guess again: ").to_i
end

puts "Congrats, the number was #{ mystery_number }"
