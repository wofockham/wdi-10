require_relative '../bank'

describe Bank do

  describe '.new' do
    it "should create a new bank" do
      bank = Bank.new
      expect(bank).to_not eq nil
    end
  end

end

