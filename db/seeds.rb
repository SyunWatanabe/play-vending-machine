# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Slot.create!(
  [
    {
      temp: '5',
      vending_machine_id: 1
    },
    {
      temp: '5',
      vending_machine_id: 1
    },
    {
      temp: '5',
      vending_machine_id: 1
    },
    {
      temp: '5',
      vending_machine_id: 1
    },
    {
      temp: '5',
      vending_machine_id: 1
    },
    {
      temp: '55',
      vending_machine_id: 1
    },
    {
      temp: '55',
      vending_machine_id: 1
    },
    {
      temp: '55',
      vending_machine_id: 1
    },
    {
      temp: '55',
      vending_machine_id: 1
    },
    {
      temp: '55',
      vending_machine_id: 1
    }
  ]
)

Product.create!(
  [
    {
      name: 'コーラ',
      price: 150,
      maker: 'cocacola',
      slot_id: 1
    },
    {
      name: 'アクエリアス',
      price: 150,
      maker: 'cocacola',
      slot_id: 2
    },
    {
      name: 'お茶',
      price: 150,
      maker: 'cocacola',
      slot_id: 3
    },
    {
      name: '水',
      price: 150,
      maker: 'cocacola',
      slot_id: 4
    },
    {
      name: 'コーヒー',
      price: 150,
      maker: 'cocacola',
      slot_id: 5
    },
    {
      name: '紅茶',
      price: 120,
      maker: 'cocacola',
      slot_id: 6
    },
    {
      name: 'コーンポータージュ',
      price: 120,
      maker: 'cocacola',
      slot_id: 7
    },
    {
      name: 'お汁粉',
      price: 130,
      maker: 'cocacola',
      slot_id: 8
    },
    {
      name: 'コーヒー',
      price: 140,
      maker: 'cocacola',
      slot_id: 9
    },
    {
      name: 'はてな',
      price: 100,
      maker: 'cocacola',
      slot_id: 10
    }
  ]
)
