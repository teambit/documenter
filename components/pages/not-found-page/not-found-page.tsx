import React from 'react';
import { Icon } from '@teambit/evangelist.elements.icon';
import { ErrorPage } from '@teambit/documenter.pages.error';
import { Image } from '@teambit/evangelist.elements.image';
import { ExternalLink } from '@teambit/documenter.routing.external-link';
import styles from './not-found-page.module.scss';

type NotFoundPageProps = {} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A component that shows a 404 error page
 */
export function NotFoundPage({ className, children, ...rest }: NotFoundPageProps) {
  return (
    <ErrorPage {...rest} code={404} title="Page not found">
      <div className={styles.iconLine}>
        <ExternalLink href="https://join.slack.com/t/bit-dev-community/shared_invite/enQtNzM2NzQ3MTQzMTg3LWI2YmFmZjQwMTkxNmFmNTVkYzU2MGI2YjgwMmJlZDdkNWVhOGIzZDFlYjg4MGRmOTM4ODAxNTIxMTMwNWVhMzg">
          <Icon of="slack" className={styles.slack} />
        </ExternalLink>
        <ExternalLink href="https://github.com/teambit/bit">
          <Icon of="github-logo" className={styles.github} />
        </ExternalLink>
        <ExternalLink href="https://bit.dev/docs">
          <Image alt="bit-logo" className={styles.logo} src="bit-logo.svg" />
        </ExternalLink>
      </div>
    </ErrorPage>
  );
}
