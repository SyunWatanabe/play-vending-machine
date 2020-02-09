class Balance < ApplicationRecord
  has_many :coins
  has_many :bills
  belongs_to :vending_machine
end
