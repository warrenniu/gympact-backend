# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#DESTROY
# Membership.destroy_all 
# Usergroup.destroy_all
# User.destroy_all

#USER
#email,username,firstname,lastname,password


#MEMBERSHIP
#user_id, #usergroup_id, #status

#USERGROUP
#name
# user1 = User.create!({email:"warren@gmail.com", username:"warrenniu", first_name:"Warren",last_name:"Niu",password:"1234"})
# user2 = User.create!({email:"kevin@gmail.com", username:"kevinh", first_name:"Kevin",last_name:"Huang",password:"1234"})

# group = Usergroup.create!(name:"First Test Group")
# membership1 = Membership.create!(user_id:13,usergroup_id:6)
# membership2 = Membership.create!(user_id:14,usergroup_id:6)