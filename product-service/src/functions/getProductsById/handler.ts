import 'source-map-support/register';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { middyfy } from '@libs/lambda';
import { products } from '@data/products';
import { LOGGER } from '@libs/logger';
import { headers } from '@libs/headers';

export const getProductsById = middyfy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      const productId = event.pathParameters.productId;
      const result = products.find((product) => product.id === productId);

      if (!result) {
        throw new Error('Product not found');
      }

      const response: APIGatewayProxyResult = {
        headers,
        statusCode: 200,
        body: JSON.stringify(result),
      };

      LOGGER.info(`[getProductsById] ${JSON.stringify(response)}`);

      return response;
    } catch (error) {
      const response: APIGatewayProxyResult = {
        headers,
        statusCode: 500,
        body: error.message,
      };

      LOGGER.error(`[getProductsById] ${JSON.stringify(response)}`);

      return response;
    }
  }
);
