json.array!(@articles) do |article|
  json.extract! article, :title, :summary, :body, :home, :position
  json.url article_url(article, format: :json)
end
