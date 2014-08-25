namespace :db do
  task populate: :environment do

    Company.destroy_all

    5.times do
      Company.create(
        company_name: Faker::Company.name,
        job_title: Faker::Job.title,
        job_description: Faker::HipsterIpsum.words(10).join(' '),
        date: Faker::PhoneNumber.short_phone_number,
        location: Faker::Address.city
        );
    end

  end
end