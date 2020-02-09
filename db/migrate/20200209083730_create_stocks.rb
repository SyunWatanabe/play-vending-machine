class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.references :slot, foreign_key: true
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end
