# frozen_string_literal: true

module Api::V1
  class ProductsController < ApplicationController
    def index
      products = Product.all.order(:id)
      render json: products
    end
  end
end
