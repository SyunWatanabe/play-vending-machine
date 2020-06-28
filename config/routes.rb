# frozen_string_literal: true

Rails.application.routes.draw do
  namespace 'api', format: 'json' do
    namespace 'v1' do
      resources :products, only: [:index]
      resources :purchases, only: %i[create total_sales]
      get '/purchases/total_sales', to: 'purchases#total_sales'
      get '/purchases/each_sales', to: 'purchases#each_sales'
    end
  end
end
