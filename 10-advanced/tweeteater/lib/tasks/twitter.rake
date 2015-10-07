namespace :twitter do
  desc "Clears the user and tweet tables"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
  end

  desc "Creates fake Twitter posts and users"
  task :posts, [:user_count] => :environment do |t, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
    puts "users: #{ User.count }, tweets: #{ Tweet.count }"
  end

  task :search, [:query, :limit] => :environment do |t, args|
    # Your code goes here
    # Fetch limit number of tweets matching query from Twitter and insert them into the DB.
    # Don't bother creating users.
  end
end

# rake twitter:search[butterfly,80]
