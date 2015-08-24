# Program to ask personal info from a user
print "What is your first name? : "
first_name = gets.chomp # Reading user's name from the keyboard, cleaning the \n
puts "Your first name is #{ first_name }."

print "What is your surname? : "
last_name = gets.chomp
puts "Your surname is #{ last_name }."

puts "Your full name is #{ first_name } #{ last_name }."

print "What is your city? : "
city = gets.chomp

puts "#{ first_name } #{ last_name } resides in #{ city }."
