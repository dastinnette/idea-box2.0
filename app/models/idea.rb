class Idea < ActiveRecord::Base
  validates :title, presence: true,
                    uniqueness: true
  validates :body, presence: true
  default_scope -> {order(id: :desc)}
end
