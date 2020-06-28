# frozen_string_literal: true

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
class Coin < ApplicationRecord
  belongs_to :balance
end
