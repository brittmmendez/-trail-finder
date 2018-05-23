class Trail < ApplicationRecord
  has_many :comments
  validates :name, presence: true
  validates :distance, presence: true
  validates :description, presence: true

end
