class Trail < ApplicationRecord
  has_many :comments
  validates :name, presence: true
  validates :distance, presence: true
  validates :description, presence: true

  before_create :set_likes, :set_image

  Pictures = ["https://i.pinimg.com/originals/af/b4/0d/afb40d3ab86fac3958b37ed78676a791.jpg",
    "https://wallpaperstock.net/wald-b%C3%A4ume-pfad-bl%C3%A4tter-pflanzen-wallpapers_44513_1440x900.jpg",
    "https://blog.intelligentbee.com/wp-content/uploads/2017/06/manager-vs-leader.jpg",
    "https://images8.alphacoders.com/500/500337.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhroqiTBCx8vHvmS-lACsriXQVAbO9mLJtPMG7Hh7Z4Ksv9e99w",
    "https://thumbs.dreamstime.com/b/muir-woods-forest-walking-path-national-monument-park-photo-hiking-redwood-tree-foliage-beautiful-redwood-park-97560205.jpg",
    "http://dursocapital.com/wp-content/uploads/2015/09/stay-the-path.jpg",
    "http://miriadna.com/desctopwalls/images/max/Walking-path.jpg",
    "http://cairngorms.co.uk/wp-content/uploads/2017/07/A-father-and-son-cycling-a-country-path-Ballater.-The-Cairngorms-National-Park1.jpg",
    "https://images.unsplash.com/photo-1491409485101-92ebdc5c545d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d35b23eaea2bc65e03acb43ca92a812a&w=1000&q=80"]

    def set_likes
      self.likes = 0
    end

    def set_image
        self.image = Pictures[rand(Pictures.length)]
    end

end
