# README

＃＃usersテーブル

｜colume｜Type｜Option|
|-------|-----|------|
|id|integer|null:false|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|created_at|datetime|null: false|
|update_at|datetime|

###Association
- has_many : groups, through: :groups_users
- has_many : messages

##groups_userstテーブル

|Colume｜Type｜Option|
|-------|-----|------|
|id|string|null: false|
|user_id|integer|null :false foreign_key: true|
|groupe_id|integer|null :false foreign_key: true|

###Association
-belongs_to :user
-belongs_to :group

＃＃massegesテーブル
｜colume｜Type｜Option|
|-------|-----|------|
|id|integer|null:false|
|content|text|null:false|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|groupe_id|integer|null: false, foreign_key: true||
|created_at|datetime|null:false|

###Association
-belongs_to :user
-belomgs_to :groupe

＃＃groupsテーブル
｜colume｜Type｜Option|
|-------|-----|------|
|id|integer|null:false|
|groupe_name|string|null:false|
|user_id|integer|null:false
|created_at|datetime|null:false|

###Association
has_many : users, through: :groups_users
has_many : messages



