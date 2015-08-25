require 'pry'

# part a
a = ["Anil", "Erik", "Jonathan"]
p a[1]

a << 'Jorge'
p a

# part b
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# part c
is = {true => "It's true!", false => "It's false"}

# part d
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

p users["Jonathan"][:twitter]

users["Erik"][:favorite_numbers] << 7

users["Jorge"] = { :twitter => 'edwardawkward', :favorite_numbers => [11, 2] }

p users["Erik"][:favorite_numbers]

p users["Erik"][:favorite_numbers].min

p users["Anil"][:favorite_numbers].select { |num| num.even? }
# or
p users["Anil"][:favorite_numbers].select do |num|
  num.even?
end

# Numbers common to all users
p users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]
# or this unreadable version which works for many users
users.collect { |k, v| v[:favorite_numbers] }.inject &:&

# All favorite numbers, sorted and without duplicates
p (users["Jonathan"][:favorite_numbers] | users["Erik"][:favorite_numbers] | users["Anil"][:favorite_numbers]).uniq.sort
# or this unreadable multiuser version
users.collect { |k, v| v[:favorite_numbers] }.flatten.uniq.sort

# Check the docs for collect() and inject()

binding.pry
