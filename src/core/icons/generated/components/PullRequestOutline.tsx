import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PullRequestOutline.svg';

export function PullRequestOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PullRequestOutline">
      <SVG />
    </Icon>
  );
}
