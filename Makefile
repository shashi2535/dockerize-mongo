up:
	docker-compose --env-file .env.dev up -d

up-prod:
	docker-compose -f docker-compose.prod.yml --env-file .env.production up -d

down:
	docker-compose down
