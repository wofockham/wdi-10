i = 10
while i >= 0
  puts "i is currently: #{ i }"
  i -= 1 # equivalent to: i = i - 1
end

puts "Blastoff!"

puts "=" * 80

i = 10
until i == 0
  puts "i is currently: #{ i }"
  i -= 1
end

# Iterator / ennumerables
(1..10).each do |num|
  puts "num is currently #{ num }"
end

10.times do |j|
  puts "#{ j } is fabulous"
end

