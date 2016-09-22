json.extract! album, :id, :title, :artist, :image, :thumbnail_image, :created_at, :updated_at
json.url album_url(album, format: :json)