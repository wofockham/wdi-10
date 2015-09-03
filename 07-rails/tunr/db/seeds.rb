Song.destroy_all
s1 = Song.create :name => "Candy Fish"
s2 = Song.create :name => "All By Electricity"
s3 = Song.create :name => "Expect Delays"
s4 = Song.create :name => "Ron"
s5 = Song.create :name => "I Am Not Afraid Of You And I Will Beat Your Ass"

Artist.destroy_all
a1 = Artist.create :name => "Helms"
a2 = Artist.create :name => "Shipping News"
a3 = Artist.create :name => "Rachel's"
a4 = Artist.create :name => "Slint"
a5 = Artist.create :name => "Yo La Tengo"

Album.destroy_all
ab1 = Album.create :name => "The Swimmer"
ab2 = Album.create :name => "Save Everything"
ab3 = Album.create :name => "Systems/Layers"
ab4 = Album.create :name => "Tweez"
ab5 = Album.create :name => "Yo La Tengo"

Genre.destroy_all
g1 = Genre.create :name => "Nautical Text Rock"
g2 = Genre.create :name => "Post punk"
g3 = Genre.create :name => "Chamber pop"
g4 = Genre.create :name => "Alternative"

User.destroy_all
u1 = User.create :name => 'Craigsy', :email => 'craigsy@gmail.com'
u2 = User.create :name => 'Jonesy', :email => 'jonesy@gmail.com'

Mixtape.destroy_all
m1 = Mixtape.create :name => 'Mix 1'
m2 = Mixtape.create :name => 'Mix 2'
m3 = Mixtape.create :name => 'Other Mix'

