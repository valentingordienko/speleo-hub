import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PullRequestSolid.svg';

export function PullRequestSolid(props: TProps) {
  return (
    <Icon {...props} name="PullRequestSolid">
      <SVG />
    </Icon>
  );
}
