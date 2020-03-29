class CreateSlots < ActiveRecord::Migration[5.2]
  def change
    create_table :slots do |t|
      t.string :temp
      t.references :vending_machine, foreign_key: true

      t.timestamps
    end
  end
end
