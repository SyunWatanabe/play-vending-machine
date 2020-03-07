# == Schema Information
#
# Table name: coins
#
#  id         :integer          not null, primary key
#  type       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  balance_id :integer
#
# Indexes
#
#  index_coins_on_balance_id  (balance_id)
#
class Coin < ApplicationRecord
  belongs_to :balance
end
