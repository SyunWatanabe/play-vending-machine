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
require 'test_helper'

class BalanceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
