namespace :db do
  task populate: :environment do

    Employee.destroy_all

    5.times do
      Employee.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        description: Faker::HipsterIpsum.words(10).join(' '),
        social: Faker::PhoneNumber.short_phone_number
        );
    end

  end
end