# frozen_string_literal: true

class CreateVendingMachines < ActiveRecord::Migration[5.2]
  def change
    create_table :vending_machines do |t|
      t.string :maker, null: false
      t.integer :max_slot

      t.timestamps
    end
  end
end
