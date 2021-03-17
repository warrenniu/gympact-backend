class UsergroupSerializer < ActiveModel::Serializer
  attributes :id,:name,:pot,:wager,:weeks 
  has_many :users
end
