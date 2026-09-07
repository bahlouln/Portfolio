import Icon from "../ui/Icon/Icon";
import "./RepoCard.styles.scss";

type RepoCardProps = {
  repo: string;
  description: string;
  technologies: string[];
  image: string;
  stars: number;
  forks: number;
};

export default function RepoCard({
  repo,
  description,
  technologies,
  image,
  stars,
  forks,
}: RepoCardProps) {
  return (
    <a
      className="repo-card"
      title={`View ${repo}`}
      href={`/slug?project=${encodeURIComponent(repo)}`}
    >
      <div className="repo-card__content">

        {/* Partie gauche */}
        <div className="repo-card__info">
          <div className="repo-card__header">
            <h3 className="repo-card__title">
              {repo}
            </h3>
          </div>

          <p className="repo-card__description">
            {description}
          </p>

          <div className="repo-card__technologies">
            {technologies.map((technology) => (
              <span
                className="repo-card__technology"
                key={technology}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Partie droite : image */}
        <div className="repo-card__image">
          <img
            src={image}
            alt={`Screenshot of ${repo}`}
          />
        </div>

      </div>

      {/* Footer */}
      <div className="repo-card__footer">
        <div className="repo-card__footer-left"></div>

        <div className="repo-card__footer-right">

          {stars > 0 && (
            <span className="repo-card__footer-stars">
              <Icon
                icon="star"
                color="var(--gray-200)"
                size="1.25em"
              />
              <span>{stars}</span>
            </span>
          )}

          {forks > 0 && (
            <span className="repo-card__footer-forks">
              <Icon
                icon="git-fork"
                color="var(--gray-200)"
                size="1.25em"
              />
              <span>{forks}</span>
            </span>
          )}

        </div>
      </div>
    </a>
  );
}