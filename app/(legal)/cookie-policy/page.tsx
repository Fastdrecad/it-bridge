export default function CookiePolicy() {
  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookie Types</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Necessary Cookies</h3>
            <p>Required for basic site functionality</p>
          </div>
          <div>
            <h3 className="font-semibold">Analytics Cookies</h3>
            <p>Help us understand how visitors interact with our website</p>
          </div>
          <div>
            <h3 className="font-semibold">Marketing Cookies</h3>
            <p>
              Used to track visitors across websites for advertising purposes
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meta Pixel Cookies</h2>
        <p>
          Meta Pixel sets cookies to track your activity on our website for
          advertising purposes. You can control these through our cookie consent
          banner.
        </p>
      </section>
    </article>
  );
}
