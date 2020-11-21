# fortune-cookie-generator

## Pre-requisites
    PHP 7.4.10
    Lumen v8.1.0

## Git Clone
    git clone {url-path to htdocs}
    git fetch
    git pull

## API Folder
    cd api
    composer install
    composer dump-autoload -o
    cp .env.example .env
    configure .env database credentials on your terminal
    php artisan migrate
    php artisan db:seed
    php -S localhost:{port} -t public

## Website Folder
    cd frontend
    Use Case: Update the {PORT} in index.js using the API {port}
    Use Case: Open index.html using your preferred browser
              or you can use Go Live Server of Visual Code

    