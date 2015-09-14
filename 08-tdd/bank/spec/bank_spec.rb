require_relative '../bank'

describe Bank do

  let(:bank) { Bank.new 'GA Bank' }

  describe '.new' do
    it "should return a new bank" do
      expect(bank).to_not eq nil
    end

    it "should have a name" do
      expect(bank.name).to eq 'GA Bank'
    end

    it "should have no accounts" do
      expect(bank.accounts.length).to eq 0
    end
  end

  describe '#create_account' do
    it "creates an account" do
      bank.create_account("Bob", 100)
      expect(bank.accounts['Bob']).to eq 100
    end

    it "ignores negative deposits" do
      bank.create_account("Jorge", -1_000_000)
      expect(bank.accounts['Jorge']).to eq nil
    end
  end

  describe '#deposit' do
    it "deposits an amount into a named account" do
      bank.create_account("Barry", 100)
      bank.deposit("Barry", 300)
      expect(bank.accounts["Barry"]).to eq 400
    end
  end

  describe '#balance' do
    it "returns the balance for some named account" do
      bank.create_account("George", 500)
      expect(bank.balance("George")).to eq 500
    end
  end

  describe '#withdraw' do
    it "subtracts an amount from a named account" do
      bank.create_account('Abraham', 1000)
      bank.withdraw('Abraham', 500)
      expect(bank.balance('Abraham')).to eq(1000 - 500)
    end

    it "ignores withdrawals that exceed the current balance" do
      bank.create_account('Glen', 1)
      bank.withdraw('Glen', 1_000_000)
      expect(bank.balance('Glen')).to eq 1
    end
  end
end







