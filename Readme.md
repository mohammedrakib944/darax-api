# Hi my name is Rakib. This an Ecommerce REST API documentation

# My Website: https://www.myselfrakib.com/

## API end points

Server URL = https://darax-ecommerce.onrender.com/
Localhost URL = http://localhost:8000

## users

/api/users [post,get]
/api/users/:user_id [get,patch,delete]
/api/users/login [post]{name,email}

## products

api/products [post,get]
api/products/:product_id [get,patch,delete]

## cart

api/cart [post] {user_id, product, quantity}
api/cart/:user_id [get]
api/cart/:cart_id [delete]
