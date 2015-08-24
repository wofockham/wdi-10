# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "Enter your suburb: "
suburb = gets.chomp.downcase

# if suburb == 'mosman'
#   puts "Lah dee dah"
# elsif suburb == 'newtown'
#   puts "Cool cemetery"
# elsif suburb == 'katoomba'
#   puts "That is a decent commute"
# end

# Case can return a value
compliment = case suburb
when 'mosman'
  "Lah dee dah"
when 'newtown'
  "Cool cemetery"
when 'katoomba'
  "That is a decent commute"
else
  "I'm sure that's a very nice suburb"
end

puts compliment