json.array!(@events) do |event|
  json.extract! event, :name, :description, :position, :icon
  json.url event_url(event, format: :json)
end
