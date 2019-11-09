# README

## usersテーブル

|colume|Type|Option|
|-------|-----|------|
|id|integer|null:false|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
|created_at|datetime|null: false|
|update_at|datetime|

### Association
- has_many : groups, through: :groups_users  
- has_many : messages
- has_many : groups_users

## groups_userstテーブル

|Colume|Type|Option|
|-------|-----|------|
|id|string|null: false|
|user_id|integer|null :false foreign_key: true|
|group_id|integer|null :false foreign_key: true|

### Association
-belongs_to :user  
-belongs_to :group

## messagesテーブル
|colume|Type|Option|
|-------|-----|------|
|id|integer|null:false|
|content|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true||
|created_at|datetime|null:false|

### Association
-belongs_to :user  
-belomgs_to :group

## groupsテーブル
|colume|Type|Option|
|-------|-----|------|
|id|integer|null:false|
|name|string|null:false|
|user_id|integer|null:false
|created_at|datetime|null:false|

### Association
has_many : users, through: :groups_users  
has_many : messages
has-many : groups_users