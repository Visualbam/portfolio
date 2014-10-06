class LeadSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :social, :description
end