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
require 'test_helper'

class SlotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
