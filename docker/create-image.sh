# Builds the image using this folder Dockerfile
# Names it with the given image name/repository (a tag can be added in the
# format <image name>:<tag>)
# Sets the build context to the above folder
image_name="spa-template"
build_context="../"
docker build -f Dockerfile -t $image_name $build_context
