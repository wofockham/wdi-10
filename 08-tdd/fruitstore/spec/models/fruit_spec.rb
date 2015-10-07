require 'rails_helper'

RSpec.describe Fruit, type: :model do

  describe 'An apple' do
    before do
      @apple = Fruit.new
    end

    it 'should not be squishy' do
      @apple.squishy?.should eq(false)
    end
  end

  describe 'A pear' do
    before do
      @pear = Fruit.new
    end

    it 'should be kinda squishy' do
      @pear.squishy?.should eq(true)
    end
  end

end
