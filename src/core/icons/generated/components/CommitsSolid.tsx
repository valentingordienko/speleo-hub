import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CommitsSolid.svg';

export function CommitsSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="CommitsSolid">
      <SVG />
    </Icon>
  );
}
