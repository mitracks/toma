class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
 
    include ActionView::Helpers::NumberHelper
    include ActionView::Helpers::TextHelper
    include ActionView::Helpers::DateHelper 
   
  def index
     
     
    return_data = Hash.new()   
   
      return_data[:Event] = Event.all.collect{|a| {
          :event_id=>a.id,
          :name=>a.name ,
          :description=>a.description ,
          :position=>a.position ,
          :icon=>a.icon 
        }      
      }       

    render :json => return_data[:Event] , :callback => params[:callback] 


  end  
end