Rails.application.routes.draw do
  devise_for :users
  root to: 'masseges#index'
  resources :users, only: [:edit, :update]
end