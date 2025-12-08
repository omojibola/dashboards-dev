export default async (request: Request) => {
  const ip = request.headers.get('x-nf-client-connection-ip');

  const geo = {
    country: request.headers.get('x-nf-geo-country'),
    region: request.headers.get('x-nf-geo-subdivision'),
    city: request.headers.get('x-nf-geo-city'),
    latitude: request.headers.get('x-nf-geo-latitude'),
    longitude: request.headers.get('x-nf-geo-longitude'),
  };

  const userAgent = request.headers.get('user-agent');
  const path = new URL(request.url).pathname;

  console.log({
    ip,
    geo,
    userAgent,
    path,
  });

  return fetch(request);
};
