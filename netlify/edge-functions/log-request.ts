export default async (request: Request, context: any) => {
  // geo always lives on context.geo
  const geo = context.geo;

  // IP is usually context.ip. If not available, fallback to header.
  const ip = context.ip ?? request.headers.get('x-nf-client-connection-ip');

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
