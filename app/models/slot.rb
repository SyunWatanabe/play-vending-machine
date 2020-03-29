# == Schema Information
#
# Table name: slots
#
#  id                 :bigint           not null, primary key
#  temp               :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  vending_machine_id :bigint
#
# Indexes
#
#  index_slots_on_vending_machine_id  (vending_machine_id)
#
# Foreign Keys
#
#  fk_rails_...  (vending_machine_id => vending_machines.id)
#
class Slot < ApplicationRecord
  has_one :product
  has_many :stocks
  belongs_to :vending_machine
end
