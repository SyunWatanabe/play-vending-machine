# frozen_string_literal: true

Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :balances
      resources :bills
      resources :coins
      resources :products
      resources :slots
      resources :stocks
      resources :vending_machines
    end
  end
end
