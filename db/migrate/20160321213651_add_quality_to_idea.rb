class AddQualityToIdea < ActiveRecord::Migration
  def change
    add_column :ideas, :quality, :integer, :null => false, :default => 0
  end
end
