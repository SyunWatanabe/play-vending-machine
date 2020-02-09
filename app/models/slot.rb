class Slot < ApplicationRecord
  has_one :product
  has_many :stocks
  belongs_to :vending_machine
end
