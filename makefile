# defines variables
WEBAPP_PERMISSIONS ?= make permissions-webapp
#include Make.config

install:
	cp webapi/.env webapi/src/.env
	docker-compose build --no-cache
	docker-compose up -d
	docker-compose exec webapp npm install

run:
	docker-compose up -d
	docker-compose exec webapp npm start

stop:
	docker-compose down


permissions:
	$ echo "Running permissions"
	$(WEBAPP_PERMISSIONS)

permissions-webapp:
	$ echo 'Running webapp permissions'\;
	sudo find webapp/src/src/ -type d -exec chmod 775 {} \;
	sudo find webapp/src/src/ -type f -exec chmod 664 {} \;
	sudo chown -R root:${USER} webapp/src/src/
	sudo find webapp/src/public/ -type d -exec chmod 775 {} \;
	sudo find webapp/src/public/ -type f -exec chmod 664 {} \;
	sudo chown -R root:${USER} webapp/src/public/

bash:
	docker-compose exec webapp bash

make npm:
	docker-compose exec webapp npm
