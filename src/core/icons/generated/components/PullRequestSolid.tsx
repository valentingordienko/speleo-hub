import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PullRequestSolid.svg';

export function PullRequestSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PullRequestSolid">
      <SVG />
    </Icon>
  );
}
