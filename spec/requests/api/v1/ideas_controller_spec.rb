require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do

  describe "#index" do
    scenario "returns all ideas" do
      create_ideas(2)

      get :index, format: :json

      expect(response.status).to eq(200)
      expect(response.content_type).to eq "application/json"

      body = JSON.parse(response.body)

      expect(body.first["title"]).to   eq(Idea.first.title)
      expect(body.first["body"]).to    eq(Idea.first.body)
      expect(body.first["quality"]).to eq(Idea.first.quality)

      expect(body.last["title"]).to    eq(Idea.last.title)
      expect(body.last["body"]).to     eq(Idea.last.body)
      expect(body.last["quality"]).to  eq(Idea.last.quality)
    end
  end

  describe "#create" do
    scenario "adds a new idea" do
      old_ideas = Idea.count
      params = { title: "Get more fiber in your diet", body: "Eat a book" }

      post :create, title: params[:title], body: params[:body], format: :json

      expect(response.status).to eq(201)
      expect(response.content_type).to eq "application/json"

      new_ideas = Idea.count
      body = JSON.parse(response.body)

      expect(body["title"]).to   eq(Idea.last.title)
      expect(body["body"]).to    eq(Idea.last.body)
      expect(body["quality"]).to eq(Idea.last.quality)

      expect(Idea.last.title).to eq(params[:title])
      expect(Idea.last.body).to  eq(params[:body])
      expect(new_ideas - old_ideas).to eq(1)
    end
  end

end
