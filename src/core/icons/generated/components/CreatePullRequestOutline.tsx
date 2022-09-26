import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreatePullRequestOutline.svg';

export function CreatePullRequestOutline(props: TProps) {
  return (
    <Icon {...props} name="CreatePullRequestOutline">
      <SVG />
    </Icon>
  );
}
