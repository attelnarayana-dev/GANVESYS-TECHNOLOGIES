const routes = [
  '', '/services', '/projects', '/solutions', '/about', '/careers', '/contact',
  '/services/software-engineering', '/services/ai-automation', '/services/qa-test-automation',
  '/services/cloud-devops', '/services/cyber-security', '/services/data-digital-transformation',
  '/projects/smartgate', '/projects/enterprise-operations', '/projects/qa-automation', '/projects/ai-workflow'
];

export default function sitemap() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ganvesys-technologies.netlify.app').replace(/\/$/, '');
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
