# World's Crappiest But Still Accurate Calculator

def prompt(message)
  print message
  gets.chomp # Implicit return
end

def display_menu
  puts "(+) - add"
  puts "(q) - quit"
end

def add
  a = prompt('Enter your first number: ').to_i
  b = prompt('Enter your second number: ').to_i
  puts "#{ a } + #{ b } = #{ a + b}"
end

menu_choice = nil

until menu_choice == 'q'

  case menu_choice
  when '+'
    add
  when nil
    # do nothing
  else
    puts "Invalid selection"
  end

  display_menu
  menu_choice = prompt('Please enter your selection: ').downcase
end
