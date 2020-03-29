module Api
  module V1
    class VendingMachinesController < ApplicationController
      before_action :set_vending_machine, only: [:show, :update, :destroy]

      def index
        vending_machines = VendingMachine.all
        render json: { status: 'SUCCESS', message: 'Loaded vending machies', data: vending_machines }
      end

      def show
        render json: { status: 'SUCCESS', message: 'Loaded the vending_machin', data: @vending_machine }
      end

      def create
        vending_machine = VendingMachine.new(vending_machine_params)
        if vending_machine.save
          render json: { status: 'SUCCESS', data: vending_machine }
        else
          render json: { status: 'ERROR', data: vending_machine.errors }
        end
      end

      def destroy
        @vending_machine.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the vending_machine', data: @vending_machine }
      end

      def update
        if @vending_machine.update(vending_machine_params)
          render json: { status: 'SUCCESS', message: 'Updated the vending_machine', data: @vending_machine }
        else
          render json: { status: 'SUCCESS', message: 'Not updated', data: @vending_machine.errors }
        end
      end

      private

      def set_vending_machine
        @vending_machine = VendingMachine.find(params[:id])
      end

      def vending_machine_params
        params.require(:vending_machine).permit(:maker, :max_slot)
      end
    end
  end
end
