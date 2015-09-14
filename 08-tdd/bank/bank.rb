class Bank
  attr_reader :name, :accounts
  def initialize(name)
    @accounts = {}
    @name = name
  end

  def create_account(name, deposit)
    @accounts[name] = deposit unless deposit <= 0
  end

  def deposit(name, deposit)
    @accounts[name] += deposit
  end

  def balance(name)
    @accounts[name]
  end

  def withdraw(name, amount)
    @accounts[name] -= amount unless amount > @accounts[name]
  end
end
