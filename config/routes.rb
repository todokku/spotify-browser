Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      get 'login', action: :show, controller: 'login'
      post 'get_token', action: :create, controller: 'token'
      post 'refresh_token', action: :refresh, controller: 'token'
    end
  end

  get '*path', to: 'application#fallback_index_html', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
