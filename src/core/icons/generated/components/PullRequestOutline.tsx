import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PullRequestOutline.svg';

export function PullRequestOutline(props: TProps) {
  return (
    <Icon {...props} name="PullRequestOutline">
      <SVG />
    </Icon>
  );
}
