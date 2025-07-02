export function SubscriptionTier({ title, price, features, recommended }) {
  return (
    <>
      <div className={`subscription-tier ${recommended ? 'recommended' : ''}`}>
        {recommended && <div className="recommended-badge">Anbefalt</div>}
        <h2>{title}</h2>
        <div className="price">{price}</div>
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="subscribe-btn">Velg</button>
      </div>
    </>
  );
}