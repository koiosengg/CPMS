import { CheckCircle2 } from "lucide-react";

const defaultReasons = [
  "80% Faster Appraisal Processing",
  "100% Digital Documentation",
  "AI Assisted Workflows",
  "Enterprise Role-Based Security",
];

export default function AirlineChoice({
  kicker = "KEY STATISTICS",
  title = "Performance That Speaks for Itself",
  description = "Discover measurable outcomes that showcase how our intelligent platform enhance",
  showStat = false,
  statValue = "40%",
  statLabel = "Reduction in scheduling time",
  reasons = defaultReasons,
}) {
  return (
    <section className="airline-choice-section" id="solutions">
      <div className="airline-choice-inner">
        <div className="airline-choice-copy">
          {kicker && <p className="choice-kicker">{kicker}</p>}
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          {showStat && (
            <div className="choice-stat">
              <strong>{statValue}</strong>
              <span>{statLabel}</span>
            </div>
          )}
        </div>

        <div className="choice-list" aria-label="CPMS operational advantages">
          {reasons.map((reason) => (
            <div className="choice-list-item" key={reason}>
              <span aria-hidden="true">
                <CheckCircle2 size={16} strokeWidth={2.5} />
              </span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
