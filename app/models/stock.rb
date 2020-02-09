class Stock < ApplicationRecord
  belongs_to :slot
  belongs_to :product
end
