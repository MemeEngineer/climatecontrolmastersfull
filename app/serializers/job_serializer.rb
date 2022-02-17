class JobSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :telephone, :subject, :servicejobs, :message
  has_one :user
end
