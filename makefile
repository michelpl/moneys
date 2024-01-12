# defines variables
PERMISSIONS_WEBAPI ?= make webapi-permissions
PERMISSIONS_WEBAPP ?= make webapp-permissions
MYSQL_PASSWORD ?= root
#include Make.config

install:
	cp webapi/.env webapi/src/.env
	docker-compose build --no-cache
	docker-compose up -d
	docker-compose exec webapi composer update -vvv
	docker-compose exec composer require mongodb/laravel-mongodb ^4.0.0

mysql:
	docker-compose exec db mysql -u root -p$(MYSQL_PASSWORD)

run:
	docker-compose up -d
	docker-compose exec webapp npm start

stop:
	docker-compose down

test:
	docker-compose exec webapi php artisan test

show-logs:
	echo "Showing logs...... \n " && tail -f src/storage/logs/laravel.log

permissions:
	$ echo "Running permissions"
	$(PERMISSIONS_WEBAPI)
	$(PERMISSIONS_WEBAPP)

webapi-permissions:
	sudo find webapi/src/ -type d -exec chmod 775 {} \;
	sudo find webapi/src/ -type f -exec chmod 664 {} \;
	sudo chown -R www-data:${USER} webapi/src
	sudo find webapi/src/bootstrap/cache -type d -exec chmod 775 {} \;
	sudo find webapi/src/bootstrap/cache -type f -exec chmod 664 {} \;
	sudo chown -R www-data:${USER} webapi/src/bootstrap/cache

webapp-permissions:
	$ echo 'Running webapp permissions'\;
	sudo find webapp/src/src/ -type d -exec chmod 775 {} \;
	sudo find webapp/src/src/ -type f -exec chmod 664 {} \;
	sudo chown -R root:${USER} webapp/src/src/
	sudo find webapp/src/public/ -type d -exec chmod 775 {} \;
	sudo find webapp/src/public/ -type f -exec chmod 664 {} \;
	sudo chown -R root:${USER} webapp/src/public/

webapi-bash:
	docker-compose exec webapi bash

webapp-bash:
	docker-compose exec webapp /bin/ash

artisan:
	docker-compose exec webapi php artisan

seed:
	cp ./stocks.sql webapi/src/public/
	docker-compose exec webapi php artisan db:seed --class=StockSeeder
	rm webapi/src/public/stocks.sql

make npm:
	docker-compose exec webapp npm

make npm-build:
	docker-compose exec webapp npm run build

make npm-start:
	docker-compose exec webapp npm start