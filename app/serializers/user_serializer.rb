class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin, :password_digest
end
