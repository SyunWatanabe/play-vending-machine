# frozen_string_literal: true

class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.string :maker, null: false
      t.references :slot, foreign_key: true

      t.timestamps
    end
  end
end
