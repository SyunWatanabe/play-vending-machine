# frozen_string_literal: true

class CreateBalances < ActiveRecord::Migration[5.2]
  def change
    create_table :balances do |t|
      t.integer :final_amount, null: false
      t.references :vending_machine, foreign_key: true

      t.timestamps
    end
  end
end
