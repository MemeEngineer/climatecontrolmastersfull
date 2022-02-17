# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Job.create(user_id: 1, firstname: "bob", lastname: "builder", email:"bobb@gmail.com", telephone:"1234567890", subject:"repair",servicejobs:"ac-repair", message:"hello")
 User.create(username: "bob", password_digest: "1234", admin: true)