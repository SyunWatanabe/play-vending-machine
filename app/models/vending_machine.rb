# == Schema Information
#
# Table name: vending_machines
#
#  id         :bigint           not null, primary key
#  maker      :string           not null
#  max_slot   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class VendingMachine < ApplicationRecord
  has_many :slots
  has_one :balance
end
