import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreatePullRequestOutline.svg';

export function CreatePullRequestOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CreatePullRequestOutline">
      <SVG />
    </Icon>
  );
}
