COMPOSE = docker compose -f .docker/docker-compose.yml
.PHONY: help dev prod down lock typecheck
help: ## Muestra esta ayuda
	@grep -E '^[a-z]+:.*##' $(MAKEFILE_LIST) | awk -F':.*## ' '{printf "  make %-10s %s\n", $$1, $$2}'
dev: ## Servidor de desarrollo con hot reload (PortfolioWebDev, localhost:5173)
	$(COMPOSE) up --build web_dev
prod: ## Imagen de producción con nginx (PortfolioWebProd, localhost:8080)
	$(COMPOSE) --profile prod up --build -d
down: ## Detiene todo
	$(COMPOSE) --profile prod down
lock: ## Regenera package-lock.json dentro de Docker
	docker run --rm -v $(PWD):/app -w /app node:22-alpine npm install --package-lock-only
typecheck: ## Revisa tipos de TypeScript
	$(COMPOSE) run --rm --no-deps web_dev npm run typecheck
