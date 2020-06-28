# frozen_string_literal: true

# == Schema Information
#
# Table name: purchases
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :bigint
#  slot_id    :bigint
#
# Indexes
#
#  index_purchases_on_product_id  (product_id)
#  index_purchases_on_slot_id     (slot_id)
#
# Foreign Keys
#
#  fk_rails_...  (product_id => products.id)
#  fk_rails_...  (slot_id => slots.id)
#
class Purchase < ApplicationRecord
  belongs_to :product
  belongs_to :slot
end
