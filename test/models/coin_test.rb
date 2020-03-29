# == Schema Information
#
# Table name: coins
#
#  id         :bigint           not null, primary key
#  type       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  balance_id :bigint
#
# Indexes
#
#  index_coins_on_balance_id  (balance_id)
#
# Foreign Keys
#
#  fk_rails_...  (balance_id => balances.id)
#
require 'test_helper'

class CoinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
