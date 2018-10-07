image_name="spa-template"
container_name="st"
external_port="8080"

docker run --name $container_name -d -p $external_port:80 $image_name
