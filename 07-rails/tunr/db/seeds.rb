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
u1 = User.create :name => 'Craigsy', :email => 'craigsy@gmail.com', :password => 'chicken'
u2 = User.create :name => 'Jonesy', :email => 'jonesy@gmail.com', :password => 'chicken'

Mixtape.destroy_all
m1 = u1.mixtapes.create :name => 'Mix 1' # Associate AND create
m2 = Mixtape.create :name => 'Mix 2'
m3 = Mixtape.create :name => 'Other Mix'

u2.mixtapes << m2 << m3 # Associate after creation

a1.songs << s1
a2.songs << s2
a3.songs << s3
a4.songs << s4
a5.songs << s5

ab1.songs << s1
ab2.songs << s2
ab3.songs << s3
ab4.songs << s4
ab5.songs << s5

g1.songs << s1 << s2
g2.songs << s4
g3.songs << s3
g4.songs << s1 << s2 << s3 << s4 << s5

m1.songs << s5 << s4 << s3 << s2 << s1
m2.songs << s1 << s3 << s5
m3.songs << s1 << s2 << s5







