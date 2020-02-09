class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :type, null: false
      t.references :balance, foreign_key: true

      t.timestamps
    end
  end
end
