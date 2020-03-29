# == Schema Information
#
# Table name: stocks
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :bigint
#  slot_id    :bigint
#
# Indexes
#
#  index_stocks_on_product_id  (product_id)
#  index_stocks_on_slot_id     (slot_id)
#
# Foreign Keys
#
#  fk_rails_...  (product_id => products.id)
#  fk_rails_...  (slot_id => slots.id)
#
class Stock < ApplicationRecord
  belongs_to :slot
  belongs_to :product
end
