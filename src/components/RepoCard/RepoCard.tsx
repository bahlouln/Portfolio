import Icon from "../ui/Icon/Icon";
import "./RepoCard.styles.scss";

type RepoCardProps = {
  repo: string;
  description: string;
  stars: number;
  forks: number;
};

export default function RepoCard({
  repo,
  description,
  stars,
  forks,
}: RepoCardProps) {
  return (
    <a
      className="repo-card"
      title={`View ${repo} on GitHub`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="repo-card__header">
        <h3 className="repo-card__title">{repo}</h3>
      </div>
      <p className="repo-card__description">{description}</p>
      <div className="repo-card__footer">
        <div className="repo-card__footer-left">
          
          
        </div>

        <div className="repo-card__footer-right">
          {stars > 0 && (
            <span className="repo-card__footer-stars">
              <Icon icon="star" color="var(--gray-200)" size="1.25em" />
              <span>{stars}</span>
            </span>
          )}
          {forks > 0 && (
            <span className="repo-card__footer-forks">
              <Icon icon="git-fork" color="var(--gray-200)" size="1.25em" />
              <span>{forks}</span>
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
