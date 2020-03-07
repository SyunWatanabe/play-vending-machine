# == Schema Information
#
# Table name: stocks
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :integer
#  slot_id    :integer
#
# Indexes
#
#  index_stocks_on_product_id  (product_id)
#  index_stocks_on_slot_id     (slot_id)
#
require 'test_helper'

class StockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
