namespace :db do
  task populate: :environment do

    Employee.destroy_all

    5.times do
      Employee.create(
        first_name: Faker::Company.name,
        last_name: Faker::Job.title,
        social: Faker::HipsterIpsum.words(10).join(' '),
        description: Faker::PhoneNumber.short_phone_number
        );
    end

  end
end