# == Schema Information
#
# Table name: bills
#
#  id         :integer          not null, primary key
#  type       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  balance_id :integer
#
# Indexes
#
#  index_bills_on_balance_id  (balance_id)
#
require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
