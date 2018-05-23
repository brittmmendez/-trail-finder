class Comment < ApplicationRecord
  belongs_to :trail
  validates :comment, presence: true
  validates :trail_id, presence: true
end
