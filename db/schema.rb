# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_200_209_090_355) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'balances', force: :cascade do |t|
    t.integer 'final_amount', null: false
    t.bigint 'vending_machine_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['vending_machine_id'], name: 'index_balances_on_vending_machine_id'
  end

  create_table 'bills', force: :cascade do |t|
    t.integer 'type', null: false
    t.bigint 'balance_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['balance_id'], name: 'index_bills_on_balance_id'
  end

  create_table 'coins', force: :cascade do |t|
    t.integer 'type', null: false
    t.bigint 'balance_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['balance_id'], name: 'index_coins_on_balance_id'
  end

  create_table 'products', force: :cascade do |t|
    t.string 'name', null: false
    t.integer 'price', null: false
    t.string 'maker', null: false
    t.bigint 'slot_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['slot_id'], name: 'index_products_on_slot_id'
  end

  create_table 'slots', force: :cascade do |t|
    t.string 'temp'
    t.bigint 'vending_machine_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['vending_machine_id'], name: 'index_slots_on_vending_machine_id'
  end

  create_table 'stocks', force: :cascade do |t|
    t.bigint 'slot_id'
    t.bigint 'product_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['product_id'], name: 'index_stocks_on_product_id'
    t.index ['slot_id'], name: 'index_stocks_on_slot_id'
  end

  create_table 'vending_machines', force: :cascade do |t|
    t.string 'maker', null: false
    t.integer 'max_slot'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  add_foreign_key 'balances', 'vending_machines'
  add_foreign_key 'bills', 'balances'
  add_foreign_key 'coins', 'balances'
  add_foreign_key 'products', 'slots'
  add_foreign_key 'slots', 'vending_machines'
  add_foreign_key 'stocks', 'products'
  add_foreign_key 'stocks', 'slots'
end
