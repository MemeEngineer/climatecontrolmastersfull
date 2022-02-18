class Job < ApplicationRecord
   belongs_to :user

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :email, presence: true
  validates :telephone, presence: true
  validates :subject, presence: true
  validates :servicejobs, presence: true
  validates :message, presence: true
end
