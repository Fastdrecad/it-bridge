export default function PrivacyPolicy() {
  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
        <p className="mb-4">We collect the following types of information:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Usage Data through Meta Pixel</li>
          <li>Cookie preferences</li>
          <li>Browser and device information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meta Pixel</h2>
        <p>
          We use Meta Pixel to track website usage and measure advertising
          effectiveness. This service may collect: page views, button clicks,
          and form submissions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>Under GDPR and CCPA, you have the right to:</p>
        <ul className="list-disc pl-5">
          <li>Access your personal data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of tracking</li>
          <li>Data portability</li>
        </ul>
      </section>
    </article>
  );
}
