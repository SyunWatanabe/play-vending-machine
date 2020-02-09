class VendingMachine < ApplicationRecord
  has_many :slots
  has_one :balance
end
