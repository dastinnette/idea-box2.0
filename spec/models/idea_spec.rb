require 'rails_helper'

RSpec.describe Idea, type: :model do

  it "is invalid without a title" do
    idea = Idea.create(body: "Pigeons should never be trusted")

    expect(idea).to be_invalid
  end

  it "is invalid without a body" do
    idea = Idea.create(title: "Invest in Blockbuster")

    expect(idea).to be_invalid
  end

  it "has a default value of swill" do
    idea = Idea.create(title: "Wear more suspenders", body: "All day, erry day")

    expect(idea.quality).to eq("swill")
  end

end
