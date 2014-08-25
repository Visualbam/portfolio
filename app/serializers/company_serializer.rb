class CompanySerializer < ActiveModel::Serializer
  attributes :id, :company_name, :job_title, :job_description, :date, :location
end