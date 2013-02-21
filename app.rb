require "json"

# configure do
#   set :public_folder, "public/app"
#   set :static, true
# end

before do
  content_type :json
end

# get "/" do
#   send_file "public/index.html"
# end

get "/repository" do
  [
    { "id" => 7, "path" => "/repository/007_square_small.jpg", "title" => "Image 7" },
    { "id" => 8, "path" => "/repository/008_square_small.jpg", "title" => "Image 8" },
    { "id" => 9, "path" => "/repository/009_square_small.jpg", "title" => "Image 9" }
  ].to_json
end

get "/repository/:id" do
  "You reached #{params[:id]}"
end
