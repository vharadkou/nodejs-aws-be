# node-aws-be

## FE

https://d2ac74ohmvk0j6.cloudfront.net/

Done in PR - https://github.com/vharadkou/nodejs-aws-fe/pull/2

## BE

https://4mm9mzw46b.execute-api.eu-west-1.amazonaws.com/dev/products

OVERALL SCORE: 9

**EVALUATION CRITERIA:**
Reviewers should verify the lambda functions by invoking them through provided URLs.

- (DONE) **1** - poiproduct-service serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct
- (DONE) **2** - The getProductsList OR getProductsById lambda function returns a correct response (POINT1)
- (DONE) **3** - The getProductsById AND getProductsList lambda functions return a correct response code (POINT2)
- (DONE) **4** - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend.  AND POINT1 and POINT2 are done.

**Additional (optional) tasks (but nice to have):**
- (DONE) **+1** - Async/await is used in lambda functions
- (DONE) **+1** - ES6 modules are used for product-service implementation
- (DONE) **+1** - Webpack is configured for product-service
- **+1** - SWAGGER documentation is created for product-service
- **+1** - Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered) (You may use JEST)
- (DONE) **+1** - Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
- (DONE) **+1** - Main error scenarious are handled by API ("Product not found" error, try catch blocks are used in lambda handlers).