FROM php:7.4-fpm-alpine
RUN apk add libjpeg-turbo-dev libpng-dev freetype-dev
RUN docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd pdo_mysql
RUN docker-php-ext-install exif
RUN docker-php-ext-enable exif

CMD [" rsync -avu --delete "./var/www/public/assets/files/" "../files" , rsync -avu --delete "./var/www/public/assets/avatars/" "../avatars" "]


