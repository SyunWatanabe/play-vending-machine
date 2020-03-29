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
require 'test_helper'

class VendingMachineTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
