# == Schema Information
#
# Table name: fruits
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#  type       :string
#

class Apple < Fruit
  def squishy? # Override's the same method in the parent class
    false
  end
end
