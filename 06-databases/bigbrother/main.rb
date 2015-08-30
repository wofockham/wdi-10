class Person
  attr_accessor :name, :age, :gender # Free getters and setters

  def initialize(name, age, gender) # Set our instance variables when we create each person.
    @name = name
    @age = age
    @gender = gender
  end

  def story
    "#{ @name.capitalize } identifies as #{ @gender } and is #{ @age } years old."
  end
end

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
  people << Person.new(person_info[0], person_info[1], person_info[2])
end

db.close

people.each do |person|
  # puts story(person)
  puts person.story
end

require 'pry'
binding.pry

# def story(person)
#   "#{ person[:name].capitalize } identifies as #{ person[:gender] } and is #{ person[:age] } years old."
# end







