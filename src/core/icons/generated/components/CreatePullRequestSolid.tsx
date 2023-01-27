import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreatePullRequestSolid.svg';

export function CreatePullRequestSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CreatePullRequestSolid">
      <SVG />
    </Icon>
  );
}
