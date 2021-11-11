
# Build and upload docker image
PHONY: build
build:
	docker build --tag thohell/react-vimeo-example:latest .

PHONY: push
push:
	docker push thohell/react-vimeo-example:latest
