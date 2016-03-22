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

  describe "#update" do
    it "updates an idea" do
      idea = create_idea
      old_ideas = Idea.count

      idea_params = { title: "updated title", body: "updated body" }

      put :update, id: idea.id, title: idea_params[:title], body: idea_params[:body], format: :json

      new_ideas = Idea.count
      idea = Idea.find(idea.id)

      expect(response.status).to eq(204)
      expect(response.body).to   eq("")

      expect(idea.title).to eq(idea_params[:title])
      expect(idea.body).to  eq(idea_params[:body])

      expect(new_ideas).to             eq(1)
      expect(new_ideas - old_ideas).to eq(0)
    end
  end

  describe "#delete" do
    it "deletes an idea" do
      create_ideas(2)
      old_ideas = Idea.count

      delete :destroy, id: Idea.last.id, format: :json

      new_ideas = Idea.count

      expect(response.status).to eq(204)
      expect(response.body).to   eq("")

      expect(new_ideas).to             eq(1)
      expect(new_ideas - old_ideas).to eq(-1)
    end
  end

end
