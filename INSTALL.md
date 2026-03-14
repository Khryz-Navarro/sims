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
- copy to C:\laragon\www
- open laragon
- click **start all**
- open terminal `cd sims`
- open visual studio `code .`
- Copy `.env` file
- Install Dependencies `composer install`
- Install NPM dependencies `npm install`
- Build frontend assets `npm run build`
- Generate key `php artisan key:generate`
- Create Database `php artisan migrate`

## `.env` file

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sims
DB_USERNAME=root
DB_PASSWORD=
```

---

# Running the Website

```
php artisan serve
http://127.0.0.1:8000/

```
