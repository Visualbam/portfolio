class Article < ActiveRecord::Base

  has_many :comments, :dependent => :destroy, :order => "created_at DESC"

  # In plain terms there must be a title and body and the title must be unique.
  validates :title, :presence => {:message => "field can not be blank"}
  validates_uniqueness_of :title

  mount_uploader :image, ImageUploader

end
