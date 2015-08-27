db = File.new( 'database.txt', 'a+' ) # open in append mode and create if necessary

print "Would you like to add people to the database? (y/n): "
response = gets.chomp.downcase

while response == 'y'
  print "Enter name, age, gender (comma separated): "
  person = gets.chomp
  db.puts person

  print "Add another? (y/n): "
  response = gets.chomp.downcase
end

db.close

db = File.open( 'database.txt', 'r' )

people = []

db.each do |entry|
  person_info = entry.chomp.split ','
  people << {
    :name => person_info[0],
    :age => person_info[1],
    :gender => person_info[2]
  }
end

db.close

people.each do |person|
  puts "#{ person[:name].capitalize } identifies as #{ person[:gender] } and is #{ person[:age] } years old."
end









