# == Schema Information
#
# Table name: slots
#
#  id                 :integer          not null, primary key
#  temp               :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  vending_machine_id :integer
#
# Indexes
#
#  index_slots_on_vending_machine_id  (vending_machine_id)
#
class Slot < ApplicationRecord
  has_one :product
  has_many :stocks
  belongs_to :vending_machine
end
