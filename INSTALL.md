# HOW TO INSTALL SIMS

## DEPENDENCIES

Install this first

- laragon
- composer
- php 8.3+
- nodejs
- git
- github desktop

---

### On Terminal

See [Laravel Documentation](https://laravel.com/docs/12.x/installation) for Reference

```
composer global require laravel/installer
```

- Download the [Zip](https://github.com/Khryz-Navarro/sims/archive/refs/heads/main.zip) File of sims
- extract zip file
- copy the extracted sims to C:\laragon\www
- open laragon and then click **start all**
- open terminal then `cd sims`
- open visual studio code or type this command in the terminal `code .` to open vs code
- name: Copy .env
  run: php -r "file_exists('.env') || copy('.env.example', '.env');" - name: Install Dependencies
  run: composer install -q --no-ansi --no-interaction --no-scripts --no-progress --prefer-dist - name: Install NPM dependencies
  run: npm install - name: Build frontend assets
  run: npm run build - name: Generate key
  run: php artisan key:generate - name: Directory Permissions
  run: chmod -R 777 storage bootstrap/cache - name: Create Database
  run: |
  mkdir -p database
  touch database/database.sqlite - name: Execute tests (Unit and Feature tests) via PHPUnit/Pest
  env:
  DB_CONNECTION: sqlite
  DB_DATABASE: database/database.sqlite
  run: php artisan test
- type this command on terminal to install all dependencies `composer update`
- open terminal in vs code or laragon and type this command `php artisan key:generate` and then copy and paste then edit the `.env` file

## It should look like this

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=simplecrud
DB_USERNAME=root
DB_PASSWORD=
```

---

# Running the Website

- To run the website paste this command in the terminal

```
php artisan serve
```

- then visit the localhost `http://127.0.0.1:8000/`
