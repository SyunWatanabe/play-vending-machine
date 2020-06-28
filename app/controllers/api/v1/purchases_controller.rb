# frozen_string_literal: true

module Api::V1
  class PurchasesController < ApplicationController
    def create
      purchase = Purchase.new(purchase_params)
      if purchase.save
        render status: 200, json: { status: 200, message: 'Success' }
      else
        render status: 400, json: { status: 400, message: 'Bad Request' }
      end
    end

    def total_sales
      sales = Purchase.pluck(:purchase_price).sum
      counts = Purchase.all.size
      render json: { total_sales: sales, total_counts: counts }
    end

    # arrは最終こんな感じ
    # 0: {id: 1, name: "コーラ", sales: 1500, counts: 10}
    # 1: {id: 2, name: "アクエリアス", sales: 1200, counts: 8}
    def each_sales
      arr = []
      Product.all.order(:id).each do |product|
        sales = Purchase.where(product_id: product.id).pluck(:purchase_price).sum
        counts = Purchase.where(product_id: product.id).size
        product_hash = { id: product.id, name: product.name, sales: sales, counts: counts }
        arr << product_hash
      end
      render json: { each_sales: arr }
    end

    private

    def purchase_params
      params.require(:purchase).permit(:product_id, :slot_id, :purchase_price)
    end
  end
end
