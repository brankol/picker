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
    { "id" => 1, "path" => "/repository/001_square_small.jpg", "title" => "Image 1" },
    { "id" => 2, "path" => "/repository/002_square_small.jpg", "title" => "Image 2" }
  ].to_json
end

get "/repository/:id" do
  "You reached #{params[:id]}"
end
