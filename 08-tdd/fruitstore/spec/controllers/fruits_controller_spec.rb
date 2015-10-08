require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  describe 'GET to index' do
    before do
      3.times { |i| Fruit.create(:name => 'Fruit number #{ i }') }
    end
  end

end
