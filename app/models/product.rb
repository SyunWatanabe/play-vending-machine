# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  maker      :string           not null
#  name       :string           not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  slot_id    :integer
#
# Indexes
#
#  index_products_on_slot_id  (slot_id)
#
class Product < ApplicationRecord
  belongs_to :slot
end
