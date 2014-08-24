class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :company_name
      t.string :job_title
      t.text :job_description
      t.string :date
      t.string :location
      t.timestamps
    end
  end
end
