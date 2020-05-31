# frozen_string_literal: true

# == Schema Information
#
# Table name: balances
#
#  id                 :bigint           not null, primary key
#  final_amount       :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  vending_machine_id :bigint
#
# Indexes
#
#  index_balances_on_vending_machine_id  (vending_machine_id)
#
# Foreign Keys
#
#  fk_rails_...  (vending_machine_id => vending_machines.id)
#
require 'test_helper'

class BalanceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
