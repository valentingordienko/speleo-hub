import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CommitsSolid.svg';

export function CommitsSolid(props: TProps) {
  return (
    <Icon {...props} name="CommitsSolid">
      <SVG />
    </Icon>
  );
}
