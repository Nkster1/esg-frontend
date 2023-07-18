i:
	 npm install
build:
	docker build  -t ghcr.io/nkster1/esg-pilot-frontend .
push:
	docker push ghcr.io/nkster1/esg-pilot-frontend
run:
	docker run  --rm  -d -p 80:80 ghcr.io/nkster1/esg-pilot-frontend