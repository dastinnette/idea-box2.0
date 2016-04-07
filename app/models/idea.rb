class Idea < ActiveRecord::Base
  validates :title, format: { with: /\A[a-zA-Z0-9,?! ]+\z/ }
  validates :body, format: { with: /\A[a-zA-Z0-9,?! ]+\z/ }
  enum quality: [:swill, :plausible, :genius]
end
