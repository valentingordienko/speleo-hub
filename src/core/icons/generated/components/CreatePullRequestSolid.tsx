import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreatePullRequestSolid.svg';

export function CreatePullRequestSolid(props: TProps) {
  return (
    <Icon {...props} name="CreatePullRequestSolid">
      <SVG />
    </Icon>
  );
}
