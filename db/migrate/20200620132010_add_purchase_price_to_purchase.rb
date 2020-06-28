class AddPurchasePriceToPurchase < ActiveRecord::Migration[5.2]
  def change
    add_column :purchases, :purchase_price, :integer, null: false
  end
end
