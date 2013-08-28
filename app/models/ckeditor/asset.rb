class Ckeditor::Asset < ActiveRecord::Base
  include Ckeditor::Orm::ActiveRecord::AssetBase
  include Ckeditor::Backend::ActiveRecord

  delegate :url, :current_path, :content_type, :to => :data
  
  validates_presence_of :data
end
