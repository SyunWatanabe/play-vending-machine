# frozen_string_literal: true

# == Schema Information
#
# Table name: products
#
#  id         :bigint           not null, primary key
#  maker      :string           not null
#  name       :string           not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  slot_id    :bigint
#
# Indexes
#
#  index_products_on_slot_id  (slot_id)
#
# Foreign Keys
#
#  fk_rails_...  (slot_id => slots.id)
#
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
