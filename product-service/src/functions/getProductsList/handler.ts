import 'source-map-support/register';
import { APIGatewayProxyResult } from 'aws-lambda';
import { middyfy } from '@libs/lambda';
import { products } from '@data/products';
import { LOGGER } from '@libs/logger';
import { headers } from '@libs/headers';

export const getProductsList = middyfy(
  async (): Promise<APIGatewayProxyResult> => {
    const response: APIGatewayProxyResult = {
      headers,
      statusCode: 200,
      body: JSON.stringify({ products }),
    };

    LOGGER.info(`[getProductsList] ${JSON.stringify(response)}`);

    return response;
  }
);
