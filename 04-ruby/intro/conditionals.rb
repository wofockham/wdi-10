# Examples of conditionals

if 7 > 3
  puts "Mathematics is behaving in Ruby"
end

# Terrible offensive example
gender = 'i haven\'t decided yet'
if gender == 'male'
  puts "You are a male"
else
  puts "You must be female"
end

if gender == 'male'
  puts "You are a male"
elsif gender == 'female'
  puts "You are a female"
else
  puts "Gender indeterminate"
end

puts "23 is greater than 4" if 23 > 4

milk = false
if milk != true
  puts "You need to buy milk"
end

unless milk == true
  puts "You need to buy milk"
end

puts "You need to buy milk" unless milk






