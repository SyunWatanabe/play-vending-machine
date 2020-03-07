# == Schema Information
#
# Table name: balances
#
#  id                 :integer          not null, primary key
#  final_amount       :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  vending_machine_id :integer
#
# Indexes
#
#  index_balances_on_vending_machine_id  (vending_machine_id)
#
class Balance < ApplicationRecord
  has_many :coins
  has_many :bills
  belongs_to :vending_machine
end
