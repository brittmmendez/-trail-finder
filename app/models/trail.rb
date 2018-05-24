class Trail < ApplicationRecord
  has_many :comments
  validates :name, presence: true
  validates :distance, presence: true
  validates :description, presence: true

  before_create :set_likes

    def set_likes
      self.likes = 0
    end
end
