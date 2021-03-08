class UserSerializer < ActiveModel::Serializer
  attributes :id,:email,:username,:first_name,:last_name
  has_many :usergroups
end
