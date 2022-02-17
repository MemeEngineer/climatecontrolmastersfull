class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.integer :user_id
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :telephone
      t.string :subject
      t.string :servicejobs
      t.string :message

      t.timestamps
    end
  end
end
