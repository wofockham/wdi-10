FactoryGirl.define do

  factory :user do |f|
    f.sequence(:name) { Faker::Name.name }
    f.sequence(:email) { Faker::Internet.email }

    factory :user_with_tweets do
      after(:create) do |u|
        FactoryGirl.create_list(:tweet, Random.rand(10..50), :user => u)
      end
    end
  end

  factory :tweet do |f|
    f.sequence(:post) { Faker::Lorem.sentence }
  end

end