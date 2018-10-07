FROM nginx:stable

COPY --chown=nginx src/app /usr/share/nginx/html
# The --chown=nginx is only needed if the source folder is not giving read access to the "others" users.
