# jQuery still works
# $(document).ready(function () {
# });

$(document).ready ->
  console.log 'Document is ready'

  $('body').on 'click', ->
    $(this).css 'background-color', 'blue'

# Arrays
items = ['vb', 'tooheys gold', 'tooheys new', 'three sheets']

# Backwards if
beer_lover = true if items.length > 0

console.log beer_lover

# Function
drinkBeer = ->
  beer = items.pop()
  console.log beer

greeter = (name) ->
  console.log "Hello #{ name }!" # Interpolation, baby!

greeter 'Greg'

# while items.length > 0 then drinkBeer()

# Array comprehensions (fancy for loops)
for beer in items when beer isnt 'vb'
  console.log beer

console.log "Go to the store" if items.length is 0

# Ranges
for i in [5..0]
  console.log i

nums = [1..22]
console.log nums

# Objects
fridge =
  beers: ['vb', 'tsing tao']
  chips: ['salt and vinegar', 'bbq']
  consumeBeer: () ->
    @beers.pop()
  consumeChips: () ->
    @chips.pop()




