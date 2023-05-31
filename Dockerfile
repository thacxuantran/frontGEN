# build stage
FROM node:12.16.3 as build-stage
WORKDIR /app
COPY ./ /app/
RUN ls -lsa
RUN npm install
RUN cd gen-ckeditor5 && npm install && npm run build
RUN npm run build
CMD ["npm", "run", "serve"]

# production stage
FROM nginx:1.20-alpine as production-stage
COPY --from=build-stage /app/certificate.crt /etc/ssl/
COPY --from=build-stage /app/private.key /etc/ssl/
COPY --from=build-stage /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
